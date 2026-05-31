"use client";

import Image from "next/image";
import { logos } from "./Feedback";
import { 
  IconReceipt, IconPackage, IconBarChart, IconGift, 
  IconClipboard, IconLock, IconWifi, IconCloud, IconUsers, 
  IconX, IconSparkles 
} from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function Introduction() {
  return (
    <>
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#052315",
      padding: "180px 5% 40px",
      overflow: "hidden",
    }}>
      {/* Background Video & Overlays */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <source src="https://www.pexels.com/download/video/4121754/" type="video/mp4" />
      </video>
      <div className="bg-overlay" style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, #052315 25%, rgba(5,35,21,0.8) 60%, rgba(5,35,21,0) 100%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 70% 40%, rgba(178,217,59,0.15) 0%, transparent 50%)",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "overlay"
      }} />
      
      {/* Main Content Area */}
      <div style={{
        maxWidth: "1350px",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "80px"
      }}>
        
        <h1 className="hero-heading" style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 850,
          fontSize: "clamp(40px, 6vw, 76px)",
          color: "#fdfdfd",
          lineHeight: 1.05,
          maxWidth: "900px",
          marginBottom: "32px",
          letterSpacing: "-0.04em"
        }}>
          #1 <span style={{ color: "#b2d93b" }}>FREE</span> POS system <br className="hide-mobile" />
          built to protect margins <br className="hide-mobile" />
          and grow sales
        </h1>

        <p className="hero-subtext" style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(253, 253, 253, 0.7)",
          lineHeight: 1.6,
          maxWidth: "680px",
          marginBottom: "48px",
          fontWeight: 500,
          letterSpacing: "-0.01em"
        }}>
          Loyalty, ordering, receiving, pricing, inventory, and reporting. All in one place. Designed for how retails actually works.
        </p>

        <div className="hero-actions" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" style={{ textDecoration: "none" }}>
            <button className="btn-glow-primary" style={{
              padding: "20px 48px",
              background: "#b2d93b",
              color: "#052315",
              border: "none",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 10px 30px rgba(178,217,59,0.3)"
            }}>
              Book A Demo
            </button>
          </a>
          
          <button className="video-btn" style={{
            padding: "16px 32px",
            background: "transparent",
            color: "#fdfdfd",
            border: "none",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            transition: "all 0.3s ease"
          }}>
            <span style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(178,217,59,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b2d93b",
              transition: "all 0.3s ease"
            }} className="play-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Trusted By Section (Bottom) */}
      <div className="trusted-section" style={{
        maxWidth: "1350px",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(253,253,253,0.1)",
        paddingTop: "40px",
        flexWrap: "wrap",
        gap: "40px"
      }}>
        <div className="trusted-text" style={{ maxWidth: "260px" }}>
          <p style={{
            fontSize: "15px",
            color: "rgba(253, 253, 253, 0.6)",
            lineHeight: 1.5,
            fontWeight: 500
          }}>
            Trusted by leading independent grocers across the country
          </p>
        </div>

        <div className="trusted-logos marquee-container" style={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}>
          <div className="marquee-content" style={{
            display: "flex",
            gap: "64px",
            width: "max-content",
            alignItems: "center"
          }}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                opacity: 0.5,
                transition: "all 0.3s ease",
                cursor: "default",
                minWidth: "100px"
              }}>
                <div style={{ color: "#fdfdfd" }}>
                  {logo.icon}
                </div>
                <span style={{ fontSize: "14px", color: "#fdfdfd", fontWeight: 700, textAlign: "center", letterSpacing: "-0.01em" }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-heading {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-subtext {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards both;
        }
        .hero-actions {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards both;
        }
        .trusted-section {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards both;
        }
        .marquee-content {
          animation: scroll 20s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 32px)); }
        }
        .btn-glow-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(178,217,59,0.5) !important;
        }
        .video-btn:hover {
          opacity: 0.9;
        }
        .video-btn:hover .play-icon {
          transform: scale(1.1);
          background: #b2d93b !important;
          color: #052315 !important;
        }
        .logo-item:hover {
          opacity: 1 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .bg-overlay { background: linear-gradient(180deg, #052315 30%, rgba(5,35,21,0.85) 100%) !important; }
          .hide-mobile { display: none; }
          section { padding: 120px 24px 40px !important; }
          .hero-heading { font-size: clamp(36px, 8vw, 48px) !important; text-align: center; }
          .hero-subtext { text-align: center; margin: 0 auto 32px auto !important; }
          .hero-actions { justify-content: center !important; }
          .trusted-section { flex-direction: column !important; align-items: center !important; gap: 24px !important; text-align: center !important; padding-top: 32px !important; }
          .trusted-text { max-width: 100% !important; margin: 0 auto !important; }
          .trusted-logos { justify-content: center !important; gap: 24px !important; }
        }
      `}</style>
    </section>

    {/* ── 100% FREE Value Proposition Section ── */}
    <section style={{
      background: "#052315",
      padding: "100px 5% 120px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(178,217,59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(178,217,59,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(80px)" }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Eyebrow + Headline */}
        <ScrollReveal delay={100}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(178,217,59,0.12)", border: "1px solid rgba(178,217,59,0.3)", borderRadius: "100px", padding: "8px 20px", marginBottom: "32px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#b2d93b", display: "inline-block", animation: "pulse-free-dot 2s ease-in-out infinite" }} />
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#b2d93b", letterSpacing: "0.15em", textTransform: "uppercase" }}>100% Free for African Retailers</span>
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(42px, 6vw, 84px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.05em", lineHeight: 0.92, margin: "0 auto 32px", maxWidth: "900px" }}>
              No subscriptions.<br />
              <span style={{ background: "linear-gradient(135deg, #b2d93b, #00ff87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>No setup fees.</span><br />
              <span style={{ color: "rgba(253,253,253,0.28)", fontStyle: "italic", fontWeight: 500 }}>No catch. Ever.</span>
            </h2>
            <p style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "rgba(253,253,253,0.55)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.65 }}>
              While other POS systems charge $150–$600/year, Cheetah gives every African small business the same enterprise-grade tools —{" "}
              <h3><strong style={{ color: "#b2d93b" }}>completely free, forever.</strong></h3>
            </p>
          </div>
        </ScrollReveal>

        {/* Price comparison */}
        <ScrollReveal delay={150}>
          <div className="free-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr", gap: "16px", alignItems: "stretch", marginBottom: "80px" }}>
            {/* Competitors column */}
            <div style={{ background: "rgba(255,60,60,0.05)", border: "1px solid rgba(255,80,80,0.18)", borderRadius: "32px", padding: "40px 32px" }}>
              <p style={{ fontSize: "11px", fontWeight: 900, color: "rgba(255,100,100,0.6)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px", display: "flex", alignItems: "center", gap: "6px" }}>
                <IconX size={12} color="#ff6060" strokeWidth={3} /> Other POS Systems
              </p>
              {[
                ["Monthly Subscription", "$25+/mo"],
                ["Setup Fee", "$100+"],
                ["Hardware Lock-in", "Required"],
                ["Training Cost", "$50+"],
                ["Annual Renewal", "$250+"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.35)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6060" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    {label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,100,100,0.65)" }}>{val}</span>
                </div>
              ))}
            </div>

            {/* VS divider */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 900, color: "rgba(253,253,253,0.15)", letterSpacing: "0.1em" }}>VS</span>
              <div style={{ width: "2px", flex: 1, background: "rgba(178,217,59,0.12)", borderRadius: "2px" }} />
            </div>

            {/* Cheetah column */}
            <div style={{ background: "linear-gradient(135deg, rgba(178,217,59,0.1) 0%, rgba(0,255,135,0.04) 100%)", border: "2px solid rgba(178,217,59,0.3)", borderRadius: "32px", padding: "40px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(178,217,59,0.25) 0%, transparent 70%)", filter: "blur(30px)" }} />
              <p style={{ fontSize: "11px", fontWeight: 900, color: "#b2d93b", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px", display: "flex", alignItems: "center", gap: "6px" }}>
                <IconSparkles size={12} color="#b2d93b" /> Cheetah — Built for African SMEs
              </p>
              {[
                ["Monthly Subscription", "$0"],
                ["Setup Fee", "$0"],
                ["Works on any device", "✓ Free"],
                ["Onboarding Support", "✓ Free"],
                ["Forever Free Plan", "✓ Always"],
              ].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(178,217,59,0.07)" }}>
                  <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.65)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b2d93b" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    {label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 900, color: "#b2d93b" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Feature pills */}
        <ScrollReveal delay={200}>
          <div style={{ marginBottom: "80px" }}>
            <p style={{ fontSize: "12px", fontWeight: 800, color: "rgba(253,253,253,0.25)", letterSpacing: "0.2em", textTransform: "uppercase", textAlign: "center", marginBottom: "28px" }}>Everything included. Nothing hidden.</p>
            <div className="free-pills" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              {[
                { icon: IconReceipt, label: "Point of Sale" },
                { icon: IconPackage, label: "Inventory Management" },
                { icon: IconBarChart, label: "Bookkeeping & Reports" },
                { icon: IconGift, label: "Customer Loyalty" },
                { icon: IconClipboard, label: "Purchase Ordering" },
                { icon: IconLock, label: "Fraud Prevention" },
                { icon: IconWifi, label: "Works Offline" },
                { icon: IconCloud, label: "Cloud Backup" },
                { icon: IconUsers, label: "Staff Management" },
              ].map(f => (
                <div key={f.label} className="free-pill" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(10,61,36,0.5)", border: "1px solid rgba(178,217,59,0.15)", borderRadius: "100px", padding: "14px 28px", cursor: "default", transition: "all 0.3s ease" }}>
                  <span style={{ display: "inline-flex", color: "#b2d93b", flexShrink: 0 }}>
                    <f.icon size={18} />
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "rgba(253,253,253,0.75)" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Social proof + CTA */}
        <ScrollReveal delay={250}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
            {/* Live users bar */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", background: "rgba(10,61,36,0.7)", border: "1px solid rgba(178,217,59,0.2)", borderRadius: "100px", padding: "14px 32px" }}>
              <div style={{ display: "flex" }}>
                {["#b2d93b","#00ff87","#a78bfa","#60c6f0","#f4a261"].map((c, i) => (
                  <div key={i} style={{ width: "32px", height: "32px", borderRadius: "50%", background: `${c}30`, border: `2px solid ${c}`, marginLeft: i ? "-10px" : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, color: c }}>{"ABCDE"[i]}</div>
                ))}
              </div>
              <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.65)", fontWeight: 600, margin: 0 }}>
                <strong style={{ color: "#b2d93b" }}>500+ stores</strong> already running on Cheetah — for free
              </p>
            </div>

            {/* Primary CTA */}
            <div style={{ textAlign: "center" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ textDecoration: "none" }}>
                <button className="free-cta-btn" style={{ padding: "24px 72px", background: "#b2d93b", color: "#052315", border: "none", borderRadius: "100px", fontSize: "20px", fontWeight: 900, cursor: "pointer", transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)", boxShadow: "0 20px 60px rgba(178,217,59,0.4)", display: "inline-flex", alignItems: "center", gap: "14px", letterSpacing: "-0.02em" }}>
                  Start Free — No Card Needed
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </a>
              <p style={{ marginTop: "18px", fontSize: "14px", color: "rgba(253,253,253,0.28)", fontWeight: 500 }}>
                5-minute setup &middot; No credit card &middot; No contract &middot; Cancel anytime
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Feature Showcase Sections ── */}
        {(() => {
          const sections = [
            {
              label: "Grow Sales",
              headline: "Deliver an experience shoppers come back for",
              body: "Sales growth comes from repeat visits and bigger baskets. Cheetah helps you create the kind of store experience that earns both — with loyalty programmes, smart promotions, and real-time insights.",
              cta: "Bring Shoppers Back",
              tags: ["POS", "Customer Loyalty", "Reporting & Insights"],
              image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=900&auto=format&fit=crop&q=60",
              accent: "#b2d93b",
            },
            {
              label: "Protect Margin",
              headline: "Stop margin leaks before they add up",
              body: "Dollar by dollar, losses slip through pricing errors, spoilage, and staff theft. Cheetah catches every leak early, before it quietly eats into your profit.",
              cta: "Protect Your Margins",
              tags: ["Pricing Automation", "Order Management", "Reporting & Insights"],
              image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=900&auto=format&fit=crop&q=60",
              accent: "#f4a261",
            },
            {
              label: "Optimize Labor",
              headline: "Get more done with the same team",
              body: "Labor is tight. Time is even tighter. Cheetah helps your team spend less time on manual work and more time with customers — through automation, scan-and-go receiving, and smart task routing.",
              cta: "Maximize Every Hour",
              tags: ["Order Management", "Inventory Management", "Reporting & Insights"],
              image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=900&auto=format&fit=crop&q=60",
              accent: "#60c6f0",
            },
            {
              label: "Expand Market",
              headline: "Launch new locations with confidence",
              body: "When your store runs on a strong foundation, expansion becomes inevitable. Cheetah standardises your operations so growth doesn’t multiply stress — just revenue.",
              cta: "Build What’s Next",
              tags: ["Multi-Branch Sync", "Cloud Backup", "The full Cheetah system"],
              image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=900&auto=format&fit=crop&q=60",
              accent: "#a78bfa",
            },
          ];

          return (
            <div style={{ marginTop: "140px", display: "flex", flexDirection: "column", gap: "160px" }}>
              {sections.map((section, idx) => {
                const isEven = idx % 2 === 0;
                const sectionClass = isEven ? "feature-section-grid even" : "feature-section-grid odd";
                return (
                  <ScrollReveal key={idx} delay={idx * 100}>
                    <div className={sectionClass}>
                    {/* Left/Right Text Column */}
                    <div className="feature-text-col" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {/* Eyebrow Label */}
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${section.accent}15`, border: `1px solid ${section.accent}35`, borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: section.accent, display: "inline-block" }} />
                        <span style={{ fontSize: "12px", fontWeight: 800, color: section.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>{section.label}</span>
                      </div>

                      {/* Headline */}
                      <h3 style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(32px, 4vw, 48px)",
                        fontWeight: 800,
                        color: "#fdfdfd",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        marginBottom: "24px",
                      }}>
                        {section.headline}
                      </h3>

                      {/* Body */}
                      <p style={{ fontSize: "17px", color: "rgba(253,253,253,0.6)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "540px" }}>
                        {section.body}
                      </p>

                      {/* CTA link */}
                      <a
                        href="https://back-office.usecheetah.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "16px",
                          fontWeight: 800,
                          color: section.accent,
                          textDecoration: "none",
                          marginBottom: "36px",
                          transition: "gap 0.3s ease"
                        }}
                        className="tab-cta-link"
                      >
                        {section.cta}
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `${section.accent}20`, border: `1px solid ${section.accent}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={section.accent} strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                      </a>

                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {section.tags.map(tag => (
                          <span key={tag} style={{ fontSize: "13px", fontWeight: 700, padding: "8px 18px", background: "rgba(253,253,253,0.03)", color: "rgba(253,253,253,0.45)", borderRadius: "100px", border: "1px solid rgba(253,253,253,0.08)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Left/Right Image Column */}
                    <div className="feature-img-col" style={{ borderRadius: "32px", overflow: "hidden", position: "relative", aspectRatio: "4/3", border: "1px solid rgba(253,253,253,0.08)", boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 80px ${section.accent}12` }}>
                      <Image
                        src={section.image}
                        alt={section.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        loading="lazy"
                      />
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(5,35,21,0.3) 0%, transparent 60%)` }} />
                    </div>
                  </div>
                </ScrollReveal>
                );
              })}
            </div>
          );
        })()}
      </div>

      <style>{`
        @keyframes pulse-free-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .free-pill:hover {
          background: rgba(178,217,59,0.1) !important;
          border-color: rgba(178,217,59,0.45) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(178,217,59,0.15);
        }
        .free-cta-btn:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 30px 80px rgba(178,217,59,0.55) !important;
        }
        .tab-cta-link:hover {
            gap: 18px !important;
            opacity: 0.85;
        }
        .feature-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          text-align: left;
        }
        .feature-section-grid.even .feature-text-col {
          order: 1;
        }
        .feature-section-grid.even .feature-img-col {
          order: 2;
        }
        .feature-section-grid.odd .feature-text-col {
          order: 2;
        }
        .feature-section-grid.odd .feature-img-col {
          order: 1;
        }
        @media (max-width: 900px) {
            .feature-section-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              text-align: center !important;
            }
            .feature-section-grid.even .feature-text-col,
            .feature-section-grid.odd .feature-text-col {
              order: 1 !important;
              align-items: center !important;
            }
            .feature-section-grid.even .feature-img-col,
            .feature-section-grid.odd .feature-img-col {
              order: 2 !important;
            }
            .free-compare-grid { grid-template-columns: 1fr !important; }
            .free-compare-grid > div:nth-child(2) { display: none !important; }
        }
        @media (max-width: 640px) {
            .free-pills { gap: 10px !important; }
            .free-pill { padding: 10px 18px !important; }
            .free-cta-btn { padding: 18px 32px !important; font-size: 17px !important; width: 100%; justify-content: center !important; }
        }
      `}</style>
    </section>

    {/* ── Sticky Mobile CTA Bar ── */}
    <div className="mobile-sticky-cta">
      <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
        <button style={{ background: "rgba(253,253,253,0.08)", color: "#fdfdfd", border: "1px solid rgba(253,253,253,0.15)" }}>
          Book Demo
        </button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
        <button style={{ background: "#b2d93b", color: "#052315" }}>
          Start Free →
        </button>
      </a>
    </div>
    </>
  );
}
