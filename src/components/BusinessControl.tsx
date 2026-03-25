"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const controls = [
    {
        title: "Wholesale & Branch Pricing",
        description: "Set wholesale prices as fixed amounts or percentages. Command different prices for different branches with a single click. Your margins, your rules.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: "#b2d93b"
    },
    {
        title: "Negotiable Product Protection",
        description: "Enable custom pricing for negotiable items, but keep the keys. Every price change or high-value discount requires 2FA approval at the point of sale.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        color: "#00ff87"
    },
    {
        title: "Cart & Theft Protection",
        description: "Stop 'missing' items and unauthorized cart edits. Reducing or deleting items from a cart triggers a 2FA request to the manager. No more 'offline' excuses.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        color: "#ff6b6b"
    },
    {
        title: "Live Branch Coordination",
        description: "Updates travel faster than sound. Change a price in the back office and watch it reflect across every branch in minutes, even with spotty internet.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        color: "#a78bfa"
    }
];

export function BusinessControl() {
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
                maxWidth: "1350px",
                margin: "40px auto 140px",
                padding: "0 24px",
                position: "relative",
            }}
        >
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
                marginBottom: "120px"
            }}
            className="mobile-grid-1"
            >
                <div>
                    <div 
                        style={{ 
                            display: "inline-flex", 
                            alignItems: "center", 
                            gap: "8px", 
                            background: "rgba(178,217,59,0.08)",
                            border: "1px solid rgba(178,217,59,0.2)",
                            padding: "6px 16px",
                            borderRadius: "100px",
                            marginBottom: "28px"
                        }}
                    >
                        <span style={{ width: "6px", height: "6px", background: "#b2d93b", borderRadius: "50%", animation: "pulse-dot 2s infinite" }} />
                        <span style={{ fontSize: "12px", fontWeight: 800, color: "#b2d93b", letterSpacing: "0.15em", textTransform: "uppercase" }}>Absolute Sovereignty</span>
                    </div>
                    
                    <h2 style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(34px, 5vw, 64px)",
                        fontWeight: 800,
                        lineHeight: 1,
                        color: "#fdfdfd",
                        marginBottom: "32px",
                        letterSpacing: "-0.04em"
                    }}>
                        100% control over every kobo, <br />
                        <span style={{ color: "rgba(253,253,253,0.35)", fontWeight: 500, fontStyle: "italic" }}>even when you&apos;re not there.</span>
                    </h2>
                    
                    <p style={{
                        fontSize: "20px",
                        lineHeight: 1.6,
                        color: "rgba(253,253,253,0.55)",
                        marginBottom: "48px",
                        maxWidth: "560px"
                    }}>
                        Running a business with multiple branches is hard. Ensuring your staff follows your pricing and doesn&apos;t &quot;re-negotiate&quot; behind your back is harder. Cheetah gives you back your peace of mind.
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                        <a href="https://back-office.usecheetah.com/register">
                            <button className="btn-glow-primary" style={{ padding: "18px 40px", fontSize: "16px", borderRadius: "100px", background: "#b2d93b", color: "#052315", border: "none", fontWeight: 800, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(178,217,59,0.3)" }}>Sign Up Now</button>
                        </a>
                        <a href="https://calendly.com/cheetahdemo/30min">
                            <button style={{ padding: "18px 40px", fontSize: "16px", borderRadius: "100px", background: "rgba(253,253,253,0.05)", border: "1px solid rgba(253,253,253,0.15)", color: "#fdfdfd", fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease" }}>Book a Demo</button>
                        </a>
                    </div>
                </div>

                <div 
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "24px"
                    }}
                    className="mobile-grid-1"
                >
                    {controls.map((control, i) => (
                        <div
                            key={i}
                            className="control-card"
                            style={{
                                background: "rgba(253,253,253,0.03)",
                                border: "1px solid rgba(253,253,253,0.08)",
                                padding: "40px 32px",
                                borderRadius: "32px",
                                transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(30px)",
                                transitionDelay: `${i * 0.1}s`,
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <div style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "16px",
                                background: `${control.color}15`,
                                border: `1px solid ${control.color}30`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: control.color,
                                marginBottom: "28px"
                            }}>
                                {control.icon}
                            </div>
                            <h3 style={{
                                fontSize: "20px",
                                fontWeight: 800,
                                color: "#fdfdfd",
                                marginBottom: "16px",
                                letterSpacing: "-0.01em"
                            }}>
                                {control.title}
                            </h3>
                            <p style={{
                                fontSize: "15px",
                                lineHeight: 1.6,
                                color: "rgba(253,253,253,0.5)"
                            }}>
                                {control.description}
                            </p>
                             <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "40%", height: "40%", background: `radial-gradient(circle, ${control.color}10 0%, transparent 70%)`, filter: "blur(20px)" }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Logs Audit — High Fidelity Preview */}
            <div 
                style={{
                    borderRadius: "48px",
                    overflow: "hidden",
                    border: "1px solid rgba(178,217,59,0.2)",
                    boxShadow: "0 60px 140px rgba(0,0,0,0.7), 0 0 80px rgba(178,217,59,0.05)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
                    position: "relative",
                    background: "#0a2315"
                }}
            >
                <div style={{
                    background: "rgba(10,61,36,0.8)",
                    padding: "24px 32px",
                    borderBottom: "1px solid rgba(178,217,59,0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    backdropFilter: "blur(20px)"
                }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff6b6b" }} />
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#00ff87" }} />
                    </div>
                    <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.5)", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        Live Command Center: Price Logs Audit
                    </span>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "8px", height: "8px", background: "#00ff87", borderRadius: "50%", animation: "pulse-tag 2s infinite" }} />
                        <span style={{ fontSize: "11px", fontWeight: 900, color: "#00ff87", letterSpacing: "0.1em" }}>REAL-TIME FEED</span>
                    </div>
                </div>
                <div style={{ padding: "12px", background: "rgba(5,35,21,0.5)" }}>
                    <Image
                        src="/images/price-logs.png"
                        alt="Live sales monitoring list"
                        width={1200}
                        height={600}
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            borderRadius: "28px"
                        }}
                    />
                </div>
            </div>

            <style>{`
                .control-card:hover {
                    background: rgba(253,253,253,0.06) !important;
                    border-color: rgba(178,217,59,0.3) !important;
                    transform: translateY(-8px) scale(1.02) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }
                .btn-glow-primary:hover {
                    transform: translateY(-3px);
                    filter: brightness(1.1);
                    box-shadow: 0 15px 40px rgba(178,217,59,0.5) !important;
                }
                @media (max-width: 1024px) {
                    .mobile-grid-1 { grid-template-columns: 1fr !important; gap: 32px !important; }
                }
                @media (max-width: 768px) {
                    section { margin-top: 0 !important; margin-bottom: 80px !important; }
                    .control-card { padding: 32px 24px !important; }
                    .btn-glow-primary { width: 100%; justify-content: center; }
                    button { width: 100%; margin-bottom: 12px; }
                }
            `}</style>
        </section>
    );
}
