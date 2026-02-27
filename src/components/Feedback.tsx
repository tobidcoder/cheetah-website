"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      scrollTo(nextIndex);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, scrollTo]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(178,217,59,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "30%", height: "50%", background: "radial-gradient(circle, rgba(96,198,240,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
            <span className="dot" />
            Voices of Impact
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(34px, 5vw, 62px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>
            Built for those who <span style={{ background: "linear-gradient(135deg, #b2d93b, #8fb22e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>run the world</span>
          </h2>
          <p style={{ color: "rgba(253,253,253,0.55)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            Small shops, massive chains, and everything in between. Cheetah is the silent partner behind Nigeria&apos;s most resilient businesses.
          </p>
        </div>

        {/* Main Slider Container */}
        <div 
          style={{ position: "relative", marginBottom: "48px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls - Desktop only */}
          <div className="desktop-controls" style={{ position: "absolute", top: "50%", left: "-60px", right: "-60px", transform: "translateY(-50%)", display: "flex", justifyContent: "space-between", zIndex: 10, pointerEvents: "none" }}>
            <button 
              onClick={() => scrollTo((activeIndex - 1 + testimonials.length) % testimonials.length)}
              style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(10,61,36,0.5)", border: "1px solid rgba(178,217,59,0.2)", color: "#fdfdfd", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#b2d93b"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(178,217,59,0.2)"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button 
              onClick={() => scrollTo((activeIndex + 1) % testimonials.length)}
              style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(10,61,36,0.5)", border: "1px solid rgba(178,217,59,0.2)", color: "#fdfdfd", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "#b2d93b"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(178,217,59,0.2)"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="hide-scrollbar"
            style={{ 
              display: "flex", 
              overflowX: "auto", 
              scrollSnapType: "x mandatory", 
              gap: "24px",
              padding: "20px 0",
              scrollBehavior: "smooth"
            }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: "0 0 100%", 
                  scrollSnapAlign: "center", 
                  background: `linear-gradient(135deg, ${t.color}08 0%, rgba(10,61,36,0.3) 100%)`,
                  border: `1px solid ${t.color}25`,
                  borderRadius: "32px",
                  padding: "clamp(40px, 8vw, 80px) clamp(24px, 5vw, 64px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Visual Accent */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: `radial-gradient(circle at top right, ${t.color}15 0%, transparent 70%)`, pointerEvents: "none" }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Top Quote Icon */}
                  <div style={{ color: t.color, opacity: 0.2, marginBottom: "32px" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5V3C12.7033 3 10.017 5.68629 10.017 9V15C10.017 18.3137 12.7033 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80787 5 6.017 5V3C2.7033 3 0.0170044 5.68629 0.0170044 9V15C0.0170044 18.3137 2.7033 21 6.017 21H4.017Z" />
                    </svg>
                  </div>

                  <blockquote style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#fdfdfd", fontWeight: 700, lineHeight: 1.3, marginBottom: "48px", fontFamily: "Syne, sans-serif" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", paddingTop: "40px", borderTop: "1px solid rgba(253,253,253,0.1)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: `${t.color}20`, border: `2px solid ${t.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 800, color: t.color, fontFamily: "Syne, sans-serif" }}>
                        {t.initials}
                      </div>
                      <div>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#fdfdfd", marginBottom: "4px" }}>{t.name}</div>
                        <div style={{ fontSize: "14px", color: t.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.role} · {t.company}</div>
                      </div>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <div style={{ display: "flex", gap: "4px" }}>
                        {[...Array(t.stars)].map((_, starI) => (
                          <svg key={starI} width="16" height="16" viewBox="0 0 24 24" fill={t.color}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                        ))}
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#fdfdfd", background: `${t.color}20`, padding: "4px 12px", borderRadius: "50px", border: `1px solid ${t.color}40` }}>
                         {t.stat}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Improved Progress indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "80px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: i === activeIndex ? "48px" : "12px",
                height: "6px",
                borderRadius: "10px",
                background: i === activeIndex ? testimonials[i].color : "rgba(178,217,59,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Brand wall - Always prominent */}
        <div style={{ background: "rgba(10,61,36,0.2)", borderRadius: "32px", padding: "48px 32px", border: "1px solid rgba(178,217,59,0.08)" }}>
          <p style={{ fontSize: "12px", color: "rgba(253,253,253,0.3)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", textAlign: "center", marginBottom: "40px" }}>
            The Gold Standard for Nigeria&apos;s Retail Elite
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {logos.map((brand) => (
              <div
                key={brand.name}
                style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(253,253,253,0.03)", border: "1px solid rgba(253,253,253,0.08)", borderRadius: "16px", padding: "12px 20px", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(253,253,253,0.06)"; e.currentTarget.style.borderColor = "rgba(178,217,59,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(253,253,253,0.03)"; e.currentTarget.style.borderColor = "rgba(253,253,253,0.08)"; }}
              >
                <span style={{ color: "rgba(178,217,59,0.5)" }}>{brand.icon}</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "rgba(253,253,253,0.8)" }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fdfdfd", marginBottom: "32px" }}>
            Ready for your own success story?
          </h3>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://back-office.usecheetah.com/signup" style={{ background: "#b2d93b", color: "#052315", padding: "18px 40px", borderRadius: "50px", fontWeight: 700, fontSize: "16px", textDecoration: "none", boxShadow: "0 10px 40px rgba(178, 217, 59, 0.3)" }}>Get Started Free</a>
            <a href="https://calendly.com/cheetahdemo/30min" style={{ border: "1px solid rgba(253,253,253,0.2)", color: "#fdfdfd", padding: "18px 40px", borderRadius: "50px", fontWeight: 600, fontSize: "16px", textDecoration: "none" }}>Book a Live Demo</a>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 1100px) {
          .desktop-controls { display: none !important; }
        }
      `}</style>
    </section>
  );
}
