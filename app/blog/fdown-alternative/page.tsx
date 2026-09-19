import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Best FDown Alternative – When FDown.net Isn't Working",
  description: "FDown.net not working? Here are the best FDown alternatives for downloading Facebook videos and Reels in HD — always online, no ads, with audio.",
  keywords: ["fdown alternative", "fdown not working", "fdown.net alternative", "fdown alternative site", "alternative to fdown", "facebook video downloader alternative to fdown"],
  alternates: { canonical: `${SITE_CONFIG.url}/blog/fdown-alternative` },
};

const faqs = [
  { q: "Why is FDown.net not working?", a: "FDown.net frequently goes down because Facebook regularly changes their video URL structure and token validation. When Facebook updates their API, FDown breaks until they patch it. ReelsGrab updates faster and has more redundancy." },
  { q: "What's the best FDown alternative?", a: "ReelsGrab is the best FDown alternative — always online, HD 1080p downloads, full audio, no aggressive ads, and works for both Facebook videos and Instagram Reels." },
  { q: "Does FDown have a lot of ads?", a: "Yes, FDown.net (80M+ visits/month) has heavy popunder ad networks that open unwanted sites. ReelsGrab uses clean, non-intrusive display ads only." },
  { q: "Does ReelsGrab work for all the same videos as FDown?", a: "Yes — ReelsGrab downloads Facebook videos, Facebook Reels, Facebook Watch videos, and Instagram Reels. Everything FDown does plus more features like MP3 extraction and private video downloads." },
];

const alternatives = [
  { name: "ReelsGrab ✨", url: "/", pro: "✅ No ads spam, always online, HD+MP3, IG+FB both", con: "New site — building authority" },
  { name: "FDownloader.net", url: "#", pro: "✅ Established, large user base, multilingual", con: "❌ Heavy ad load, sometimes muted downloads" },
  { name: "SaveFrom.net", url: "#", pro: "✅ Very established, many mirrors (en1, en-5)", con: "❌ ISP blocked in some countries, popup ads" },
  { name: "ClipSave.net", url: "#", pro: "✅ Clean interface, multilingual", con: "⚠️ Fewer features, no MP3 tool" },
];

export default function FDownAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "FDown Alternative", url: "/blog/fdown-alternative" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(faqs)} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav className="flex mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><a href="/" className="hover:text-slate-300">Home</a></li><li>/</li>
            <li><a href="/blog" className="hover:text-slate-300">Blog</a></li><li>/</li>
            <li className="text-slate-300">FDown Alternative</li>
          </ol>
        </nav>
        <span className="px-2.5 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs font-medium">Alternative</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
          Best <span className="gradient-text">FDown Alternative</span> – When FDown.net Isn&apos;t Working
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-10">
          FDown.net is one of the biggest Facebook video downloaders with 80M+ monthly visits.
          But it goes down frequently when Facebook updates their API, and its heavy ad load makes it frustrating to use.
          Here are the best FDown alternatives that always work.
        </p>

        <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-4 mb-12">
          <h2 className="text-xl font-bold text-white">Why FDown.net Goes Down</h2>
          <p>
            FDown.net works by extracting video download URLs from Facebook&apos;s CDN.
            Facebook regularly updates their <strong className="text-white">token validation system</strong> and{" "}
            <strong className="text-white">video URL structure</strong> to prevent scraping.
            When this happens, all FDown servers break until they manually patch the extraction logic.
          </p>
          <p>
            ReelsGrab uses multiple fallback extraction methods and updates automatically, so you&apos;re never stuck waiting.
          </p>

          <h2 className="text-xl font-bold text-white">Best FDown Alternatives Compared</h2>
        </div>

        <div className="overflow-x-auto mb-12 rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800">
                <th className="text-left px-4 py-3 text-slate-300 font-semibold">Tool</th>
                <th className="text-left px-4 py-3 text-slate-300 font-semibold">Pros</th>
                <th className="text-left px-4 py-3 text-slate-300 font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              {alternatives.map((a, i) => (
                <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/30"}`}>
                  <td className="px-4 py-3 text-white font-medium">{a.name}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{a.pro}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{a.con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">FAQ</h2>
          <FaqSection faqs={faqs} />
        </div>

        <div className="p-5 rounded-xl bg-indigo-600/10 border border-indigo-500/30 text-center">
          <p className="text-white font-semibold mb-1">Try the Best FDown Alternative — Always Online</p>
          <p className="text-slate-400 text-xs mb-4">Facebook video + Reels + Instagram. HD + MP3. No popups.</p>
          <a href="/facebook-video-download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all">
            Download Facebook Video Free →
          </a>
        </div>
      </article>
    </>
  );
}
