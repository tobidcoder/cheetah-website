import { Introduction } from "@/components/Introduction";
import { TrustFeatures } from "@/components/TrustFeatures";
import { SecuritySection } from "@/components/SecuritySection";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
import { News } from "@/components/News";
import { GetStarted } from "@/components/GetStarted";

export default function HomePage() {
  return (
    <main style={{ overflowX: "hidden", background: "#052315" }}>
      {/* 1. Hero — Sell smarter. Grow faster. */}
      <Introduction />

      {/* 2. Offline · Smart Sync · AES-256 · Cloud Backup */}
      <TrustFeatures />

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
