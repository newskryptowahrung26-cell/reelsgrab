import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import { Video, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube to MP4 Downloader – Download YouTube Videos in HD Free",
  description:
    "Download YouTube videos to MP4 in HD 1080p, 720p, and 4K quality with original audio. Free online YouTube video downloader — works on mobile, PC & tablet.",
  keywords: [
    "youtube to mp4",
    "youtube video download",
    "youtube video downloader",
    "download youtube videos hd",
    "yt to mp4",
    "youtube to mp4 1080p",
    "download youtube shorts",
    "youtube downloader free",
    "convert youtube to mp4",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/youtube-to-mp4`,
  },
  openGraph: {
    title: "YouTube to MP4 Downloader – Download YouTube Videos in HD Free",
    description:
      "Download YouTube videos to MP4 in HD 1080p, 720p, and 4K quality with original audio. Free online YouTube video downloader.",
    url: `${SITE_CONFIG.url}/youtube-to-mp4`,
  },
};

const features = [
  {
    icon: Video,
    title: "Full HD & 4K Support",
    description: "Download YouTube videos in crisp 1080p, 720p, and high-definition MP4 format with synchronized audio.",
  },
  {
    icon: Sparkles,
    title: "YouTube Shorts Download",
    description: "Save YouTube Shorts directly to your phone's gallery without watermark or compression artifacts.",
  },
  {
    icon: Zap,
    title: "Fast Direct Downloads",
    description: "Lightning-fast extraction connects directly to YouTube's media stream for instant, buffer-free downloading.",
  },
  {
    icon: Shield,
    title: "Zero Registration Required",
    description: "No signups, no apps to install, and no payment required. 100% free and unlimited usage.",
  },
];

const steps = [
  {
    title: "Find the YouTube Video or Short",
    description: "Open YouTube and locate the video or short you wish to download. Copy the link from your browser or the Share button.",
  },
  {
    title: "Paste the URL Here",
    description: "Paste the copied YouTube link into the download box above and click 'Download MP4'.",
  },
  {
    title: "Choose Quality Resolution",
    description: "Select your desired resolution (HD 1080p, 720p, or 360p).",
  },
  {
    title: "Save Video to Device",
    description: "Click the download button and the video will be saved directly to your Downloads folder or Camera Roll.",
  },
];

const faqs = [
  {
    q: "How to download YouTube videos in HD 1080p?",
    a: "Copy the YouTube video link, paste it into our downloader above, and click 'Download MP4'. Then select the 1080p HD option to download the full quality video with original sound.",
  },
  {
    q: "Can I download YouTube Shorts with this tool?",
    a: "Yes! ReelsGrab supports all YouTube Shorts URLs. Simply copy the link from the Shorts player and paste it here.",
  },
  {
    q: "Does downloaded YouTube video have sound?",
    a: "Yes. All our MP4 downloads include synchronized, high-quality original audio.",
  },
  {
    q: "How can I download YouTube videos on iPhone?",
    a: "Open Safari on your iPhone, paste the YouTube link into ReelsGrab, and tap Download. Safari will prompt you to save the MP4 video directly to your Files app.",
  },
  {
    q: "Can I extract only the audio instead of video?",
    a: "Yes! You can either select the 'MP3 Audio' option in the download results or use our dedicated YouTube to MP3 converter tool.",
  },
];

export default function YouTubeToMp4Page() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "YouTube to MP4", url: "/youtube-to-mp4" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "YouTube to MP4 Downloader",
          "Download YouTube videos and Shorts in HD 1080p MP4 format online for free.",
          `${SITE_CONFIG.url}/youtube-to-mp4`
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "How to Download YouTube Videos to MP4",
          "Step-by-step guide to download YouTube videos and shorts in HD MP4 format",
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
              <li className="text-slate-300">YouTube to MP4</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium mb-5">
            🎬 HD YouTube Video Downloader
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            YouTube to MP4 Downloader{" "}
            <span className="gradient-text">HD 1080p Free</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download YouTube videos and Shorts in <strong className="text-white">HD 1080p MP4</strong> format
            with audio. Fast, free, no software required.
          </p>

          <DownloadTool
            platform="youtube"
            mode="video"
            placeholder="Paste YouTube video or Shorts link here..."
            buttonLabel="Download MP4"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/youtube-to-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube to MP3 (Audio)
            </a>
            <a href="/facebook-video-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📘 Facebook Video Download
            </a>
            <a href="/instagram-reels-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Instagram Reels Download
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
            Best Online YouTube Video Downloader
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            High quality MP4 downloads with crystal-clear audio and zero watermarks.
          </p>
        </div>
        <FeaturesGrid features={features} />
      </section>

      {/* How To Steps */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            How to Download YouTube Videos to MP4
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            4 simple steps to save any YouTube video or short
          </p>
          <HowToSteps steps={steps} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-white">Save YouTube Videos in High Definition</h2>
          <p>
            Whether you want to download educational lectures, documentary films, gaming highlights, or YouTube
            Shorts for offline viewing, our <strong className="text-white">YouTube to MP4 downloader</strong> gives
            you direct access to high-definition video files.
          </p>
          <p>
            You don&apos;t need to register an account or install browser plugins that slow down your computer.
            Just copy the YouTube link, paste it into our tool, and download your MP4 video in seconds.
          </p>
          <h3 className="text-xl font-semibold text-white">Download YouTube Shorts Instantly</h3>
          <p>
            YouTube Shorts are vertical videos that millions of users enjoy every day. Our tool allows you to save
            any YouTube Short in full resolution without watermarks, perfect for archiving and offline enjoyment.
          </p>
          <p>
            Looking for audio only? Try our{" "}
            <a href="/youtube-to-mp3" className="text-indigo-400 hover:underline">
              YouTube to MP3 Converter
            </a>{" "}
            or extract audio from Facebook and Instagram videos with{" "}
            <a href="/reels-to-mp3" className="text-indigo-400 hover:underline">
              Reels to MP3
            </a>.
          </p>
        </div>
      </section>

      {/* Related Tools */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-6 text-center">More Free Download Tools</h2>
        <RelatedTools currentPath="/youtube-to-mp4" />
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
          Frequently Asked Questions – YouTube to MP4
        </h2>
        <FaqSection faqs={faqs} />
      </section>
    </>
  );
}
