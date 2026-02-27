import type { Metadata } from "next";
import { CategoryTab } from "./CategoryTab";

export const metadata: Metadata = {
  title: "Blog — Cheetah POS | Retail Insights for African Businesses",
  description:
    "Practical guides, retail strategies, and business tips tailored for Nigerian and African SMEs. Learn how to grow faster with Cheetah POS.",
  keywords: [
    "cheetah POS blog",
    "retail tips Nigeria",
    "inventory management Africa",
    "SME growth strategies",
    "point of sale Nigeria",
  ],
  openGraph: {
    title: "Blog — Cheetah POS",
    description:
      "Retail insights, growth tactics, and business guides for African SMEs.",
    type: "website",
    url: "https://usecheetah.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main style={{ background: "#052315", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── HERO ─────────────────────────────── */}
      <section
        style={{
          padding: "110px 24px 72px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="grid-pattern"
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(178,217,59,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow tag */}
          <div
            className="section-tag"
            style={{ display: "inline-flex", marginBottom: "20px" }}
          >
            <span className="dot" />
            Cheetah Insights
          </div>

          <h1
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              color: "#fdfdfd",
              maxWidth: "800px",
              margin: "0 auto 20px",
            }}
          >
            Learn how real businesses{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reach their goals
            </span>{" "}
            with Cheetah.
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "rgba(253,253,253,0.5)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Practical guides, retail strategy, and growth tactics — built for
            Nigerian and African SMEs who mean business.
          </p>
        </div>
      </section>

      {/* ─── BLOG GRID ────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 120px",
        }}
      >
        <CategoryTab />
      </section>
    </main>
  );
}
