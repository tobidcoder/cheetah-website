"use client";
import { useState, useEffect, useRef } from "react";
import { IconStore, IconShoppingCart, IconBuilding, IconShoppingBag, IconSparkles, IconFlame, IconLeaf, IconBarChart } from "@/components/Icons";

const testimonials = [
  {
    initials: "SE",
    name: "Sunday Egede",
    role: "Co-founder",
    company: "Prince Ebeano Supermarket",
    location: "Lagos, Nigeria",
    category: "Multi-Branch Supermarket",
    stars: 5,
    stat: "80% fewer stockouts",
    color: "#b2d93b",
    quote:
      "Before Cheetah, tracking stock across all our branches was a full-time job — and we still got it wrong half the time. Stockouts on peak weekends were killing us. Now, with the AI forecasting, we reorder before we even feel the pressure. Our customers notice it. Our team breathes easier. Couldn't go back.",
  },
  {
    initials: "AT",
    name: "Adekunle Temitope",
    role: "Director",
    company: "FoodCo Nigeria",
    location: "Lagos & Ibadan",
    category: "Supermarket Chain",
    stars: 5,
    stat: "+28% sell-through rate",
    color: "#60c6f0",
    quote:
      "The moment I could see all my FoodCo branches in one dashboard — live — was the moment everything changed. We caught three discrepancies that weekend alone. The audit logs are unbeatable. We've reduced staff-related losses by over 40% since onboarding Cheetah. That alone justified the entire investment.",
  },
  {
    initials: "BV",
    name: "Bassay Victoria",
    role: "Owner",
    company: "Khadash Shawarma & Smoothie",
    location: "Abuja, Nigeria",
    category: "Restaurant",
    stars: 5,
    stat: "Zero missed sales",
    color: "#a78bfa",
    quote:
      "Our internet here in Abuja goes up and down without warning. With our old POS, when the network dropped, everything stopped. Angry customers. Lost orders. Cashiers stressing. With Cheetah, we didn't even notice the outage. We kept selling, kept printing receipts, and it all synced when the connection came back. Unbelievable.",
  },
  {
    initials: "AM",
    name: "Aisha Mohammed",
    role: "Operations Manager",
    company: "Grand Square",
    location: "Abuja, Nigeria",
    category: "Premium Supermarket",
    stars: 5,
    stat: "Setup in under 10 mins",
    color: "#f4a261",
    quote:
      "I was skeptical that any Nigerian retail software could match what we needed. Grand Square runs high-end. Our standards are strict. But Cheetah surprised me completely. The interface is clean, the data is accurate, and the staff picked it up in hours. The cloud backup gives me total peace of mind — I've seen what happens when servers die.",
  },
  {
    initials: "EO",
    name: "Emeka Okafor",
    role: "Branch Director",
    company: "Market Square",
    location: "Lagos, Nigeria",
    category: "High-Volume Retail",
    stars: 5,
    stat: "35% efficiency gain",
    color: "#b2d93b",
    quote:
      "Market Square does serious volume — thousands of transactions every day. We needed a POS that wouldn't lag, wouldn't crash, and wouldn't let us down. Cheetah handles everything with zero drama. The real-time tracking across shifts means my managers can spot anomalies before they become problems. That's exactly what high-volume retail needs.",
  },
];

const logos = [
  { name: "Prince Ebeano Supermarket", icon: <IconStore size={18} />,        type: "Lagos" },
  { name: "FoodCo Nigeria",            icon: <IconShoppingCart size={18} />,  type: "Lagos & Ibadan" },
  { name: "Market Square",             icon: <IconBuilding size={18} />,      type: "Lagos" },
  { name: "Grand Square",              icon: <IconBuilding size={18} />,      type: "Abuja" },
  { name: "Addide Stores",             icon: <IconShoppingBag size={18} />,   type: "Lagos" },
  { name: "Renee Supermarket",         icon: <IconSparkles size={18} />,      type: "Lekki" },
  { name: "Khadash Shawarma",          icon: <IconFlame size={18} />,         type: "Abuja" },
  { name: "SPAR Nigeria",              icon: <IconLeaf size={18} />,          type: "Lagos" },
];

