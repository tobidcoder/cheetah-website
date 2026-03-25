"use client";
import { useEffect, useRef, useState } from "react";
import { IconLock, IconZap, IconGlobe, IconSmartphone } from "@/components/Icons";

export function GetStarted() {
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
        position: "relative",
        overflow: "hidden",
        padding: "160px 24px",
        background: "#052315"
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          borderRadius: "64px",
          background: "linear-gradient(135deg, #0a3d24 0%, #052315 100%)",
          border: "1px solid rgba(178,217,59,0.3)",
          padding: "clamp(80px, 12vw, 120px) 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 100px 200px rgba(0,0,0,0.8), 0 0 100px rgba(178,217,59,0.08)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="get-started-box"
      >
        {/* Cinematic Background Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(178,217,59,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(60px)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,135,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(80px)"
          }}
        />
        
        {/* Animated Scanline Overlay */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            opacity: 0.3, 
            pointerEvents: "none",
            backgroundImage: `linear-gradient(rgba(178,217,59,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(178,217,59,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(circle at 50% 50%, black, transparent 90%)"
          }} 
        />

        {/* Content — High Impact */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "32px", background: "rgba(178,217,59,0.15)", backdropFilter: "blur(10px)" }}>
            <span className="dot" />
            Get Started Today
          </div>

          <h2
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(48px, 8vw, 100px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              marginBottom: "32px",
            }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b, #00ff87)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "5px"
              }}
            >
              transform
            </span>
            <br />
            your business?
          </h2>

          <p
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "rgba(253,253,253,0.6)",
              maxWidth: "700px",
              margin: "0 auto 64px",
              lineHeight: 1.5,
              fontWeight: 400
            }}
          >
            Join thousands of retailers using Cheetah to power smarter inventory and seamless point-of-sale. Setup is fast, secure, and start for free.
          </p>

          {/* CTA Buttons — Enhanced */}
          <div
            className="mobile-stack"
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "64px",
              width: "100%",
            }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
               <button className="btn-glow-primary" style={{ fontSize: "18px", padding: "24px 64px", borderRadius: "100px", background: "#b2d93b", color: "#052315", border: "none", fontWeight: 800, cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 10px 40px rgba(178,217,59,0.4)" }}>
                Start for Free - No Card Needed
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
              <button style={{ fontSize: "18px", padding: "24px 56px", borderRadius: "100px", background: "rgba(253,253,253,0.06)", border: "1px solid rgba(253,253,253,0.15)", color: "#fdfdfd", fontWeight: 800, cursor: "pointer", transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                Book a Demo
              </button>
            </a>
          </div>

          {/* Trust Indicators — Modern Cards */}
          <div
            className="trust-indicator-container"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <IconLock size={18} />,       text: "Bank-grade security", accent: "#b2d93b" },
              { icon: <IconZap size={18} />,        text: "5-minute setup", accent: "#00ff87" },
              { icon: <IconGlobe size={18} />,      text: "Global availability", accent: "#60c6f0" },
              { icon: <IconSmartphone size={18} />, text: "Works on any device", accent: "#a78bfa" },
            ].map((item, i) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                  color: "rgba(253,253,253,0.5)",
                  fontWeight: 800,
                  background: "rgba(253,253,253,0.03)",
                  padding: "12px 24px",
                  borderRadius: "100px",
                  border: "1px solid rgba(253,253,253,0.08)",
                  transition: "all 0.4s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 0.1 + 0.8}s`
                }}
                className="trust-pill"
              >
                <span style={{ display: "flex", color: item.accent }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .btn-glow-primary:hover {
            transform: translateY(-5px);
            filter: brightness(1.1);
            box-shadow: 0 25px 60px rgba(178,217,59,0.6) !important;
        }
        .trust-pill:hover {
            background: rgba(253,253,253,0.06) !important;
            border-color: rgba(253,253,253,0.2) !important;
            color: #fdfdfd !important;
            transform: translateY(-3px);
        }

        @media (max-width: 768px) {
            .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
            .get-started-box { border-radius: 40px !important; padding: 80px 20px !important; }
            .mobile-stack { flex-direction: column !important; width: 100% !important; gap: 16px !important; }
            .mobile-stack a, .mobile-stack button { width: 100% !important; justify-content: center !important; }
            .trust-indicator-container { flex-direction: column !important; align-items: center !important; }
            .trust-pill { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
