import { NextRequest, NextResponse } from "next/server";
import { SnapSaver } from "snapsaver-downloader";
import { Innertube, ClientType } from "youtubei.js";

// Helper to resolve 301/302 redirects (such as facebook.com/share/r/...)
async function resolveRedirect(url: string): Promise<string> {
  try {
    if (url.includes("facebook.com/share/") || url.includes("fb.watch/")) {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        redirect: "manual",
      });
      const location = res.headers.get("location");
      if (location) {
        const u = new URL(location);
        return `${u.origin}${u.pathname}`;
      }
    }
  } catch (err) {
    console.error("Error resolving redirect:", err);
  }
  return url;
}

// Helper to extract YouTube video ID from various URL formats
function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1).split("?")[0];
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/shorts/")[1].split("/")[0].split("?")[0];
      }
      if (u.pathname.startsWith("/embed/")) {
        return u.pathname.split("/embed/")[1].split("/")[0].split("?")[0];
      }
      return u.searchParams.get("v");
    }
  } catch {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : null;
  }
  return null;
}

function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

let innertubeInstance: any = null;
async function getInnertube() {
  if (!innertubeInstance) {
    innertubeInstance = await Innertube.create({ client_type: ClientType.MWEB });
  }
  return innertubeInstance;
}

export async function POST(req: NextRequest) {
  try {
    const { url, mode } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, message: "URL is required" },
        { status: 400 }
      );
    }

    const trimmedUrl = url.trim();

    // ─── YOUTUBE DOWNLOAD HANDLER ────────────────────────────
    if (isYouTubeUrl(trimmedUrl)) {
      const videoId = extractYouTubeId(trimmedUrl);
      if (!videoId) {
        return NextResponse.json(
          { success: false, message: "Invalid YouTube URL. Please check the link and try again." },
          { status: 400 }
        );
      }

      try {
        const yt = await getInnertube();
        const info = await yt.getBasicInfo(videoId);

        const title = info.basic_info.title || "YouTube Media";
        const preview =
          info.basic_info.thumbnail?.[0]?.url ||
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        const formats = info.streaming_data?.formats || [];
        const adaptive = info.streaming_data?.adaptive_formats || [];
        const mediaList: { resolution: string; url: string; type: "video" | "audio" }[] = [];

        // Audio formats (M4A/MP3)
        const audioFormats = adaptive.filter((f: any) => f.has_audio && !f.has_video && f.url);
        if (audioFormats.length > 0) {
          audioFormats.sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0));
          mediaList.push({
            resolution: "MP3 Audio (HQ)",
            url: audioFormats[0].url,
            type: "audio",
          });
          if (audioFormats.length > 1) {
            mediaList.push({
              resolution: "MP3 Audio (128kbps)",
              url: audioFormats[audioFormats.length - 1].url,
              type: "audio",
            });
          }
        }

        // Progressive video formats (Video + Audio in 1 file)
        const progressive = formats.filter((f: any) => f.url);
        for (const f of progressive) {
          mediaList.push({
            resolution: `${f.quality_label || "MP4"} (Video + Audio)`,
            url: f.url,
            type: "video",
          });
        }

        // High resolution adaptive video formats (1080p / 720p)
        const videoAdaptive = adaptive.filter((f: any) => f.has_video && f.url);
        if (videoAdaptive.length > 0) {
          videoAdaptive.sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0));
          for (const f of videoAdaptive.slice(0, 2)) {
            const label = f.quality_label || "HD";
            if (!mediaList.some((m) => m.resolution.startsWith(label))) {
              mediaList.push({
                resolution: `${label} (HD Video)`,
                url: f.url,
                type: "video",
              });
            }
          }
        }

        if (mediaList.length > 0) {
          // If mode is audio, prioritize audio first in list
          if (mode === "audio") {
            mediaList.sort((a, b) => (a.type === "audio" ? -1 : b.type === "audio" ? 1 : 0));
          }

          return NextResponse.json({
            success: true,
            title,
            preview,
            media: mediaList,
          });
        }
      } catch (ytErr: any) {
        console.error("YouTube extraction error:", ytErr);
      }
    }

    // ─── FACEBOOK & INSTAGRAM HANDLER ────────────────────────
    const resolvedUrl = await resolveRedirect(trimmedUrl);

    let result: any;
    try {
      result = await SnapSaver(resolvedUrl);
    } catch (e: any) {
      console.error("SnapSaver error:", e);
    }

    if (result && result.success && result.data && Array.isArray(result.data.media) && result.data.media.length > 0) {
      return NextResponse.json({
        success: true,
        title: result.data.description || "Downloaded Video",
        preview: result.data.preview || null,
        media: result.data.media.map((item: any) => ({
          resolution: item.resolution || "HD Video",
          url: item.url,
          type: item.type || "video",
        })),
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Could not extract video. Please ensure the link is public and accessible.",
      },
      { status: 422 }
    );
  } catch (error: any) {
    console.error("Download API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process download request" },
      { status: 500 }
    );
  }
}
