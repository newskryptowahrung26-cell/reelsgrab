import { Metadata } from "next";
import { Shield, Lock, Eye, AlertCircle, CheckCircle, Video, Zap, HelpCircle } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Private Facebook Video Downloader",
  description:
    "Download private Facebook videos and reels online for free. Step-by-step guide to save private FB videos without losing quality. No login, no app required.",
  keywords: [
    "download private facebook video", "facebook private video downloader",
    "download private facebook reels", "private facebook reels downloader",
    "download private fb video online", "how to download private facebook video",
    "facebook private video download", "download fb group private video",
    "save private facebook video",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/facebook-private-video-download` },
  openGraph: {
    title: "Private Facebook Video Downloader | ReelsGrab",
    description:
      "Download private Facebook videos and reels online for free. Step-by-step guide to save private FB videos without losing quality. No login, no app required.",
    url: `${SITE_CONFIG.url}/facebook-private-video-download`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const features = [
  { icon: Lock, title: "Private Video Support", description: "Download videos from private Facebook accounts, groups, and pages you have access to." },
  { icon: Shield, title: "Secure & Safe", description: "We never store your credentials or personal data. Your privacy is 100% protected." },
  { icon: Eye, title: "No Account Sharing", description: "You never need to share your Facebook password with us. Zero risk approach." },
  { icon: Video, title: "HD Quality", description: "Download private videos in the same high quality as they were originally uploaded." },
  { icon: Zap, title: "Fast Processing", description: "Private video downloads processed in seconds using our optimized server infrastructure." },
  { icon: CheckCircle, title: "Step-by-Step Guide", description: "Clear instructions to download private videos even for non-technical users." },
];

const steps = [
  { title: "Log into Facebook in your browser", description: "Open Facebook in your desktop browser (Chrome, Firefox, Edge) and log in to your account that has access to the private video." },
  { title: "Open the private video", description: "Navigate to the private Facebook video or Reel you want to download. Make sure it plays in your browser." },
  { title: "Get the video URL from the address bar", description: "Copy the full URL from your browser's address bar. It will look like: facebook.com/reel/123456789 or facebook.com/videos/123456789." },
  { title: "Paste the URL above and download", description: "Paste the copied URL into the input field above and click Download. Our tool will fetch the video for you." },
];

const faqs = [
  { q: "Can I download private Facebook videos?", a: "Yes, if you have access to the private video (you are friends with the person or a member of the group), you can download it by copying the video URL from your browser's address bar while logged into Facebook, and pasting it into our tool." },
  { q: "Do I need to share my Facebook password?", a: "Absolutely not. You never share your password with us. You simply copy the URL of the video while you're logged into your own Facebook account and paste it here. We never ask for login credentials." },
  { q: "How to download a video from a private Facebook group?", a: "Join the private Facebook group, open the video in your browser, copy the URL from the address bar, and paste it into our downloader above. This works as long as you are an approved member of the group." },
  { q: "Why is the private video download not working?", a: "Make sure: (1) you are logged into Facebook in your browser, (2) you copied the exact URL from the address bar (not a shared link), (3) you actually have access to view the video on Facebook, and (4) the video URL contains the video ID (numbers)." },
  { q: "Can I download private Instagram Reels?", a: "For private Instagram accounts, you need to be an approved follower. Copy the post URL while logged in and paste it into our Instagram Reels Downloader." },
  { q: "Is it legal to download private Facebook videos?", a: "Only download videos you have the right to access and save, such as your own videos, videos shared with you specifically, or content from groups you're a member of. Always respect copyright and the content creator's wishes." },
  { q: "Can I download private Facebook Reels?", a: "Yes! The same method works for private Facebook Reels. Open the Reel while logged into Facebook, copy the URL from the address bar, and paste it into our tool above." },
];

const relatedTools = [
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Download public FB Reels in HD" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any public Facebook video" },
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download IG Reels without watermark" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from any Reel" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "See all social video downloaders" },
];

export default function PrivateFacebookVideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Private Facebook Video Download", url: "/facebook-private-video-download" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Private Facebook Video Downloader", "Download private Facebook videos and Reels safely with no password sharing.", `${SITE_CONFIG.url}/facebook-private-video-download`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Private Facebook Videos", "Step-by-step guide to download private Facebook videos for free", steps)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
              <li className="text-slate-300">Private Facebook Video Download</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 text-xs font-medium mb-5">
            🔒 Private Facebook Video Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Download{" "}
            <span className="gradient-text">Private Facebook Videos</span>{" "}
            &amp; Reels Free
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            Download private Facebook videos and Reels that you have access to with no password sharing,
            100% safe, completely free.
          </p>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs">
              <AlertCircle size={14} />
              Only download videos you have permission to access
            </div>
          </div>
          <DownloadTool platform="facebook" placeholder="Paste private Facebook video URL from browser address bar..." buttonLabel="Download Private Video" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Private Facebook Video Downloader Features</h2>
        <p className="text-center text-slate-400 text-sm mb-10">Download private videos safely: no credential sharing, zero risk.</p>
        <FeaturesGrid features={features} columns={3} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">How to Download Private Facebook Videos</h2>
          <p className="text-center text-slate-400 text-sm mb-10">Simple 4-step process: no technical skills needed</p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* COMPREHENSIVE EDITORIAL GUIDE (1,500+ WORDS) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Definitive Guide to Downloading Private Facebook Videos and Group Media
            </h2>
            <p>
              Facebook remains one of the largest video sharing platforms in the world, hosting billions of hours of educational
              lectures, private webinars, family milestone archives, closed community discussions, and specialized training materials.
              However, a substantial portion of this valuable video content is published with restricted privacy settings: shared
              exclusively with personal friends, posted inside closed or secret Facebook groups, or restricted to members-only communities.
            </p>
            <p>
              Standard video downloaders fail completely when processing these links because they rely on anonymous server scrapers
              that lack authenticated access to the private stream. When an anonymous server attempts to fetch a private Facebook video
              URL, Facebook servers return an HTTP 403 Forbidden or redirect to a login prompt.
            </p>
            <p>
              The <strong>ReelsGrab Private Facebook Video Downloader</strong> bridges this divide safely. Rather than requesting your
              sensitive Facebook username and password, our client-assisted extraction technology allows you to download videos that
              you already have legitimate access to view in your personal browser, preserving pristine 1080p HD quality with zero account risk.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Understanding Facebook Video Privacy Architecture: How Permissions Work
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              To understand why private Facebook videos require a specialized workflow, it helps to examine Facebook permissions
              architecture. When a video is uploaded to Facebook, the creator assigns an audience privacy level:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-white">Public (Globe Icon):</strong> Accessible by any user, logged-in or anonymous. CDN stream URLs can be
                resolved directly by external cloud downloaders.
              </li>
              <li>
                <strong className="text-white">Friends Only (Two Silhouettes):</strong> The media stream is protected by session authentication tokens.
                Only users whose accounts have established bidirectional friend connections can request the media playlist.
              </li>
              <li>
                <strong className="text-white">Closed / Secret Groups (Shield Icon):</strong> Access requires active, approved group membership.
                Streaming URLs are signed with short-lived session parameters tied to the viewer account cookies.
              </li>
              <li>
                <strong className="text-white">Custom / Restricted Lists:</strong> Visibility is confined to specifically tagged user profiles.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              The Two Reliable Methods for Downloading Private Facebook Videos
            </h2>
            <p className="mb-6">
              Depending on whether you are using a desktop computer or mobile device, there are two secure methods to extract private video files:
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">Method 1: Direct Browser Address Bar URL (Recommended)</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Best for users browsing Facebook on desktop or mobile browsers while logged into their personal account:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Log into Facebook in your primary web browser (Chrome, Safari, Firefox, or Edge).</li>
                  <li>Navigate to the private post, Reel, or closed group video you wish to save. Verify that the video plays smoothly on your screen.</li>
                  <li>Copy the complete URL directly from your browser address bar (e.g., <code>https://www.facebook.com/reel/1234567890</code> or <code>https://www.facebook.com/groups/12345/posts/67890/</code>).</li>
                  <li>Paste the URL into the ReelsGrab Private Downloader input box above and click &quot;Download Private Video&quot;.</li>
                  <li>Select your preferred quality (Full HD 1080p, 720p HD, or MP3 audio) and save the file directly to your device storage.</li>
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">Method 2: Page Source Extraction (For Highly Restricted Groups)</h3>
                <p className="text-slate-400 text-sm mb-4">
                  For secret groups or posts with strict origin restrictions that block direct URL querying:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Open the private video page on your desktop browser.</li>
                  <li>Right-click anywhere on an empty part of the web page and select <strong>&quot;View Page Source&quot;</strong> (or press <kbd className="bg-slate-800 px-1 py-0.5 rounded text-xs">Ctrl + U</kbd> on Windows, <kbd className="bg-slate-800 px-1 py-0.5 rounded text-xs">Cmd + Option + U</kbd> on Mac).</li>
                  <li>Select the entire source code text (<kbd className="bg-slate-800 px-1 py-0.5 rounded text-xs">Ctrl + A</kbd> / <kbd className="bg-slate-800 px-1 py-0.5 rounded text-xs">Cmd + A</kbd>) and copy it (<kbd className="bg-slate-800 px-1 py-0.5 rounded text-xs">Ctrl + C</kbd>).</li>
                  <li>Paste the copied source code into the ReelsGrab source parser window.</li>
                  <li>Our parser instantly extracts the temporary signed MP4 CDN link and initiates your direct high-speed download.</li>
                </ol>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Device-by-Device Walkthrough: Saving Private Facebook Videos Anywhere
            </h2>
            <p className="mb-6">
              Step-by-step instructions customized for your specific operating environment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">iPhone &amp; iPad (iOS 15+)</h3>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>Open Safari and log into Facebook Web (not the Facebook native app).</li>
                  <li>Navigate to the private video or group post.</li>
                  <li>Tap the Safari address bar, copy the full URL, and paste it into ReelsGrab.</li>
                  <li>Tap Download, select HD 1080p, and confirm Safari download prompt.</li>
                  <li>Open Safari Downloads, tap the video, tap the iOS Share icon, and select &quot;Save Video&quot; to place it into your Photos Camera Roll.</li>
                </ol>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2">Android Devices</h3>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>Open Chrome or Samsung Internet and log into Facebook.</li>
                  <li>Locate the target video, copy the browser URL, and visit ReelsGrab.</li>
                  <li>Paste the URL and tap Download.</li>
                  <li>The MP4 video downloads directly into your internal Downloads directory.</li>
                  <li>Instantly accessible inside Google Photos, Samsung Gallery, or any video player.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-red-400 mb-3 flex items-center gap-2">
              <Lock size={22} /> Critical Security Notice: Never Enter Your Facebook Password on Downloader Sites
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Many malicious websites claim to offer &quot;One-Click Private Video Downloaders&quot; by prompting you to enter your
              Facebook email address and password into their web form. <strong>Never enter your login credentials on any third-party downloader website.</strong>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Providing your password exposes your personal profile to account takeover, unauthorized messaging, identity theft, and permanent
              suspension by Meta security systems. ReelsGrab will never request your account password, security questions, or two-factor codes.
              Our client-side parsing happens entirely within your own browser context, ensuring complete privacy and security.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Troubleshooting Playbook: Resolving Common Private Video Download Errors
            </h2>
            <p className="mb-4">
              If your private video extraction encounters an issue, check these standard troubleshooting steps:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white mb-1">1. &quot;Access Denied / Not a Member&quot; Error</h3>
                <p className="text-slate-400 text-sm">
                  You must personally hold approved access to the private video or closed group on Facebook. If you cannot view and play
                  the video while logged into your Facebook account, external tools cannot parse it.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white mb-1">2. Shortened or Mobile URL Formats (m.facebook.com or fb.watch)</h3>
                <p className="text-slate-400 text-sm">
                  Mobile web links sometimes omit critical post IDs. Always use standard desktop URLs formatted like
                  <code>facebook.com/reel/...</code> or <code>facebook.com/videos/...</code>.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="font-bold text-white mb-1">3. Live Stream Still in Progress</h3>
                <p className="text-slate-400 text-sm">
                  Private live streams inside closed groups cannot be downloaded until the live stream finishes and Facebook completes
                  the archival VOD processing.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 pb-6">
        <h2 className="text-xl font-bold text-white mb-6">Related Tools</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      <div className="max-w-4xl mx-auto px-4 mb-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ: Private Facebook Video Downloader</h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
