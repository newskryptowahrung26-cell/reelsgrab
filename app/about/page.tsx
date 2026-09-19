import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `About Us – ${SITE_CONFIG.name}`,
  description: `Learn about ${SITE_CONFIG.name}, our mission, and our free media downloading tools.`,
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">About {SITE_CONFIG.name}</h1>
      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
        <p>
          Welcome to <strong className="text-white">{SITE_CONFIG.name}</strong>, your premier online destination for downloading
          Instagram Reels, Facebook Reels, and Facebook Videos in high definition without watermarks.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to provide users with a clean, fast, and completely safe tool to save and archive their favorite
          social media moments. Unlike competitors who bombard users with aggressive popunders and misleading download buttons,
          we are committed to offering an intuitive and privacy-respecting user experience.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">What Makes Us Different</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-white">Zero Watermarks:</strong> Preserve original crisp video quality.</li>
          <li><strong className="text-white">Full Audio Support:</strong> We resolve DASH/HLS audio separation issues so you always get original sound.</li>
          <li><strong className="text-white">No Registration Required:</strong> Completely anonymous and free.</li>
          <li><strong className="text-white">Multilingual Accessibility:</strong> Available in English, Spanish, and Portuguese.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Disclaimer</h2>
        <p>
          {SITE_CONFIG.name} is an independent utility and is not affiliated, endorsed, or partnered with Meta Platforms, Inc.,
          Instagram, or Facebook.
        </p>
      </div>
    </div>
  );
}
