import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedTool {
  label: string;
  href: string;
  description: string;
  emoji: string;
}

const DEFAULT_TOOLS: RelatedTool[] = [
  { label: "YouTube to MP3", href: "/youtube-to-mp3", description: "Convert YouTube to MP3 audio", emoji: "🎵" },
  { label: "YouTube to MP4", href: "/youtube-to-mp4", description: "Download YouTube video in HD", emoji: "🎬" },
  { label: "Instagram Reels", href: "/instagram-reels-download", description: "Download IG Reels without watermark", emoji: "📸" },
  { label: "Facebook Reels", href: "/facebook-reels-download", description: "Save FB Reels in 1080p HD", emoji: "📘" },
  { label: "Facebook Video", href: "/facebook-video-download", description: "Download any public FB video", emoji: "📹" },
  { label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from Reels", emoji: "🎧" },
];

export default function RelatedTools({
  tools,
  currentPath,
}: {
  tools?: RelatedTool[];
  currentPath?: string;
}) {
  const displayTools = (tools || DEFAULT_TOOLS).filter((t) => t.href !== currentPath);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayTools.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className="card-hover group p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3"
        >
          <span className="text-2xl">{t.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm group-hover:text-indigo-400 transition-colors truncate">
              {t.label}
            </p>
            <p className="text-xs text-slate-500 truncate">{t.description}</p>
          </div>
          <ArrowRight size={16} className="text-slate-600 group-hover:text-indigo-400 flex-shrink-0 transition-colors" />
        </Link>
      ))}
    </div>
  );
}
