import { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Download Guides & Tutorials",
  description: "Expert guides on how to download Instagram Reels, fix no-sound issues, download without watermark, iPhone tips, and find the best alternative tools.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

const posts = [
  { title: "How to Download Instagram Reels (Complete Guide)", href: "/blog/how-to-download-instagram-reels", category: "Guide", description: "Step-by-step guide to download any Instagram Reel for free in HD. Works on iPhone, Android, and PC." },
  { title: "How to Download Instagram Reels Without Watermark", href: "/blog/download-reels-without-watermark", category: "Guide", description: "Instagram adds watermarks to in-app saved Reels. Here's how to get clean, watermark-free downloads." },
  { title: "Why Do Downloaded Instagram Reels Have No Sound? (Fixed!)", href: "/blog/fix-reels-no-sound", category: "Fix", description: "Downloaded Reels are muted or silent? Here's exactly why it happens and how to fix it permanently." },
  { title: "How to Download Instagram Reels on iPhone", href: "/blog/download-reels-iphone", category: "iPhone", description: "Complete iPhone guide: save Instagram Reels directly to Camera Roll without any app install." },
  { title: "Best SnapSave Alternative: No Ads, No Popups", href: "/blog/snapsave-alternative", category: "Alternative", description: "Tired of SnapSave's aggressive ads and popups? Here are the best SnapSave alternatives." },
  { title: "Best FDown Alternative: When FDown.net Isn't Working", href: "/blog/fdown-alternative", category: "Alternative", description: "FDown not working? Here are the best FDown alternatives that always work, even when FB changes APIs." },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-indigo-500/15 text-indigo-300",
  Fix: "bg-red-500/15 text-red-300",
  iPhone: "bg-blue-500/15 text-blue-300",
  Alternative: "bg-yellow-500/15 text-yellow-300",
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Blog &amp; <span className="gradient-text">Download Guides</span>
          </h1>
          <p className="text-slate-400 text-base">
            Expert guides to download Instagram &amp; Facebook Reels: fix issues, compare tools, and get the most out of your downloads.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="card-hover block p-6 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400">{post.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
              <p className="mt-3 text-indigo-400 text-sm font-medium">Read More →</p>
            </Link>
          ))}
        </div>

        {/* Educational Overview & Best Practices */}
        <div className="mt-16 border-t border-slate-800 pt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Mastering Social Media Video &amp; Audio Downloads</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Social platforms like Instagram, Facebook, and YouTube deliver billions of short-form videos daily.
              However, saving these clips locally for offline viewing, creative remixing, or archiving can often be challenging.
              In-app &quot;Save&quot; features merely bookmark videos within the app, and native sharing buttons frequently stamp large
              watermarks across your screen or omit background audio tracks due to licensing constraints.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our comprehensive tutorials and troubleshooting articles are written to help you navigate these technical hurdles.
              Whether you are an iOS user wanting to save clips directly to your Camera Roll, a content creator needing
              crisp 320kbps MP3 audio stems, or someone looking for reliable alternatives to ad-heavy downloaders, our guides
              provide clear, actionable instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Watermark-Free Clarity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Learn how direct media extraction allows you to obtain clean, original MP4 files without intrusive overlay logos or creator tags.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Full Audio &amp; Music</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Understand DASH video/audio stream separation and discover how our tools merge audio tracks so your downloads never lose sound.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Multi-Platform Tools</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamlessly convert videos on iPhone, Android, Mac, and Windows PC without downloading shady executable software.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-3">Popular Free Download Tools</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/instagram-reels-download" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                Instagram Reels Downloader
              </Link>
              <Link href="/facebook-reels-download" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                Facebook Reels Downloader
              </Link>
              <Link href="/facebook-video-download" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                Facebook Video Downloader
              </Link>
              <Link href="/youtube-to-mp3" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                YouTube to MP3 Converter
              </Link>
              <Link href="/youtube-to-mp4" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                YouTube to MP4 Downloader
              </Link>
              <Link href="/reels-to-mp3" className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors">
                Reels to MP3 Extractor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
