import { Metadata } from "next";
import { Shield, Music, Zap, Lock, Video, Globe, Smartphone, ImageIcon } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Instagram Reels Download – HD No Watermark with Audio Free",
  description:
    "Download Instagram Reels in HD 1080p without watermark, with original audio and music. Free IG Reels downloader — no login, no app. Works on iPhone & Android.",
  keywords: [
    "instagram reels download", "ig reels download", "instagram reels downloader",
    "ig reels downloader", "download instagram reels", "download instagram reels without watermark",
    "instagram reels download with audio", "instagram reels download 1080p",
    "instagram reel download online", "save instagram reels", "free instagram reels downloader",
    "instagram reel saver", "reels downloader", "ig reel save",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/instagram-reels-download`,
    languages: {
      es: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    },
  },
};

const features = [
  { icon: Shield, title: "No Watermark", description: "Download clean Instagram Reels without any watermark or branding. Pure original video." },
  { icon: Music, title: "With Full Audio", description: "Keep the original music and audio intact — no silent or muted Reels ever again." },
  { icon: Video, title: "HD 1080p Quality", description: "Download in the highest available quality — 1080p Full HD or original bitrate." },
  { icon: Lock, title: "No Login Needed", description: "No Instagram account or password required. Just paste the URL and download." },
  { icon: Smartphone, title: "iPhone & Android", description: "Works on all devices — save directly to camera roll on iPhone and Android." },
  { icon: Globe, title: "Browser Based", description: "No app installation required. Works in any browser on any device instantly." },
  { icon: Zap, title: "3-Second Download", description: "Our servers process Instagram Reels in under 3 seconds — no waiting around." },
  { icon: ImageIcon, title: "Stories & Posts Too", description: "Also download Instagram Stories, Photos, IGTV, and Highlights for free." },
];

const steps = [
  { title: "Open Instagram and find the Reel", description: "Open the Instagram app or website, go to the Reel you want to download. Tap the three-dot (···) menu icon on the post." },
  { title: "Copy the Reel Link", description: "Select 'Copy Link' from the menu. The Instagram Reel URL is now in your clipboard." },
  { title: "Paste URL above and click Download", description: "Return to this page, paste the URL into the input box above, then click 'Download Now'." },
  { title: "Choose quality and save", description: "Select HD 1080p (no watermark), 720p, or MP3 audio. The file downloads to your device instantly." },
];

const faqs = [
  { q: "How to download Instagram Reels without watermark?", a: "Paste the Instagram Reel URL into our tool above and click Download. ReelsGrab automatically removes any watermarks and delivers the original clean video in HD." },
  { q: "How to download Instagram Reels with audio and music?", a: "ReelsGrab merges the video and audio streams (which Instagram separates internally) so your downloaded Reel always includes the original audio and music, even for licensed tracks." },
  { q: "Can I download Instagram Reels on iPhone?", a: "Yes! Open the Reel in Instagram, copy the link, paste it here, and tap Download. The video downloads directly to your iPhone's Files app. For Camera Roll, save from Files." },
  { q: "Is this Instagram Reels downloader free?", a: "100% free. No subscription, no hidden fees, no daily limit. Download as many Instagram Reels as you want at no cost." },
  { q: "Can I download Instagram Reels in 1080p?", a: "Yes, if the original Reel was uploaded in 1080p, ReelsGrab will offer the HD 1080p download option. The quality depends on the original upload quality." },
  { q: "Does ReelsGrab download Reels from private accounts?", a: "For public accounts, no login is needed. For private accounts, you would need to be following them on Instagram. We have a separate private video guide in our blog." },
  { q: "How to save Instagram Reels to camera roll on iPhone?", a: "Use our tool to get the download link, then in Safari tap the share icon and select 'Save to Files'. From there you can move it to Photos. Check our iPhone guide for detailed steps." },
  { q: "Can I convert an Instagram Reel to MP3?", a: "Yes! After pasting the URL and clicking Download, you will see an 'MP3 Audio' option. Click it to extract and download just the audio as an MP3 file." },
];

const relatedTools = [
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Download FB Reels in HD free" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any Facebook video" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from IG & FB Reels" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "See all social video downloaders" },
];

export default function InstagramReelsDownloadPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Instagram Reels Download", url: "/instagram-reels-download" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Instagram Reels Downloader", "Free Instagram Reels downloader — HD 1080p, no watermark, with audio. No login required.", `${SITE_CONFIG.url}/instagram-reels-download`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Instagram Reels Without Watermark", "Download Instagram Reels in HD without watermark for free", steps)} />

      {/* HERO */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li>/</li>
              <li className="text-slate-300">Instagram Reels Download</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-5">
            📸 Instagram Reels Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Instagram Reels Download{" "}
            <span className="gradient-text">Without Watermark</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download Instagram Reels in <strong className="text-white">HD 1080p</strong>, without watermark,
            with original audio and music — completely free. Works on iPhone, Android &amp; PC.
          </p>
          <DownloadTool platform="instagram" placeholder="Paste Instagram Reel URL... (instagram.com/reel/...)" buttonLabel="Download Reel" />
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div>
      </div>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
          Best Instagram Reels Downloader Features
        </h2>
        <p className="text-center text-slate-400 text-sm mb-10">
          Everything competitors are missing — we have it all.
        </p>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            How to Download Instagram Reels
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Simple 4-step process — done in 10 seconds
          </p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-bold text-white mb-4">Download Instagram Reels Without Watermark in HD</h2>
        <div className="prose prose-invert prose-sm max-w-none text-slate-400 leading-relaxed space-y-4">
          <p>
            <strong className="text-white">Instagram Reels</strong> are short-form videos up to 90 seconds that Instagram users share publicly or privately.
            Many users want to save Reels to their device for offline viewing, sharing with others, or archiving their favorite content.
          </p>
          <p>
            The <strong className="text-white">Instagram Reels Downloader</strong> by {SITE_CONFIG.name} lets you download any public Instagram Reel in
            HD 1080p quality, without watermark, and with original audio — all for free. Unlike the in-app Instagram save feature
            which adds a watermark, our tool provides a clean, watermark-free video file.
          </p>
          <h3 className="text-white font-semibold">Why Do Downloaded Instagram Reels Have No Sound?</h3>
          <p>
            Instagram uses DASH (Dynamic Adaptive Streaming over HTTP) to stream videos with separate audio and video tracks.
            Many simple downloaders only grab the video track, resulting in a <em>muted or silent</em> Reel.
            {SITE_CONFIG.name} properly merges both tracks, so your download always includes the full original audio, even for licensed music.
          </p>
          <h3 className="text-white font-semibold">Download Instagram Reels on iPhone (No App Required)</h3>
          <p>
            iPhone users can download Instagram Reels directly using this web tool in Safari.
            Paste the Reel URL, tap Download HD, and the video is saved to your Files app.
            From there, move it to your Photos/Camera Roll. See our{" "}
            <a href="/blog/download-reels-iphone" className="text-indigo-400 hover:underline">iPhone Reels download guide</a>{" "}
            for step-by-step screenshots.
          </p>
        </div>
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Related Download Tools</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Frequently Asked Questions – Instagram Reels Downloader
        </h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
