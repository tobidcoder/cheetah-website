"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    color: "#00ff87",
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
    label: "ROI",
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
    color: "#b2d93b"
  },
  {
    title: "Never Out of Stock",
    subtitle: "NooS technology",
    description:
      "We assist brands maintaining optimal inventory levels to align with actual customer demand and prevent stockouts. Real-time alerts keep you one step ahead.",
    image: "/images/customer-insights.png",
    badge: "Availability",
    color: "#00ff87"
  },
];

export function Benefits() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{
        maxWidth: "1350px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Background Orbs */}
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(178,217,59,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
        <div className="section-tag" style={{ display: "inline-flex", marginBottom: "28px", backdropFilter: "blur(10px)" }}>
          <span className="dot" />
          Measured Impact
        </div>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(42px, 6vw, 76px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            color: "#fdfdfd",
            maxWidth: "800px",
            margin: "0 auto 28px",
          }}
        >
          Data science meets{" "}
          <span style={{ color: "rgba(253,253,253,0.3)", fontStyle: "italic", fontWeight: 500 }}>retail excellence.</span>
        </h2>
        <p
          style={{
            color: "rgba(253,253,253,0.55)",
            fontSize: "20px",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Leverage AI-driven forecasting to transform precise predictions into actionable insights your team can act on daily.
        </p>
      </div>

      {/* Stats Grid — Modernized */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          marginBottom: "120px",
        }}
        className="mobile-grid-1"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="benefit-stat-card"
            style={{
              padding: "48px 32px",
              background: "rgba(10,61,36,0.3)",
              border: "1px solid rgba(178,217,59,0.12)",
              borderRadius: "40px",
              transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${i * 0.1 + 0.3}s`,
            }}
          >
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "18px",
              background: `${stat.color}15`,
              border: `1px solid ${stat.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: stat.color,
              marginBottom: "32px",
            }}>{stat.icon}</div>
            <div
              style={{
                fontSize: "clamp(48px, 4vw, 64px)",
                fontWeight: 800,
                color: stat.color,
                letterSpacing: "-0.05em",
                fontFamily: "Syne, sans-serif",
                lineHeight: 1,
                marginBottom: "16px",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#fdfdfd", marginBottom: "12px", letterSpacing: "-0.01em" }}>{stat.label}</div>
            <p style={{ fontSize: "14px", color: "rgba(253,253,253,0.45)", lineHeight: 1.6 }}>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Features Pair Restructured — Cinematic Blocks */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {featuresList.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={feature.title}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                background: "rgba(10,61,36,0.2)",
                border: "1px solid rgba(178,217,59,0.15)",
                borderRadius: "56px",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
                transitionDelay: `${i * 0.2 + 0.6}s`,
              }}
              className="mobile-grid-1"
            >
              <div
                style={{
                  padding: "clamp(48px, 8vw, 100px) clamp(32px, 6vw, 64px)",
                  order: isEven ? 0 : 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <div style={{ display: "inline-flex", background: `${feature.color}15`, border: `1px solid ${feature.color}30`, borderRadius: "100px", padding: "8px 20px", marginBottom: "32px", width: "fit-content" }}>
                   <span style={{ fontSize: "12px", fontWeight: 900, color: feature.color, letterSpacing: "0.2em", textTransform: "uppercase" }}>{feature.badge}</span>
                </div>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 800,
                    color: "#fdfdfd",
                    marginBottom: "16px",
                    letterSpacing: "-0.04em",
                    lineHeight: 1
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: "16px", fontWeight: 800, color: feature.color, marginBottom: "28px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{feature.subtitle}</p>
                <p style={{ fontSize: "18px", color: "rgba(253,253,253,0.55)", lineHeight: 1.65 }}>{feature.description}</p>
              </div>

              <div style={{ order: isEven ? 1 : 0, background: "rgba(5,35,21,0.4)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px", borderLeft: isEven ? "1px solid rgba(178,217,59,0.1)" : "none", borderRight: !isEven ? "1px solid rgba(178,217,59,0.1)" : "none" }}>
                 <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle, ${feature.color}08 0%, transparent 70%)`, filter: "blur(40px)" }} />
                  <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "32px",
                    border: "1px solid rgba(253,253,253,0.1)",
                    boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="benefit-img"
                />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .benefit-stat-card:hover {
            background: rgba(10,61,36,0.5) !important;
            border-color: rgba(178,217,59,0.4) !important;
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .benefit-img:hover {
            transform: scale(1.03) translateY(-5px) !important;
            box-shadow: 0 60px 120px rgba(0,0,0,0.7) !important;
        }
        @media (max-width: 1024px) {
            .mobile-grid-1 { grid-template-columns: 1fr !important; }
            .mobile-grid-1 > div { order: 1 !important; border: none !important; }
            .mobile-grid-1 > div:last-child { order: 0 !important; }
        }
        @media (max-width: 768px) {
            .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
            .benefit-stat-card { padding: 32px 24px !important; border-radius: 32px !important; }
            .mobile-grid-1 > div { padding: 40px 24px !important; border-radius: 32px !important; }
        }
      `}</style>
    </section>
  );
}
