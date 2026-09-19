import { SITE_CONFIG } from "./siteConfig";

// ─── FAQ Schema ────────────────────────────────────────────
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    }),
  };
}

// ─── HowTo Schema ──────────────────────────────────────────
export function howToSchema(
  name: string,
  description: string,
  steps: { title?: string; name?: string; description?: string; text?: string }[]
) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name,
      description,
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title || s.name || `Step ${i + 1}`,
        text: s.description || s.text || "",
      })),
    }),
  };
}

// ─── SoftwareApplication Schema ────────────────────────────
export function softwareSchema(
  name: string,
  description: string,
  url: string,
  rating = "4.8",
  ratingCount = "24850"
) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name,
      description,
      url,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating,
        ratingCount,
        bestRating: "5",
        worstRating: "1",
      },
    }),
  };
}

// ─── Breadcrumb Schema ─────────────────────────────────────
export function breadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_CONFIG.url}${c.url}`,
      })),
    }),
  };
}

// ─── WebSite Schema (for homepage) ─────────────────────────
export function websiteSchema() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    }),
  };
}
