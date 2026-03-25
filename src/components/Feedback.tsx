"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { IconStore, IconShoppingCart, IconBuilding, IconShoppingBag, IconSparkles, IconFlame, IconLeaf, IconBarChart } from "@/components/Icons";

const testimonials = [
  {
    initials: "TA",
    name: "Tunde Adeola",
    role: "Co-founder",
    company: "COMPRAMART",
    location: "Lagos, Nigeria",
    category: "Multi-Branch Supermarket",
    stars: 5,
    stat: "80% fewer stockouts",
    color: "#b2d93b",
    quote:
      "Before Cheetah, tracking stock across all our branches was a full-time job,and we still got it wrong half the time. Stockouts on peak weekends were killing us. Now, with the AI forecasting, we reorder before we even feel the pressure. Our customers notice it. Our team breathes easier.",
  },
  {
    initials: "OA",
    name: "Olumide Adeoye",
    role: "Director",
    company: "YOUMART",
    location: "Lagos & Abeokuta",
    category: "Supermarket Chain",
    stars: 5,
    stat: "+28% sell-through rate",
    color: "#00ff87",
    quote:
      "The moment I could see all my YOUMART branches in one dashboard,live,was the moment everything changed. We caught three discrepancies that weekend alone. The audit logs are unbeatable. We've reduced staff-related losses by over 40% since onboarding Cheetah. That alone justified the investment.",
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
      "Our internet here in Abuja goes up and down without warning. With our old POS, when the network dropped, everything stopped. Angry customers. Lost orders. Cashiers stressing. With Cheetah, we didn't even notice the outage. We kept selling, kept printing receipts, and it all synced effortlessly.",
  },
  {
    initials: "AM",
    name: "Aisha Mohammed",
    role: "Operations Manager",
    company: "Grand Square",
    location: "Abuja, Nigeria",
    category: "Premium Supermarket",
    stars: 5,
    stat: "Setup in 10 mins",
    color: "#f4a261",
    quote:
      "I was skeptical that any Nigerian retail software could match what we needed. Grand Square runs high-end. Our standards are strict. But Cheetah surprised me completely. The interface is clean, the data is accurate, and the staff picked it up in hours. The cloud backup gives me total peace of mind.",
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
      "Market Square does serious volume, thousands of daily transactions. We needed a POS that wouldn't lag, wouldn't crash, and wouldn't let us down. Cheetah handles everything with zero drama. The real-time tracking means my managers can spot anomalies before they become problems.",
  },
];