export function Feedback() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchTo = (idx: number) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 220);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const t = testimonials[active];

  return (
    <section
      style={{
        padding: "100px 24px 120px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="dot" />
          Real Customers. Real Results.
        </div>
        <h2
          style={{
            fontFamily: "Syne, Inter, sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: "#fdfdfd",
            maxWidth: "760px",
            margin: "0 auto 20px",
          }}
        >
          Nigeria&apos;s leading retailers{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            trust Cheetah
          </span>
        </h2>
        <p
          style={{
            color: "rgba(253,253,253,0.5)",
            fontSize: "17px",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          From single stores to multi-branch operations — real business owners share what changed when they switched to Cheetah.
        </p>
      </div>

      {/* Main testimonial layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "20px",
          marginBottom: "56px",
          alignItems: "stretch",
        }}
      >
        {/* Reviewer selector */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {testimonials.map((tes, i) => (
            <button
              key={tes.name}
              onClick={() => switchTo(i)}
              style={{
                background:
                  i === active ? `${tes.color}12` : "rgba(10,61,36,0.25)",
                border: `1px solid ${i === active ? tes.color + "40" : "rgba(178,217,59,0.08)"}`,
                borderRadius: "14px",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                textAlign: "left",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (i !== active) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.2)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(10,61,36,0.45)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== active) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(10,61,36,0.25)";
                }
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: i === active ? `${tes.color}25` : "rgba(10,61,36,0.6)",
                  border: `2px solid ${i === active ? tes.color + "60" : "rgba(178,217,59,0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Syne, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: i === active ? tes.color : "rgba(253,253,253,0.3)",
                  flexShrink: 0,
                  transition: "all 0.25s ease",
                }}
              >
                {tes.initials}
              </div>
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: i === active ? "#fdfdfd" : "rgba(253,253,253,0.5)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "3px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {tes.name}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: i === active ? tes.color : "rgba(253,253,253,0.3)",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.25s ease",
                  }}
                >
                  {tes.company}
                </div>
              </div>
              {i === active && (
                <div
                  style={{
                    marginLeft: "auto",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: tes.color,
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${tes.color}`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Testimonial card */}
        <div
          style={{
            background: `linear-gradient(135deg, ${t.color}08 0%, rgba(10,61,36,0.4) 100%)`,
            border: `1px solid ${t.color}25`,
            borderRadius: "24px",
            padding: "48px 52px",
            position: "relative",
            overflow: "hidden",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Decorative quote */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "28px",
              fontSize: "96px",
              color: `${t.color}10`,
              fontFamily: "Georgia, serif",
              fontWeight: 900,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            &rdquo;
          </div>

          {/* Top row */}
          <div>
            {/* Stars + stat chip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "3px" }}>
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill={t.color}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span
                style={{
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}35`,
                  borderRadius: "50px",
                  padding: "3px 12px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: t.color,
                }}
              >
                📊 {t.stat}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(253,253,253,0.3)",
                  background: "rgba(253,253,253,0.05)",
                  border: "1px solid rgba(253,253,253,0.08)",
                  borderRadius: "50px",
                  padding: "3px 12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {t.category}
              </span>
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: "clamp(16px, 1.9vw, 20px)",
                color: "rgba(253,253,253,0.85)",
                lineHeight: 1.78,
                fontStyle: "italic",
                marginBottom: "40px",
                fontWeight: 400,
                letterSpacing: "-0.005em",
                position: "relative",
                zIndex: 1,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>

          {/* Author row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: `1px solid ${t.color}15`,
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: `2px solid ${t.color}50`,
                  background: `${t.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Syne, sans-serif",
                  fontSize: "16px",
                  fontWeight: 800,
                  color: t.color,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "16px", color: "#fdfdfd" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "14px", color: t.color, fontWeight: 500 }}>
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "rgba(253,253,253,0.35)",
                fontWeight: 500,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t.location}
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "80px" }}>
        {testimonials.map((tes, i) => (
          <button
            key={i}
            onClick={() => switchTo(i)}
            style={{
              width: i === active ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === active ? tes.color : "rgba(178,217,59,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
            }}
            aria-label={`View ${tes.name}'s testimonial`}
          />
        ))}
      </div>

      {/* Gradient divider */}
      <div className="gradient-divider" style={{ marginBottom: "64px" }} />

      {/* Brand wall */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <p
          style={{
            fontSize: "11px",
            color: "rgba(253,253,253,0.28)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Trusted by leading Nigerian businesses
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {logos.map((brand) => (
            <div
              key={brand.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(10,61,36,0.3)",
                border: "1px solid rgba(178,217,59,0.1)",
                borderRadius: "12px",
                padding: "10px 18px",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(178,217,59,0.3)";
                el.style.background = "rgba(10,61,36,0.6)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(178,217,59,0.1)";
                el.style.background = "rgba(10,61,36,0.3)";
                el.style.transform = "translateY(0)";
              }}
            >
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(178,217,59,0.6)", width: "20px", flexShrink: 0 }}>{brand.icon}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(253,253,253,0.7)", lineHeight: 1.2 }}>
                  {brand.name}
                </div>
                <div style={{ fontSize: "11px", color: "rgba(253,253,253,0.3)", fontWeight: 500 }}>
                  {brand.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <p
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(20px, 2.8vw, 30px)",
            fontWeight: 800,
            color: "#fdfdfd",
            marginBottom: "10px",
            letterSpacing: "-0.02em",
          }}
        >
          Join the retailers already winning with Cheetah.
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(253,253,253,0.4)",
            marginBottom: "30px",
            lineHeight: 1.6,
          }}
        >
          Free to start. No contracts. No hidden fees. Cancel anytime.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
            <button className="btn-primary" style={{ padding: "15px 38px", fontSize: "16px" }}>
              Get Started Free
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
            <button className="btn-secondary" style={{ padding: "15px 38px", fontSize: "16px" }}>
              📅 Book a Live Demo
            </button>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
