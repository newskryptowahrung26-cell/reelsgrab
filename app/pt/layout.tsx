import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import BaseLayout from "@/components/BaseLayout";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Baixador Grátis de Reels e Vídeos HD`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Baixe Reels do Instagram, vídeos do Facebook e áudio em alta qualidade grátis.",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE_CONFIG.url}/pt`,
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

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="pt">{children}</BaseLayout>;
}
