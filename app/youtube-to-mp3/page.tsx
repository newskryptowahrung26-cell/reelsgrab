import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Music, Zap, Shield, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube to MP3 Converter – Free High Quality Audio Downloader",
  description:
    "Convert and download YouTube videos to MP3 in high quality 320kbps / 128kbps audio. Free online YouTube MP3 converter — works on PC, iPhone & Android without software.",
  keywords: [
    "youtube to mp3",
    "youtube mp3 converter",
    "youtube to mp3 converter free",
    "youtube audio download",
    "yt to mp3",
    "youtube to mp3 320kbps",
    "download youtube mp3",
    "convert youtube to mp3",
    "youtube to audio converter",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/youtube-to-mp3`,
  },
  openGraph: {
    title: "YouTube to MP3 Converter – Free High Quality Audio Downloader",
    description:
      "Convert and download YouTube videos to MP3 in high quality 320kbps / 128kbps audio. Free online YouTube MP3 converter.",
    url: `${SITE_CONFIG.url}/youtube-to-mp3`,
  },
};

const features = [
  {
    icon: Music,
    title: "Studio Quality 320kbps",
    description: "Extract clean, uncompressed audio tracks from any YouTube video or music clip in crystal-clear MP3 format.",
  },
  {
    icon: Zap,
    title: "Instant Fast Conversion",
    description: "Our high-speed processing engine converts YouTube videos to MP3 in seconds without queuing.",
  },
  {
    icon: Shield,
    title: "100% Safe & Clean",
    description: "No popunder ads, no redirects, and no malicious extensions. Safe, secure audio downloads every time.",
  },
  {
    icon: Smartphone,
    title: "Works on All Devices",
    description: "Convert YouTube to MP3 seamlessly on iPhone (Safari), Android (Chrome), Mac, and Windows PC.",
  },
];

const steps = [
  {
    title: "Copy the YouTube Video Link",
    description: "Open YouTube in your browser or app, find the video or song you want to convert, and copy its URL.",
  },
  {
    title: "Paste URL in the Converter",
    description: "Paste the YouTube link into the input box above and click the 'Convert to MP3' button.",
  },
  {
    title: "Select Audio Quality",
    description: "Choose your preferred audio quality (High Quality MP3 or Standard 128kbps).",
  },
  {
    title: "Download Your MP3",
    description: "Click the download button and your MP3 audio file will save directly to your device.",
  },
];

const faqs = [
  {
    q: "How to convert YouTube to MP3 for free?",
    a: "Simply copy the YouTube video link, paste it into our converter box above, and click 'Convert to MP3'. Select your preferred audio quality and click download. It is 100% free with no registration required.",
  },
  {
    q: "What is the highest audio quality available for YouTube MP3?",
    a: "ReelsGrab provides the highest possible bitrate available from the original YouTube stream (up to 320kbps HQ).",
  },
  {
    q: "Can I convert YouTube Shorts to MP3?",
    a: "Yes! Our converter fully supports YouTube Shorts URLs (e.g. youtube.com/shorts/...). Paste the link and extract the audio instantly.",
  },
  {
    q: "Is there any limit on how many YouTube videos I can convert?",
    a: "There are no limits! You can convert and download unlimited YouTube videos and music tracks to MP3 completely free.",
  },
  {
    q: "Can I convert YouTube to MP3 on iPhone?",
    a: "Yes. Open Safari on your iPhone, paste the YouTube URL in our tool, and tap download. The MP3 file will save directly to your Files app.",
  },
];

export default function YouTubeToMp3Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "YouTube to MP3", url: "/youtube-to-mp3" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "YouTube to MP3 Converter",
          "Convert and download YouTube videos to MP3 in high quality audio online.",
          `${SITE_CONFIG.url}/youtube-to-mp3`
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "How to Convert YouTube to MP3",
          "Step-by-step guide to convert and download YouTube videos to MP3 audio",
          steps
        )}
      />

      {/* Hero Section */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li><a href="/" className="hover:text-slate-300">Home</a></li>
              <li>/</li>
              <li className="text-slate-300">YouTube to MP3</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5">
            🎵 High Quality YouTube Audio Converter
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            YouTube to MP3 Converter{" "}
            <span className="gradient-text">Free High Quality Audio</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Convert YouTube videos and Shorts to <strong className="text-white">MP3 audio</strong> in
            seconds. Fast, free, with no software installation and no registration.
          </p>

          <DownloadTool
            platform="youtube"
            mode="audio"
            placeholder="Paste YouTube video or Shorts link here..."
            buttonLabel="Convert to MP3"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/youtube-to-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube to MP4 (HD Video)
            </a>
            <a href="/reels-to-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎧 Reels to MP3
            </a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Instagram Reels
            </a>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Advertisement
        </div>
      </div>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Why Use Our YouTube to MP3 Converter?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            The cleanest and fastest YouTube audio downloader online — high bitrate, zero ads spam.
          </p>
        </div>
        <FeaturesGrid features={features} />
      </section>

      {/* How To Steps */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            How to Convert YouTube to MP3
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Simple 4-step process to download YouTube audio
          </p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-white">The Ultimate YouTube to MP3 Converter</h2>
          <p>
            Whether you want to extract background music from a tutorial, save your favorite podcast episodes
            for offline listening, or convert live concert videos into high-quality audio files, our{" "}
            <strong className="text-white">YouTube to MP3 converter</strong> provides the fastest and most
            convenient solution available online.
          </p>
          <p>
            Unlike other converters that bombard you with intrusive popunders, malware warnings, or slow multi-minute
            queue times, ReelsGrab runs on a high-speed cloud infrastructure that processes YouTube audio
            instantaneously.
          </p>
          <h3 className="text-xl font-semibold text-white">Supports YouTube Shorts &amp; Mobile Links</h3>
          <p>
            Our converter automatically detects and handles all YouTube URL formats, including standard desktop links
            (<code className="text-indigo-300">youtube.com/watch?v=...</code>), shortened mobile links (
            <code className="text-indigo-300">youtu.be/...</code>), and the increasingly popular YouTube Shorts (
            <code className="text-indigo-300">youtube.com/shorts/...</code>).
          </p>
          <p>
            Need video as well? Check out our dedicated{" "}
            <a href="/youtube-to-mp4" className="text-indigo-400 hover:underline">
              YouTube to MP4 HD Video Downloader
            </a>{" "}
            or convert social reels with our{" "}
            <a href="/reels-to-mp3" className="text-indigo-400 hover:underline">
              Reels to MP3 tool
            </a>.
          </p>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6 text-center">More Free Download Tools</h2>
        <RelatedTools currentPath="/youtube-to-mp3" />
      </section>

      {/* Ad slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Advertisement
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Frequently Asked Questions – YouTube to MP3
        </h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
