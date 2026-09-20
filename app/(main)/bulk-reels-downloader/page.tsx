import { Metadata } from "next";
import { Package, Users, Link2, Zap, Download, Archive, Globe, CheckCircle } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bulk Reels Downloader for Instagram",
  description:
    "Bulk download all Instagram Reels from a profile or username. Download multiple Facebook and Instagram Reels at once: free, no login, saves as ZIP.",
  keywords: [
    "bulk download instagram reels", "bulk instagram reels downloader",
    "download all reels from instagram profile", "download all reels from instagram username",
    "bulk reels downloader", "download multiple instagram reels",
    "export all instagram reels", "instagram profile reels downloader",
    "download all facebook reels", "batch download instagram reels",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/bulk-reels-downloader` },
  openGraph: {
    title: "Bulk Reels Downloader for Instagram | ReelsGrab",
    description:
      "Bulk download all Instagram Reels from a profile or username. Download multiple Facebook and Instagram Reels at once: free, no login, saves as ZIP.",
    url: `${SITE_CONFIG.url}/bulk-reels-downloader`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const features = [
  { icon: Package, title: "Profile-Wide Download", description: "Download all Reels from any public Instagram or Facebook profile in one click." },
  { icon: Archive, title: "ZIP Download", description: "All downloaded Reels are packaged into a single ZIP file for easy storage." },
  { icon: Users, title: "Any Public Profile", description: "Works for any public Instagram or Facebook profile, including brands, creators, and influencers." },
  { icon: Zap, title: "Batch Processing", description: "Multiple Reels downloaded and processed simultaneously in the background." },
  { icon: Download, title: "Original Quality", description: "All Reels downloaded in their original HD quality with no compression." },
  { icon: CheckCircle, title: "100% Free", description: "Bulk download completely free with no limits on number of Reels." },
];

const steps = [
  { title: "Enter a profile URL or username", description: "Paste the Instagram profile URL (instagram.com/username) or the Facebook profile URL into the input box above." },
  { title: "Click 'Fetch All Reels'", description: "Our system scans the public profile and lists all available Reels for download." },
  { title: "Select which Reels to download", description: "Choose individual Reels or click 'Select All' to download the entire Reels archive." },
  { title: "Download as ZIP", description: "All selected Reels are packaged into a single ZIP file and downloaded to your device." },
];

const faqs = [
  { q: "Can I download all Reels from an Instagram profile?", a: "Yes! Enter the Instagram profile URL or username and our Bulk Reels Downloader will fetch and let you download all public Reels from that profile at once." },
  { q: "Is there a limit on how many Reels I can bulk download?", a: "No hard limit. Our tool can handle profiles with hundreds of Reels. Larger archives may take longer to process." },
  { q: "Can I bulk download Reels from private Instagram profiles?", a: "Bulk download only works for public profiles. For private profiles, you can use our standard Instagram Reels Downloader one Reel at a time if you have access." },
  { q: "What format are the Reels saved in?", a: "Individual Reels are saved as MP4 files. When bulk downloading multiple Reels, they are packaged together in a ZIP archive for convenient download." },
  { q: "Does bulk download work for Facebook Reels too?", a: "Yes! You can also bulk download Reels from public Facebook pages and profiles by entering the Facebook profile URL." },
  { q: "Can I use this to archive my own Instagram Reels?", a: "Absolutely! Many creators use our bulk downloader to back up and archive their own Instagram Reels as a content backup strategy." },
  { q: "Is bulk downloading Instagram Reels legal?", a: "Bulk downloading public content for personal use and backup is generally acceptable. However, you must not redistribute or commercially use content you don't own without permission." },
];

const relatedTools = [
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download single IG Reels in HD" },
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Download single FB Reels" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any Facebook video" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from Reels" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "See all downloaders" },
];

export default function BulkReelsDownloaderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Bulk Reels Downloader", url: "/bulk-reels-downloader" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Bulk Reels Downloader", "Download all Instagram and Facebook Reels from a profile in bulk: free, ZIP download.", `${SITE_CONFIG.url}/bulk-reels-downloader`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Bulk Download Instagram Reels from a Profile", "Download all Reels from any public Instagram profile at once", steps)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
              <li className="text-slate-300">Bulk Reels Downloader</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-300 text-xs font-medium mb-5">
            📦 Bulk Reels Downloader
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Bulk Download{" "}
            <span className="gradient-text">All Reels from Instagram Profile</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download <strong className="text-white">all Instagram Reels</strong> from any public profile at once.
            Enter a username, select all Reels, and download as ZIP, completely free.
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="text"
                  placeholder="Enter Instagram profile URL or @username..."
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all whitespace-nowrap shadow-lg shadow-indigo-500/25">
                <Package size={16} /> Fetch All Reels
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500 text-center">Works for public Instagram &amp; Facebook profiles</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Bulk Reels Downloader Features</h2>
        <p className="text-center text-slate-400 text-sm mb-10">Download an entire profile&apos;s Reels archive in one shot.</p>
        <FeaturesGrid features={features} columns={3} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">How to Bulk Download Instagram Reels</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 simple steps to download an entire profile&apos;s Reels</p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* COMPREHENSIVE EDITORIAL GUIDE (1,500+ WORDS) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Complete Guide to Bulk Downloading Instagram Reels from Any Profile
            </h2>
            <p>
              Short-form video has become the backbone of modern digital communication. Digital content creators, social media
              agencies, research analysts, and everyday enthusiasts frequently find themselves needing to save more than just an
              isolated clip. Whether you are conducting a competitive content audit, archiving your personal portfolio before
              rebranding, or creating an offline backup of your video library, saving videos one by one using standard downloaders
              is an exhausting and repetitive chore.
            </p>
            <p>
              Copying thirty, fifty, or one hundred individual post links, pasting them repeatedly, waiting for each video to render,
              and organizing dozens of loose files quickly leads to frustration. The <strong>ReelsGrab Bulk Reels Downloader</strong> was
              specifically engineered to solve this bottleneck. By entering a single public profile username or account URL, our cloud engine
              queries the public profile feed, identifies all available Reels, and packages them into an organized ZIP archive ready for
              instant one-click download.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Why Creators and Digital Agencies Need Batch Video Archiving
            </h2>
            <p className="mb-4">
              Managing digital video assets across Instagram and Facebook requires scalable tools. Industry professionals rely on bulk
              video extraction for several critical workflows:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-300">
              <li>
                <strong className="text-white">Account Deletion &amp; Suspension Protection:</strong> Social media algorithms and automated moderation
                systems can occasionally flag or suspend creator accounts without prior warning. Having a localized, timestamped ZIP backup of your entire
                video history ensures years of creative effort cannot be erased in a second.
              </li>
              <li>
                <strong className="text-white">Omnichannel Repurposing:</strong> Top creators publish content across multiple short-form ecosystems,
                including TikTok, YouTube Shorts, Pinterest Idea Pins, and Snapchat Spotlight. Bulk downloading clean, watermark-free Reels allows
                video editors to batch-schedule content across every platform simultaneously.
              </li>
              <li>
                <strong className="text-white">Competitive Intelligence &amp; Creative Audits:</strong> Digital marketing agencies analyze competitor
                profiles to understand viral hook structures, visual pacing, sound design, and caption copy. Downloading a competitor profile archive
                enables offline frame-by-frame analysis inside editing software.
              </li>
              <li>
                <strong className="text-white">Offline Event &amp; Travel Viewing:</strong> Long flights, remote camping trips, and international travel
                often mean erratic or nonexistent cellular internet. Archiving a creator educational library or travel guide series enables seamless
                offline playback anywhere.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comparison: Single Downloader vs Bulk ZIP Downloader vs Native In-App Save
            </h2>
            <p className="mb-6">
              Understanding the technical differences between available downloading methods highlights the efficiency of batch processing:
            </p>
            <div className="overflow-x-auto border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Evaluation Metric</th>
                    <th className="p-3.5 font-semibold text-indigo-400">ReelsGrab Bulk Downloader</th>
                    <th className="p-3.5 font-semibold">Standard Single Downloader</th>
                    <th className="p-3.5 font-semibold">Native App Bookmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Download Efficiency</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">1-Click for entire profile</td>
                    <td className="p-3.5 text-slate-400">Requires manual link copy per clip</td>
                    <td className="p-3.5 text-slate-400">Bookmarks inside app only</td>
                  </tr>
                  <tr className="bg-slate-900/20">
                    <td className="p-3.5 font-medium text-white">Packaging Format</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Organized ZIP Archive</td>
                    <td className="p-3.5 text-slate-400">Loose MP4 files in Downloads</td>
                    <td className="p-3.5 text-slate-400">In-app proprietary cache</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Watermark Removal</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">100% Clean (Zero overlays)</td>
                    <td className="p-3.5 text-slate-400">Clean on selected tools</td>
                    <td className="p-3.5 text-red-400">Large animated watermark added</td>
                  </tr>
                  <tr className="bg-slate-900/20">
                    <td className="p-3.5 font-medium text-white">Audio &amp; Music Preservation</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">Full original audio muxed</td>
                    <td className="p-3.5 text-slate-400">Varies by tool</td>
                    <td className="p-3.5 text-red-400">Mutes licensed commercial audio</td>
                  </tr>
                  <tr className="bg-slate-950/40">
                    <td className="p-3.5 font-medium text-white">Account Password Required</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">No (Public profile URL only)</td>
                    <td className="p-3.5 text-emerald-400">No login needed</td>
                    <td className="p-3.5 text-slate-400">Must be logged into account</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Device-by-Device Walkthrough: How to Bulk Save Instagram Reels
            </h2>
            <p className="mb-6">
              Depending on the operating system and hardware you use, unpacking and managing bulk ZIP video archives follows
              straightforward steps:
            </p>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">Windows PC &amp; macOS Desktop</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Desktop computers offer the fastest environment for extracting and reorganizing large video archives:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Open your preferred browser (Chrome, Safari, Edge, or Firefox) and visit ReelsGrab Bulk Reels Downloader.</li>
                  <li>Paste the target public Instagram profile URL (e.g., <code>instagram.com/username</code>) and click Fetch All Reels.</li>
                  <li>Review the thumbnail grid. Click Select All or manually check the specific videos you wish to save.</li>
                  <li>Click Download ZIP. The archive will download directly into your default Downloads folder.</li>
                  <li>Right-click the downloaded ZIP file and choose &quot;Extract All&quot; (Windows) or double-click to uncompress (Mac). All MP4 video files are now ready for immediate viewing or editing.</li>
                </ol>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">iPhone &amp; iPad (iOS 15+)</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Apple native Files app includes built-in ZIP archive extraction with zero extra apps required:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Open Safari and navigate to the ReelsGrab Bulk Downloader.</li>
                  <li>Enter the profile username, inspect the video list, and tap Download ZIP.</li>
                  <li>When Safari prompts to confirm the download, tap Download.</li>
                  <li>Tap the blue download icon in Safari address bar and open the downloaded ZIP file inside the iOS Files app.</li>
                  <li>Tap the ZIP file once: iOS automatically decompresses the folder. Inside, tap any MP4, tap the iOS Share button, and select &quot;Save Video&quot; to transfer individual clips directly into your Apple Photos Camera Roll.</li>
                </ol>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-2">Android Smartphones &amp; Tablets</h3>
                <p className="text-slate-400 text-sm mb-3">
                  Android devices allow direct filesystem management through Google Files or Samsung My Files:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-300">
                  <li>Open Chrome or Samsung Internet, paste the profile URL, and initiate the bulk fetch.</li>
                  <li>Select your Reels and tap Download ZIP. The file downloads into your device internal Download directory.</li>
                  <li>Open Google Files or Samsung My Files, locate the ZIP archive, and tap Extract.</li>
                  <li>All extracted MP4 videos will automatically index into your Gallery and Google Photos library within seconds.</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Technical Architecture: How ReelsGrab Handles Profile Pagination &amp; Rate Limits
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Social media networks implement strict API request rate limits and cursor-based pagination tokens to restrict automated
              crawlers. Standard browser extensions and scraper scripts often fail or trigger temporary IP bans after processing only five or
              ten videos.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              ReelsGrab utilizes an intelligent distributed scraping queue. When a profile request is submitted, our servers query
              Instagram public GraphQL endpoints using adaptive request spacing. This simulates standard user scroll events, retrieving
              media metadata without triggering security flags or CAPTCHA challenges. Once video CDN endpoints are resolved, our servers
              stream the individual H.264 streams directly into an in-memory ZIP streaming pipeline, providing maximum throughput without
              exhausting device memory.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-400">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Standard MP4 Container</span>
                Universally compatible across VLC, QuickTime, Premiere Pro, and mobile players.
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Deflate Compression</span>
                Standard ZIP specification readable by all native operating systems without third-party unarchivers.
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ethical Use, Privacy &amp; Copyright Guidelines
            </h2>
            <p className="mb-4">
              Bulk downloading technology carries important ethical responsibilities. We strongly encourage all users to observe the
              following fair practice principles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Respect Original Creator Ownership:</strong> Downloading content for personal archival, academic research,
                or creative critique is permitted under fair use. However, re-uploading someone else videos to monetize them on other platforms
                without explicit authorization violates copyright law.
              </li>
              <li>
                <strong className="text-white">Provide Clear Attribution:</strong> If referencing or remixing content created by others, always credit
                the original creator account clearly in your video descriptions and tags.
              </li>
              <li>
                <strong className="text-white">Private Profiles Are Respected:</strong> ReelsGrab exclusively operates on publicly accessible social media
                profiles. We do not support or facilitate unauthorized data extraction from private, hidden, or restricted personal accounts.
              </li>
            </ul>
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
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ: Bulk Reels Downloader</h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
