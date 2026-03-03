"use client";
import { IconBox, IconTrendingUp, IconDollarSign, IconZap } from "@/components/Icons";

const stats = [
  {
    value: "80%",
    label: "Less Stockouts",
    description: "Guarantee product availability through AI-powered forecasting.",
    icon: <IconBox size={24} />,
    color: "#b2d93b",
  },
  {
    value: "20%",
    label: "Sell-Through Increase",
    description: "Minimize overstock while maximizing full-price sales.",
    icon: <IconTrendingUp size={24} />,
    color: "#8fb22e",
  },
  {
    value: "+35%",
    label: "Revenue Growth",
    description: "Increase revenue by seizing more sales opportunities.",
    icon: <IconDollarSign size={24} />,
    color: "#b2d93b",
  },
  {
    value: "10x",
    label: "Return on Investment",
    description: "Revamp your inventory strategy to achieve outstanding ROI.",
    icon: <IconZap size={24} />,
    color: "#c8e85f",
  },
];

const featuresList = [
  {
    title: "Just in Time",
    subtitle: "Smart inventory reordering",
    description:
      "Our solution provides actionable insights to optimize operations by minimizing on-hand inventory and accurately forecasting reordering needs. Never over-order or under-order again.",
    image: "/images/hourly-patterns.png",
    badge: "Forecasting",
  },
  {
    title: "Never Out of Stock",
    subtitle: "NooS technology",
    description:
      "We assist brands maintaining optimal inventory levels to align with actual customer demand and prevent stockouts. Real-time alerts keep you one step ahead.",
    image: "/images/customer-insights.png",
    badge: "Availability",
  },
];

export function Benefits() {
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
          Proven Results
        </div>
        <h2
          style={{
            fontFamily: "Syne, Inter, sans-serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fdfdfd",
            maxWidth: "700px",
            margin: "0 auto 20px",
          }}
        >
          Data science meets{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            retail excellence
          </span>
        </h2>
        <p
          style={{
            color: "rgba(253,253,253,0.55)",
            fontSize: "18px",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Leverage AI-driven forecasting to transform precise predictions into actionable insights your team can act on daily.
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px",
          marginBottom: "80px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card"
            style={{
              padding: "28px 20px",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-6px)";
              el.style.borderColor = "rgba(178,217,59,0.35)";
              el.style.boxShadow = "0 20px 60px rgba(178,217,59,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "rgba(178,217,59,0.12)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: `${stat.color}18`,
              border: `1px solid ${stat.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: stat.color,
              marginBottom: "16px",
            }}>{stat.icon}</div>
            <div
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                color: stat.color,
                letterSpacing: "-0.04em",
                fontFamily: "Syne, sans-serif",
                lineHeight: 1,
                marginBottom: "10px",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#fdfdfd",
                marginBottom: "8px",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(253,253,253,0.5)",
                lineHeight: 1.5,
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="gradient-divider" style={{ marginBottom: "80px" }} />

      {/* Features Pair Restructured */}
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        {featuresList.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={feature.title}
              className={`feature-row`}
              style={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "clamp(40px, 6vw, 80px)",
              }}
            >
              {/* Content */}
              <div
                className="feature-content"
                style={{
                  flex: "1",
                  minWidth: "300px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(178,217,59,0.12)",
                    border: "1px solid rgba(178,217,59,0.25)",
                    borderRadius: "50px",
                    padding: "4px 14px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#b2d93b",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {feature.badge}
                </span>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "clamp(28px, 4vw, 36px)",
                    fontWeight: 700,
                    color: "#fdfdfd",
                    marginBottom: "8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#b2d93b",
                    fontWeight: 600,
                    marginBottom: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {feature.subtitle}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(253,253,253,0.65)",
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div
                className="feature-img-container glass-card"
                style={{
                  flex: "1.4",
                  minWidth: "320px",
                  overflow: "hidden",
                  padding: "0",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(178,217,59,0.15)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "rgba(178,217,59,0.3)";
                  el.style.boxShadow = "0 30px 80px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(178,217,59,0.15)";
                  el.style.boxShadow = "none";
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.transform = "scale(1)";
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feature-row {
            flex-direction: column !important;
            text-align: center;
          }
          .feature-content, .feature-img-container {
            width: 100% !important;
            min-width: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
