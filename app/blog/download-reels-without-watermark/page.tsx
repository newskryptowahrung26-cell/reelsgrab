import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Download Instagram Reels Without Watermark",
  description: "How to download Instagram Reels without watermark in HD. Instagram adds watermarks to shared videos — here's how to get the clean original file free.",
  keywords: ["download instagram reels without watermark", "instagram reels no watermark", "save reels without watermark", "instagram reel download no watermark"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/download-reels-without-watermark` },
};

const faqs = [
  { q: "Does Instagram add watermarks to downloaded Reels?", a: "Instagram's in-app share/send feature adds a watermark (username + Instagram logo) to Reels. However, using a third-party tool like ReelsGrab, you can download the original file without any watermark." },
  { q: "Is it legal to remove the Instagram watermark from a Reel?", a: "For your own Reels, yes — you can download them without watermark freely. For other people's Reels, you should only download for personal use and should not remove watermarks that the creator intentionally added." },
  { q: "What's the best way to download Instagram Reels without watermark in HD?", a: "ReelsGrab is the best free option — paste the Instagram Reel URL and get HD 1080p without watermark instantly. No login required." },
];

export default function DownloadWithoutWatermarkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Download Reels Without Watermark", url: "/blog/download-reels-without-watermark" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav className="flex mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
            <li><a href="/blog" className="hover:text-slate-300">Blog</a></li><li>/</li>
            <li className="text-slate-300">Without Watermark</li>
          </ol>
        </nav>
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-medium">Guide</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
          How to Download Instagram Reels <span className="gradient-text">Without Watermark</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-10">
          When you share an Instagram Reel using the in-app share button, Instagram automatically adds a watermark containing your username and the Instagram logo.
          Here&apos;s how to get the clean, watermark-free original file.
        </p>

        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-6 mb-12">
          <h2 className="text-xl font-bold text-white">Why Does Instagram Add Watermarks?</h2>
          <p>
            Instagram adds watermarks to Reels when you use the <em>&quot;Send to&quot;</em> or <em>&quot;Share to&quot;</em> options inside the app.
            This is done to promote the platform and the original creator. However, the raw video file on Instagram&apos;s CDN
            servers does NOT have a watermark — it&apos;s added digitally during the share process.
          </p>

          <h2 className="text-xl font-bold text-white">Method 1: Use ReelsGrab (Best — Instant &amp; Free)</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-400">
            <li>Open Instagram and find the Reel you want.</li>
            <li>Tap the three-dot (···) menu → <strong className="text-white">Copy Link</strong>.</li>
            <li>Go to <a href="/instagram-reels-download" className="text-indigo-400 hover:underline">ReelsGrab Instagram Reels Downloader</a>.</li>
            <li>Paste the URL and click <strong className="text-white">Download Now</strong>.</li>
            <li>Select <strong className="text-white">HD 1080p (No Watermark)</strong>.</li>
          </ol>
          <p>
            ReelsGrab fetches the original video file directly from Instagram&apos;s CDN — <strong className="text-white">no watermark, full HD, original audio</strong>.
          </p>

          <h2 className="text-xl font-bold text-white">Method 2: Screen Recording (Low Quality)</h2>
          <p>
            You can screen record a Reel playing in full screen, but this produces lower quality video,
            may include UI elements or notifications, and still captures any on-screen watermarks from the player.
            Not recommended — use ReelsGrab instead.
          </p>

          <h2 className="text-xl font-bold text-white">How to Download YOUR OWN Instagram Reels Without Watermark</h2>
          <p>
            For your own Reels: go to your Reel → tap the three-dot menu → <strong className="text-white">Save</strong> or{" "}
            <strong className="text-white">Save to Device</strong>. This saves without watermark.
            Alternatively, use ReelsGrab for the highest quality version.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        <div className="p-5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-center">
          <p className="text-white font-semibold mb-3">Download Reels Without Watermark Now — Free</p>
          <a href="/instagram-reels-download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all">
            Download Without Watermark →
          </a>
        </div>
      </article>
    </>
  );
}
