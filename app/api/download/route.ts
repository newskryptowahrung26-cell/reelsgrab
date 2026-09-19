import { NextRequest, NextResponse } from "next/server";
import { SnapSaver } from "snapsaver-downloader";

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

export async function POST(req: NextRequest) {
  try {
    const { url, mode } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { success: false, message: "URL is required" },
        { status: 400 }
      );
    }

    // Resolve any share or short URLs
    const resolvedUrl = await resolveRedirect(url.trim());

    // Fetch media using SnapSaver
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

    // Fallback: If no direct media found
    return NextResponse.json(
      {
        success: false,
        message: "Could not extract video. Please ensure the post is public and try again.",
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
