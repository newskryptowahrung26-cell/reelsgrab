import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import HowToSteps from "@/components/HowToSteps";
import { Smartphone, CheckCircle2, AlertTriangle, Shield, Apple, Download, Folder, Share2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels on iPhone to Camera Roll",
  description:
    "How to download Instagram Reels on iPhone and save directly to Camera Roll without an app. Works on iOS 16, 17, and 18. Free step-by-step Safari guide with audio.",
  keywords: [
    "download instagram reels on iphone",
    "how to download reels on iphone",
    "save instagram reels to camera roll iphone",
    "download ig reels iphone ios",
    "how to download instagram reels in gallery without app iphone",
    "download instagram reels on iphone without watermark",
    "save instagram reels to camera roll with audio iphone",
    "how to download reels on iphone ios 17",
    "how to download reels on iphone ios 18",
    "best way to download instagram reels on iphone",
    "safari reels download",
    "download instagram reel link on iphone",
    "iphone instagram reels downloader online",
    "how to save reels to photos iphone",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/download-reels-iphone` },
  openGraph: {
    title: "How to Download Instagram Reels on iPhone to Camera Roll | ReelsGrab",
    description:
      "How to download Instagram Reels on iPhone and save directly to Camera Roll without an app. Works on iOS 16, 17, and 18. Free step-by-step Safari guide with audio.",
    url: `${SITE_CONFIG.url}/blog/download-reels-iphone`,
    type: "article",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Copy the Reel link from Instagram",
    description:
      "Open the Instagram app on your iPhone. Navigate to the Reel, tap the Share icon (paper airplane), and tap 'Copy Link'. The link is saved to your iOS clipboard.",
  },
  {
    title: "Launch Safari and open ReelsGrab",
    description:
      "Open Safari on your iPhone (avoid third-party in-app browsers). Visit www.reelsgrab.net or navigate to our Instagram Reels Downloader tool.",
  },
  {
    title: "Paste URL and start extraction",
    description:
      "Paste your link into the input field and tap 'Download Reel'. Our high-speed cloud engine resolves the unbranded 1080p MP4 file in under 2 seconds.",
  },
  {
    title: "Confirm download in Safari",
    description:
      "Tap 'Download HD 1080p'. A native iOS Safari dialog will appear asking: 'Do you want to download this video?'. Tap 'Download'. The file downloads to your Safari Downloads manager.",
  },
  {
    title: "Save video to Photos Camera Roll",
    description:
      "Tap the blue download icon (downward arrow) in your Safari address bar. Tap the downloaded video to open the preview, tap the Share icon (bottom-left corner), and select 'Save Video'. The Reel now appears in your Photos app.",
  },
];

const faqs = [
  {
    q: "Can I save Instagram Reels directly to Camera Roll on iPhone without an app?",
    a: "Yes. By using ReelsGrab in Safari on iOS, the video downloads into your Safari Files manager. Tapping the iOS Share button and choosing 'Save Video' immediately transfers it into your Apple Photos Camera Roll without installing third-party apps.",
  },
  {
    q: "Does this method work on iOS 16, iOS 17, and iOS 18?",
    a: "Yes, this workflow functions identically across all modern iOS versions (iOS 15, 16, 17, and 18) on all iPhone models including iPhone 11, 12, 13, 14, 15, and 16 series.",
  },
  {
    q: "Why should I use Safari instead of Chrome on iPhone?",
    a: "Safari has native integration with the iOS download manager daemon, allowing direct handoffs to the Apple Files and Photos apps. Chrome on iOS has more restricted file sandboxing, making Safari the smoothest option for media downloads.",
  },
  {
    q: "Why does my downloaded Reel have no sound when played on iPhone?",
    a: "Check your physical iPhone Silent Switch or Action Button. The iOS media preview mutes audio if the phone is set to silent. Tap your screen to unmute or flip the silent switch off. Additionally, ReelsGrab automatically muxes original stereo audio so the file itself contains full audio.",
  },
  {
    q: "Are App Store 'Reels Saver' apps safe?",
    a: "Many App Store downloader apps bundle predatory weekly subscriptions ($7.99-$9.99/week) after misleading 3-day trials. Some even demand your Instagram login credentials. ReelsGrab is 100% free, requires no login, and runs entirely in your web browser.",
  },
  {
    q: "Does downloaded video keep 1080p Full HD resolution on iPhone?",
    a: "Yes. ReelsGrab preserves the original 1080x1920 Full HD master file directly from Meta servers, avoiding the heavy downscaling that occurs with screen recordings.",
  },
  {
    q: "Can I download Facebook Reels and YouTube videos on iPhone too?",
    a: "Yes! You can use the exact same Safari workflow with our Facebook Reels Downloader and YouTube to MP4 tools on iPhone.",
  },
];

const iosCompatibility = [
  {
    version: "iOS 17 & iOS 18",
    safariSupport: "Native Download Manager",
    cameraRollExport: "1-Tap Share → Save Video",
    maxResolution: "1080p Full HD / 4K",
  },
  {
    version: "iOS 16",
    safariSupport: "Native Download Manager",
    cameraRollExport: "1-Tap Share → Save Video",
    maxResolution: "1080p Full HD",
  },
  {
    version: "iOS 15 & Earlier",
    safariSupport: "Safari Files Integration",
    cameraRollExport: "Files App → Save Video",
    maxResolution: "1080p Full HD",
  },
];

export default function DownloadReelsIphonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Download Reels on iPhone", url: "/blog/download-reels-iphone" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "How to Download Instagram Reels on iPhone to Camera Roll",
          "Step-by-step tutorial explaining how to save Instagram Reels directly to iPhone Camera Roll without third-party apps.",
          steps
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-slate-300">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-300">Download Reels on iPhone</li>
          </ol>
        </nav>

        {/* Badge */}
        <div className="mb-4 flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium">
            iOS Tutorial &amp; Guide
          </span>
          <span className="text-slate-500 text-xs">iOS 16, 17 &amp; 18 Verified</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          How to Download Instagram Reels on{" "}
          <span className="gradient-text">iPhone</span> to Camera Roll (No App Needed)
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
          iPhone users frequently face barriers when attempting to save Instagram Reels to their Photos library due to Apple
          stringent application sandboxing. The official Instagram app only offers in-app bookmarking, while screen recording ruins audio
          and video quality. Here is the easiest, verified method to save watermark-free 1080p Reels straight into your Camera Roll using Safari.
        </p>

        {/* Quick Tool Callout */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Have a Reel Link Ready?</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Use ReelsGrab directly in your iPhone Safari browser to download your video now.
            </p>
          </div>
          <Link
            href="/instagram-reels-download"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all whitespace-nowrap"
          >
            Launch iPhone Downloader →
          </Link>
        </div>

        {/* Step by Step Section */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            5-Step Tutorial: Saving Instagram Reels to iPhone Camera Roll
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
            Follow this exact sequence on any iPhone running iOS 15, iOS 16, iOS 17, or iOS 18:
          </p>
          <HowToSteps steps={steps} />
        </div>

        {/* Main Editorial Prose */}
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-8 mb-14">
          {/* iOS Architecture */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Understanding Apple iOS Safari Download Architecture
            </h2>
            <p>
              Before iOS 13, Apple prevented Safari from downloading raw media files to local storage, forcing iPhone owners to rely
              on complicated Siri Shortcuts or third-party file managers like Documents by Readdle.
            </p>
            <p>
              Starting with modern iOS updates, Apple introduced a native <strong>Safari Download Manager</strong> daemon.
              When you visit <Link href="/instagram-reels-download" className="text-indigo-400 hover:underline">ReelsGrab.net</Link> on iOS,
              our cloud workers extract the clean master MP4 video from Instagram CDN servers and pass the standard media payload to Safari.
              Safari securely downloads the file to your device local filesystem without requiring root access, jailbreaking, or risky profiles.
            </p>
          </div>

          {/* iOS Compatibility Table */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              iOS Version Compatibility Matrix
            </h2>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">iOS Version</th>
                    <th className="p-3.5 font-semibold text-blue-400">Safari Download Support</th>
                    <th className="p-3.5 font-semibold">Camera Roll Export</th>
                    <th className="p-3.5 font-semibold">Maximum Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {iosCompatibility.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.version}</td>
                      <td className="p-3.5 text-slate-300">{row.safariSupport}</td>
                      <td className="p-3.5 text-slate-300">{row.cameraRollExport}</td>
                      <td className="p-3.5 text-slate-400">{row.maxResolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dangers of App Store downloaders */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why You Should Avoid App Store &quot;Reels Saver&quot; Apps
            </h2>
            <p>
              Searching &quot;Reels Downloader&quot; on the Apple App Store yields dozens of third-party apps.
              However, mobile security audits reveal substantial risks:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">Predatory Subscription Traps</h3>
                <p className="text-xs text-slate-400">
                  Many apps offer a &quot;free 3-day trial&quot; that automatically converts into recurring weekly charges of $7.99 to $9.99 billed to your Apple ID.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">Phishing &amp; Credential Theft</h3>
                <p className="text-xs text-slate-400">
                  Shady apps force you to log into Instagram via unverified in-app WebViews, putting your account credentials and personal messages at risk.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">Constant App Store Removals</h3>
                <p className="text-xs text-slate-400">
                  Apple frequently purges unauthorized scraper apps, leaving paid subscribers with dead software.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white text-base mb-1">100% Free Web Advantage</h3>
                <p className="text-xs text-slate-400">
                  ReelsGrab runs entirely in Safari, never asks for passwords, requires no installation, and is 100% free forever.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting iOS */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Troubleshooting Common iPhone Download Issues
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-300">
              <li>
                <strong className="text-white">Video Plays Inline Instead of Downloading:</strong> If tapping Download HD merely launches the video inside Safari, touch and hold the download button (long press) until the context menu appears, then tap <strong>&quot;Download Linked File&quot;</strong>.
              </li>
              <li>
                <strong className="text-white">No Sound on iPhone Playback:</strong> Check your physical Silent Switch or Action Button. iOS defaults to muting media preview playback when the device is silenced. For technical audio details, see our guide on{" "}
                <Link href="/blog/fix-reels-no-sound" className="text-indigo-400 hover:underline">
                  fixing downloaded Reels with no sound
                </Link>.
              </li>
              <li>
                <strong className="text-white">Missing Safari Download Icon:</strong> If the downward arrow icon does not appear, open iPhone Settings → Safari → Downloads, and verify that the download destination is set to &quot;On My iPhone&quot;.
              </li>
              <li>
                <strong className="text-white">Removing Watermarks:</strong> Follow our{" "}
                <Link href="/blog/download-reels-without-watermark" className="text-indigo-400 hover:underline">
                  watermark removal tutorial
                </Link>{" "}
                to ensure you receive clean, logo-free clips for editing.
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently Asked Questions: iPhone Reels Downloads
          </h2>
          <FaqSection faqs={faqs} />
        </div>

        {/* Related Ecosystem Links */}
        <div className="mb-12 border-t border-slate-800 pt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Recommended Downloader Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link
              href="/blog/how-to-download-instagram-reels"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">📖 Master Reels Download Guide</p>
              <p className="text-xs text-slate-400">Step-by-step instructions across all platforms.</p>
            </Link>
            <Link
              href="/blog/download-reels-without-watermark"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">✨ Download Without Watermark</p>
              <p className="text-xs text-slate-400">Save unbranded 1080p video for TikTok &amp; Shorts.</p>
            </Link>
            <Link
              href="/blog/fix-reels-no-sound"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">🔊 Fix Downloaded Reels No Sound</p>
              <p className="text-xs text-slate-400">Resolve DASH audio separation on iPhone &amp; iPad.</p>
            </Link>
            <Link
              href="/reels-to-mp3"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">🎵 Reels to MP3 Converter</p>
              <p className="text-xs text-slate-400">Extract studio 320kbps audio directly on iPhone.</p>
            </Link>
            <Link
              href="/facebook-reels-download"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">📘 Facebook Reels Downloader</p>
              <p className="text-xs text-slate-400">Save clean FB Reels on iPhone without apps.</p>
            </Link>
            <Link
              href="/youtube-to-mp4"
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors block"
            >
              <p className="font-semibold text-white mb-1">🎬 YouTube to MP4 Downloader</p>
              <p className="text-xs text-slate-400">Download YouTube videos and Shorts in 1080p.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Save Reels to Your iPhone Now</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            No App Store downloads, no subscriptions, no ads spam. Paste your link and save in 1080p Full HD.
          </p>
          <Link
            href="/instagram-reels-download"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
          >
            Download Reels on iPhone Free →
          </Link>
        </div>
      </article>
    </>
  );
}
