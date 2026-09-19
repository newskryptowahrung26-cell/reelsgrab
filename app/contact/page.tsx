import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact Us – ${SITE_CONFIG.name}`,
  description: `Get in touch with the ${SITE_CONFIG.name} support and feedback team.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Contact Us</h1>
      <p className="text-slate-300 text-sm leading-relaxed mb-8">
        Have questions, feedback, or need help with a download? We&apos;d love to hear from you.
        Please reach out through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-4 text-indigo-400">
            <Mail size={24} />
          </div>
          <h2 className="text-base font-semibold text-white mb-2">Email Support</h2>
          <p className="text-xs text-slate-400 mb-3">For general inquiries and feedback</p>
          <a href={`mailto:support@${SITE_CONFIG.domain}`} className="text-sm font-medium text-indigo-400 hover:underline">
            support@{SITE_CONFIG.domain}
          </a>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-4 text-indigo-400">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-base font-semibold text-white mb-2">DMCA &amp; Copyright</h2>
          <p className="text-xs text-slate-400 mb-3">For copyright inquiries and takedowns</p>
          <a href={`mailto:dmca@${SITE_CONFIG.domain}`} className="text-sm font-medium text-indigo-400 hover:underline">
            dmca@{SITE_CONFIG.domain}
          </a>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-4 text-indigo-400">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-base font-semibold text-white mb-2">Business &amp; Ads</h2>
          <p className="text-xs text-slate-400 mb-3">For advertising and partnership inquiries</p>
          <a href={`mailto:contact@${SITE_CONFIG.domain}`} className="text-sm font-medium text-indigo-400 hover:underline">
            contact@{SITE_CONFIG.domain}
          </a>
        </div>
      </div>
    </div>
  );
}
