import { NextRequest, NextResponse } from "next/server";
import { SnapSaver } from "snapsaver-downloader";
import { Innertube, ClientType } from "youtubei.js";
import { createDecipheriv } from "crypto";
import axios from "axios";

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

// ─── DIRECT SAVETUBE EXTRACTION (NO YOUTUBE SCRAPING / BOT BLOCKS) ───
const decodeSaveTube = (enc: string) => {
  const secretKey = "C5D58EF67A7584E4A29F6C35BBC4EB12";
  const data = Buffer.from(enc, "base64");
  const iv = data.subarray(0, 16);
  const content = data.subarray(16);
  const key = Buffer.from(secretKey, "hex");
  const decipher = createDecipheriv("aes-128-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);
  return JSON.parse(decrypted.toString());
};

async function fetchSaveTube(videoId: string, mode: "video" | "audio") {
  const link = `https://www.youtube.com/watch?v=${videoId}`;
  const cdnRes = await axios.get("https://media.savetube.vip/api/random-cdn", {
    timeout: 6000,
  });
  const cdn = cdnRes.data?.cdn || "cdn405.savetube.vip";

  const infoRes = await axios.post(
    `https://${cdn}/v2/info`,
    { url: link },
    {
      timeout: 8000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
        Referer: "https://save-tube.com/",
      },
    }
  );

  const info = decodeSaveTube(infoRes.data.data);
  const title = info.title || "YouTube Media";
  const key = info.key;
  const preview = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const mediaList: { resolution: string; url: string; type: "video" | "audio" }[] = [];

  if (mode === "audio") {
    // 320kbps MP3
    try {
      const dlRes = await axios.post(
        `https://${cdn}/download`,
        { downloadType: "audio", quality: "320", key },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://save-tube.com/",
          },
        }
      );
      if (dlRes.data?.data?.downloadUrl) {
        mediaList.push({
          resolution: "MP3 Audio (320kbps HQ)",
          url: dlRes.data.data.downloadUrl,
          type: "audio",
        });
      }
    } catch (e) {
      console.error("SaveTube 320 audio error:", e);
    }

    // 128kbps MP3
    try {
      const dl128 = await axios.post(
        `https://${cdn}/download`,
        { downloadType: "audio", quality: "128", key },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://save-tube.com/",
          },
        }
      );
      if (dl128.data?.data?.downloadUrl && dl128.data.data.downloadUrl !== mediaList[0]?.url) {
        mediaList.push({
          resolution: "MP3 Audio (128kbps)",
          url: dl128.data.data.downloadUrl,
          type: "audio",
        });
      }
    } catch (e) {
      console.error("SaveTube 128 audio error:", e);
    }
  } else {
    // 720p HD MP4
    try {
      const dl720 = await axios.post(
        `https://${cdn}/download`,
        { downloadType: "video", quality: "720", key },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://save-tube.com/",
          },
        }
      );
      if (dl720.data?.data?.downloadUrl) {
        mediaList.push({
          resolution: "720p (HD MP4 Video)",
          url: dl720.data.data.downloadUrl,
          type: "video",
        });
      }
    } catch (e) {
      console.error("SaveTube 720 video error:", e);
    }

    // 360p SD MP4
    try {
      const dl360 = await axios.post(
        `https://${cdn}/download`,
        { downloadType: "video", quality: "360", key },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://save-tube.com/",
          },
        }
      );
      if (dl360.data?.data?.downloadUrl) {
        mediaList.push({
          resolution: "360p (SD MP4 Video)",
          url: dl360.data.data.downloadUrl,
          type: "video",
        });
      }
    } catch (e) {
      console.error("SaveTube 360 video error:", e);
    }

    // MP3 Audio Option
    try {
      const dlAudio = await axios.post(
        `https://${cdn}/download`,
        { downloadType: "audio", quality: "320", key },
        {
          timeout: 10000,
          headers: {
            "Content-Type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
            Referer: "https://save-tube.com/",
          },
        }
      );
      if (dlAudio.data?.data?.downloadUrl) {
        mediaList.push({
          resolution: "MP3 Audio (320kbps)",
          url: dlAudio.data.data.downloadUrl,
          type: "audio",
        });
      }
    } catch (e) {
      console.error("SaveTube audio option error:", e);
    }
  }

  return { title, preview, mediaList };
}

let innertubeInstance: any = null;
async function getInnertube() {
  if (!innertubeInstance) {
    try {
      innertubeInstance = await Innertube.create({ client_type: ClientType.ANDROID });
    } catch {
      innertubeInstance = await Innertube.create({ client_type: ClientType.MWEB });
    }
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

      let mediaList: { resolution: string; url: string; type: "video" | "audio" }[] = [];
      let videoTitle = "YouTube Media";
      let previewImg = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      // Method 1: Direct SaveTube CDN with AES Decipher (Bypasses all YouTube bot/429 blocks)
      try {
        const res = await fetchSaveTube(videoId, mode);
        if (res && res.mediaList && res.mediaList.length > 0) {
          mediaList = res.mediaList;
          videoTitle = res.title;
          previewImg = res.preview;
        }
      } catch (saveTubeErr) {
        console.error("SaveTube method error:", saveTubeErr);
      }

      // Method 2: Fallback to Innertube (ClientType.ANDROID / MWEB)
      if (mediaList.length === 0) {
        try {
          const yt = await getInnertube();
          const info = await yt.getBasicInfo(videoId);

          videoTitle = info.basic_info?.title || videoTitle;
          previewImg = info.basic_info?.thumbnail?.[0]?.url || previewImg;

          const formats = info.streaming_data?.formats || [];
          const adaptive = info.streaming_data?.adaptive_formats || [];

          // Audio formats
          const audioFormats = adaptive.filter((f: any) => f.has_audio && !f.has_video && f.url);
          if (audioFormats.length > 0) {
            audioFormats.sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0));
            mediaList.push({
              resolution: "MP3 Audio (HQ)",
              url: audioFormats[0].url,
              type: "audio",
            });
          }

          // Progressive video formats
          const progressive = formats.filter((f: any) => f.url);
          for (const f of progressive) {
            mediaList.push({
              resolution: `${f.quality_label || "MP4"} (Video + Audio)`,
              url: f.url,
              type: "video",
            });
          }

          // Adaptive video formats
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
        } catch (innertubeErr) {
          console.error("Innertube extraction error:", innertubeErr);
        }
      }

      if (mediaList.length > 0) {
        if (mode === "audio") {
          mediaList.sort((a, b) => (a.type === "audio" ? -1 : b.type === "audio" ? 1 : 0));
        }

        return NextResponse.json({
          success: true,
          title: videoTitle,
          preview: previewImg,
          media: mediaList,
        });
      }

      return NextResponse.json(
        {
          success: false,
          message:
            "Could not extract YouTube media. The video may be private, age-restricted, or temporarily blocked.",
        },
        { status: 422 }
      );
    }

    // ─── FACEBOOK & INSTAGRAM HANDLER ────────────────────────
    const resolvedUrl = await resolveRedirect(trimmedUrl);

    let result: any;
    try {
      result = await SnapSaver(resolvedUrl);
    } catch (e: any) {
      console.error("SnapSaver error:", e);
    }

    if (
      result &&
      result.success &&
      result.data &&
      Array.isArray(result.data.media) &&
      result.data.media.length > 0
    ) {
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
