import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import HowToSteps from "@/components/HowToSteps";

export const metadata: Metadata = {
  title: "How to Download Reels on iPhone",
  description: "How to download Instagram Reels on iPhone and save to Camera Roll without an app. Works on iOS 16, 17, 18. Step-by-step Safari guide with screenshots.",
  keywords: ["download instagram reels on iphone", "save instagram reels to camera roll iphone", "download ig reels iphone ios", "how to download reels on iphone"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/download-reels-iphone` },
};

const steps = [
  { title: "Open the Instagram Reel on your iPhone", description: "Open Instagram on your iPhone, find the Reel you want to download, and tap the three-dot (···) menu on the Reel." },
  { title: "Copy the Reel link", description: "Tap 'Copy Link'. The Instagram Reel URL is now in your iPhone clipboard." },
  { title: "Open Safari and go to ReelsGrab.net", description: "Open Safari (not Chrome) on your iPhone: Safari gives the best download experience on iOS." },
  { title: "Paste the URL and tap Download HD", description: "Paste the Reel URL and tap 'Download Now'. Select 'HD 1080p (No Watermark)'." },
  { title: "Save to Files", description: "Safari will ask where to save: select 'Files' or 'Downloads'. The video saves to your iPhone's Files app." },
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
          Here&apos;s the easiest method that works on all iPhones (iOS 16, 17, 18) with no App Store app needed.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Step-by-Step: Download Instagram Reels on iPhone</h2>
          <HowToSteps steps={steps} />
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Understanding iOS Safari Download Architecture</h2>
          <p>
            Apple has historically enforced strict sandboxing rules across iOS. In earlier versions of iOS (iOS 12 and below),
            users were forced to install heavy third-party file managers like Documents by Readdle or configure complex Siri Shortcuts
            just to download a basic MP4 video.
          </p>
          <p>
            Starting with iOS 13 and continuing through modern iOS 16, 17, and 18, Safari includes a native, full-featured
            download manager. When you use ReelsGrab in Safari, your video is fetched directly from Instagram CDN, multiplexed with original
            audio, and handed to Safari native download daemon.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-white">How to Transfer Downloaded Reels to Your Apple Photos Camera Roll</h2>
          <p>
            When Safari finishes downloading a video, it saves it by default into your iCloud Drive or local &quot;On My iPhone → Downloads&quot; folder.
            To make the video appear in your main Photos timeline and allow sharing to Instagram Stories, TikTok, or WhatsApp:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300">
            <li>Tap the blue download icon (a circle with a downward arrow) located on the left or right of your Safari search bar.</li>
            <li>Tap the downloaded MP4 file to launch the native iOS video preview player.</li>
            <li>In the bottom-left corner of your screen, tap the official <strong>iOS Share button</strong> (represented by a square with an upward arrow).</li>
            <li>Scroll down through the share sheet options and tap <strong>&quot;Save Video&quot;</strong>.</li>
            <li>Open the Apple Photos app. Your downloaded Instagram Reel will appear as the most recent entry in your &quot;Recents&quot; album and &quot;Videos&quot; media type folder.</li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold text-white">Why You Should Avoid App Store &quot;Reels Saver&quot; Apps</h2>
          <p>
            The Apple App Store has hundreds of applications promising to download Instagram Reels. However, security researchers
            consistently advise avoiding them for several reasons:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Predatory Subscriptions</h3>
              <p className="text-xs text-slate-400">Many apps offer a &quot;free 3-day trial&quot; followed by exorbitant recurring fees ($9.99/week) hidden in fine print.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Invasive Tracking SDKs</h3>
              <p className="text-xs text-slate-400">These apps bundle invasive behavioral trackers, collecting device telemetry and selling advertising profiles.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">Phishing &amp; Login Requests</h3>
              <p className="text-xs text-slate-400">Many apps force you to log into Instagram through an unverified webview, exposing your credentials to theft.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-base mb-1">100% Free Web Advantage</h3>
              <p className="text-xs text-slate-400">ReelsGrab runs entirely in Safari, never asks for your password, and costs nothing with zero subscriptions.</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white">iPhone Troubleshooting: Fix Common Download Glitches</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong className="text-white">Video Plays in Safari Instead of Downloading:</strong> Long-press the &quot;Download Video HD&quot; button and tap &quot;Download Linked File&quot; from the context popup menu.</li>
            <li><strong className="text-white">Video Has No Sound on iPhone:</strong> Check your iPhone physical Silent Switch or Action Button. iOS default video preview mutes playback if your device is set to silent mode. Also verify your media volume slider.</li>
            <li><strong className="text-white">Safari Download Icon Missing:</strong> Go to iPhone Settings → Safari → Downloads, and verify that the download location is set to &quot;On My iPhone&quot;.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        {/* Related Guides Section */}
        <div className="mb-10 border-t border-slate-800 pt-8">
          <h2 className="text-xl font-bold text-white mb-4">Related Instagram Guides &amp; Download Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <a href="/blog/how-to-download-instagram-reels" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">How to Download Instagram Reels</p>
              <p className="text-xs text-slate-400">Complete guide for iPhone, Android, and PC.</p>
            </a>
            <a href="/blog/download-reels-without-watermark" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Download Reels Without Watermark</p>
              <p className="text-xs text-slate-400">Save original HD video without creator tags.</p>
            </a>
            <a href="/blog/fix-reels-no-sound" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Fix Reels Download No Sound</p>
              <p className="text-xs text-slate-400">Why downloaded Reels are muted and how to fix them.</p>
            </a>
            <a href="/bulk-reels-downloader" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-colors block">
              <p className="font-semibold text-white mb-1">Bulk Reels Downloader</p>
              <p className="text-xs text-slate-400">Download multiple Reels from any public profile.</p>
            </a>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-center">
          <p className="text-white font-semibold mb-3">Download Instagram Reels on iPhone Now (Free)</p>
          <a href="/instagram-reels-download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all">
            Open Instagram Reels Downloader →
          </a>
        </div>
      </article>
    </>
  );
}
