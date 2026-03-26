"use client";
import { useEffect, useState } from "react";


export function Introduction() {
  const [segmentIndex, setSegmentIndex] = useState(0);
  const segments = ["Supermarkets", "Pharmacies"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSegmentIndex((prev) => (prev + 1) % segments.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const floatingStats = [
    { value: "80%", label: "Less Stockouts" },
    { value: "+35%", label: "Sales Growth" },
    { value: "10x", label: "ROI" },
  ];

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "160px 24px 10px",
          overflow: "hidden",
          background: "#052315",
        }}
      >
        {/* Cinematic Dynamic Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {/* Base Glow — Dynamic Pulse */}
            <div
                style={{
                position: "absolute",
                top: "-10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "160vw",
                height: "140vh",
                background: "radial-gradient(ellipse at center, rgba(178,217,59,0.08) 0%, transparent 70%)",
                zIndex: 0,
                animation: "pulseGlow 15s infinite alternate ease-in-out"
                }}
            />
            {/* Animated Floating Orbs */}
            <div className="bg-orb orb-green-top" style={{
                position: "absolute",
                top: "5%",
                left: "5%",
                width: "700px",
                height: "700px",
                background: "radial-gradient(circle, rgba(0,255,135,0.06) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(100px)",
                animation: "orbFloat 25s infinite alternate ease-in-out"
            }} />
             <div className="bg-orb orb-violet-bottom" style={{
                position: "absolute",
                bottom: "-5%",
                right: "0%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(120px)",
                animation: "orbFloat 35s infinite alternate-reverse ease-in-out"
            }} />
            <div className="bg-orb orb-sky-mid" style={{
                position: "absolute",
                top: "40%",
                right: "10%",
                width: "500px",
                height: "500px",
                background: "radial-gradient(circle, rgba(96,198,240,0.04) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(90px)",
                animation: "orbFloat 30s infinite alternate ease-in-out"
            }} />
            
            {/* Refined Grid System — Slow Scroll & Shimmer */}
            <div
                style={{
                position: "absolute",
                inset: "-100%",
                backgroundImage: `linear-gradient(rgba(178,217,59,0.03) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(178,217,59,0.03) 1.5px, transparent 1.5px)`,
                backgroundSize: "80px 80px",
                maskImage: "radial-gradient(circle at 50% 50%, black, transparent 90%)",
                opacity: 0.6,
                animation: "gridScroll 40s linear infinite, gridShimmer 10s infinite alternate-reverse"
                }}
            />
            
            {/* Noise/Grain Overlay */}
            <div className="noise-overlay" />
            
            {/* Light Streak */}
            <div className="light-streak" />

            {/* Floating Particles */}
            <div className="floating-particles" />
        </div>

        {/* Hero Section — Premium Typography Layout */}
        <div
          className="hero-grid"
          style={{
            width: "100%",
            maxWidth: "1160px",
            zIndex: 1,
            position: "relative",
            marginBottom: "140px",
            padding: "0 10px"
          }}
        >
          {/* Main Content */}
          <div style={{ textAlign: "left", width: "100%" }}>
            <div 
              className="animate-tag hero-tag-pill"
              style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "10px", 
                  background: "rgba(178,217,59,0.06)",
                  border: "1px solid rgba(178,217,59,0.2)",
                  padding: "10px 22px",
                  borderRadius: "100px",
                  marginBottom: "36px",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(178,217,59,0.05)"
              }}
            >
              <span style={{ width: "8px", height: "8px", background: "#b2d93b", borderRadius: "50%", display: "block", animation: "pulse-tag 2s infinite", boxShadow: "0 0 8px rgba(178,217,59,0.6)" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(178,217,59,0.9)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Industry-First: Supermarket & Pharmacy OS
              </span>
            </div>

            <h1
              className="animate-headline"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 850,
                letterSpacing: "-0.06em",
                marginBottom: "20px",
                color: "#e2e8e0",
                lineHeight: 0.95,
                fontSize: "clamp(42px, 7vw, 92px)"
              }}
            >
              The only <span style={{ color: "#b2d93b" }}>OS</span> that <span style={{ color: "#FF6B6B" }}>stops theft</span> <br />
              and handles <span style={{ color: "#b2d93b" }}>PCN, NAFDAC & Tax</span> compliance <br />
              <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginTop: "16px", justifyContent: "inherit" }}>
                <span style={{ 
                    fontSize: "clamp(32px, 5vw, 70px)", 
                    color: "rgba(178,217,59,0.4)", 
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    fontFamily: "Syne, sans-serif"
                }}>
                  for
                </span>
                <span 
                    key={segmentIndex} 
                    className="text-interchange"
                    style={{ 
                        fontSize: "clamp(42px, 7.5vw, 105px)", 
                        color: "#b9d565ff", 
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        fontFamily: "Syne, sans-serif",
                        display: "inline-block"
                    }}
                >
                  {segments[segmentIndex]}
                </span>
              </div>
            </h1>

            <p
              className="animate-subline"
              style={{
                fontSize: "18px",
                color: "rgba(226,232,224,0.5)",
                lineHeight: 1.6,
                maxWidth: "720px",
                marginBottom: "48px",
                fontWeight: 500,
                letterSpacing: "-0.01em"
              }}
            >
              The ultimate OS for high-growth retail. Scale across branches with offline-first POS, AI inventory autopilot, and real-time syncing while fully automating your PCN, NAFDAC, and Tax compliance under AES-256 military-grade protection.
            </p>

            <div
              className="animate-actions"
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "48px"
              }}
            >
              <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ textDecoration: "none" }}>
                <button className="btn-glow-primary" style={{ fontSize: "16px", padding: "18px 40px", background: "#b2d93b", color: "#052315", border: "none", borderRadius: "100px", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)", boxShadow: "0 10px 30px rgba(178,217,59,0.3)" }}>
                  Get Started, Free
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" style={{ textDecoration: "none" }}>
                <button style={{ fontSize: "16px", padding: "18px 40px", background: "rgba(253,253,253,0.05)", color: "#fdfdfd", border: "1px solid rgba(253,253,253,0.15)", borderRadius: "100px", fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease", backdropFilter: "blur(10px)" }}>Book Demo</button>
              </a>
            </div>

            <div className="animate-trust" style={{ display: "flex", gap: "24px", opacity: 0.6 }}>
              {["✓ 14-day trial", "✓ No card", "✓ Instant setup"].map((text) => (
                <span key={text} style={{ fontSize: "13px", fontWeight: 600, color: "#fdfdfd", letterSpacing: "0.02em" }}>{text}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Velocity Mini-Section — High Performance Animation */}
        <div 
          className="velocity-card"
          style={{
            width: "100%",
            maxWidth: "1160px",
            background: "rgba(10,61,36,0.25)",
            border: "1px solid rgba(178,217,59,0.15)",
            borderRadius: "48px",
            padding: "100px 40px",
            textAlign: "center",
            marginBottom: "120px",
            zIndex: 1,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
          }}
        >
            <div 
                style={{
                    position: "absolute",
                    top: "-50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(178,217,59,0.1) 0%, transparent 70%)",
                    zIndex: 0,
                    filter: "blur(40px)"
                }}
            />
            
            <div style={{ position: "relative", zIndex: 1, animation: "fadeInUp 1s ease both" }}>
                <span className="velocity-tag" style={{ fontSize: "14px", fontWeight: 800, color: "#b2d93b", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px", display: "inline-block", background: "rgba(178,217,59,0.1)", padding: "6px 20px", borderRadius: "100px", border: "1px solid rgba(178,217,59,0.2)" }}>
                    The Future of Retail Velocity
                </span>
                <h2 style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "clamp(48px, 8vw, 84px)",
                    fontWeight: 800,
                    color: "#fdfdfd",
                    lineHeight: 0.9,
                    letterSpacing: "-0.05em",
                    marginBottom: "36px"
                }}>
                    Accelerate <span style={{ color: "#00ff87", animation: "glow-pulse 3s infinite" }}>Everything.</span>
                </h2>
                <p style={{
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    color: "rgba(253,253,253,0.55)",
                    lineHeight: 1.5,
                    maxWidth: "760px",
                    margin: "0 auto",
                    fontWeight: 500
                }}>
                    Cheetah OS is the high-performance operating system for modern retailers. Built for speed, engineered for scale, and hardened for total security.
                </p>
            </div>
        </div>

        {/* Stats Section — Animated Floating Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "100px",
            zIndex: 1,
            width: "100%",
            maxWidth: "1160px",
          }}
        >
          {floatingStats.map((stat, i) => (
            <div
              key={stat.value}
              className="stat-card"
              style={{
                padding: "48px 32px",
                textAlign: "center",
                transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(253,253,253,0.03)",
                border: "1px solid rgba(253,253,253,0.1)",
                borderRadius: "32px",
                animation: `float-stat 4s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.5}s`
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.4)";
                (e.currentTarget as HTMLElement).style.background = "rgba(178,217,59,0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-12px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(253,253,253,0.1)";
                (e.currentTarget as HTMLElement).style.background = "rgba(253,253,253,0.03)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(48px, 5vw, 64px)",
                  fontWeight: 800,
                  color: "#b2d93b",
                  letterSpacing: "-0.04em",
                  fontFamily: "Syne, sans-serif",
                  lineHeight: 1
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "rgba(253,253,253,0.4)",
                  fontWeight: 700,
                  marginTop: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </section>

      <style>{`
        .animate-tag { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-headline { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s both; }
        .animate-subline { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both; }
        .animate-actions { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.45s both; }
        .animate-trust { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s both; }
        .animate-segments { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.75s both; }

        .illust-card {
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: default;
        }
        .illust-card:hover {
            transform: translateY(-4px) translateX(-4px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .illust-card:nth-child(2) { animation-delay: 0.1s; }
        .illust-card:nth-child(3) { animation-delay: 0.2s; }
        .illust-card:nth-child(4) { animation-delay: 0.3s; }
        .illust-card:nth-child(5) { animation-delay: 0.4s; }

        .text-interchange {
            animation: slideUpIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes slideUpIn {
            from { opacity: 0; transform: translateY(20px) rotateX(-15deg); filter: blur(8px); }
            to { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0); }
        }

        .hero-tag-pill {
            transition: all 0.4s ease;
        }
        .hero-tag-pill:hover {
            background: rgba(178,217,59,0.1) !important;
            box-shadow: 0 4px 24px rgba(178,217,59,0.15), inset 0 0 0 1px rgba(178,217,59,0.1) !important;
        }

        .segment-card {
            background: rgba(253,253,253,0.03);
            border: 1px solid rgba(253,253,253,0.08);
            border-radius: 32px;
            padding: 40px;
            text-align: left;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: default;
        }
        .segment-card:hover {
            background: rgba(253,253,253,0.06);
            border-color: rgba(178,217,59,0.3);
            transform: translateY(-8px);
        }
        .segment-icon {
            width: 52px;
            height: 52px;
            border-radius: 16px;
            background: rgba(178,217,59,0.1);
            color: #b2d93b;
            display: flex;
            alignItems: center;
            justifyContent: center;
            margin-bottom: 24px;
        }
        .segment-title {
            font-family: "Syne", sans-serif;
            font-size: 24px;
            font-weight: 800;
            color: #fdfdfd;
            margin-bottom: 12px;
        }
        .segment-desc {
            font-size: 16px;
            color: rgba(253,253,253,0.5);
            line-height: 1.5;
            max-width: 300px;
        }
        .segment-glow {
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 100px;
            height: 100px;
            filter: blur(40px);
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        .segment-card:hover .segment-glow { opacity: 0.3; }
        .s-supermarket { background: #b2d93b; }
        .s-pharmacy { background: #00ff87; }

        .noise-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            opacity: 0.06;
            pointer-events: none;
            background-image: url("https://grainy-gradients.vercel.app/noise.svg");
            filter: contrast(170%) brightness(1000%);
        }

        .bg-orb {
            transition: all 1s ease;
        }

        @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); filter: blur(100px); }
            33% { transform: translate(100px, 60px) scale(1.2) rotate(10deg); filter: blur(140px); }
            66% { transform: translate(-60px, 100px) scale(0.8) rotate(-10deg); filter: blur(120px); }
            100% { transform: translate(0, 0) scale(1) rotate(0deg); filter: blur(100px); }
        }

        .floating-particles {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 2px 2px, rgba(178,217,59,0.2) 1px, transparent 0);
            background-size: 50px 50px;
            mask-image: radial-gradient(circle at 50% 50%, black, transparent 90%);
            animation: particleFloat 30s linear infinite;
            z-index: 1;
        }

        @keyframes particleFloat {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
            100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
        }

        @keyframes pulseGlow {
            0% { transform: translateX(-50%) scale(1); opacity: 0.7; }
            50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
            100% { transform: translateX(-50%) scale(1); opacity: 0.7; }
        }

        @keyframes gridScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(80px); }
        }

        @keyframes gridShimmer {
            0% { opacity: 0.3; }
            50% { opacity: 0.7; }
            100% { opacity: 0.3; }
        }

        .light-streak {
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent 0%,
                rgba(178, 217, 59, 0.04) 50%,
                transparent 100%
            );
            transform: rotate(-45deg);
            z-index: 1;
            animation: streakMove 15s infinite linear;
            pointer-events: none;
        }

        @keyframes streakMove {
            0% { transform: translate(-100%, -100%) rotate(-45deg); }
            100% { transform: translate(100%, 100%) rotate(-45deg); }
        }

        @keyframes orbFloat {
            0% { transform: translate(0, 0) scale(1); filter: blur(100px); }
            33% { transform: translate(60px, 40px) scale(1.1); filter: blur(120px); }
            66% { transform: translate(-40px, 60px) scale(0.9); filter: blur(110px); }
            100% { transform: translate(0, 0) scale(1); filter: blur(100px); }
        }

        @keyframes dashboardReveal {
            from { opacity: 0; transform: translateY(120px) scale(0.92); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes float-stat {
            from { transform: translateY(0px); }
            to { transform: translateY(-20px); }
        }

        @keyframes glow-pulse {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 15px rgba(0,255,135,0.3)); }
            50% { opacity: 0.8; filter: drop-shadow(0 0 30px rgba(0,255,135,0.7)); }
        }

        @keyframes pulse-tag {
            0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(178,217,59,0.4); }
            50% { transform: scale(1.4); opacity: 0.6; box-shadow: 0 0 0 10px rgba(178,217,59,0); }
            100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(178,217,59,0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); filter: blur(5px); }
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .play-trigger:hover {
            transform: scale(1.15);
            background: #b2d93b;
            box-shadow: 0 0 0 30px rgba(178,217,59,0.2) !important;
        }

        .btn-glow-primary:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 50px rgba(178,217,59,0.4) !important;
            filter: brightness(1.1);
        }

        .stat-card:hover {
            box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(178,217,59,0.05);
        }

        @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
            .hero-grid > div { text-align: center !important; }
            .animate-actions { justify-content: center !important; }
            .animate-trust { justify-content: center !important; }
        }
        @media (max-width: 768px) {
            .hero-grid { margin-bottom: 80px !important; padding: 0 16px !important; }
            .velocity-card { padding: 60px 24px !important; border-radius: 32px !important; }
            .animate-actions { flex-direction: column; width: 100%; gap: 16px !important; }
            .animate-actions button { width: 100%; justify-content: center; }
            .illust-card { margin-left: 0 !important; padding: 20px 22px !important; }
            .animate-segments { grid-template-columns: 1fr !important; gap: 16px !important; }
            .segment-card { padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
