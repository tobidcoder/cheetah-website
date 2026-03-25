import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pricing Plans — Scalable Retail Infrastructure for Every Business",
  description: "Explore Cheetah's transparent pricing. From Free Forever for new businesses to Enterprise-grade scaling. Get AI-powered inventory and fraud protection today.",
  openGraph: {
    title: "Pricing — Cheetah POS",
    description: "Start your 14-day Pro trial. No credit card required. Choose the plan that fits your ambition.",
    images: [{ url: "/images/og-pricing.png" }],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Cheetah POS Subscription Plans",
  "description": "Retail operating system subscription plans with AI forecasting and fraud protection.",
  "brand": {
    "@type": "Brand",
    "name": "Cheetah"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "priceCurrency": "NGN",
      "price": "20000.00",
      "description": "The fastest growing businesses run on Pro. 9 staff, 5 branches."
    },
    {
        "@type": "Offer",
        "name": "Premium Plan",
        "priceCurrency": "NGN",
        "price": "50000.00",
        "description": "The elite retail setup. Unlimited branches and premium support."
    }
  ]
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
      "name": "Pricing",
      "item": "https://usecheetah.com/pricing"
    }
  ]
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="pricing-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="pricing-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
