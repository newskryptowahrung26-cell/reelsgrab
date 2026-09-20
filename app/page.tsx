import { Metadata } from "next";
import {
  Download,
  Shield,
  Zap,
  Music,
  Lock,
  Star,
  Globe,
  Users,
  Video,
  Sparkles,
  CheckCircle2,
  Film,
  Laptop,
} from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import {
  faqSchema,
  howToSchema,
  softwareSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Free YouTube, Instagram & Facebook Video & Audio Downloader`,
  description:
    "Download YouTube videos, Shorts, MP3 audio, Instagram Reels, and Facebook Videos in HD 1080p, 4K & 320kbps, no watermark, 100% free, no login required.",
  keywords: [
    // YouTube to MP4 & Video Downloader
    "youtube to mp4",
    "youtube video download",
    "youtube to mp4 converter",
    "youtube video downloader",
    "yt to mp4",
    "youtube to mp4 1080p",
    "youtube to mp4 4k",
    "youtube to mp4 720p",
    "convert youtube to mp4",
    "download youtube shorts mp4",
    "youtube to mp4 high quality",
    "youtube mp4 online free",
    "youtube to mp4 converter without software",
    "youtube video download without watermark",
    "youtube to mp4 iphone",
    "youtube to mp4 android",
    "youtube to mp4 mac",
    "youtube to mp4 pc windows",
    "safe youtube to mp4 converter",
    "ad free youtube to mp4",

    // YouTube to MP3 & Audio Downloader
    "youtube to mp3",
    "youtube mp3 converter",
    "yt to mp3",
    "youtube audio download",
    "youtube to mp3 320kbps",
    "ytmp3",
    "convert youtube to mp3",
    "youtube mp3 high quality",
    "youtube to audio converter",
    "youtube to mp3 online free",
    "youtube to mp3 iphone",
    "youtube to mp3 android",
    "youtube to mp3 safe",
    "youtube to mp3 fast",
    "youtube music downloader",
    "download audio from youtube",

    // Instagram Reels & Videos
    "instagram reels download",
    "ig reels download",
    "download instagram reels",
    "instagram video download",
    "save instagram reels",
    "instagram reels downloader without watermark",
    "ig reels downloader",
    "instagram story download",
    "download ig reels with audio",
    "instagram reels to mp4",
    "instagram audio download",

    // Facebook Reels & Videos
    "facebook reels download",
    "facebook video download",
    "fb video download",
    "fb reels download",
    "facebook reels downloader",
    "facebook video downloader hd 1080p",
    "download facebook videos free",
    "facebook private video download",
    "fb video downloader online",

    // Audio Extraction & Reels to MP3
    "reels to mp3",
    "convert reels to mp3",
    "instagram reels to mp3",
    "facebook reels to mp3",
    "extract audio from video",
    "reels audio downloader",

    // Universal & General Downloader Terms
    "free video downloader",
    "social media downloader",
    "online video downloader without watermark",
    "hd 1080p video downloader",
    "4k video downloader online",
    "fast video downloader",
    "no login video downloader",
    "all in one video downloader",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Free YouTube, Instagram & Facebook Video & Audio Downloader`,
    description:
      "Download YouTube videos, Shorts, MP3 audio, Instagram Reels, and Facebook Videos in HD 1080p, 4K & 320kbps, no watermark, 100% free.",
    url: SITE_CONFIG.url,
    type: "website",
  },
};

const features = [
  {
    icon: Shield,
    title: "No Watermark Guarantee",
    description:
      "Download clean HD videos without any watermark, overlay logo, or branding, original visual clarity preserved.",
  },
  {
    icon: Music,
    title: "Pristine Audio & 320kbps MP3",
    description:
      "Extract studio-grade 320kbps MP3 audio or download Full HD video with synchronized original sound, no muted files.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Cloud Processing",
    description:
      "Our high-speed media transcoding servers process YouTube, Instagram, and Facebook links in under 3 seconds.",
  },
  {
    icon: Lock,
    title: "Zero Registration or Login",
    description:
      "Simply paste any public video URL and download immediately: no passwords, no email signup, and no accounts needed.",
  },
  {
    icon: Video,
    title: "Full HD 1080p & 4K UHD",
    description:
      "Choose from multiple resolutions: 4K (2160p), 2K (1440p), 1080p Full HD, 720p HD, 480p, or 360p.",
  },
  {
    icon: Globe,
    title: "Universal Device Compatibility",
    description:
      "Works effortlessly in Safari, Chrome, Edge, and Firefox across iPhone, iPad, Android, Windows PC, and Mac.",
  },
];

const steps = [
  {
    title: "Copy the Video or Audio URL",
    description:
      "Open YouTube, Instagram, or Facebook. Find your target video, Short, or Reel and copy the link from the address bar or Share menu.",
  },
  {
    title: "Paste the URL into ReelsGrab",
    description:
      "Paste the copied link into the input box above. Our intelligent system automatically detects the platform and media type.",
  },
  {
    title: "Select Format & Quality",
    description:
      "Choose your preferred download option: HD 1080p / 4K MP4 video, standard definition, or 320kbps MP3 audio extraction.",
  },
  {
    title: "Download Instantly",
    description:
      "Click the download button to save the file directly to your device storage or camera roll for offline playback.",
  },
];

