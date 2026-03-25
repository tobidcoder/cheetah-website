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
          padding: "120px 24px 80px",
          overflow: "hidden",
          background: "#052315",
        }}
      >
        {/* Advanced Dynamic Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <div
                style={{
                position: "absolute",
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140vw",
                height: "120vh",
                background: "radial-gradient(ellipse at center, rgba(178,217,59,0.07) 0%, transparent 70%)",
                zIndex: 0,
                }}
            />
            <div style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(80px)"
            }} />
             <div style={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
                width: "500px",
                height: "500px",
                background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(100px)"
            }} />
            <div
                style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `linear-gradient(rgba(178,217,59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(178,217,59,0.03) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
                opacity: 0.5,
                }}
            />
        </div>

        {/* Hero Section — Modernized */}
        <div
          className="hero-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "1000px",
            zIndex: 1,
            position: "relative",
            marginBottom: "120px"
          }}
        >
          <div 
            className="animate-tag"
            style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "10px", 
                background: "rgba(178,217,59,0.08)",
                border: "1px solid rgba(178,217,59,0.2)",
                padding: "8px 20px",
                borderRadius: "100px",
                marginBottom: "32px",
                backdropFilter: "blur(10px)"
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
              fontSize: "clamp(52px, 10vw, 100px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              marginBottom: "32px",
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
                paddingBottom: "10px"
              }}
            >
              Grow faster.
            </span>
          </h1>

          <p
            className="animate-subline"
            style={{
              fontSize: "clamp(18px, 2.8vw, 22px)",
              color: "rgba(253,253,253,0.6)",
              lineHeight: 1.5,
              maxWidth: "700px",
              marginBottom: "52px",
              fontWeight: 400,
            }}
          >
            Custom-tailored inventory & POS solutions for{" "}
            <strong style={{ color: "#fdfdfd", fontWeight: 600 }}>
              supermarkets, pharmacies, restaurants, retail, and beauty
            </strong>{" "}
            businesses, powered by AI.
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
        .animate-tag { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-headline { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both; }
        .animate-subline { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both; }
        .animate-actions { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both; }
        .animate-trust { animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s both; }
        .dashboard-reveal { animation: dashboardReveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s both; }

        @keyframes dashboardReveal {
            from { opacity: 0; transform: translateY(100px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes float-stat {
            from { transform: translateY(0px); }
            to { transform: translateY(-15px); }
        }

        @keyframes glow-pulse {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 10px rgba(0,255,135,0.4)); }
            50% { opacity: 0.8; filter: drop-shadow(0 0 25px rgba(0,255,135,0.8)); }
        }

        @keyframes pulse-tag {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.6); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
        }

        .play-trigger:hover {
            transform: scale(1.15);
            background: #b2d93b;
            box-shadow: 0 0 0 25px rgba(178,217,59,0.25) !important;
        }

        .btn-glow-primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(178,217,59,0.5) !important;
            filter: brightness(1.1);
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
