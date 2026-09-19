"use client";
import { useState } from "react";
import { Link2, Download, Loader2, CheckCircle, AlertCircle, Music, Video } from "lucide-react";

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

    // Simulate processing — replace with real API call to your backend
    await new Promise((r) => setTimeout(r, 1800));

    // TODO: Connect to backend endpoint e.g.:
    // const res = await fetch("/api/download", { method: "POST", body: JSON.stringify({ url, mode }) });
    // const data = await res.json();
    // if (data.downloadUrl) window.open(data.downloadUrl, "_blank");

    setStatus("success");
  }

  const platformHint =
    platform === "instagram"
      ? "Supports: Reels, Posts, Stories, IGTV"
      : platform === "facebook"
      ? "Supports: Reels, Videos, Watch, Stories"
      : "Supports: Instagram Reels, Facebook Reels & Videos";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setStatus("idle"); setErrorMsg(""); }}
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
            <><Loader2 size={16} className="animate-spin" /> Processing...</>
          ) : mode === "audio" ? (
            <><Music size={16} /> {buttonLabel}</>
          ) : (
            <><Download size={16} /> {buttonLabel}</>
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

      {/* Success */}
      {status === "success" && (
        <div className="mt-4 p-5 rounded-xl bg-slate-800 border border-slate-700">
          <div className="flex items-center gap-2 text-green-400 font-semibold mb-3">
            <CheckCircle size={18} />
            <span>Ready to download!</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {mode === "audio" ? (
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors">
                <Music size={14} /> Download MP3
              </button>
            ) : (
              <>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors">
                  <Video size={14} /> HD 1080p (No Watermark)
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition-colors">
                  <Video size={14} /> 720p
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors">
                  <Music size={14} /> MP3 Audio
                </button>
              </>
            )}
          </div>
          <p className="mt-3 text-xs text-slate-400">
            ✅ No watermark · ✅ Original audio preserved · ✅ Free
          </p>
        </div>
      )}
    </div>
  );
}
