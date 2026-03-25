import { Metadata } from "next";
import Script from "next/script";
import { Introduction } from "@/components/Introduction";
import { CoreInfrastructure } from "@/components/CoreInfrastructure";
import { TrustFeatures } from "@/components/TrustFeatures";
import { BusinessControl } from "@/components/BusinessControl";
import { SecuritySection } from "@/components/SecuritySection";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
import { News } from "@/components/News";
import { GetStarted } from "@/components/GetStarted";

export const metadata: Metadata = {
  title: "Cheetah — Sell smarter. Grow faster with Africa's No.1 Retail OS",
  description: "Cheetah is an AI-powered retail operating system offering POS, inventory management, accounting and demand forecasting for supermarkets, pharmacies, and restaurants in Africa.",
  openGraph: {
    title: "Cheetah — AI-Powered Retail Inventory & POS Platform",
    description: "The intelligent way to run your retail business. Sync offline, prevent fraud, and use AI to grow.",
    images: [{ url: "/images/og-home.png" }],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cheetah POS",
  "url": "https://usecheetah.com",
  "logo": "https://usecheetah.com/logo.png",
  "description": "AI-powered retail inventory and POS platform for African businesses.",
  "sameAs": [
    "https://twitter.com/usecheetah",
    "https://linkedin.com/company/usecheetah"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234800CHEETAH",
    "contactType": "customer service",
    "areaServed": "NG",
    "availableLanguage": "en"
  }
};

export default function HomePage() {
  return (
    <main style={{ overflowX: "hidden", background: "#052315" }}>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero — Sell smarter. Grow faster. */}
      <Introduction />

      {/* 1.5 Core Infrastructure — Offline, Sync, AI, Security */}
      <CoreInfrastructure />

      {/* 2. Offline · Smart Sync · AES-256 · Cloud Backup */}
      <TrustFeatures />

      {/* 2.5 Absolute Sovereignty & Business Control */}
      <BusinessControl />

      {/* 3. Fraud Prevention & Real-time Security */}
      <SecuritySection />

      {/* 4. Stats — 80% less stockouts, +35% sales, 10x ROI */}
      <Benefits />

      {/* 5. Platform Features Bento Grid */}
      <Features />

      {/* 6. Testimonials from Nigerian Retailers */}
      <Feedback />

      {/* 7. Blog / Insights */}
      <News />

      {/* 8. Final CTA */}
      <GetStarted />
    </main>
  );
}
