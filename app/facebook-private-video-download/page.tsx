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
