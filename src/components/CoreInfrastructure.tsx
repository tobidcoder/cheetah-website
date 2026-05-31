"use client";
import { useEffect, useRef, useState } from "react";
import { 
  IconBarChart, 
  IconShield, 
  IconRefreshCw, 
  IconWifi, 
  IconZap, 
  IconClipboard, 
  IconLink, 
  IconPackage,
  IconLock
} from "@/components/Icons";

export function CoreInfrastructure() {
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
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "clamp(80px, 12vw, 140px) 24px",
        position: "relative",
      }}
    >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "24px", backdropFilter: "blur(10px)" }}>
                <span className="dot" />
                Hyper-Scale Architecture
            </div>
            <h2 style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(38px, 6vw, 68px)",
                fontWeight: 800,
                color: "#fdfdfd",
                letterSpacing: "-0.05em",
                lineHeight: 1,
                maxWidth: "900px",
                margin: "0 auto 24px"
            }}>
                Built for <span style={{ color: "#00ff87" }}>Offline Resilience</span> & Unified Control
            </h2>
            <p style={{ color: "rgba(253,253,253,0.55)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                The engine powering independent grocers across the country.
            </p>
        </div>

      <div className="core-infra-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: "24px",
      }}>
        
        {/* Row 1: Advanced Analysis (60%) + Fraud Lockdown (40%) */}
        <div 
            className="infra-card"
            style={{
            gridColumn: "span 6",
            background: "linear-gradient(135deg, rgba(10, 61, 36, 0.5) 0%, rgba(5, 35, 21, 0.2) 100%)",
            border: "1px solid rgba(178, 217, 59, 0.18)",
            borderRadius: "40px",
            position: "relative",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "400px"
        }}>
          {/* Text side */}
          <div style={{ padding: "clamp(32px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ 
                width: "40px", height: "40px", borderRadius: "12px", 
                background: "rgba(178, 217, 59, 0.15)", display: "flex", 
                alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(178, 217, 59, 0.2)"
              }}>
                  <IconBarChart size={20} color="#b2d93b" />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "rgba(178, 217, 59, 0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Predictive AI Engine
              </span>
            </div>
            <h3 style={{ 
              fontFamily: "Syne, sans-serif", 
              fontSize: "clamp(26px, 3.5vw, 42px)", 
              fontWeight: 800, color: "#fdfdfd", 
              marginBottom: "16px", lineHeight: 1.05, letterSpacing: "-0.04em"
            }}>
              Advanced Analysis & <span style={{ color: "rgba(253,253,253,0.35)", fontWeight: 500, fontStyle: "italic" }}>AI Forecasting</span>
            </h3>
            <p style={{ fontSize: "16px", color: "rgba(253,253,253,0.55)", lineHeight: 1.6, marginBottom: "32px" }}>
              Cheetah AI anticipates demand cycles before they materialize — for supermarkets and pharmacies alike.
            </p>
            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "#00ff87", fontFamily: "Syne, sans-serif", lineHeight: 1 }}>99.9%</div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "rgba(253,253,253,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px" }}>Accuracy</div>
              </div>
              <div>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "#a78bfa", fontFamily: "Syne, sans-serif", lineHeight: 1 }}>&lt;2s</div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: "rgba(253,253,253,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px" }}>Sync Latency</div>
              </div>
            </div>
          </div>
          {/* Video side */}
          <div style={{ position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(178,217,59,0.1)" }}>
            <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
              <source src="https://www.pexels.com/download/video/14936143/" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,35,21,0.5) 0%, transparent 40%)" }} />
          </div>
        </div>

        <div 
            className="infra-card"
            style={{
            gridColumn: "span 4",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(255, 107, 107, 0.04) 0%, rgba(5, 35, 21, 0.4) 100%)",
            border: "1px solid rgba(255, 107, 107, 0.18)",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s",
        }}>
          {/* Subtle Hazard Pattern Background */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", opacity: 0.05, background: "repeating-linear-gradient(45deg, #ff6b6b, #ff6b6b 10px, transparent 10px, transparent 20px)", pointerEvents: "none" }} />

          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "32px" }}>
                <div style={{ 
                width: "56px", 
                height: "56px", 
                borderRadius: "16px", 
                background: "rgba(255, 107, 107, 0.12)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                border: "1px solid rgba(255, 107, 107, 0.25)"
                }}>
                    <IconShield size={28} color="#ff6b6b" />
                </div>
                <div style={{ 
                    padding: "6px 14px", 
                    background: "rgba(255, 107, 107, 0.08)", 
                    borderRadius: "100px", 
                    border: "1px solid rgba(255,107,107,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <div style={{ width: "6px", height: "6px", background: "#ff6b6b", borderRadius: "50%", animation: "pulse-dot 2s infinite" }} />
                    <span style={{ fontSize: "10px", fontWeight: 800, color: "#ff6b6b", textTransform: "uppercase", letterSpacing: "0.15em" }}>Threat Level: Zero</span>
                </div>
            </div>
            <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: 800, color: "#fdfdfd", marginBottom: "16px", letterSpacing: "-0.04em" }}>
              Eliminate Fraud
            </h4>
            <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.55)", lineHeight: 1.6, marginBottom: "32px" }}>
              Zero-trust biometric verification and instant transaction auditing. Zero leakage policy across every terminal.
            </p>

            {/* Live Audit Stream Widget */}
            <div style={{ 
                background: "rgba(0,0,0,0.2)", 
                borderRadius: "20px", 
                padding: "20px", 
                border: "1px solid rgba(255,107,107,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
            }}>
                {[
                    { label: "Biometric Verified", time: "Just now", status: "match" },
                    { label: "Terminal 04 Audited", time: "2s ago", status: "match" },
                    { label: "Stock Reconciled", time: "14s ago", status: "match" }
                ].map((audit, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", opacity: 1 - (i * 0.25) }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00ff87" }} />
                            <span style={{ color: "rgba(253,253,253,0.8)", fontWeight: 700 }}>{audit.label}</span>
                        </div>
                        <span style={{ color: "rgba(253,253,253,0.4)", fontWeight: 600 }}>{audit.time}</span>
                    </div>
                ))}
            </div>
          </div>
          
          <div style={{ 
            marginTop: "auto", 
            paddingTop: "24px", 
            borderTop: "1px solid rgba(255,107,107,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,107,107,0.5)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Active Defense Enabled</span>
            <div style={{ display: "flex", gap: "4px" }}>
                {[1,2,3].map(i => <div key={i} style={{ width: "12px", height: "2px", background: "#ff6b6b", opacity: 0.3 + (i * 0.2) }} />)}
            </div>
          </div>
        </div>

        {/* Row 2: Multi-Branch (1/4) + Offline Core (2/4) + Capital Access (1/4) */}
        <div 
            className="infra-card"
            style={{
            gridColumn: "span 3",
            padding: "44px",
            background: "rgba(253, 253, 253, 0.02)",
            border: "1px solid rgba(253, 253, 253, 0.08)",
            borderRadius: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
        }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(178,217,59,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", border: "1px solid rgba(178,217,59,0.15)" }}>
             <IconRefreshCw size={24} color="#b2d93b" />
          </div>
          <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "22px", fontWeight: 800, color: "#fdfdfd", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Multi-Branch Sync
          </h4>
          <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.5)", lineHeight: 1.6 }}>
            Global command of unlimited locations from a single synchronized dashboard. Clear view of everything at a glance.
          </p>
        </div>

        <div className="standout-card" style={{
          gridColumn: "span 4",
          padding: "48px 56px",
          background: "linear-gradient(135deg, #00ff87 0%, #00d16c 100%)",
          borderRadius: "40px",
          color: "#052315",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s",
          boxShadow: "0 40px 80px rgba(0,255,135,0.2)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", position: "relative", zIndex: 1 }}>
            <IconWifi size={36} color="#052315" strokeWidth={2.5} />
            <span style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", background: "rgba(5,35,21,0.12)", padding: "6px 14px", borderRadius: "100px", border: "1px solid rgba(5,35,21,0.1)" }}>Status: Ultra Stable</span>
          </div>
          <div style={{ marginTop: "48px", position: "relative", zIndex: 1 }}>
            <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "44px", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.05em", lineHeight: 1 }}>
              Offline Core
            </h4>
            <p style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.5, opacity: 0.85, maxWidth: "480px" }}>
              Zero-downtime operations. Local first, cloud persistent. No more loss of data during power cuts.
            </p>
          </div>
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        <div 
            className="infra-card"
            style={{
            gridColumn: "span 3",
            padding: "44px",
            background: "rgba(253, 253, 253, 0.02)",
            border: "1px solid rgba(253, 253, 253, 0.08)",
            borderRadius: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s",
        }}>
           <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(167,139,250,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", border: "1px solid rgba(167,139,250,0.15)" }}>
             <IconZap size={24} color="#a78bfa" />
          </div>
          <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "22px", fontWeight: 800, color: "#fdfdfd", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Capital Access
          </h4>
          <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.5)", lineHeight: 1.6 }}>
            Integrated accounting with instant liquidity and business growth loans based on your real performance.
          </p>
        </div>

        {/* Row 3: Inventory Autopilot (2/4) + Integrations (1/4) + Logistics (1/4) */}
        <div 
            className="infra-card infra-flex-row"
            style={{
            gridColumn: "span 5",
            padding: "48px",
            background: "rgba(10, 61, 36, 0.35)",
            border: "1px solid rgba(178, 217, 59, 0.15)",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s",
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(178,217,59,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", border: "1px solid rgba(178,217,59,0.15)" }}>
                <IconClipboard size={24} color="#b2d93b" />
            </div>
            <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: 800, color: "#fdfdfd", marginBottom: "16px", letterSpacing: "-0.04em" }}>
              Inventory Autopilot
            </h4>
            <p style={{ fontSize: "16px", color: "rgba(253,253,253,0.55)", lineHeight: 1.6 }}>
              Intelligent restocking for Supermarkets and automated <span style={{ color: "#00ff87" }}>PCN-compliant</span> expiry management for Pharmacies. Never lose a sale or fail an audit.
            </p>
          </div>
          <div style={{ 
            padding: "24px 32px", 
            background: "rgba(178, 217, 59, 0.05)", 
            borderRadius: "24px",
            border: "1px solid rgba(178, 217, 59, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "12px",
            flexShrink: 0,
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#b2d93b", animation: "pulse-dot 2s infinite" }} />
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#b2d93b", letterSpacing: "0.2em", textAlign: "center" }}>AI ACTIVE</span>
          </div>
        </div>

        <div 
            className="infra-card"
            style={{
            gridColumn: "span 3",
            padding: "44px",
            background: "rgba(253, 253, 253, 0.02)",
            border: "1px solid rgba(253, 253, 253, 0.08)",
            borderRadius: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.7s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <IconLink size={20} color="#b2d93b" />
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#fdfdfd", textTransform: "uppercase", letterSpacing: "0.15em" }}>Integrations</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {['Shopify', 'Jumia', 'Konga', 'OpenCart'].map(tag => (
              <span key={tag} style={{ 
                fontSize: "11px", 
                fontWeight: 700, 
                padding: "10px 16px", 
                background: "rgba(253,253,253,0.05)", 
                color: "rgba(253,253,253,0.8)",
                borderRadius: "10px",
                border: "1px solid rgba(253,253,253,0.12)",
                transition: "all 0.3s ease"
              }}
              className="tag-hover"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
            className="infra-card"
            style={{
            gridColumn: "span 2",
            padding: "44px",
            background: "rgba(253, 253, 253, 0.02)",
            border: "1px solid rgba(253, 253, 253, 0.08)",
            borderRadius: "40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.8s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <IconPackage size={20} color="#b2d93b" />
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#fdfdfd", textTransform: "uppercase", letterSpacing: "0.15em" }}>Logistics</span>
          </div>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "rgba(253,253,253,0.45)", lineHeight: 1.6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Native <span style={{ color: "#b2d93b" }}>GIG Logistics</span> node integration active for instant deliveries.
          </p>
        </div>

      {/* Full width bottom bar — Cyber Security Aesthetics */}
      
      </div>

      <style>{`
        .infra-card {
           transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
           backdrop-filter: blur(16px);
        }
        .infra-card:hover {
          background: rgba(10, 61, 36, 0.45) !important;
          border-color: rgba(178, 217, 59, 0.4) !important;
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(178,217,59,0.1);
          z-index: 10;
        }
        .standout-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          box-shadow: 0 50px 100px rgba(0,255,135,0.4) !important;
        }
        .tag-hover:hover {
            background: rgba(178,217,59,0.1) !important;
            border-color: rgba(178,217,59,0.4) !important;
            color: #b2d93b !important;
            transform: scale(1.05);
        }
        @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(50%); }
        }
        @media (max-width: 1100px) {
          .core-infra-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            gap: 20px !important;
          }
          .infra-card, .standout-card, .security-annoucement-bar { 
            grid-column: span 2 !important; 
            padding: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .infra-stats-row { 
            flex-direction: column; 
            gap: 32px !important; 
          }
          .security-annoucement-bar {
            padding: 24px !important;
            border-radius: 40px !important;
          }
          .security-annoucement-bar span {
            font-size: 11px !important;
            letter-spacing: 0.15em !important;
          }
        }
        @media (max-width: 640px) {
          .core-infra-grid { 
            grid-template-columns: 1fr !important; 
            gap: 16px !important;
          }
          .infra-card, .standout-card, .security-annoucement-bar { 
            grid-column: span 1 !important; 
            padding: 40px 24px !important; 
          }
          .security-annoucement-bar { 
            border-radius: 32px; 
            flex-direction: column; 
            gap: 20px; 
            text-align: center; 
          }
          .infra-flex-row { 
            flex-direction: column; 
            gap: 32px !important; 
            text-align: center; 
          }
          .infra-flex-row > div { 
            width: 100%; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
          }
          .header-text-container p {
            font-size: 17px !important;
          }
        }
      `}</style>
    </section>
  );
}