const faqs = [
  {
    q: "Is ReelsGrab completely free to use?",
    a: "Yes, ReelsGrab is 100% free with no hidden fees, paid tiers, or subscription charges. You can convert and download unlimited videos and MP3 audio files every day.",
  },
  {
    q: "Which platforms does ReelsGrab support?",
    a: "ReelsGrab is an all-in-one media downloader supporting YouTube (videos, Shorts, MP3 audio), Instagram (Reels, videos, stories, audio), and Facebook (public videos, Reels, private videos, and audio extraction).",
  },
  {
    q: "How do I download YouTube videos to MP4 or MP3?",
    a: "Simply paste any YouTube video or Shorts URL into the input field above. You can choose to download the video in 1080p/720p MP4 format or extract the audio in high-quality 320kbps MP3.",
  },
  {
    q: "Can I download Instagram Reels without watermarks?",
    a: "Yes! ReelsGrab extracts the clean source stream directly from Instagram's Content Delivery Network, ensuring your downloaded Reels have zero watermarks or overlay logos.",
  },
  {
    q: "Why do downloaded videos have sound issues on other sites?",
    a: "Platforms like YouTube and Instagram often store video and audio tracks separately using DASH/HLS streaming. Many basic downloaders grab only the video stream, resulting in silent playback. ReelsGrab automatically muxes (merges) the video and audio tracks together so your download always has crystal-clear synchronized sound.",
  },
  {
    q: "Does ReelsGrab work on iPhone and Android?",
    a: "Yes! ReelsGrab is fully web-based and runs smoothly on all mobile browsers including Safari (iOS) and Google Chrome (Android). No third-party apps or software installations are required.",
  },
  {
    q: "Is it safe to download videos using ReelsGrab?",
    a: "Absolutely. ReelsGrab operates over an encrypted HTTPS connection. We never ask for your account passwords, we never inject annoying popunder ads, and we do not store your download history.",
  },
  {
    q: "Can I download private Facebook videos?",
    a: "Yes, we have a dedicated Private Facebook Video Downloader tool that allows you to safely download private Facebook videos without sharing your account login details.",
  },
  {
    q: "What video resolutions are available?",
    a: "Depending on the original uploaded video quality, you can download in 4K (2160p), 2K (1440p), 1080p Full HD, 720p HD, 480p SD, or 360p, as well as 320kbps MP3 audio.",
  },
  {
    q: "Are there any daily download limits?",
    a: "No. You can download as many videos, Shorts, Reels, and audio tracks as you want with zero daily quotas or throttling.",
  },
];

const relatedTools = [
  {
    emoji: "🎬",
    label: "YouTube to MP4",
    href: "/youtube-to-mp4",
    description: "Download YouTube videos & Shorts in HD 1080p, 2K & 4K",
  },
  {
    emoji: "🎧",
    label: "YouTube to MP3",
    href: "/youtube-to-mp3",
    description: "Convert YouTube videos to studio-grade 320kbps MP3 audio",
  },
  {
    emoji: "📸",
    label: "Instagram Reels Download",
    href: "/instagram-reels-download",
    description: "Download IG Reels in HD 1080p without watermark",
  },
  {
    emoji: "📘",
    label: "Facebook Reels Download",
    href: "/facebook-reels-download",
    description: "Save Facebook Reels to your device for free",
  },
  {
    emoji: "📹",
    label: "Facebook Video Download",
    href: "/facebook-video-download",
    description: "Download public Facebook videos in high definition",
  },
  {
    emoji: "🎵",
    label: "Reels to MP3",
    href: "/reels-to-mp3",
    description: "Extract MP3 audio from Instagram & Facebook Reels",
  },
  {
    emoji: "🔒",
    label: "Private FB Video",
    href: "/facebook-private-video-download",
    description: "Download private Facebook videos safely",
  },
  {
    emoji: "📦",
    label: "Bulk Reels Downloader",
    href: "/bulk-reels-downloader",
    description: "Download all reels from a profile in bulk",
  },
];

