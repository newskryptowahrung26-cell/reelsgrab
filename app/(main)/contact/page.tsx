import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Mail, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Support & Feedback",
  description:
    "Contact the ReelsGrab team for technical support, feature feedback, partnership inquiries, and copyright assistance. We respond within 24 to 48 hours.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    title: "Contact Support & Feedback | ReelsGrab",
    description:
      "Contact the ReelsGrab team for technical support, feature feedback, partnership inquiries, and copyright assistance. We respond within 24 to 48 hours.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
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

      {/* Support Details & FAQ */}
      <div className="border-t border-slate-800 pt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Support Guidelines &amp; Response Times</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Our engineering and support team reviews every inquiry submitted through our contact channels.
            We strive to respond to all technical support and user feedback requests within 24 to 48 business hours.
            When reporting a broken download or issue with a specific video, please provide the exact social media URL,
            your device type (iPhone, Android, Windows, or Mac), and browser (Chrome, Safari, Firefox, Edge).
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            For urgent copyright notices or intellectual property inquiries, please refer directly to our{" "}
            <a href="/dmca" className="text-indigo-400 hover:underline">DMCA Policy</a> and email our designated
            copyright agent with the necessary documentation for expedited processing.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Why did my video download fail or return an error?</h3>
              <p className="leading-relaxed">
                Download failures usually occur because the source video is set to private, has geographic restrictions,
                or the account owner deleted the post. Ensure the video is public and accessible in an incognito window.
                If the video is public and still fails, social platforms occasionally update their video delivery protocols;
                our servers automatically adapt to these changes within minutes.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Is there any fee or subscription required to use ReelsGrab?</h3>
              <p className="leading-relaxed">
                No, ReelsGrab is 100% free with unlimited downloads. You do not need to register an account, enter payment details,
                or install any third-party browser extensions or mobile applications.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white mb-2">How can I download audio or MP3 from a video?</h3>
              <p className="leading-relaxed">
                You can extract original audio directly using our dedicated{" "}
                <a href="/youtube-to-mp3" className="text-indigo-400 hover:underline">YouTube to MP3</a> converter or our{" "}
                <a href="/reels-to-mp3" className="text-indigo-400 hover:underline">Reels to MP3</a> tool. Both extract clean audio up to 320kbps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
