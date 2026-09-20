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
  title: "Bulk Reels Downloader | Download All Reels from Instagram Profile Free",
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
