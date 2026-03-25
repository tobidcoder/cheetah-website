"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IconBarChart, IconTarget, IconUsers, IconClipboard, IconCpu } from "@/components/Icons";

const features = [
  {
    title: "Data-Driven Decisions",
    description: "Leverage real-time analytics to make informed business decisions that drive growth and improve profitability.",
    image: "/images/data.png",
    span: "2 / span 2",
    icon: <IconBarChart size={20} />,
    tag: "Analytics",
    accent: "#b2d93b"
  },
  {
    title: "Sales Pipeline Tracking",
    description: "Monitor and optimize your sales pipeline with powerful end-to-end visibility.",
    image: "/images/sales.png",
    span: "auto / span 1",
    icon: <IconTarget size={20} />,
    tag: "Sales",
    accent: "#00ff87"
  },
  {
    title: "Customer Management",
    description: "Centralize every customer interaction, preference, and history in one place.",
    image: "/images/customers.png",
    span: "auto / span 1",
    icon: <IconUsers size={20} />,
    tag: "CRM",
    accent: "#60c6f0"
  },
  {
    title: "Order History & Trends",
    description: "Deep-dive into your order history and uncover patterns to unlock more revenue.",
    image: "/images/order.png",
    span: "auto / span 1",
    icon: <IconClipboard size={20} />,
    tag: "Orders",
    accent: "#f4a261"
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI to predict future performance and take data-backed decisions proactively.",
    image: "/images/analytics.png",
    span: "auto / span 2",
    icon: <IconCpu size={20} />,
    tag: "AI",
    accent: "#a78bfa"
  },
];

export function Features() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
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
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "80px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
        <div className="section-tag" style={{ display: "inline-flex", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
          <span className="dot" />
          Platform Features
        </div>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(38px, 6vw, 68px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#fdfdfd",
            maxWidth: "780px",
            margin: "0 auto 28px",
          }}
        >
          Everything you need to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #b2d93b, #00ff87)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            optimize operations.
          </span>
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
          Manage and streamline operations across multiple locations, sales channels, and employees to improve efficiency and your bottom line.
        </p>
      </div>

      {/* Bento-style Feature Grid — Modernized */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginBottom: "120px",
        }}
        className="bento-grid-layout"
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="feature-bento-card"
            style={{
              gridColumn: feature.span,
              overflow: "hidden",
              transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
              cursor: "default",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "rgba(10, 61, 36, 0.3)",
              border: "1px solid rgba(178,217,59,0.12)",
              borderRadius: "40px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <div style={{ padding: "48px 48px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: `${feature.accent}15`,
                    border: `1px solid ${feature.accent}30`,
                    borderRadius: "100px",
                    padding: "6px 18px",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: feature.accent,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {feature.tag}
                </span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  color: feature.accent,
                }}>{feature.icon}</div>
              </div>
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 800,
                  color: "#fdfdfd",
                  marginBottom: "16px",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(253,253,253,0.55)",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </div>
            <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "40%", height: "40%", background: `radial-gradient(circle, ${feature.accent}10 0%, transparent 70%)`, filter: "blur(20px)" }} />
          </div>
        ))}
      </div>

      {/* POS Section — High Impact */}
      <div
        style={{
          borderRadius: "56px",
          background: "linear-gradient(135deg, rgba(10,61,36,0.6) 0%, rgba(5,35,21,0.4) 100%)",
          border: "1px solid rgba(178,217,59,0.25)",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 60px 140px rgba(0,0,0,0.6)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(50px)",
          transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "250px",
            background: "radial-gradient(ellipse, rgba(178,217,59,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(20px)"
          }}
        />
        <div style={{ padding: "clamp(64px, 10vw, 100px) 24px 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "32px", backdropFilter: "blur(10px)" }}>
            <span className="dot" />
            Lightning Fast POS
          </div>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.05em",
              marginBottom: "24px",
              lineHeight: 0.95,
            }}
          >
            Built for speed. <br />
            <span style={{ color: "rgba(253,253,253,0.3)", fontStyle: "italic", fontWeight: 500 }}>Built for scale.</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "rgba(253,253,253,0.6)",
              maxWidth: "680px",
              margin: "0 auto 56px",
              lineHeight: 1.6,
            }}
          >
            Keep lines moving, easily handle multi-item carts, and manage retail operations securely across multiple branches with our tailored Point of Sale.
          </p>
          <div
            className="mobile-stack"
            style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "64px", flexWrap: "wrap" }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
               <button className="btn-glow-primary" style={{ fontSize: "17px", padding: "20px 48px", borderRadius: "100px", background: "#b2d93b", color: "#052315", border: "none", fontWeight: 800, cursor: "pointer", transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 10px 30px rgba(178,217,59,0.3)" }}>
                Start for Free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
              <button style={{ fontSize: "17px", padding: "20px 44px", borderRadius: "100px", background: "rgba(253,253,253,0.05)", border: "1px solid rgba(253,253,253,0.15)", color: "#fdfdfd", fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease", backdropFilter: "blur(10px)" }}>
                Schedule Demo
              </button>
            </a>
          </div>
        </div>
        <div style={{ overflow: "hidden", maxHeight: "800px", borderTop: "1px solid rgba(178,217,59,0.2)", position: "relative", zIndex: 1 }}>
          <Image
            src="/images/pos-screenshot.png"
            alt="Cheetah Point of Sale"
            width={1400}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              objectPosition: "top",
              transform: "translateY(20px)",
              filter: "drop-shadow(0 -40px 100px rgba(0,0,0,0.5))"
            }}
          />
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1100px) {
          .bento-grid-layout { grid-template-columns: repeat(2, 1fr) !important; }
          .feature-bento-card { grid-column: span 1 !important; }
          .feature-bento-card:nth-child(1), .feature-bento-card:nth-child(5) { grid-column: span 2 !important; }
        }
        @media (max-width: 768px) {
          .bento-grid-layout { grid-template-columns: 1fr !important; }
          .feature-bento-card { grid-column: span 1 !important; padding: 32px 24px !important; }
          .feature-bento-card:nth-child(1), .feature-bento-card:nth-child(5) { grid-column: span 1 !important; }
        }
        .feature-bento-card:hover {
            background: rgba(10, 61, 36, 0.45) !important;
            border-color: rgba(178,217,59,0.3) !important;
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 0 40px 80px rgba(0,0,0,0.4);
            z-index: 5;
        }
        .btn-glow-primary:hover {
            transform: translateY(-3px);
            filter: brightness(1.1);
            box-shadow: 0 15px 40px rgba(178,217,59,0.5) !important;
        }
      `}</style>
    </section>
  );
}
