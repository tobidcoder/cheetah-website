"use client";
import { IconBarChart, IconTarget, IconUsers, IconClipboard, IconCpu } from "@/components/Icons";

const features = [
  {
    title: "Data-Driven Decisions",
    description: "Leverage real-time analytics to make informed business decisions that drive growth and improve profitability.",
    image: "/images/data.png",
    span: "2 / span 2",
    icon: <IconBarChart size={18} />,
    tag: "Analytics",
  },
  {
    title: "Sales Pipeline Tracking",
    description: "Monitor and optimize your sales pipeline with powerful end-to-end visibility.",
    image: "/images/sales.png",
    span: "auto / span 1",
    icon: <IconTarget size={18} />,
    tag: "Sales",
  },
  {
    title: "Customer Management",
    description: "Centralize every customer interaction, preference, and history in one place.",
    image: "/images/customers.png",
    span: "auto / span 1",
    icon: <IconUsers size={18} />,
    tag: "CRM",
  },
  {
    title: "Order History & Trends",
    description: "Deep-dive into your order history and uncover patterns to unlock more revenue.",
    image: "/images/order.png",
    span: "auto / span 1",
    icon: <IconClipboard size={18} />,
    tag: "Orders",
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI to predict future performance and take data-backed decisions proactively.",
    image: "/images/analytics.png",
    span: "auto / span 2",
    icon: <IconCpu size={18} />,
    tag: "AI",
  },
];

export function Features() {
  return (
    <section
      className="section-padding"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="dot" />
          Platform Features
        </div>
        <h2
          style={{
            fontFamily: "Syne, Inter, sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fdfdfd",
            maxWidth: "640px",
            margin: "0 auto 20px",
          }}
        >
          Everything you need to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            optimize operations
          </span>
        </h2>
        <p
          style={{
            color: "rgba(253,253,253,0.55)",
            fontSize: "18px",
            maxWidth: "580px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Manage and streamline operations across multiple locations, sales channels, and employees to improve efficiency and your bottom line.
        </p>
      </div>

      {/* Bento-style Feature Grid */}
      <div
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "80px",
        }}
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="glass-card"
            style={{
              gridColumn: feature.span,
              overflow: "hidden",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              cursor: "default",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-5px)";
              el.style.borderColor = "rgba(178,217,59,0.3)";
              el.style.boxShadow = "0 30px 80px rgba(0,0,0,0.3), 0 0 40px rgba(178,217,59,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "rgba(178,217,59,0.12)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Content */}
            <div style={{ padding: "28px 28px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(178,217,59,0.1)",
                    border: "1px solid rgba(178,217,59,0.2)",
                    borderRadius: "50px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#b2d93b",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {feature.tag}
                </span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  color: "#b2d93b",
                }}>{feature.icon}</div>
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(20px, 2.2vw, 24px)",
                  fontWeight: 700,
                  color: "#fdfdfd",
                  marginBottom: "10px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(253,253,253,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div style={{ marginTop: "auto", overflow: "hidden", maxHeight: "260px" }}>
              <img
                src={feature.image}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* POS Section */}
      <div
        style={{
          borderRadius: "28px",
          background: "linear-gradient(135deg, rgba(178,217,59,0.08) 0%, rgba(10,61,36,0.5) 100%)",
          border: "1px solid rgba(178,217,59,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(178,217,59,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ padding: "clamp(40px, 8vw, 64px) 24px 40px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
            <span className="dot" />
            Point of Sale
          </div>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(26px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Tailored POS for your unique store
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "rgba(253,253,253,0.6)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Free to get started with Cheetah Point of Sale. No setup fees, Get started in minutes.
          </p>
          <div 
            className="mobile-stack"
            style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" className="mobile-full-width">
              <button className="btn-primary" style={{ fontSize: "16px", padding: "15px 36px", width: "100%" }}>
                Start for Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" className="mobile-full-width">
              <button className="btn-secondary" style={{ fontSize: "16px", padding: "15px 36px", width: "100%" }}>
                Schedule Demo
              </button>
            </a>
          </div>
        </div>
        <div style={{ overflow: "hidden", maxHeight: "500px" }}>
          <img
            src="/images/pos.png"
            alt="Cheetah POS System"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .glass-card {
            grid-column: auto !important;
          }
          .mobile-stack {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .mobile-full-width {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
