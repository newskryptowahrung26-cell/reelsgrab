import { Metadata } from "next";
import {
  Download, Shield, Zap, Music, Lock, Star, Globe, Users, Video,
} from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import {
  faqSchema, howToSchema, softwareSchema, websiteSchema, breadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} – Free Instagram & Facebook Reels Downloader`,
  description:
    "Download Instagram Reels and Facebook Videos in HD 1080p — no watermark, with audio, completely free. No login required. Supports MP3 audio extraction.",
  keywords: [
    "instagram reels download", "ig reels download", "facebook reels download",
    "facebook video download", "reels downloader", "ig reels downloader",
    "download instagram reels", "facebook video downloader",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      es: `${SITE_CONFIG.url}/es/descargar-reels-instagram`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-instagram`,
    },
  },
};

const features = [
  { icon: Shield, title: "No Watermark", description: "Download clean HD videos without any watermark or logo — original quality preserved." },
  { icon: Music, title: "With Audio", description: "Get videos with full original audio and music — no muted or silent downloads." },
  { icon: Zap, title: "Ultra Fast", description: "Our servers process your video in under 3 seconds. No waiting, no queue." },
  { icon: Lock, title: "No Login Required", description: "Paste URL and download — no Instagram or Facebook account needed." },
  { icon: Video, title: "HD 1080p Quality", description: "Download in the highest available quality: 1080p Full HD or original bitrate." },
  { icon: Globe, title: "Works Everywhere", description: "Works on iPhone, Android, PC, Mac and any browser — no app install needed." },
];

const steps = [
  { title: "Copy the Reel URL", description: "Open Instagram or Facebook app, find the Reel you want, tap the three-dot menu and select 'Copy Link'." },
  { title: "Paste the URL above", description: "Click on the input box above and paste the copied link. Then click the 'Download Now' button." },
  { title: "Choose your format", description: "Select HD 1080p (no watermark), 720p, or MP3 audio-only format and the file downloads instantly." },
];

const faqs = [
  { q: "Is ReelsGrab completely free?", a: "Yes, ReelsGrab is 100% free to use. There are no hidden charges, subscriptions, or premium plans. You can download unlimited reels for free." },
  { q: "Can I download Instagram Reels without watermark?", a: "Yes! ReelsGrab downloads Instagram Reels in their original quality without adding any watermark. The downloaded file is clean and watermark-free." },
  { q: "Why do downloaded Reels have no sound?", a: "Instagram uses separate audio streams (DASH/HLS) for licensed music. ReelsGrab merges the audio and video streams so your downloads always include the original sound. If you face this issue, try re-pasting the URL." },
  { q: "Does ReelsGrab work on iPhone and Android?", a: "Yes! ReelsGrab is a web-based tool that works on all devices — iPhone (Safari), Android (Chrome), desktop, and tablet. No app installation required." },
  { q: "Is it safe to use ReelsGrab?", a: "Absolutely. ReelsGrab never asks for your Instagram or Facebook login credentials. We only process the public video URL you paste. Your data is never stored." },
  { q: "Can I download private Instagram Reels?", a: "For private accounts, use our dedicated Private Facebook Video Downloader tool. For private Instagram content, you need to be logged into Instagram as a follower." },
  { q: "What video quality can I download?", a: "ReelsGrab supports HD 1080p, 720p, and 480p downloads depending on what quality the uploader originally posted. MP3 audio extraction is also available." },
  { q: "How many reels can I download per day?", a: "There is no daily limit. You can download unlimited reels, videos, and stories completely free." },
];

const relatedTools = [
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download IG Reels in HD without watermark" },
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Save FB Reels to your device free" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any Facebook video HD" },
  { emoji: "🎵", label: "Reels to MP3", href: "/reels-to-mp3", description: "Extract audio from Instagram & FB Reels" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
];

const stats = [
  { icon: Users, label: "Monthly Users", value: "2M+" },
  { icon: Download, label: "Videos Downloaded", value: "50M+" },
  { icon: Star, label: "User Rating", value: "4.8/5" },
  { icon: Globe, label: "Countries", value: "150+" },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={websiteSchema()} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema(SITE_CONFIG.name, SITE_CONFIG.description, SITE_CONFIG.url)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Download Instagram & Facebook Reels", "Step-by-step guide to download Reels for free in HD", steps)} />

      {/* HERO */}
      <section className="hero-gradient py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
            <Zap size={12} /> Free · No Login · No Watermark · HD 1080p
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Instagram &amp; Facebook{" "}
            <span className="gradient-text">Reels Downloader</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Download Instagram Reels &amp; Facebook Videos in HD 1080p — no watermark,
            with original audio, completely free. Works on all devices instantly.
          </p>

          {/* Tool */}
          <DownloadTool platform="both" placeholder="Paste Instagram or Facebook URL here..." />

          {/* Quick links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            {[
              ["📸 IG Reels", "/instagram-reels-download"],
              ["📘 FB Reels", "/facebook-reels-download"],
              ["📹 FB Video", "/facebook-video-download"],
              ["🎵 Reels MP3", "/reels-to-mp3"],
              ["🔒 Private Video", "/facebook-private-video-download"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="mx-auto mb-2 text-indigo-400" size={22} />
              <p className="text-2xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AD SLOT - Top */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Advertisement
        </div>
      </div>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Why Choose {SITE_CONFIG.name}?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            The fastest, cleanest, and most reliable reels downloader — no ads spam, no pop-ups.
          </p>
        </div>
        <FeaturesGrid features={features} columns={3} />
      </section>

      {/* HOW TO */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            How to Download Instagram Reels
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            3 simple steps — done in under 10 seconds
          </p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* OTHER TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white mb-2">All Download Tools</h2>
        <p className="text-slate-400 text-sm mb-8">
          One platform for all your social media download needs.
        </p>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* AD SLOT - Bottom */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Advertisement
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-slate-400 text-sm mb-10">
          Everything you need to know about downloading Instagram &amp; Facebook Reels.
        </p>
        <FaqSection faqs={faqs} />
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Disclaimer:</strong> {SITE_CONFIG.name} is an independent tool not
          affiliated with Instagram, Facebook, or Meta Platforms Inc. This tool is
          intended for personal, non-commercial use only. Please respect content
          creators&apos; copyright. Only download content you have rights to download.
        </div>
      </section>
    </>
  );
}
