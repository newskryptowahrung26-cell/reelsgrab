import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";

const base = SITE_CONFIG.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/instagram-reels-download", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/facebook-reels-download", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/facebook-video-download", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/facebook-private-video-download", priority: 0.90, changeFrequency: "weekly" as const },
    { url: "/reels-to-mp3", priority: 0.90, changeFrequency: "weekly" as const },
    { url: "/bulk-reels-downloader", priority: 0.85, changeFrequency: "weekly" as const },
    // Spanish
    { url: "/es/descargar-videos-facebook", priority: 0.90, changeFrequency: "weekly" as const },
    { url: "/es/descargar-reels-instagram", priority: 0.90, changeFrequency: "weekly" as const },
    { url: "/es/descargar-reels-facebook", priority: 0.85, changeFrequency: "weekly" as const },
    // Portuguese
    { url: "/pt/baixar-video-facebook", priority: 0.90, changeFrequency: "weekly" as const },
    { url: "/pt/baixar-reels-instagram", priority: 0.90, changeFrequency: "weekly" as const },
    // Blog
    { url: "/blog", priority: 0.80, changeFrequency: "daily" as const },
    { url: "/blog/how-to-download-instagram-reels", priority: 0.80, changeFrequency: "monthly" as const },
    { url: "/blog/download-reels-without-watermark", priority: 0.80, changeFrequency: "monthly" as const },
    { url: "/blog/fix-reels-no-sound", priority: 0.80, changeFrequency: "monthly" as const },
    { url: "/blog/download-reels-iphone", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/blog/snapsave-alternative", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/blog/fdown-alternative", priority: 0.75, changeFrequency: "monthly" as const },
    // Policy
    { url: "/privacy-policy", priority: 0.30, changeFrequency: "yearly" as const },
    { url: "/terms-of-use", priority: 0.30, changeFrequency: "yearly" as const },
    { url: "/about", priority: 0.40, changeFrequency: "yearly" as const },
    { url: "/contact", priority: 0.40, changeFrequency: "yearly" as const },
    { url: "/dmca", priority: 0.30, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
