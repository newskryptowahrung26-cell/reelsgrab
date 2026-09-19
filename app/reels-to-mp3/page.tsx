import { Metadata } from "next";
import { Music, Download, Headphones, Zap, Globe, Smartphone, Volume2, FileAudio } from "lucide-react";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reels to MP3 – Download Instagram & Facebook Reels Audio Free",
  description:
    "Convert Instagram and Facebook Reels to MP3 audio online free. Extract audio from any Reel in seconds — high quality, no app, no login required.",
  keywords: [
    "reels to mp3", "instagram reel to mp3", "convert instagram reel to mp3",
    "instagram reels audio download", "extract audio from instagram reel",
    "download music from instagram reel", "facebook reel to mp3",
    "facebook reel audio download", "ig reels mp3 converter",
    "instagram reel song download", "download audio from ig reel",
    "facebook reels audio download", "reels audio extractor",
    "instagram reel ringtone download",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/reels-to-mp3` },
};

const features = [
  { icon: Music, title: "High Quality MP3", description: "Extract audio in high-quality MP3 format — 128kbps to 320kbps depending on original." },
  { icon: Volume2, title: "Original Audio", description: "Get the exact audio from the Reel — music, voiceover, or background sound." },
  { icon: Zap, title: "Instant Conversion", description: "Audio extracted and ready to download in under 5 seconds." },
  { icon: Download, title: "Direct Download", description: "No wait time, no ads between steps. One click and the MP3 is on your device." },
  { icon: Globe, title: "IG & FB Both", description: "Works for both Instagram Reels and Facebook Reels audio extraction." },
  { icon: Smartphone, title: "All Devices", description: "Convert and download MP3 on any device — iPhone, Android, PC, Mac." },
  { icon: FileAudio, title: "Ringtone Ready", description: "Perfect for creating ringtones from viral Reel audio tracks." },
  { icon: Headphones, title: "Clean Audio", description: "Audio-only file, no video. Perfect for music, podcasts, and voice recordings." },
];

const steps = [
  { title: "Find your Reel on Instagram or Facebook", description: "Open the Instagram or Facebook app, find the Reel with the audio or music you want to extract." },
  { title: "Copy the Reel URL", description: "Tap the three-dot (···) menu on the Reel and select 'Copy Link'. The URL is now in your clipboard." },
  { title: "Paste the URL above", description: "Paste the Reel URL into the input box above and click 'Extract MP3 Audio'." },
  { title: "Download the MP3 file", description: "The MP3 audio file is extracted and ready. Click the download button to save it to your device." },
];

const faqs = [
  { q: "How to convert Instagram Reels to MP3?", a: "Copy the Instagram Reel URL, paste it into the input field above, and click 'Extract MP3 Audio'. The audio is extracted instantly and you can download the MP3 file for free." },
  { q: "Can I download the audio/music from a Facebook Reel?", a: "Yes! Our Reels to MP3 converter works for both Instagram and Facebook Reels. Just paste the Reel URL and click download to get the audio as an MP3 file." },
  { q: "Why do some Reels download without sound?", a: "Instagram uses DASH/HLS streaming which separates video and audio tracks. Some simple downloaders only grab the video track, causing muted downloads. Our tool properly merges and extracts the full audio track." },
  { q: "What audio quality is the MP3?", a: "The MP3 quality depends on the original audio quality of the Reel. We extract at the highest available bitrate — typically 128kbps to 320kbps." },
  { q: "Can I use this to download ringtones from Reels?", a: "Yes! Many users use our Reels to MP3 tool specifically to create ringtones from trending Reel audio. Download the MP3 and set it as your ringtone." },
  { q: "Is the Reels to MP3 converter free?", a: "Completely free. No subscriptions, no hidden fees, no daily limits. Convert as many Reels to MP3 as you want." },
  { q: "Can I extract audio from a private Reel?", a: "For private Reels, you need to have access to view the Reel. Copy the URL while you're logged in and can see the Reel, then paste it here." },
  { q: "What file format is the audio download?", a: "The audio is downloaded as an MP3 file (.mp3) which is universally compatible with all devices, music players, and editing software." },
];

const relatedTools = [
  { emoji: "📸", label: "Instagram Reels Download", href: "/instagram-reels-download", description: "Download full IG Reels with video" },
  { emoji: "📘", label: "Facebook Reels Download", href: "/facebook-reels-download", description: "Download full FB Reels with video" },
  { emoji: "📹", label: "Facebook Video Download", href: "/facebook-video-download", description: "Download any Facebook video HD" },
  { emoji: "🔒", label: "Private FB Video", href: "/facebook-private-video-download", description: "Download private Facebook videos" },
  { emoji: "📦", label: "Bulk Reels Downloader", href: "/bulk-reels-downloader", description: "Download all reels from a profile" },
  { emoji: "🏠", label: "All Tools", href: "/", description: "All social video downloaders" },
];

export default function ReelsToMp3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Reels to MP3", url: "/reels-to-mp3" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={softwareSchema("Reels to MP3 Converter", "Convert Instagram and Facebook Reels to MP3 audio free online — instant, no login.", `${SITE_CONFIG.url}/reels-to-mp3`)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={howToSchema("How to Convert Instagram Reels to MP3", "Extract and download audio from Instagram or Facebook Reels as MP3", steps)} />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
              <li className="text-slate-300">Reels to MP3</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5">
            🎵 Reels to MP3 Converter
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Instagram &amp; Facebook{" "}
            <span className="gradient-text">Reels to MP3</span>{" "}
            Audio Download
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Extract and download audio from <strong className="text-white">Instagram Reels</strong> and{" "}
            <strong className="text-white">Facebook Reels</strong> as high-quality MP3 — free, instant, no login required.
            Perfect for ringtones, music, and audio clips.
          </p>
          <DownloadTool
            platform="both"
            mode="audio"
            placeholder="Paste Instagram or Facebook Reel URL here..."
            buttonLabel="Extract MP3 Audio"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 my-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">Reels to MP3 Converter Features</h2>
        <p className="text-center text-slate-400 text-sm mb-10">The fastest way to extract audio from any Instagram or Facebook Reel.</p>
        <FeaturesGrid features={features} columns={4} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">How to Convert Reels to MP3</h2>
          <p className="text-center text-slate-400 text-sm mb-10">4 easy steps — audio ready in under 10 seconds</p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-bold text-white mb-4">Why Use ReelsGrab to Convert Reels to MP3?</h2>
        <div className="text-slate-400 text-sm leading-relaxed space-y-4">
          <p>
            Instagram and Facebook Reels often feature trending music, viral sounds, and original audio that users want to save separately.
            Our <strong className="text-white">Reels to MP3 converter</strong> makes it effortless — paste the URL and get an MP3 file in seconds.
          </p>
          <p>
            Unlike competitors that give you a muted video when you try to download, our tool properly{" "}
            <a href="/blog/fix-reels-no-sound" className="text-indigo-400 hover:underline">merges audio and video streams</a>{" "}
            and can extract just the audio as a clean MP3 file. Perfect for creating{" "}
            <strong className="text-white">ringtones</strong>, saving <strong className="text-white">background music</strong>,
            or archiving <strong className="text-white">voice notes and podcasts</strong>.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Related Tools</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      <div className="max-w-4xl mx-auto px-4 mb-6"><div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">Advertisement</div></div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ – Reels to MP3 Converter</h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
