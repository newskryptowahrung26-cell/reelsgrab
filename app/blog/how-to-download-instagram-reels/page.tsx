import { Metadata } from "next";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels",
  description: "Step-by-step guide: how to download Instagram Reels for free in HD on iPhone, Android, and PC. No app, no login, with audio and without watermark.",
  keywords: ["how to download instagram reels", "download instagram reels free", "save instagram reels", "instagram reel download guide"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-download-instagram-reels` },
};

const steps = [
  { title: "Open the Instagram Reel you want to download", description: "Go to Instagram (app or website) and find the Reel. Tap the three-dot (···) menu in the top-right corner of the Reel." },
  { title: "Tap 'Copy Link'", description: "From the popup menu, select 'Copy Link'. The Reel URL is now copied to your clipboard." },
  { title: "Visit ReelsGrab.net", description: "Open a new browser tab and visit ReelsGrab.net (or use the tool on this page directly)." },
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
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          How to Download Instagram Reels Free: Complete Guide
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-10">
          Want to save Instagram Reels to your phone or PC? This step-by-step guide shows you exactly how
          to download any Instagram Reel for free in HD quality on iPhone, Android, and desktop, without watermark and with original audio.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Step-by-Step: How to Download Instagram Reels</h2>
          <HowToSteps steps={steps} />
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Method 1: Using ReelsGrab (Easiest, 100% Free &amp; No App Needed)</h2>
          <p>
            The fastest and safest method to download any Instagram Reel is using <a href="/" className="text-indigo-400 hover:underline">ReelsGrab.net</a>.
            Because it is completely web-based, it works across iOS Safari, Android Chrome, Windows, Mac, and Linux without installing third-party APKs
            or suspicious software:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">True 1080p Full HD</h3>
              <p className="text-xs text-slate-400">Direct CDN extraction preserves maximum upload bitrate (up to 1080x1920 at 60fps) with crisp visual fidelity.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Zero Watermarks</h3>
              <p className="text-xs text-slate-400">Download clean source video with zero Instagram logos, overlay handles, or promotional stamps.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Full Audio Preservation</h3>
              <p className="text-xs text-slate-400">Our cloud muxer recombines the DASH video and AAC audio tracks so your video is never muted.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Instant MP3 Conversion</h3>
              <p className="text-xs text-slate-400">Extract trending background music, sound effects, or voiceovers directly into high-bitrate 320kbps MP3 audio.</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white">Method 2: Instagram In-App Save (Bookmarking vs True Downloading)</h2>
          <p>
            Instagram provides a native &quot;Save&quot; icon (the bookmark symbol below the post). However, it is essential to understand
            the distinction between bookmarking and true file downloading:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong className="text-white">In-App Bookmark:</strong> The video remains stored on Meta cloud servers and is indexed inside your personal profile. You cannot watch it without an active internet connection, you cannot export it to messaging apps, and if the creator deletes the post, you lose access forever.</li>
            <li><strong className="text-white">Story Editor Export:</strong> If you try sharing the Reel to your Story and tapping &quot;Save&quot;, Instagram burns a large bouncing watermark onto the video and automatically strips all copyrighted music, leaving you with a silent file.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-white">How to Download Instagram Reels Across Different Operating Systems</h2>
          <p>
            Depending on your device, follow these streamlined steps:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">On iPhone &amp; iPad (iOS 15+)</h3>
              <p className="text-slate-400 text-sm">
                Open Instagram → Copy Link → Open Safari → visit ReelsGrab → Paste Link → tap Download → tap the Safari download circle → tap Share icon → select &quot;Save Video&quot; to send it directly to your Photos Camera Roll.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">On Android (Samsung, Pixel, Xiaomi)</h3>
              <p className="text-slate-400 text-sm">
                Copy the Reel link in the Instagram app → Open Chrome → visit ReelsGrab → Paste URL → tap Download. The MP4 file downloads immediately into your internal Downloads folder and appears instantly in Google Photos and Gallery.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">On PC &amp; Mac Desktops</h3>
              <p className="text-slate-400 text-sm">
                Navigate to instagram.com in any web browser → copy the URL from the address bar → paste into ReelsGrab → click Download HD MP4. The file saves directly to your computer Downloads directory, ready for editing in Premiere Pro or CapCut.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        {/* Related Guides Section */}
        <div className="mb-10 border-t border-slate-800 pt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Guides &amp; Download Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <a href="/blog/fix-reels-no-sound" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Fix Reels Download No Sound</p>
              <p className="text-xs text-slate-400">Why downloaded Reels are muted and how to fix them.</p>
            </a>
            <a href="/blog/snapsave-alternative" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Best SnapSave Alternative</p>
              <p className="text-xs text-slate-400">Clean, ad-free downloader comparison.</p>
            </a>
            <a href="/reels-to-mp3" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Reels to MP3 Extractor</p>
              <p className="text-xs text-slate-400">Extract audio directly at 320kbps.</p>
            </a>
            <a href="/bulk-reels-downloader" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Bulk Reels Downloader</p>
              <p className="text-xs text-slate-400">Download multiple Reels from any public profile.</p>
            </a>
          </div>
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
