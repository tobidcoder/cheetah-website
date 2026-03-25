import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Partner Program — Build Recurring Wealth with Africa's No.1 Retail OS",
  description: "Join Cheetah's Global Expansion Program. Help retailers digitize their operations and earn 20% recurring commission. Secure your lifetime income today.",
  openGraph: {
    title: "Global Partner Program — Cheetah",
    description: "Empower retailers with AI-driven inventory and POS. Build recurring wealth as a strategic Cheetah partner.",
    images: [{ url: "/images/og-partners.png" }],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@id": "https://usecheetah.com/partners#program",
  "@type": "Service",
  "name": "Cheetah Partner Program",
  "description": "Recurring commission-based partnership program for business consultants and software resellers in the retail sector.",
  "provider": {
    "@type": "Organization",
    "name": "Cheetah POS"
  },
  "serviceType": "Affiliate Program",
  "offers": {
    "@type": "Offer",
    "description": "20% recurring commission on merchant subscriptions for 24 months."
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://usecheetah.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Partners",
      "item": "https://usecheetah.com/partners"
    }
  ]
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="partners-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="partners-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
