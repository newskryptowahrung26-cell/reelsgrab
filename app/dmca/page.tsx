import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `DMCA Copyright Policy – ${SITE_CONFIG.name}`,
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
      </div>
    </div>
  );
}
