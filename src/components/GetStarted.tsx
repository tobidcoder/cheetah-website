"use client";
import { IconLock, IconZap, IconGlobe, IconSmartphone } from "@/components/Icons";

export function GetStarted() {
  return (
    <section
      className="section-padding"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="mobile-text-center"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderRadius: "32px",
          background: "linear-gradient(135deg, #052315 0%, #0a3d24 50%, #052315 100%)",
          border: "1px solid rgba(178,217,59,0.2)",
          padding: "clamp(60px, 10vw, 80px) clamp(24px, 5vw, 48px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div
          className="desktop-only"
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(178,217,59,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(178,217,59,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="grid-pattern"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            pointerEvents: "none",
            borderRadius: "32px",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "24px" }}>
            <span className="dot" />
            Get Started Today
          </div>

          <h2
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(32px, 6vw, 68px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b, #c8e85f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              transform
            </span>
            <br />
            your business?
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "rgba(253,253,253,0.6)",
              maxWidth: "520px",
              margin: "0 auto 48px",
              lineHeight: 1.65,
            }}
          >
            Join thousands of retailers using Cheetah to power smarter inventory and seamless point-of-sale. Setup is fast, secure, and start for free.
          </p>

          {/* CTA Buttons */}
          <div
            className="mobile-stack"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "48px",
              width: "100%",
            }}
          >
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://back-office.usecheetah.com/"
              className="mobile-full-width"
            >
              <button
                className="btn-primary"
                style={{ fontSize: "17px", padding: "18px 44px", width: "100%" }}
              >
                Start for Free — No Card Needed
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/cheetahdemo/30min"
              className="mobile-full-width"
            >
              <button
                className="mobile-full-width"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "rgba(253,253,253,0.08)",
                  border: "2px solid rgba(253,253,253,0.2)",
                  borderRadius: "50px",
                  color: "#fdfdfd",
                  fontWeight: 600,
                  fontSize: "17px",
                  padding: "18px 44px",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "#b2d93b";
                  el.style.color = "#b2d93b";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(253,253,253,0.2)";
                  el.style.color = "#fdfdfd";
                  el.style.transform = "translateY(0)";
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book a Demo
              </button>
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <IconLock size={16} />,       text: "Bank-grade security" },
              { icon: <IconZap size={16} />,        text: "5-minute setup" },
              { icon: <IconGlobe size={16} />,      text: "Pan-African support" },
              { icon: <IconSmartphone size={16} />, text: "Works on any device" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "rgba(253,253,253,0.45)",
                  fontWeight: 500,
                }}
              >
                <span style={{ display: "flex", color: "rgba(178,217,59,0.5)" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
