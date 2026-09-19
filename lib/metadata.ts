import { Metadata } from "next";
import { SITE_CONFIG } from "./siteConfig";

interface MetaParams {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  alternates?: { lang: string; url: string }[];
}

export function buildMetadata({
  title,
  description,
  slug,
  keywords = [],
  ogImage = "/og-default.png",
  noIndex = false,
  alternates = [],
}: MetaParams): Metadata {
  const url = `${SITE_CONFIG.url}/${slug}`.replace(/\/\/$/, "/");

  const langs: Record<string, string> = {};
  alternates.forEach(({ lang, url: altUrl }) => {
    langs[lang] = altUrl;
  });

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_CONFIG.name }],
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: url,
      languages: langs,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [`${SITE_CONFIG.url}${ogImage}`],
      creator: SITE_CONFIG.twitterHandle,
    },
  };
}