const logos = [
  { name: "COMPRAMART", icon: <IconStore size={18} />,        type: "Lagos" },
  { name: "YOUMART",            icon: <IconShoppingCart size={18} />,  type: "Lagos & Abeokuta" },
  { name: "Market Square",             icon: <IconBuilding size={18} />,      type: "Lagos" },
  { name: "Grand Square",              icon: <IconBuilding size={18} />,      type: "Abuja" },
  { name: "Addide Stores",             icon: <IconShoppingBag size={18} />,   type: "Lagos" },
  { name: "Renee Supermarket",         icon: <IconSparkles size={18} />,      type: "Lekki" },
  { name: "Khadash Shawarma",          icon: <IconFlame size={18} />,         type: "Abuja" },
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
    }, 8000);
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
    <section className="section-padding" style={{ position: "relative", overflow: "hidden", background: "#052315" }}>
      {/* Background Decor — Refined */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "30%", height: "50%", background: "radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(80px)" }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
            <span className="dot" />
            Voices of Impact
          </div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: "24px" }}>
            Built for those who <br />
            <span style={{ background: "linear-gradient(135deg, #b2d93b, #00ff87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>run the world.</span>
          </h2>
          <p style={{ color: "rgba(253,253,253,0.55)", fontSize: "20px", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Small shops, massive chains, and everything in between. Cheetah is the silent partner behind Nigeria&apos;s most resilient businesses.
          </p>
        </div>

        {/* Main Slider Container — Modern & Fluid */}
        <div 
          style={{ position: "relative", marginBottom: "80px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="slider-container"
        >
          {/* Controls — Refined Desktop Controls */}
          <div className="slider-controls" style={{ position: "absolute", bottom: "-60px", right: "24px", display: "flex", gap: "12px", zIndex: 10 }}>
            <button 
              onClick={() => scrollTo((activeIndex - 1 + testimonials.length) % testimonials.length)}
              style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(253,253,253,0.03)", border: "1px solid rgba(253,253,253,0.1)", color: "#fdfdfd", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
              className="slider-nav-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button 
              onClick={() => scrollTo((activeIndex + 1) % testimonials.length)}
              style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(253,253,253,0.03)", border: "1px solid rgba(253,253,253,0.1)", color: "#fdfdfd", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
              className="slider-nav-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
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
                  background: "rgba(10,61,36,0.3)",
                  border: `1px solid rgba(178,217,59,0.15)`,
                  borderRadius: "56px",
                  padding: "clamp(60px, 10vw, 120px) clamp(32px, 6vw, 84px)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.4)"
                }}
                className="testimonial-card"
              >
                {/* Visual Glass Accent */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: `radial-gradient(circle at top right, ${t.color}10 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(40px)" }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ color: t.color, opacity: 0.3, marginBottom: "48px" }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V9C12.017 6.79086 13.8079 5 16.017 5V3C12.7033 3 10.017 5.68629 10.017 9V15C10.017 18.3137 12.7033 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V9C2.017 6.79086 3.80787 5 6.017 5V3C2.7033 3 0.0170044 5.68629 0.0170044 9V15C0.0170044 18.3137 2.7033 21 6.017 21H4.017Z" />
                    </svg>
                  </div>

                  <blockquote style={{ fontSize: "clamp(24px, 3.5vw, 48px)", color: "#fdfdfd", fontWeight: 700, lineHeight: 1.1, marginBottom: "72px", fontFamily: "Syne, sans-serif", letterSpacing: "-0.04em" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="testimonial-footer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px", paddingTop: "56px", borderTop: "1px solid rgba(253,253,253,0.12)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                      <div style={{ width: "84px", height: "84px", borderRadius: "24px", background: `${t.color}15`, border: `2px solid ${t.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, color: t.color, fontFamily: "Syne, sans-serif" }}>
                        {t.initials}
                      </div>
                      <div>
                        <div style={{ fontSize: "24px", fontWeight: 800, color: "#fdfdfd", marginBottom: "6px", letterSpacing: "-0.02em" }}>{t.name}</div>
                        <div style={{ fontSize: "14px", color: t.color, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em" }}>{t.role} / {t.company}</div>
                      </div>
                    </div>
                    
                    <div className="testimonial-stat-block" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {[...Array(t.stars)].map((_, starI) => (
                          <svg key={starI} width="20" height="20" viewBox="0 0 24 24" fill={t.color}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                        ))}
                      </div>
                      <div style={{ fontSize: "15px", fontWeight: 800, color: t.color, background: `${t.color}15`, padding: "8px 24px", borderRadius: "100px", border: `1px solid ${t.color}30`, letterSpacing: "0.05em" }}>
                         {t.stat}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots — Modern Pill Style */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "120px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: i === activeIndex ? "64px" : "16px",
                height: "8px",
                borderRadius: "100px",
                background: i === activeIndex ? testimonials[i].color : "rgba(253,253,253,0.1)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Brand Reveal — Cinematic Brand Wall */}
        <div className="brand-wall" style={{ background: "rgba(253,253,253,0.02)", borderRadius: "48px", padding: "64px 40px", border: "1px solid rgba(253,253,253,0.08)", backdropFilter: "blur(10px)" }}>
          <p style={{ fontSize: "14px", color: "rgba(253,253,253,0.3)", fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", textAlign: "center", marginBottom: "48px" }}>
            The Gold Standard for Nigeria&apos;s Retail Elite
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {logos.map((brand) => (
              <div
                key={brand.name}
                className="brand-card-modern"
                style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(253,253,253,0.03)", border: "1px solid rgba(253,253,253,0.12)", borderRadius: "20px", padding: "16px 32px", transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
              >
                <span style={{ color: "rgba(178,217,59,0.5)" }}>{brand.icon}</span>
                <span style={{ fontSize: "17px", fontWeight: 800, color: "rgba(253,253,253,0.85)", letterSpacing: "-0.02em" }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Impact CTA */}
        <div style={{ textAlign: "center", marginTop: "120px" }}>
          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#fdfdfd", marginBottom: "48px", letterSpacing: "-0.04em", lineHeight: 1 }}>
            Ready for your own success story?
          </h3>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://back-office.usecheetah.com/register">
                <button className="btn-glow-primary" style={{ padding: "20px 48px", borderRadius: "100px", background: "#b2d93b", color: "#052315", border: "none", fontWeight: 800, fontSize: "17px", cursor: "pointer", boxShadow: "0 10px 40px rgba(178, 217, 59, 0.4)", display: "flex", alignItems: "center", gap: "10px" }}>
                    Get Started Free
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </a>
            <a href="https://calendly.com/cheetahdemo/30min">
                <button style={{ border: "1px solid rgba(253,253,253,0.15)", background: "rgba(253,253,253,0.05)", color: "#fdfdfd", padding: "20px 48px", borderRadius: "100px", fontWeight: 700, fontSize: "17px", cursor: "pointer", transition: "all 0.3s ease", backdropFilter: "blur(10px)" }}>
                    Book a Live Demo
                </button>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .slider-nav-btn:hover {
            background: #b2d93b !important;
            border-color: #b2d93b !important;
            color: #052315 !important;
            transform: scale(1.1);
        }

        .brand-card-modern:hover {
            background: rgba(178,217,59,0.1) !important;
            border-color: rgba(178,217,59,0.4) !important;
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .btn-glow-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 50px rgba(178,217,59,0.6) !important;
            filter: brightness(1.1);
        }

        @media (max-width: 768px) {
            .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
            .testimonial-card { padding: 48px 24px !important; border-radius: 32px !important; }
            .testimonial-footer { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
            .testimonial-stat-block { align-items: flex-start !important; width: 100% !important; }
            .brand-wall { border-radius: 32px !important; padding: 48px 20px !important; }
            .slider-nav-btn { width: 50px !important; height: 50px !important; }
            .slider-controls { right: 50% !important; transform: translateX(50%) !important; bottom: -80px !important; }
            .slider-container { margin-bottom: 120px !important; }
        }
      `}</style>
    </section>
  );
}
