import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for ReelsGrab. Understand acceptable use, intellectual property policies, fair usage guidelines, and service conditions.",
  alternates: { canonical: `${SITE_CONFIG.url}/terms-of-use` },
  openGraph: {
    title: "Terms of Use | ReelsGrab",
    description:
      "Read the Terms of Use for ReelsGrab. Understand acceptable use, intellectual property policies, fair usage guidelines, and service conditions.",
    url: `${SITE_CONFIG.url}/terms-of-use`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
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

        <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          In no event shall {SITE_CONFIG.name}, its creators, affiliates, or service providers be liable for any indirect,
          punitive, incidental, special, consequential, or exemplary damages arising out of or in connection with your use
          or inability to use the service.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">6. User Representations &amp; Warranties</h2>
        <p>
          By submitting any URL to our service, you represent and warrant that:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You are the creator, copyright owner, or authorized licensee of the media content, or you are exercising recognized fair use rights.</li>
          <li>Your download and subsequent use of the media content will not violate any applicable local, state, national, or international law.</li>
          <li>You will not use automated scripts, bots, or scrapers to overwhelm our server resources or disrupt service availability for other users.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Fair Usage &amp; Rate Limiting</h2>
        <p>
          To maintain high-speed service for all visitors worldwide, we employ automated rate limiting on high-frequency requests.
          Excessive or abusive download attempts originating from a single IP address may be temporarily throttled.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Modifications to Terms</h2>
        <p>
          We reserve the right to revise or modify these Terms of Use at any time. Continued use of the website following
          any modifications constitutes your acknowledgment and acceptance of the updated terms.
          For privacy details, please consult our <a href="/privacy-policy" className="text-indigo-400 hover:underline">Privacy Policy</a>,
          or submit inquiries via our <a href="/contact" className="text-indigo-400 hover:underline">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
