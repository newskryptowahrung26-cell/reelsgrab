"use client";
import { useState } from "react";
import { Link2, Download, Loader2, CheckCircle, AlertCircle, Music, Video, ExternalLink } from "lucide-react";

interface MediaItem {
  resolution: string;
  url: string;
  type: "video" | "audio" | "image";
}

interface DownloadToolProps {
  platform?: "instagram" | "facebook" | "both";
  mode?: "video" | "audio";
  placeholder?: string;
  primaryColor?: string;
  buttonLabel?: string;
}

export default function DownloadTool({
  platform = "both",
  mode = "video",
  placeholder = "Paste Instagram or Facebook Reel URL here...",
  buttonLabel = "Download Now",
}: DownloadToolProps) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");

  function isValidUrl(val: string) {
    try {
      const u = new URL(val);
      if (platform === "instagram")
        return u.hostname.includes("instagram.com");
      if (platform === "facebook")
        return u.hostname.includes("facebook.com") || u.hostname.includes("fb.com") || u.hostname.includes("fb.watch");
      return (
        u.hostname.includes("instagram.com") ||
        u.hostname.includes("facebook.com") ||
        u.hostname.includes("fb.com") ||
        u.hostname.includes("fb.watch")
      );
    } catch {
      return false;
    }
  }

  async function handleDownload() {
    if (!url.trim()) {
      setErrorMsg("Please paste a valid URL first.");
      setStatus("error");
      return;
    }
    if (!isValidUrl(url)) {
      setErrorMsg(
        platform === "instagram"
          ? "Please enter a valid Instagram URL (instagram.com/...)"
          : platform === "facebook"
          ? "Please enter a valid Facebook URL (facebook.com/... or fb.watch/...)"
          : "Please enter a valid Instagram or Facebook URL."
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    setMediaList([]);
    setPreviewImg(null);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), mode }),
      });

      const data = await res.json();

      if (data.success && data.media && data.media.length > 0) {
        setMediaList(data.media);
        setPreviewImg(data.preview || null);
        setVideoTitle(data.title || "");
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Unable to fetch video. Please ensure the link is public.");
        setStatus("error");
      }
    } catch (err: any) {
      console.error("Download error:", err);
      setErrorMsg("Failed to connect to download server. Please try again.");
      setStatus("error");
    }
  }

  const platformHint =
    platform === "instagram"
      ? "Supports: Reels, Posts, Stories, IGTV"
      : platform === "facebook"
      ? "Supports: Reels, Videos, Watch, Stories"
      : "Supports: Instagram Reels, Facebook Reels & Videos";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input Form */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (status !== "idle") setStatus("idle");
              setErrorMsg("");
            }}
            onKeyDown={(e) => e.key === "Enter" && handleDownload()}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            aria-label="Video URL input"
          />
        </div>
        <button
          onClick={handleDownload}
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all whitespace-nowrap shadow-lg shadow-indigo-500/25"
          aria-label="Download button"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Processing...
            </>
          ) : mode === "audio" ? (
            <>
              <Music size={16} /> {buttonLabel}
            </>
          ) : (
            <>
              <Download size={16} /> {buttonLabel}
            </>
          )}
        </button>
      </div>

      {/* Platform hint */}
      <p className="mt-2 text-xs text-slate-500 text-center">{platformHint}</p>

      {/* Error */}
      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Success / Download Section */}
      {status === "success" && (
        <div className="mt-4 p-5 rounded-xl bg-slate-800 border border-slate-700 text-left">
          <div className="flex items-center gap-2 text-green-400 font-semibold mb-3">
            <CheckCircle size={18} />
            <span>Ready to download!</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start mb-4">
            {previewImg && (
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-slate-900 border border-slate-700 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewImg}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              {videoTitle && (
                <p className="text-sm text-slate-200 line-clamp-3 mb-3 font-medium">
                  {videoTitle}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {mediaList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold transition-all shadow-md ${
                      item.resolution.includes("HD") || item.resolution.includes("1080") || item.resolution.includes("720")
                        ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20"
                        : item.type === "audio"
                        ? "bg-purple-600 hover:bg-purple-500 shadow-purple-600/20"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  >
                    {item.type === "audio" ? <Music size={15} /> : <Video size={15} />}
                    <span>Download {item.resolution || (item.type === "audio" ? "MP3" : "Video")}</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 border-t border-slate-700/60 pt-3">
            ✅ No watermark · ✅ Original audio preserved · ✅ High Speed
          </p>
        </div>
      )}
    </div>
  );
}
