import { Metadata } from "next";
import { Shield, Music, Video, Lock, Zap, Globe, Smartphone, Download } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Facebook Reels Download – HD 1080p Free No Watermark",
  description:
    "Download Facebook Reels in HD 1080p without watermark, with audio, for free. Facebook Reels downloader online — no login, works on iPhone, Android & PC.",
  keywords: [
    "facebook reels download", "facebook reels downloader", "fb reels download",
    "fb reels downloader", "download facebook reels", "facebook reel saver",
    "facebook reels download 1080p", "download fb reels without watermark",
    "save facebook reels", "facebook reels to mp4", "fb reel download hd",
    "facebook reel download online", "download facebook reels without app",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/facebook-reels-download`,
    languages: {
      es: `${SITE_CONFIG.url}/es/descargar-reels-facebook`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    },
  },
};

const features = [
  { icon: Shield, title: "No Watermark", description: "Download Facebook Reels without any watermark — clean original video quality." },
  { icon: Music, title: "With Original Audio", description: "All audio tracks preserved. Download Facebook Reels with full sound and music." },
  { icon: Video, title: "HD 1080p & 4K", description: "Download at original quality: 1080p Full HD or the highest available resolution." },
  { icon: Lock, title: "No Login Required", description: "No Facebook account needed. Just paste the Reel URL and click download." },
  { icon: Smartphone, title: "All Devices", description: "Works on iPhone, Android, Windows, Mac — any device, any browser." },
  { icon: Download, title: "MP4 & MP3", description: "Download as MP4 video or extract just the audio as MP3." },
];

const steps = [
  { title: "Find the Facebook Reel", description: "Open Facebook (app or browser), navigate to the Reel or video you want to download." },
  { title: "Copy the Reel link", description: "Tap the three-dot menu (···) on the Reel and select 'Copy Link'. On desktop, right-click the video and copy the URL." },
  { title: "Paste here and click Download", description: "Paste the copied Facebook Reel URL into the input field above and press 'Download Reel'." },
  { title: "Choose format and save", description: "Select HD 1080p (no watermark), 720p, or MP3 audio. The download starts instantly." },
];

const faqs = [
  { q: "How to download Facebook Reels for free?", a: "Copy the Facebook Reel URL, paste it into the tool above, and click Download. Select your preferred quality (HD 1080p recommended) and the file downloads directly to your device — completely free." },
  { q: "Can I download Facebook Reels without watermark?", a: "Yes! ReelsGrab downloads Facebook Reels in their original quality without any watermark. The video file is clean and ready to share or save." },
  { q: "How to download Facebook Reels on iPhone?", a: "Copy the Reel link from Facebook, paste it here, tap Download HD. In Safari, the video will download to your Files app. You can then move it to your Photos library." },
  { q: "Can I download Facebook Reels without the Facebook app?", a: "Absolutely. ReelsGrab is a web-based tool. You don't need the Facebook app installed. Paste the URL in any browser and download." },
  { q: "Can I download Facebook Reels in HD 1080p?", a: "Yes, if the Reel was originally uploaded in 1080p, our tool will offer HD 1080p download. We always provide the highest available quality." },
  { q: "How to convert Facebook Reels to MP3?", a: "After pasting the URL and clicking Download, select the 'MP3 Audio' option to extract and download just the audio track from the Facebook Reel." },
  { q: "Is there a daily download limit?", a: "No limits at all. Download as many Facebook Reels as you want, as many times as you need, completely free." },
  { q: "Does this work with Facebook Watch videos?", a: "Yes! Our Facebook Reels Downloader also works with Facebook Watch videos. Just copy the video URL and paste it above." },
];

const relatedTools = [
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download IG Reels without watermark" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any Facebook video HD" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from Facebook Reels" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "See all social video downloaders" },
];

export default function FacebookReelsDownloadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Facebook Reels Download", url: "/facebook-reels-download" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Facebook Reels Downloader", "Free Facebook Reels downloader — HD 1080p, no watermark, with audio.", `${SITE_CONFIG.url}/facebook-reels-download`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Facebook Reels", "Download Facebook Reels in HD 1080p without watermark for free", steps)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
              <li className="text-slate-300">Facebook Reels Download</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            📘 Facebook Reels Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Facebook Reels Download{" "}
            <span className="gradient-text">HD Free No Watermark</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download Facebook Reels in <strong className="text-white">HD 1080p</strong> without watermark and
            with original audio — free, no login, no app required.
          </p>
          <DownloadTool platform="facebook" placeholder="Paste Facebook Reel URL... (facebook.com/reel/... or fb.watch/...)" buttonLabel="Download Reel" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Facebook Reels Downloader Features</h2>
        <p className="text-center text-slate-400 text-sm mb-10">The most reliable Facebook Reels downloader online — no ads spam.</p>
        <FeaturesGrid features={features} columns={3} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">How to Download Facebook Reels</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 easy steps — takes less than 15 seconds</p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-bold text-white mb-4">Facebook Reels Downloader – Everything You Need to Know</h2>
        <div className="text-slate-400 text-sm leading-relaxed space-y-4">
          <p>
            <strong className="text-white">Facebook Reels</strong> are short-form video clips (up to 60–90 seconds) that appear in your Facebook feed and Watch tab.
            They can include original content, music, effects, and voiceovers. Millions of users search for ways to <strong className="text-white">download Facebook Reels</strong> daily.
          </p>
          <p>
            The <strong className="text-white">Facebook Reels Downloader</strong> by {SITE_CONFIG.name} is the fastest and cleanest way to save any Facebook Reel to your device.
            Unlike other tools that open five popup windows when you click download, we keep everything clean.
          </p>
          <p>
            We also support <a href="/facebook-video-download" className="text-indigo-400 hover:underline">regular Facebook videos</a>,{" "}
            <a href="/facebook-private-video-download" className="text-indigo-400 hover:underline">private Facebook videos</a>, and{" "}
            <a href="/reels-to-mp3" className="text-indigo-400 hover:underline">Facebook Reels to MP3 conversion</a>.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Related Tools</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      <div className="max-w-4xl mx-auto px-4 mb-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ – Facebook Reels Downloader</h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
