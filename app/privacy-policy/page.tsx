import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_CONFIG.name}. Learn how we protect your privacy and handle data.`,
  alternates: { canonical: `${SITE_CONFIG.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
        <p>Last updated: Recently</p>
        <p>
          At {SITE_CONFIG.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we take your privacy seriously.
          This Privacy Policy outlines how we treat information when you use our website and video download services.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">1. No Personal Data Collected</h2>
        <p>
          We do not require user accounts, registration, or logins. You do not need to provide your name,
          email address, password, or social media login credentials to use our tool.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Video URLs and Download Requests</h2>
        <p>
          When you submit a URL from Instagram or Facebook to our service, that URL is processed solely
          to retrieve and deliver the requested video stream directly to your device. We do not store or
          archive the downloaded videos on our servers permanently.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Log Files &amp; Analytics</h2>
        <p>
          Like most standard websites, we may collect standard web log information (such as IP address,
          browser type, referring pages, and timestamp) for server administration, security, and traffic analysis.
          This information is not linked to any personally identifiable information.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies and Advertising</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits
          to our website or other websites. You may opt out of personalized advertising by visiting Google Ads Settings.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have any questions or suggestions regarding our Privacy Policy, please contact us via our{" "}
          <a href="/contact" className="text-indigo-400 hover:underline">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
