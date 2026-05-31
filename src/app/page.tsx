import { Metadata } from "next";
import Script from "next/script";
import { Introduction } from "@/components/Introduction";
import { CoreInfrastructure } from "@/components/CoreInfrastructure";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { News } from "@/components/News";
import { GetStarted } from "@/components/GetStarted";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Cheetah — Sell smarter. Grow faster with Africa's No.1 Retail OS",
  description: "Cheetah is an AI-powered retail operating system offering POS, inventory management, bookkeeping, and demand forecasting for supermarkets, pharmacies, and restaurants in Nigeria, Kenya, South Africa, and Ghana.",
  alternates: {
    canonical: "https://usecheetah.com",
  },
  openGraph: {
    title: "Cheetah — AI-Powered Retail Inventory & POS Platform",
    description: "The intelligent way to run retail businesses in Lagos, Nairobi, Johannesburg, and Accra. Sync offline, prevent cashier fraud, and use AI to grow sales.",
    images: [{
      url: "https://usecheetah.com/images/og-home.png",
      width: 1200,
      height: 630,
      alt: "Cheetah Retail OS - AI Powered POS",
    }],
    url: "https://usecheetah.com",
    siteName: "Cheetah POS",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetah — Africa's No.1 AI-Powered Retail OS",
    description: "Empowering African independent grocers, supermarkets, and pharmacies with zero setup fees, true offline synchronization, and fraud audits.",
    images: ["https://usecheetah.com/images/og-home.png"],
  },
  other: {
    "geo.region": "NG-LA, KE-110, ZA-GP, GH-AA",
    "geo.placename": "Lagos, Nairobi, Johannesburg, Accra",
    "geo.position": "6.5244;3.3792; -1.2921;36.8219; -26.2041;28.0473; 5.6037;-0.1870",
    "ICBM": "6.5244, 3.3792; -1.2921, 36.8219; -26.2041, 28.0473; 5.6037, -0.1870"
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
      <ScrollReveal delay={150}>
        <CoreInfrastructure />
      </ScrollReveal>

      {/* 4. Stats — 80% less stockouts, +35% sales, 10x ROI */}
      <ScrollReveal delay={150}>
        <Benefits />
      </ScrollReveal>

      {/* 5. Platform Features Bento Grid */}
      <ScrollReveal delay={150}>
        <Features />
      </ScrollReveal>

      {/* 7. Blog / Insights */}
      <ScrollReveal delay={150}>
        <News />
      </ScrollReveal>

      {/* 8. Final CTA */}
      <ScrollReveal delay={150}>
        <GetStarted />
      </ScrollReveal>
    </main>
  );
}
