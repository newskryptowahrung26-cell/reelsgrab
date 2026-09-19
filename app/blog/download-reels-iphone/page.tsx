import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import HowToSteps from "@/components/HowToSteps";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels on iPhone (Save to Camera Roll 2025)",
  description: "How to download Instagram Reels on iPhone and save to Camera Roll — no app needed. Works on iOS 16, 17, 18. Step-by-step Safari guide with screenshots.",
  keywords: ["download instagram reels on iphone", "save instagram reels to camera roll iphone", "download ig reels iphone ios", "how to download reels on iphone"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/download-reels-iphone` },
};

const steps = [
  { title: "Open the Instagram Reel on your iPhone", description: "Open Instagram on your iPhone, find the Reel you want to download, and tap the three-dot (···) menu on the Reel." },
  { title: "Copy the Reel link", description: "Tap 'Copy Link'. The Instagram Reel URL is now in your iPhone clipboard." },
  { title: "Open Safari and go to ReelsGrab.com", description: "Open Safari (not Chrome) on your iPhone — Safari gives the best download experience on iOS." },
  { title: "Paste the URL and tap Download HD", description: "Paste the Reel URL and tap 'Download Now'. Select 'HD 1080p (No Watermark)'." },
  { title: "Save to Files", description: "Safari will ask where to save — select 'Files' or 'Downloads'. The video saves to your iPhone's Files app." },
  { title: "Move to Camera Roll (optional)", description: "Open the Files app, find the downloaded MP4, tap and hold → Share → Save Video. It now appears in your Photos/Camera Roll." },
];

const faqs = [
  { q: "Can I save Instagram Reels directly to Camera Roll on iPhone?", a: "Using ReelsGrab in Safari, the Reel downloads to your Files app. From Files, tap the video → Share → Save Video to move it to your Camera Roll/Photos library." },
  { q: "Does this work on iOS 17 and iOS 18?", a: "Yes, this method works on all recent iOS versions (16, 17, 18). Safari's download manager handles the file perfectly." },
  { q: "Why use Safari instead of Chrome for downloading?", a: "Safari on iOS has a native download manager that saves files to the Files app. Chrome on iOS has more restricted download handling, making Safari the better choice for this task." },
  { q: "Is there an Instagram Reels downloader app for iPhone?", a: "There are some third-party apps, but they frequently get removed from the App Store. Using ReelsGrab in Safari is more reliable, always works, and requires no installation." },
];

export default function DownloadReelsIphonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Download Reels on iPhone", url: "/blog/download-reels-iphone" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav className="flex mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
            <li><a href="/blog" className="hover:text-slate-300">Blog</a></li><li>/</li>
            <li className="text-slate-300">Download Reels on iPhone</li>
          </ol>
        </nav>
        <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-medium">iPhone</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
          How to Download Instagram Reels on{" "}
          <span className="gradient-text">iPhone</span> &amp; Save to Camera Roll
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-10">
          iPhone users often struggle to download Instagram Reels because iOS restricts direct video downloads.
          Here&apos;s the easiest method that works on all iPhones (iOS 16, 17, 18) — no App Store app needed.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Step-by-Step: Download Instagram Reels on iPhone</h2>
          <HowToSteps steps={steps} />
        </div>

        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-4 mb-12">
          <h2 className="text-xl font-bold text-white">Tips for Best Results on iPhone</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Always use Safari</strong> — not Chrome or Firefox — for the smoothest download experience on iOS.</li>
            <li>If Safari asks to open the file instead of downloading, long-press the Download button and select <em>&quot;Download Linked File&quot;</em>.</li>
            <li>Downloaded files appear in <strong className="text-white">Files → Downloads</strong> folder.</li>
            <li>To move to Photos: Open Files app → find the video → tap Share icon → <strong className="text-white">Save Video</strong>.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        <div className="p-5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-center">
          <p className="text-white font-semibold mb-3">Download Instagram Reels on iPhone Now — Free</p>
          <a href="/instagram-reels-download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all">
            Open Instagram Reels Downloader →
          </a>
        </div>
      </article>
    </>
  );
}
