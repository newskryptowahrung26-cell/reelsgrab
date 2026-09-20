import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Free Instagram & Facebook Reels Downloader`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "instagram reels download",
    "facebook reels download",
    "ig reels downloader",
    "facebook video download",
    "reels to mp3",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Free Instagram & Facebook Reels Downloader`,
    description: SITE_CONFIG.description,
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "f-m-dWMBMORQyrhY3BL0tAbVEU3NF_BR9QHbmiVltCU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
