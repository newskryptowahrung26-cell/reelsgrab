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

        <h2 className="text-xl font-bold text-white mt-8 mb-4">5. GDPR Compliance &amp; European Privacy Rights</h2>
        <p>
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR).
          Because {SITE_CONFIG.name} does not collect, store, or process personally identifiable information (PII) or require account registration,
          we do not maintain user profiles, personal databases, or identifiable tracking records.
          To the extent that any technical telemetry is collected via cookies or web servers, you have the right to request access, rectification,
          or deletion of any associated data by contacting our team.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">6. California Consumer Privacy Act (CCPA)</h2>
        <p>
          Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information.
          We do not sell, rent, or trade personal data to third parties. We do not monetize personal user data or collect sensitive personal information.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Children&apos;s Online Privacy (COPPA)</h2>
        <p>
          Our services are not directed to individuals under the age of 13. We do not knowingly collect or solicit personal information
          from children under 13. If we discover that personal information from a child under 13 has been collected,
          we will promptly take steps to delete that information from our servers.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Data Security &amp; Encryption</h2>
        <p>
          All communications between your web browser and our servers are encrypted using modern Transport Layer Security (TLS 1.3).
          We implement standard security protocols to safeguard against unauthorized access, alteration, disclosure, or destruction of technical data.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Contact &amp; Questions</h2>
        <p>
          If you have questions regarding this Privacy Policy or our data handling practices, please review our{" "}
          <a href="/terms-of-use" className="text-indigo-400 hover:underline">Terms of Use</a> or reach out through our{" "}
          <a href="/contact" className="text-indigo-400 hover:underline">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
