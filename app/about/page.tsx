import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { breadcrumbSchema } from "@/lib/schema";
import {
  Shield,
  Zap,
  Lock,
  Globe,
  Film,
  Music,
  Video,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Cpu,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Us – ${SITE_CONFIG.name} | The Clean, Safe Media Downloader`,
  description: `Learn about ${SITE_CONFIG.name}, our engineering mission, and our suite of free online tools for Instagram Reels, Facebook Videos, and YouTube to MP3 & MP4. The trusted, clean alternative to SnapInsta, FDown, and YTMP3.`,
  keywords: [
    "about reelsgrab",
    "reelsgrab",
    "snapinsta alternative",
    "fastdl alternative",
    "saveinsta alternative",
    "fdown alternative",
    "fbdown alternative",
    "ytmp3 alternative",
    "y2mate alternative",
    "savefrom alternative",
    "instagram reels downloader",
    "facebook video downloader",
    "youtube to mp3 converter",
    "youtube to mp4 downloader",
    "reels to mp3",
    "bulk reels downloader",
    "safe media downloader",
    "watermark free video downloader",
    "free social media downloader",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    title: `About Us – ${SITE_CONFIG.name} | Safe & Watermark-Free Downloader`,
    description: `Discover how ${SITE_CONFIG.name} is redefining social media downloading with zero popunder ads, full audio preservation, and true 1080p HD quality.`,
    url: `${SITE_CONFIG.url}/about`,
  },
};

const comparisonData = [
  {
    feature: "Popunder & Malicious Ads",
    reelsgrab: "✅ 0% (Zero Popunders)",
    snapinsta: "❌ Aggressive Popunders",
    fdown: "❌ Multiple New Tabs",
    ytmp3: "❌ Deceptive Virus Warnings",
    y2mate: "❌ High Ad Load",
  },
  {
    feature: "Audio Preservation (DASH Muxing)",
    reelsgrab: "✅ Full Audio (Never Muted)",
    snapinsta: "⚠️ Frequently Muted",
    fdown: "⚠️ Fails on 1080p HD",
    ytmp3: "⚠️ Inconsistent Bitrate",
    y2mate: "⚠️ Audio Often Desynced",
  },
  {
    feature: "Max Video Resolution",
    reelsgrab: "✅ Up to 1080p & 4K",
    snapinsta: "⚠️ Often Compressed to 720p",
    fdown: "⚠️ Mostly 720p HD",
    ytmp3: "N/A (Audio Only)",
    y2mate: "⚠️ 1080p Often Requires App",
  },
  {
    feature: "iPhone Safari Camera Roll Save",
    reelsgrab: "✅ 1-Click Direct Save",
    snapinsta: "⚠️ Complex Workflow",
    fdown: "⚠️ Broken on iOS",
    ytmp3: "⚠️ Requires External Apps",
    y2mate: "⚠️ Multiple Redirect Traps",
  },
  {
    feature: "Account Login Required",
    reelsgrab: "✅ No Login Needed",
    snapinsta: "✅ No Login",
    fdown: "✅ No Login",
    ytmp3: "✅ No Login",
    y2mate: "✅ No Login",
  },
  {
    feature: "Processing & Download Speed",
    reelsgrab: "⚡ Under 3 Seconds",
    snapinsta: "⏳ 10 - 20 Seconds",
    fdown: "⏳ 12 - 25 Seconds",
    ytmp3: "⏳ 10 - 25 Seconds",
    y2mate: "⏳ 8 - 18 Seconds",
  },
];

const supportedTools = [
  {
    title: "Instagram Reels Download",
    href: "/instagram-reels-download",
    icon: Film,
    desc: "Download clean Instagram Reels in HD 1080p without watermarks, preserving original audio and music.",
  },
  {
    title: "Facebook Reels Download",
    href: "/facebook-reels-download",
    icon: Video,
    desc: "Extract public Facebook Reels in Full HD with full stereo sound and zero Facebook logos.",
  },
  {
    title: "Facebook Video Download",
    href: "/facebook-video-download",
    icon: Globe,
    desc: "Save Facebook Watch shows, feed videos, and live replays in up to 4K resolution.",
  },
  {
    title: "YouTube to MP3",
    href: "/youtube-to-mp3",
    icon: Music,
    desc: "Convert YouTube videos, music, and Shorts into studio-grade 320kbps MP3 audio in seconds.",
  },
  {
    title: "YouTube to MP4",
    href: "/youtube-to-mp4",
    icon: Film,
    desc: "Download YouTube videos in crisp 1080p Full HD and 4K Ultra HD with perfectly synchronized audio.",
  },
  {
    title: "Reels to MP3",
    href: "/reels-to-mp3",
    icon: Music,
    desc: "Extract viral sounds, trending music, and podcasts from Instagram and Facebook Reels into MP3.",
  },
  {
    title: "Private FB Video Downloader",
    href: "/facebook-private-video-download",
    icon: Lock,
    desc: "Securely download private Facebook videos you have permission to view without sharing credentials.",
  },
  {
    title: "Bulk Reels Downloader",
    href: "/bulk-reels-downloader",
    icon: Layers,
    desc: "Archive multiple Reels and videos efficiently for content creators and social media managers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex justify-start mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-300">About Us</li>
          </ol>
        </nav>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-5">
          <Shield size={14} /> The Trusted Alternative to Shady Media Downloaders
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          About <span className="gradient-text">{SITE_CONFIG.name}</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-12">
          {SITE_CONFIG.name} was engineered to revolutionize how people save, archive, and enjoy multimedia from the
          world&apos;s leading social networks. We provide a clean, lightning-fast, and 100% privacy-focused platform for
          downloading <strong className="text-white">Instagram Reels</strong>,{" "}
          <strong className="text-white">Facebook Videos</strong>, and converting{" "}
          <strong className="text-white">YouTube to MP3 &amp; MP4</strong> — completely free of watermarks, deceptive
          advertisements, and malware risks.
        </p>

        {/* Section 1: The Problem with Legacy Downloaders */}
        <div className="border-t border-slate-800 pt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
            <AlertTriangle className="text-amber-400" size={26} /> Why We Built {SITE_CONFIG.name}
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              For over a decade, the online video downloader ecosystem has been plagued by predatory practices. Users
              searching for tools like <em>SnapInsta</em>, <em>FDown (FBDown)</em>, <em>YTMP3</em>, <em>Y2Mate</em>, or{" "}
              <em>SaveFrom</em> are routinely subjected to a hostile web experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Deceptive Virus Alerts &amp; Popunders:</strong> Clicking a download button
                often triggers multiple hidden popunders that open scam sites, fake &quot;Your Computer Is Infected&quot; warnings,
                or push-notification authorization traps.
              </li>
              <li>
                <strong className="text-white">Muted High-Definition Videos:</strong> Both Meta (Instagram/Facebook) and
                YouTube stream HD 1080p and 4K media using DASH protocols, which separate the video and audio tracks. Most
                competitors lack server-side multiplexing technology, forcing users to choose between low-quality 360p video
                or a silent 1080p video with no sound.
              </li>
              <li>
                <strong className="text-white">Intrusive Watermarks &amp; Compression:</strong> Inferior tools re-encode videos,
                reducing bitrate, dulling colors, and slapping unsightly third-party watermarks across the screen.
              </li>
              <li>
                <strong className="text-white">Forced Software Installations:</strong> Many legacy sites push sketchy APKs,
                unverified desktop software, or risky browser extensions that collect user browsing data.
              </li>
            </ul>
            <p>
              We believed the internet deserved better. {SITE_CONFIG.name} was built from scratch to be the exact opposite:
              a high-performance, web-based utility that delivers <strong>original-quality 1080p/4K downloads</strong>,{" "}
              <strong>pristine 320kbps MP3 audio</strong>, <strong>zero watermarks</strong>, and{" "}
              <strong>zero deceptive ads</strong>.
            </p>
          </div>
        </div>

        {/* Section 2: Head-to-Head Comparison Matrix */}
        <div className="border-t border-slate-800 pt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
            <Cpu className="text-indigo-400" size={26} /> How {SITE_CONFIG.name} Compares to Competitors
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Compare {SITE_CONFIG.name} side-by-side with other popular social media video and audio downloaders across the web:
          </p>

          <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                  <th className="p-3.5 font-semibold">Key Feature</th>
                  <th className="p-3.5 font-semibold text-indigo-400 bg-indigo-950/20">{SITE_CONFIG.name}</th>
                  <th className="p-3.5 font-semibold">SnapInsta</th>
                  <th className="p-3.5 font-semibold">FDown</th>
                  <th className="p-3.5 font-semibold">YTMP3</th>
                  <th className="p-3.5 font-semibold">Y2Mate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                    <td className="p-3.5 font-medium text-white">{row.feature}</td>
                    <td className="p-3.5 font-semibold text-emerald-400 bg-indigo-950/20">{row.reelsgrab}</td>
                    <td className="p-3.5 text-slate-400">{row.snapinsta}</td>
                    <td className="p-3.5 text-slate-400">{row.fdown}</td>
                    <td className="p-3.5 text-slate-400">{row.ytmp3}</td>
                    <td className="p-3.5 text-slate-400">{row.y2mate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Our Technical Architecture */}
        <div className="border-t border-slate-800 pt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
            <Server className="text-emerald-400" size={26} /> Our Engineering &amp; Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="text-amber-400" size={18} /> Real-Time DASH Multiplexing
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our custom cloud infrastructure uses automated FFmpeg stream multiplexing. When you submit a link, our
                servers fetch the isolated 1080p/4K video track and the high-bitrate AAC audio track, combining them into a
                seamless, synchronized MP4 container in under 3 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Music className="text-purple-400" size={18} /> Studio-Grade 320kbps MP3
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlike generic converters that clamp audio to 128kbps, {SITE_CONFIG.name} supports constant bitrate (CBR)
                MP3 encoding up to 320kbps. This preserves full 20kHz acoustic fidelity, making our downloads ideal for
                music producers, DJs, and audiophiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Shield className="text-blue-400" size={18} /> Zero-Log Privacy Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We operate under a strict zero-retention policy. We do not store your IP address, we do not log the media
                URLs you process, and we never require an account or login credentials. Your browsing activity remains 100%
                confidential.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="text-pink-400" size={18} /> Universal CDN Integration
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our edge network communicates directly with global content delivery networks across Meta and YouTube, ensuring
                maximum download bandwidth regardless of whether you are located in the Americas, Europe, Asia, or Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Our Full Suite of Download Tools */}
        <div className="border-t border-slate-800 pt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
            <Sparkles className="text-indigo-400" size={26} /> The Complete {SITE_CONFIG.name} Tool Suite
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            We provide a comprehensive collection of free media extraction tools designed for creators, researchers, and everyday users:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportedTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/70 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {tool.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{tool.desc}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 text-xs text-slate-400">
            <strong className="text-white">Multilingual Support:</strong> All core tools are also fully localized and
            accessible in <strong>Spanish (ES)</strong> and <strong>Portuguese (PT)</strong> to serve our global community of
            millions of monthly users.
          </div>
        </div>

        {/* Section 5: Fair Use, Copyright & Ethics */}
        <div className="border-t border-slate-800 pt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 flex items-center gap-3">
            <Heart className="text-rose-400" size={26} /> Copyright, Fair Use &amp; Creator Ethics
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              {SITE_CONFIG.name} strongly respects intellectual property rights and adheres to the principles of Fair Use
              under international copyright law (including Title 17 of the United States Code and corresponding European Union
              directives).
            </p>
            <p>
              Our service is intended for personal offline archiving, educational study, parody, commentary, and research.
              We explicitly advise our users:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Always credit original creators when referencing, remixing, or sharing public content.</li>
              <li>Do not redistribute copyrighted media for commercial exploitation without express written consent.</li>
              <li>
                If you are a copyright holder wishing to request the removal of content or discuss licensing, please review
                our dedicated <Link href="/dmca" className="text-indigo-400 hover:underline">DMCA Policy</Link> or reach out
                via our <Link href="/contact" className="text-indigo-400 hover:underline">Contact page</Link>.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: Disclaimer */}
        <div className="border-t border-slate-800 pt-10 text-xs text-slate-500 leading-relaxed">
          <h3 className="font-semibold text-slate-400 mb-2">Legal Disclaimer</h3>
          <p>
            {SITE_CONFIG.name} is an independent web utility and is not affiliated, sponsored, associated, or endorsed by
            Meta Platforms, Inc., Instagram, Facebook, Google LLC, YouTube, or Alphabet Inc. All product names, logos,
            and brands are property of their respective owners.
          </p>
        </div>
      </div>
    </>
  );
}
