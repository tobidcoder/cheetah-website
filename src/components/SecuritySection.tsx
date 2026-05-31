"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconDollarSign, IconSlash, IconPackage, IconBuilding, IconShield } from "@/components/Icons";

const painPoints = [
    {
        problem: "Cashiers pocketing cash",
        solution: "Every transaction is logged, timestamped, and tied to a named staff member, forever.",
        icon: <IconDollarSign size={24} color="#f4a261" />,
    },
    {
        problem: "Ghost sales & fake refunds",
        solution: "Refund requests require manager approval and biometric confirmation before processing.",
        icon: <IconSlash size={24} color="#f4a261" />,
    },
    {
        problem: "Inventory shrinkage (theft)",
        solution: "High-accuracy stock tracking stops shelf-theft in supermarkets and drug-diversion in pharmacies.",
        icon: <IconPackage size={24} color="#f4a261" />,
    },
    {
        problem: "Regulatory Non-Compliance",
        solution: "Automated logging that meets strict PCN standards for pharmacies and tax regulations for retail.",
        icon: <IconShield size={24} color="#f4a261" />,
    },
];

const securityFeatures = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Role-Based Staff Access",
        desc: "Cashiers see only what they need. Managers control everything. Owners have full visibility. Zero over-permission, zero risk.",
        accent: "#b2d93b",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Live Sales Monitoring",
        desc: "Track every sale, void, discount, and return in real time, from your phone, wherever you are.",
        accent: "#00ff87",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
        title: "PCN & Audit Compliance",
        desc: "Cheetah's immutable logs are designed to survive the strictest PCN & NAFDAC inspections. Records can't be deleted, only reconciled.",
        accent: "#60c6f0",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
        title: "Fraud Anomaly Alerts",
        desc: "Unusual discount patterns, late-shift voids, or off-hours access? Cheetah flags it and alerts you instantly.",
        accent: "#f4a261",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: "Back-Office Security",
        desc: "Your back-office portal is protected by 2FA, session timeouts, and encrypted login tokens, no backdoors.",
        accent: "#b2d93b",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "End-to-End Encryption",
        desc: "From the cashier's keypad to your cloud database, every byte is encrypted in transit and at rest with AES-256.",
        accent: "#00ff87",
    },
];

