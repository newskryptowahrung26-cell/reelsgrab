import { Metadata } from "next";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels – Complete Free Guide 2025",
  description: "Step-by-step guide: how to download Instagram Reels for free in HD on iPhone, Android, and PC. No app, no login, with audio and without watermark.",
  keywords: ["how to download instagram reels", "download instagram reels free", "save instagram reels", "instagram reel download guide"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-download-instagram-reels` },
};

const steps = [
  { title: "Open the Instagram Reel you want to download", description: "Go to Instagram (app or website) and find the Reel. Tap the three-dot (···) menu in the top-right corner of the Reel." },
  { title: "Tap 'Copy Link'", description: "From the popup menu, select 'Copy Link'. The Reel URL is now copied to your clipboard." },
  { title: "Visit ReelsGrab.com", description: "Open a new browser tab and visit ReelsGrab.com (or use the tool on this page directly)." },
  { title: "Paste the URL and click Download", description: "Paste the copied Reel URL into the input box and click 'Download Now'." },
  { title: "Choose your quality and save", description: "Select HD 1080p (no watermark), 720p, or MP3 audio. The file downloads instantly to your device." },
];

const faqs = [
  { q: "Can I download Instagram Reels for free?", a: "Yes, completely free using ReelsGrab. No subscription or payment required." },
  { q: "Do downloaded Instagram Reels have watermarks?", a: "Not with ReelsGrab. We download the original file without any watermark added." },
  { q: "Why does my downloaded Reel have no sound?", a: "This is caused by Instagram's DASH streaming. See our dedicated guide: 'Why Downloaded Reels Have No Sound' for the fix." },
  { q: "Can I download Instagram Reels on iPhone without an app?", a: "Yes! Use ReelsGrab in Safari on iPhone. No app installation needed. See our iPhone guide for detailed steps." },
];

export default function HowToDownloadInstagramReelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "How to Download Instagram Reels", url: "/blog/how-to-download-instagram-reels" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Instagram Reels Free", "Complete guide to downloading Instagram Reels in HD without watermark", steps)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav aria-label="Breadcrumb" className="flex mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
            <li><a href="/blog" className="hover:text-slate-300">Blog</a></li><li>/</li>
            <li className="text-slate-300">How to Download Instagram Reels</li>
          </ol>
        </nav>

        <div className="mb-3 flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-medium">Guide</span>
          <time className="text-xs text-slate-500">September 2025</time>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          How to Download Instagram Reels Free – Complete Guide 2025
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-10">
          Want to save Instagram Reels to your phone or PC? This step-by-step guide shows you exactly how
          to download any Instagram Reel for free in HD quality — on iPhone, Android, and desktop — without watermark and with original audio.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Step-by-Step: How to Download Instagram Reels</h2>
          <HowToSteps steps={steps} />
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6 mb-12">
          <h2 className="text-xl font-bold text-white">Method 1: Using ReelsGrab (Easiest, No App)</h2>
          <p>
            The easiest way to download Instagram Reels is using <a href="/" className="text-indigo-400 hover:underline">ReelsGrab.com</a> — a free web-based tool that works on all devices.
            No installation needed. Just paste the Reel URL and download.
          </p>
          <p>
            Benefits: <strong className="text-white">No watermark</strong>, <strong className="text-white">original audio</strong>,{" "}
            <strong className="text-white">HD 1080p quality</strong>, and <strong className="text-white">MP3 extraction</strong>.
          </p>

          <h2 className="text-xl font-bold text-white">Method 2: Instagram's Built-In Save (Watermark Added)</h2>
          <p>
            Instagram has a native "Save" feature (the bookmark icon), but it only saves the video to your{" "}
            <em>Instagram Saved collection</em> — not to your phone's gallery. You can't share or view it offline.
            The in-app "Send to" option adds a watermark.
          </p>

          <h2 className="text-xl font-bold text-white">How to Download Instagram Reels Without Watermark</h2>
          <p>
            Using <a href="/instagram-reels-download" className="text-indigo-400 hover:underline">ReelsGrab's Instagram Reels Downloader</a>, you get the original video file without any watermark.
            For a detailed guide on this specific topic, see: <a href="/blog/download-reels-without-watermark" className="text-indigo-400 hover:underline">How to Download Instagram Reels Without Watermark</a>.
          </p>

          <h2 className="text-xl font-bold text-white">Download Instagram Reels on iPhone</h2>
          <p>
            iPhone users can download Reels using ReelsGrab in Safari. The video saves to your Files app, and you can move it to Photos.
            For detailed steps: <a href="/blog/download-reels-iphone" className="text-indigo-400 hover:underline">How to Download Instagram Reels on iPhone</a>.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        <div className="p-5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-center">
          <p className="text-white font-semibold mb-3">Ready to download Instagram Reels?</p>
          <a href="/instagram-reels-download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all">
            Download Instagram Reels Free →
          </a>
        </div>
      </article>
    </>
  );
}
