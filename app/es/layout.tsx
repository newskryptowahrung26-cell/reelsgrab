import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Descargador Gratis de Reels y Videos HD`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Descarga Reels de Instagram, videos de Facebook y audios en alta calidad gratis.",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_CONFIG.url}/es`,
    siteName: SITE_CONFIG.name,
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
};

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="es">{children}</BaseLayout>;
}