export function SecuritySection() {
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
                background: "#052315"
            }}
        >
            {/* Background Video */}
            <video autoPlay muted loop playsInline style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.07,
                zIndex: 0,
                pointerEvents: "none"
            }}>
                <source src="https://www.pexels.com/download/video/28671131/" type="video/mp4" />
            </video>
            <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 50% 50%, rgba(10,61,36,0.3) 0%, transparent 80%)",
                pointerEvents: "none",
                zIndex: 0
            }} />
            <div style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(rgba(178,217,59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(178,217,59,0.03) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
                opacity: 0.4,
                pointerEvents: "none",
                zIndex: 0
            }} />

            <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Section Header — Dramatic Typography */}
                <div style={{ textAlign: "center", marginBottom: "100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
                    <div className="section-tag" style={{ display: "inline-flex", marginBottom: "28px", background: "rgba(244,162,95,0.1)", border: "1px solid rgba(244,162,95,0.3)", color: "#f4a261" }}>
                        <span className="dot" style={{ background: "#f4a261" }} />
                        Fraud & Security Command
                    </div>
                    <h2 style={{
                            fontFamily: "Syne, Inter, sans-serif",
                            fontSize: "clamp(38px, 6vw, 76px)",
                            fontWeight: 800,
                            letterSpacing: "-0.05em",
                            lineHeight: 0.95,
                            color: "#fdfdfd",
                            maxWidth: "920px",
                            margin: "0 auto 24px",
                        }}
                    >
                        African retail loses{" "}
                        <span style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            billions to fraud
                        </span>{" "}
                        every year. <br />
                        <span style={{ color: "#b2d93b", fontStyle: "italic", fontWeight: 500 }}>Cheetah ends that.</span>
                    </h2>
                    <p style={{ color: "rgba(253,253,253,0.55)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                        Staff theft, ghost sales, fake refunds — Cheetah gives you full visibility and control.
                    </p>
                </div>

                {/* Pain Points Strip — High Fidelity Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                        marginBottom: "120px",
                    }}
                    className="mobile-grid-1"
                >
                    {painPoints.map((item, i) => (
                        <div
                            key={item.problem}
                            style={{
                                background: "rgba(10,61,36,0.3)",
                                border: "1px solid rgba(244,162,97,0.15)",
                                borderRadius: "32px",
                                padding: "40px 32px",
                                transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                cursor: "default",
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(30px)",
                                transitionDelay: `${i * 0.1 + 0.2}s`
                            }}
                            className="pain-card"
                        >
                            <div style={{ marginBottom: "28px", color: "#f4a261" }}>{item.icon}</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 900, color: "#f4a261", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                                <IconSlash size={14} /> Problem
                            </div>
                            <p
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 800,
                                    color: "#fdfdfd",
                                    marginBottom: "24px",
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.01em"
                                }}
                            >
                                {item.problem}
                            </p>
                            <div
                                style={{
                                    height: "1px",
                                    background: "linear-gradient(90deg, rgba(178,217,59,0.3), transparent)",
                                    marginBottom: "24px",
                                }}
                            />
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 900, color: "#b2d93b", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
                                <IconShield size={14} /> Cheetah Fix
                            </div>
                            <p
                                style={{
                                    fontSize: "15px",
                                    color: "rgba(253,253,253,0.5)",
                                    lineHeight: 1.6,
                                }}
                            >
                                {item.solution}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Audit Demo Block — Cinematic High Res Preview */}
                {/* <div style={{
                    marginBottom: "120px",
                    borderRadius: "48px",
                    overflow: "hidden",
                    border: "1px solid rgba(178,217,59,0.2)",
                    boxShadow: "0 60px 140px rgba(0,0,0,0.8)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
                    background: "#0a2315"
                }}>
                    <div style={{
                        background: "rgba(10,61,36,0.8)",
                        padding: "28px 36px",
                        borderBottom: "1px solid rgba(178,217,59,0.15)",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        backdropFilter: "blur(20px)"
                    }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
                        </div>
                        <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.6)", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Live Security Feed: Tamper-Proof Audit Trail
                        </span>
                        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "10px", height: "10px", background: "#ef4444", borderRadius: "50%", animation: "pulse-tag 2s infinite" }} />
                            <span style={{ fontSize: "12px", fontWeight: 900, color: "#ef4444", letterSpacing: "0.15em" }}>LIVE MONITORING</span>
                        </div>
                    </div>
                    <div style={{ padding: "16px", background: "rgba(5,35,21,0.5)" }}>
                        <Image
                            src="/images/sales-list.png"
                            alt="Live sales monitoring list"
                            width={1200}
                            height={700}
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                borderRadius: "32px",
                                filter: "drop-shadow(0 0 40px rgba(0,0,0,0.5))"
                            }}
                        />
                    </div>
                </div> */}

                {/* Security Feature Grid — Refined & Interactive */}
                <div style={{ marginBottom: "120px" }}>
                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h3
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "clamp(32px, 4vw, 56px)",
                                fontWeight: 800,
                                color: "#fdfdfd",
                                letterSpacing: "-0.04em",
                                marginBottom: "16px",
                                lineHeight: 1
                            }}
                        >
                            Enterprise security. <br />
                            <span style={{ color: "rgba(253,253,253,0.35)", fontWeight: 500, fontStyle: "italic" }}>SME availability.</span>
                        </h3>
                        <p style={{ color: "rgba(253,253,253,0.5)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                            You don&apos;t need a massive IT department to run securely. Cheetah bakes bank-grade security into every layer, automatically.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "24px",
                        }}
                        className="mobile-grid-1"
                    >
                        {securityFeatures.map((feat, i) => (
                            <div
                                key={feat.title}
                                className="security-item-card"
                                style={{
                                    background: "rgba(253,253,253,0.02)",
                                    border: `1px solid rgba(253,253,253,0.1)`,
                                    borderRadius: "32px",
                                    padding: "48px 40px",
                                    transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                    cursor: "default",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(30px)",
                                    transitionDelay: `${0.05 * i + 0.6}s`,
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "18px",
                                        background: `${feat.accent}15`,
                                        border: `1px solid ${feat.accent}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: feat.accent,
                                        marginBottom: "32px",
                                    }}
                                >
                                    {feat.icon}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: "Syne, sans-serif",
                                        fontSize: "22px",
                                        fontWeight: 800,
                                        color: "#fdfdfd",
                                        marginBottom: "16px",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {feat.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "rgba(253,253,253,0.55)",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            <style>{`
                .pain-card:hover {
                    background: rgba(10,61,36,0.45) !important;
                    border-color: rgba(244,162,97,0.4) !important;
                    transform: translateY(-8px) scale(1.02) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .security-item-card:hover {
                    background: rgba(253,253,253,0.05) !important;
                    border-color: rgba(178,217,59,0.2) !important;
                    transform: translateY(-8px) !important;
                }
                .btn-glow-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 20px 50px rgba(178,217,59,0.5) !important;
                    filter: brightness(1.1);
                }
                @media (max-width: 1024px) {
                    .mobile-grid-1 { 
                        grid-template-columns: repeat(2, 1fr) !important; 
                        gap: 24px !important;
                    }
                }
                @media (max-width: 768px) {
                    .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
                    .mobile-grid-1 { grid-template-columns: 1fr !important; }
                    .security-item-card { padding: 32px 24px !important; border-radius: 24px !important; }
                    .pain-card { padding: 32px 24px !important; border-radius: 24px !important; }
                }
            `}</style>
        </section>
    );
}
