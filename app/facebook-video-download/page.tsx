import { Metadata } from "next";
import { Shield, Video, Zap, Lock, Music, Globe, Download, Film } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Facebook Video Download – HD 1080p Free Online | FB Downloader",
  description:
    "Download Facebook videos in HD 1080p for free online. Best Facebook video downloader — download fb video by link, no login required. Works on all devices.",
  keywords: [
    "facebook video download", "facebook video downloader", "download facebook video",
    "fb video download", "fb video downloader", "facebook downloader",
    "fb downloader", "download video facebook", "facebook video download hd",
    "fb video download online", "free facebook video downloader",
    "download facebook video by link", "facebook video saver",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/facebook-video-download`,
    languages: {
      es: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
      pt: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
    },
  },
};

const features = [
  { icon: Video, title: "All FB Videos", description: "Download any Facebook video — Watch, feed videos, Stories, Live replays, group videos." },
  { icon: Shield, title: "Original Quality", description: "No re-encoding or compression. Download at original bitrate and resolution." },
  { icon: Film, title: "HD & 4K Support", description: "Full HD 1080p and 4K video download when available in the original post." },
  { icon: Music, title: "Audio Preserved", description: "All audio tracks fully preserved. No muted or silent video downloads." },
  { icon: Lock, title: "No Login", description: "No Facebook account required. Just paste the video URL and download." },
  { icon: Download, title: "MP4 & MP3", description: "Save as MP4 video or extract audio-only MP3 in one click." },
  { icon: Zap, title: "Instant Processing", description: "Videos are processed and ready in under 3 seconds." },
  { icon: Globe, title: "Any Device", description: "Works on iPhone, Android, PC, Mac — any modern browser." },
];

const steps = [
  { title: "Find the Facebook video", description: "Go to Facebook and find the video you want to download. This works for any public Facebook video — feed, Watch, Reels, etc." },
  { title: "Copy the video link", description: "Click the three-dot menu on the video post and select 'Copy Link'. On desktop, right-click the video → Copy video URL." },
  { title: "Paste here and download", description: "Paste the copied URL in the input box above and click 'Download Video'." },
  { title: "Save your preferred quality", description: "Choose HD 1080p, 720p, or MP3 audio format. The file downloads directly to your device." },
];

const faqs = [
  { q: "How do I download Facebook videos for free?", a: "Copy the Facebook video URL, paste it into the tool above, and click Download. Choose your quality (HD 1080p recommended) — it's completely free with no login required." },
  { q: "What types of Facebook videos can I download?", a: "You can download all public Facebook videos including: feed videos, Facebook Watch videos, Facebook Reels, Live video replays, Facebook Stories, and group videos (if public)." },
  { q: "Can I download Facebook videos in HD 1080p?", a: "Yes, if the original video was uploaded in 1080p, our tool provides the HD 1080p download option. We always show the highest quality available for each video." },
  { q: "How to download Facebook videos on iPhone?", a: "Open Facebook, copy the video link, paste it into our tool in Safari, then tap Download HD. The video saves to your Files app, from where you can move it to Photos." },
  { q: "Is the Facebook Video Downloader safe to use?", a: "Yes, completely safe. We never ask for your Facebook login credentials. We only process the public video URL you paste. No personal data is stored or transmitted." },
  { q: "Can I download Facebook Live videos?", a: "Yes! After a Facebook Live stream ends, it becomes a regular video on the page. Copy its URL and use our tool to download the full replay." },
  { q: "How to download a private Facebook video?", a: "For private videos, use our dedicated Private Facebook Video Downloader tool which provides step-by-step instructions for downloading private content." },
  { q: "Can I convert a Facebook video to MP3?", a: "Yes! After pasting the URL, click Download and select the 'MP3 Audio' option to extract and download only the audio track." },
];

const relatedTools = [
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Download FB Reels in HD free" },
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download IG Reels without watermark" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from any Reel" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "All social video downloaders" },
];

export default function FacebookVideoDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Facebook Video Download", url: "/facebook-video-download" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Facebook Video Downloader", "Free Facebook video downloader — HD 1080p, any FB video, no login.", `${SITE_CONFIG.url}/facebook-video-download`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Facebook Videos", "Download any Facebook video in HD for free", steps)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
              <li className="text-slate-300">Facebook Video Download</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            📹 Facebook Video Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Facebook Video Download{" "}
            <span className="gradient-text">HD 1080p Free Online</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download any <strong className="text-white">Facebook video</strong> in HD 1080p — feed videos, Reels, Watch, Live replays.
            Free, no login, instant download. The best FB video downloader online.
          </p>
          <DownloadTool platform="facebook" placeholder="Paste Facebook Video URL here... (facebook.com/...)" buttonLabel="Download Video" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Facebook Video Downloader Features</h2>
        <p className="text-center text-slate-400 text-sm mb-10">Download any Facebook video — Watch, Reels, Live replays, feed videos.</p>
        <FeaturesGrid features={features} columns={4} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">How to Download Facebook Videos</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 simple steps, done in 15 seconds</p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 pb-6">
        <h2 className="text-xl font-bold text-white mb-6">Related Tools</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      <div className="max-w-4xl mx-auto px-4 mb-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ – Facebook Video Downloader</h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
