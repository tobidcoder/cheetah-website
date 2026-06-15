"use client";
import { useEffect, useRef, useState } from "react";
import { IconBox, IconTrendingUp, IconDollarSign, IconZap } from "@/components/Icons";

const stats = [
  {
    value: "0%",
    label: "Upfront Capital",
    description: "Access inventory financing based directly on your POS sales history.",
    icon: <IconBox size={24} />,
    color: "#b2d93b",
  },
  {
    value: "Direct",
    label: "Supplier Access",
    description: "Skip the middlemen and order directly from major manufacturers.",
    icon: <IconTrendingUp size={24} />,
    color: "#00ff87",
  },
  {
    value: "24hr",
    label: "Credit Approval",
    description: "Get approved for stock credit lines within 24 hours of consistent POS use.",
    icon: <IconDollarSign size={24} />,
    color: "#b2d93b",
  },
  {
    value: "100%",
    label: "Margin Protection",
    description: "Stop pricing leaks and staff theft with zero-trust role-based permissions.",
    icon: <IconZap size={24} />,
    color: "#c8e85f",
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
      {/* Video Banner */}
      <div style={{
        borderRadius: "32px",
        overflow: "hidden",
        marginBottom: "80px",
        position: "relative",
        height: "320px",
        border: "1px solid rgba(178,217,59,0.15)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)"
      }}>
        <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
          <source src="https://www.pexels.com/download/video/15754279/" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(5,35,21,0.7) 0%, rgba(5,35,21,0.3) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px", backdropFilter: "blur(10px)" }}>
            <span className="dot" />
            Measured Impact
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, color: "#fdfdfd", margin: "0 0 16px" }}>
            Real results. <span style={{ color: "rgba(253,253,253,0.4)", fontStyle: "italic", fontWeight: 500 }}>Real retailers.</span>
          </h2>
          <p style={{ color: "rgba(253,253,253,0.65)", fontSize: "18px", maxWidth: "560px", lineHeight: 1.5 }}>
            Direct supplier pricing and flexible inventory financing from day one.
          </p>
        </div>
      </div>

      {/* Stats Grid — Modernized */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          marginBottom: "120px",
        }}
        className="benefit-stat-grid"
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



      <style>{`
        .benefit-stat-card:hover {
            background: rgba(10,61,36,0.5) !important;
            border-color: rgba(178,217,59,0.4) !important;
            transform: translateY(-8px) scale(1.02) !important;
            box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        @media (max-width: 1024px) {
            .benefit-stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
            .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
            .benefit-stat-grid { grid-template-columns: 1fr !important; }
            .benefit-stat-card { padding: 32px 24px !important; border-radius: 32px !important; text-align: center !important; display: flex; flex-direction: column; align-items: center; }
            .benefits-video-banner { height: 220px !important; border-radius: 24px !important; }
        }
      `}</style>
    </section>
  );
}
