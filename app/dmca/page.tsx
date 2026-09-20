import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "DMCA Copyright Policy",
  description: `DMCA and Copyright compliance information for ${SITE_CONFIG.name}.`,
  alternates: { canonical: `${SITE_CONFIG.url}/dmca` },
};

export default function DmcaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">DMCA Copyright Policy</h1>
      <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
        <p>
          {SITE_CONFIG.name} respects the intellectual property rights of others and complies with the provisions of the
          Digital Millennium Copyright Act (DMCA).
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Service Nature</h2>
        <p>
          {SITE_CONFIG.name} is a client-side tool and search utility. We do not host, store, or archive any copyrighted
          video or audio files on our servers. All media files are streamed directly from Instagram or Facebook CDN servers
          to the user&apos;s device.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Notice of Infringement</h2>
        <p>
          If you believe that copyrighted material belonging to you is being inappropriately accessed or utilized via our service,
          please send a formal notification containing:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Identification of the copyrighted work claimed to have been infringed.</li>
          <li>Identification of the specific URL on our service or the social media link in question.</li>
          <li>Your contact information (name, address, telephone number, and email address).</li>
          <li>A statement made under penalty of perjury that the information in the notification is accurate and you are authorized to act on behalf of the copyright owner.</li>
          <li>A physical or electronic signature of the authorized person.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Designated DMCA Agent</h2>
        <p>
          Please send all notices to:{" "}
          <a href={`mailto:dmca@${SITE_CONFIG.domain}`} className="text-indigo-400 hover:underline">
            dmca@{SITE_CONFIG.domain}
          </a>
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Counter-Notification Procedure</h2>
        <p>
          If you believe that access to your content was disabled or removed as a result of a mistake or misidentification,
          you may file a written counter-notification with our designated agent under 17 U.S.C. § 512(g).
          To be effective, the counter-notification must be in writing and include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Your physical or electronic signature.</li>
          <li>Identification of the material that has been removed or to which access has been disabled.</li>
          <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
          <li>Your name, address, telephone number, and email address, along with consent to the jurisdiction of the appropriate federal court.</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Repeat Infringer Policy</h2>
        <p>
          In accordance with the DMCA and other applicable intellectual property laws, {SITE_CONFIG.name} maintains a strict
          policy that provides for the termination, in appropriate circumstances, of access privileges for users or IP addresses
          that repeatedly infringe the copyrights of others.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4">Fair Use &amp; Educational Purpose</h2>
        <p>
          We encourage copyright holders to recognize that fair use exceptions (including criticism, comment, news reporting,
          teaching, scholarship, and research) are legitimate rights recognized under Section 107 of the US Copyright Act.
          If you have legal or compliance questions regarding our terms, please review our{" "}
          <a href="/terms-of-use" className="text-indigo-400 hover:underline">Terms of Use</a> or reach out through our{" "}
          <a href="/contact" className="text-indigo-400 hover:underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