const stats = [
  { icon: Users, label: "Monthly Users", value: "2.5M+" },
  { icon: Download, label: "Media Downloaded", value: "65M+" },
  { icon: Star, label: "User Rating", value: "4.9/5" },
  { icon: Globe, label: "Global Reach", value: "180+ Countries" },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={websiteSchema()} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          SITE_CONFIG.name,
          SITE_CONFIG.description,
          SITE_CONFIG.url,
          "4.9",
          "165400"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "How to Download YouTube, Instagram & Facebook Videos and Audio",
          "Step-by-step guide to download videos, Reels, Shorts, and MP3 audio for free in HD quality",
          steps
        )}
      />

      {/* HERO SECTION */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
            <Zap size={12} /> Free · No Login · No Watermark · YouTube · Instagram · Facebook
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
            All-in-One <span className="gradient-text">Video &amp; Audio Downloader</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Download YouTube Videos, Shorts, MP3 Audio, Instagram Reels &amp; Facebook Videos in HD
            1080p, 4K MP4, or 320kbps MP3 audio, completely free with no watermark and no sign-up.
          </p>

          {/* Download Tool */}
          <DownloadTool
            platform="all"
            placeholder="Paste YouTube, Instagram or Facebook URL here..."
            buttonLabel="Download Now"
          />

          {/* Quick Tool Navigation Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 text-xs">
            {[
              ["🎬 YouTube MP4", "/youtube-to-mp4"],
              ["🎧 YouTube MP3", "/youtube-to-mp3"],
              ["📸 IG Reels", "/instagram-reels-download"],
              ["📘 FB Reels", "/facebook-reels-download"],
              ["📹 FB Video", "/facebook-video-download"],
              ["🎵 Reels MP3", "/reels-to-mp3"],
              ["🔒 Private Video", "/facebook-private-video-download"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-indigo-500/50 transition-all shadow-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="mx-auto mb-2 text-indigo-400" size={22} />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Why Choose {SITE_CONFIG.name}?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            The fastest, cleanest, and most dependable media downloader on the web, with zero popunders,
            zero adware, and zero quality loss.
          </p>
        </div>
        <FeaturesGrid features={features} columns={3} />
      </section>

      {/* HOW TO SECTION */}
      <section className="bg-slate-900/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How to Download Videos &amp; Audio in 4 Simple Steps
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Fast, intuitive, and hassle-free: save any social media video in seconds
            </p>
          </div>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* ─── SEO AUTHORITY CONTENT SECTION ─── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-slate-300 space-y-12">
        <div className="border-l-4 border-indigo-500 pl-4 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The Ultimate Social Media Video &amp; Audio Downloader
          </h2>
          <p className="text-sm text-indigo-400">
            High-Definition MP4 Video, Studio 320kbps MP3 Audio, and Watermark-Free Downloads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* YouTube Card */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg">
              <Film className="w-5 h-5" />
              <span>YouTube MP4 &amp; MP3</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Convert and download YouTube videos, vertical Shorts, and playlists in Full HD 1080p,
              720p, 2K, and 4K MP4 with synchronized sound, or extract crystal-clear 320kbps MP3
              audio.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="/youtube-to-mp4"
                className="text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                YouTube to MP4 &rarr;
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="/youtube-to-mp3"
                className="text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                YouTube to MP3 &rarr;
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-pink-400 font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              <span>Instagram Reels &amp; Stories</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Save Instagram Reels, videos, and stories in original 1080p resolution without any
              watermarks, logos, or compression artifacts, complete with original background audio.
            </p>
            <div className="pt-2">
              <a
                href="/instagram-reels-download"
                className="text-pink-400 hover:text-pink-300 underline font-medium text-xs"
              >
                Instagram Reels Downloader &rarr;
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
              <Video className="w-5 h-5" />
              <span>Facebook Videos &amp; Reels</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Download public Facebook videos, Reels, live recordings, and private videos in HD
              quality. Save them directly to your iPhone, Android, PC, or Mac for offline viewing.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="/facebook-reels-download"
                className="text-blue-400 hover:text-blue-300 underline font-medium"
              >
                FB Reels &rarr;
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="/facebook-video-download"
                className="text-blue-400 hover:text-blue-300 underline font-medium"
              >
                FB Video &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white">
            Why Millions Trust ReelsGrab for Daily Video Downloads
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Most online video downloaders are burdened by aggressive advertisements, deceptive download
            links, and outdated conversion engines that fail to handle modern DASH and HLS streams.
            ReelsGrab was built from the ground up to solve these pain points. By combining
            cloud-based audio-video multiplexing, direct CDN stream extraction, and strict ad-free
            standards, ReelsGrab delivers the highest fidelity downloads in seconds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Supports YouTube, Instagram &amp; Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>1080p Full HD &amp; 4K Ultra HD Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Studio Quality 320kbps MP3 Audio Extraction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Zero Popunders, Adware, or Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* ALL TOOLS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-2">Explore All Download Tools</h2>
        <p className="text-slate-400 text-sm mb-8">
          One unified platform for all your social media video and audio download needs.
        </p>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-slate-400 text-sm mb-10">
          Everything you need to know about downloading videos and audio from YouTube, Instagram, and
          Facebook.
        </p>
        <FaqSection faqs={faqs} />
      </section>

      {/* DISCLAIMER SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Disclaimer:</strong> {SITE_CONFIG.name} is an
          independent online utility not affiliated with YouTube, Google LLC, Instagram, Facebook, or
          Meta Platforms Inc. This tool is intended for personal, educational, and non-commercial
          use only. Please respect content creators&apos; intellectual property rights. Only download
          content that you own, have permission to download, or that is available under Creative
          Commons and public domain licenses.
        </div>
      </section>
    </>
  );
}
