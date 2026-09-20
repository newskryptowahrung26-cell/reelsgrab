import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

const tools = [
  { label: "YouTube to MP3", href: "/youtube-to-mp3" },
  { label: "YouTube to MP4", href: "/youtube-to-mp4" },
  { label: "Instagram Reels Download", href: "/instagram-reels-download" },
  { label: "Facebook Reels Download", href: "/facebook-reels-download" },
  { label: "Facebook Video Download", href: "/facebook-video-download" },
  { label: "Private FB Video Download", href: "/facebook-private-video-download" },
  { label: "Reels to MP3", href: "/reels-to-mp3" },
  { label: "Bulk Reels Downloader", href: "/bulk-reels-downloader" },
];

const languages = [
  { label: "YouTube a MP3 (ES)", href: "/es/youtube-a-mp3" },
  { label: "YouTube a MP4 (ES)", href: "/es/youtube-a-mp4" },
  { label: "Descargar Videos Facebook (ES)", href: "/es/descargar-videos-facebook" },
  { label: "Descargar Reels Instagram (ES)", href: "/es/descargar-reels-instagram" },
  { label: "YouTube para MP3 (PT)", href: "/pt/youtube-para-mp3" },
  { label: "YouTube para MP4 (PT)", href: "/pt/youtube-para-mp4" },
  { label: "Baixar Reels Instagram (PT)", href: "/pt/baixar-reels-instagram" },
  { label: "Baixar Video Facebook (PT)", href: "/pt/baixar-video-facebook" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "DMCA", href: "/dmca" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-bold text-white text-lg mb-2">{SITE_CONFIG.name}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Free Instagram &amp; Facebook Reels downloader. No watermark, no login,
              HD quality. Works on all devices.
            </p>
          </div>

          {/* Tools */}
          <div>
            <p className="text-sm font-semibold text-slate-200 mb-3">Tools</p>
            <ul className="space-y-2">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <p className="text-sm font-semibold text-slate-200 mb-3">Other Languages</p>
            <ul className="space-y-2">
              {languages.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                  Blog &amp; Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-slate-200 mb-3">Legal</p>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>
            {SITE_CONFIG.name} is not affiliated with Instagram, Facebook, or Meta Platforms Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
