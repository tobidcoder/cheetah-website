"use client";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

export function Introduction() {
  const [opened, { open, close }] = useDisclosure(false);
  const [imgLoaded, setImgLoaded] = useState(false);

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
          padding: "160px 24px 100px",
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
            
            {/* Refined Grid System — Slow Scroll */}
            <div
                style={{
                position: "absolute",
                inset: "-100%",
                backgroundImage: `linear-gradient(rgba(178,217,59,0.02) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(178,217,59,0.02) 1.5px, transparent 1.5px)`,
                backgroundSize: "80px 80px",
                maskImage: "radial-gradient(circle at 50% 50%, black, transparent 90%)",
                opacity: 0.6,
                animation: "gridScroll 60s linear infinite"
                }}
            />
            
            {/* Noise/Grain Overlay */}
            <div className="noise-overlay" />
            
            {/* Light Streak */}
            <div className="light-streak" />

            {/* Floating Particles */}
            <div className="floating-particles" />
        </div>

        {/* Hero Section — Premium Typography */}
        <div
          className="hero-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "1100px",
            zIndex: 1,
            position: "relative",
            marginBottom: "140px"
          }}
        >
          <div 
            className="animate-tag"
            style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "12px", 
                background: "rgba(178,217,59,0.1)",
                border: "1px solid rgba(178,217,59,0.15)",
                padding: "10px 24px",
                borderRadius: "100px",
                marginBottom: "40px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
            }}
          >
            <span style={{ width: "6px", height: "6px", background: "#b2d93b", borderRadius: "50%", display: "block", animation: "pulse-tag 2s infinite" }} />
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#b2d93b", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              AI-Powered Retail Intelligence
            </span>
          </div>

          <h1
            className="animate-headline"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(56px, 11vw, 112px)",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-0.055em",
              marginBottom: "40px",
              color: "#fdfdfd",
            }}
          >
            Sell smarter. <br />
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b 0%, #00ff87 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "12px",
                display: "inline-block"
              }}
            >
              Grow faster.
            </span>
          </h1>

          <p
            className="animate-subline"
            style={{
              fontSize: "clamp(20px, 3.2vw, 26px)",
              color: "rgba(253,253,253,0.55)",
              lineHeight: 1.4,
              maxWidth: "800px",
              marginBottom: "64px",
              fontWeight: 400,
              letterSpacing: "-0.01em"
            }}
          >
            Custom-tailored inventory & POS solutions for{" "}
            <strong style={{ color: "rgba(253,253,253,0.9)", fontWeight: 600 }}>
              supermarkets, pharmacies, restaurants, retail, and beauty
            </strong>{" "}
            businesses — powered by AI.
          </p>

          <div
            className="animate-actions"
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "80px",
              width: "100%",
            }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ textDecoration: "none" }}>
              <button
                className="btn-glow-primary"
                style={{ 
                    fontSize: "17px", 
                    padding: "20px 48px", 
                    background: "#b2d93b", 
                    color: "#052315",
                    border: "none",
                    borderRadius: "100px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                    boxShadow: "0 10px 30px rgba(178,217,59,0.3)"
                }}
              >
                Get Started, It&apos;s Free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" style={{ textDecoration: "none" }}>
              <button
                style={{ 
                    fontSize: "17px", 
                    padding: "20px 44px", 
                    background: "rgba(253,253,253,0.05)", 
                    color: "#fdfdfd",
                    border: "1px solid rgba(253,253,253,0.15)",
                    borderRadius: "100px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(253,253,253,0.1)";
                    el.style.borderColor = "rgba(253,253,253,0.3)";
                }}
                onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(253,253,253,0.05)";
                    el.style.borderColor = "rgba(253,253,253,0.15)";
                }}
              >
                Book a Demo
              </button>
            </a>
          </div>

          <div
            className="animate-trust"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "✓ Free 14-day trial",
              "✓ No credit card needed",
              "✓ Setup in minutes",
            ].map((text) => (
              <span
                key={text}
                style={{
                  fontSize: "14px",
                  color: "rgba(253,253,253,0.45)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {text}
              </span>
            ))}
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

        {/* Dashboard Preview — Cinematic Reveal */}
        <div
          className="dashboard-reveal"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={open}
        >
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              background: "radial-gradient(ellipse, rgba(178,217,59,0.15) 0%, transparent 70%)",
              borderRadius: "50px",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              borderRadius: "40px",
              overflow: "hidden",
              border: "1px solid rgba(178,217,59,0.2)",
              boxShadow: "0 80px 180px rgba(0,0,0,0.8), 0 0 80px rgba(178,217,59,0.07)",
              zIndex: 1,
              background: "rgba(10,35,21,0.6)",
              padding: "16px"
            }}
          >
            <div style={{ borderRadius: "26px", overflow: "hidden", position: "relative" }}>
                <Image
                src="/images/dashboard-overview.png"
                alt="Cheetah Terminal Interface"
                width={1200}
                height={680}
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: imgLoaded ? 1 : 0,
                    transition: "opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    transform: imgLoaded ? "scale(1)" : "scale(1.05)",
                }}
                onLoad={() => setImgLoaded(true)}
                priority
                />
                
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(5,35,21,0.15)",
                        transition: "background 0.5s ease"
                    }}
                >
                    <div
                        className="play-trigger"
                        style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: "rgba(178,217,59,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 0 0 rgba(178,217,59,0.5)",
                        transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                        }}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#052315" style={{ marginLeft: "5px" }}>
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-tag { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-headline { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s both; }
        .animate-subline { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both; }
        .animate-actions { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.45s both; }
        .animate-trust { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s both; }
        .dashboard-reveal { animation: dashboardReveal 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s both; }

        .noise-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            opacity: 0.04;
            pointer-events: none;
            background-image: url("https://grainy-gradients.vercel.app/noise.svg");
            filter: contrast(170%) brightness(1000%);
        }

        .floating-particles {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 2px 2px, rgba(178,217,59,0.15) 1px, transparent 0);
            background-size: 40px 40px;
            mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
            animation: particleFloat 40s linear infinite;
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

        @media (max-width: 768px) {
            .hero-container { margin-bottom: 80px !important; }
            .velocity-card { padding: 60px 24px !important; border-radius: 32px !important; }
            .dashboard-reveal { margin-top: 40px; }
            .dashboard-reveal > div:first-child { inset: -20px !important; }
            .animate-actions { flex-direction: column; width: 100%; gap: 16px !important; }
            .animate-actions button { width: 100%; justify-content: center; }
            .play-trigger { width: 70px !important; height: 70px !important; }
            .play-trigger svg { width: 28px !important; height: 28px !important; }
        }
      `}</style>

      {/* Modern Video Interface */}
      <Modal
        opened={opened}
        onClose={close}
        size="calc(100vw - 40px)"
        centered
        padding={0}
        withCloseButton={false}
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
            maxWidth: "1280px",
            borderRadius: "32px",
            overflow: "hidden"
          },
          body: { padding: 0 }
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(178,217,59,0.3)" }}>
           <button 
                onClick={close}
                style={{ 
                    position: "absolute", 
                    top: "32px", 
                    right: "32px", 
                    zIndex: 10, 
                    width: "52px", 
                    height: "52px", 
                    borderRadius: "50%", 
                    background: "rgba(0,0,0,0.7)", 
                    border: "1px solid rgba(255,255,255,0.2)", 
                    color: "#fff", 
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
            <iframe
                style={{ height: "90%", width: "90%", border: "none" }}
                src="https://www.youtube.com/embed/yyKnT1jRbr8?si=NKEQKtAEs4i6gL4M&autoplay=1"
                title="Cheetah OS Masterclass"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
      </Modal>
    </>
  );
}
