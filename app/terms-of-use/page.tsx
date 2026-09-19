import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms and conditions for using ${SITE_CONFIG.name}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/terms-of-use` },
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Terms of Use</h1>
      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
        <p>Last updated: Recently</p>
        <p>
          By accessing and using {SITE_CONFIG.name}, you agree to be bound by these Terms of Use.
          If you do not agree with any part of these terms, please discontinue use of our site.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Use License &amp; Permitted Use</h2>
        <p>
          {SITE_CONFIG.name} is provided for personal, non-commercial use only. You agree to use our service
          only to download media that you own, or have explicit permission and copyright authorization from the original owner to download.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Intellectual Property &amp; Third-Party Rights</h2>
        <p>
          We do not host or claim ownership over any video or audio files processed through our platform.
          All trademarks, logos, and copyrights for Instagram and Facebook belong to their respective owners (Meta Platforms, Inc.).
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Prohibited Activities</h2>
        <p>
          You agree not to use this service for copyright infringement, commercial distribution of third-party content,
          automated scraping/abuse of our infrastructure, or any illegal purposes.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Disclaimer of Warranties</h2>
        <p>
          The service is provided &quot;as is&quot; without warranties of any kind, express or implied.
          We do not guarantee uninterrupted or error-free operation.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Modifications</h2>
        <p>
          We reserve the right to revise or modify these Terms of Use at any time without prior notice.
        </p>
      </div>
    </div>
  );
}
