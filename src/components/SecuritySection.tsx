"use client";
import { useEffect, useRef, useState } from "react";
import { IconDollarSign, IconSlash, IconPackage, IconBuilding, IconShield } from "@/components/Icons";

const painPoints = [
    {
        problem: "Cashiers pocketing cash",
        solution: "Every transaction is logged, timestamped, and tied to a named staff member — forever.",
        icon: <IconDollarSign size={24} color="#f4a261" />,
    },
    {
        problem: "Ghost sales & fake refunds",
        solution: "Refund requests require manager approval and biometric confirmation before processing.",
        icon: <IconSlash size={24} color="#f4a261" />,
    },
    {
        problem: "Inventory shrinkage (theft)",
        solution: "Every stock movement — sale, transfer, adjustment — creates an uneditable audit trail.",
        icon: <IconPackage size={24} color="#f4a261" />,
    },
    {
        problem: "No visibility across branches",
        solution: "Live dashboards show sales, voids, and discounts across every location in real time.",
        icon: <IconBuilding size={24} color="#f4a261" />,
    },
];

const securityFeatures = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Role-Based Staff Access",
        desc: "Cashiers see only what they need. Managers control everything. Owners have full visibility. Zero over-permission, zero risk.",
        accent: "#b2d93b",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Live Sales Monitoring",
        desc: "Track every sale, void, discount, and return in real time — from your phone, wherever you are.",
        accent: "#60c6f0",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: "Tamper-Proof Audit Logs",
        desc: "Every action in Cheetah creates a permanent, immutable log. Deleted records leave a trace. Nothing disappears.",
        accent: "#f4a261",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
        title: "Fraud Anomaly Alerts",
        desc: "Unusual discount patterns, late-shift voids, or off-hours access? Cheetah flags it and alerts you instantly.",
        accent: "#a78bfa",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: "Back-Office Security",
        desc: "Your back-office portal is protected by 2FA, session timeouts, and encrypted login tokens — no backdoors.",
        accent: "#f59e0b",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "End-to-End Encryption",
        desc: "From the cashier's keypad to your cloud database — every byte is encrypted in transit and at rest with AES-256.",
        accent: "#b2d93b",
    },
];

export function SecuritySection() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
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
            }}
        >
            {/* Full-width background band */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(10,61,36,0.0) 0%, rgba(10,61,36,0.5) 30%, rgba(10,61,36,0.5) 70%, rgba(10,61,36,0.0) 100%)",
                    pointerEvents: "none",
                }}
            />
            <div
                className="grid-pattern"
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.5,
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
                        <span className="dot" style={{ background: "#f4a261" }} />
                        <span style={{ color: "#f4a261" }}>Fraud & Security</span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "Syne, Inter, sans-serif",
                            fontSize: "clamp(34px, 5.5vw, 62px)",
                            fontWeight: 800,
                            letterSpacing: "-0.04em",
                            lineHeight: 1.06,
                            color: "#fdfdfd",
                            maxWidth: "820px",
                            margin: "0 auto 24px",
                        }}
                    >
                        African retail loses{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #f4a261, #e76f51)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            billions to fraud
                        </span>{" "}
                        every year.
                        <br />
                        <span style={{ color: "#b2d93b" }}>Cheetah ends that.</span>
                    </h2>
                    <p
                        style={{
                            color: "rgba(253,253,253,0.55)",
                            fontSize: "18px",
                            maxWidth: "640px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Staff theft, ghost sales, fake refunds, inventory shrinkage — these are not just problems, they are silent killers for SMEs. Cheetah gives you the visibility and control to stop them before they start.
                    </p>
                </div>

                {/* Pain Points → Solutions Strip */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "16px",
                        marginBottom: "80px",
                        opacity: visible ? 1 : 0,
                        transition: "opacity 0.8s ease 0.1s",
                    }}
                >
                    {painPoints.map((item, i) => (
                        <div
                            key={item.problem}
                            style={{
                                background: "rgba(10,61,36,0.4)",
                                border: "1px solid rgba(178,217,59,0.1)",
                                borderRadius: "16px",
                                padding: "28px 24px",
                                transition: "all 0.3s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "rgba(178,217,59,0.3)";
                                el.style.transform = "translateY(-4px)";
                                el.style.background = "rgba(10,61,36,0.6)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "rgba(178,217,59,0.1)";
                                el.style.transform = "translateY(0)";
                                el.style.background = "rgba(10,61,36,0.4)";
                            }}
                        >
                            <div style={{ marginBottom: "12px", color: "#f4a261" }}>{item.icon}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#f4a261", letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: "8px" }}>
                                    <IconSlash size={12} color="#f4a261" /> Problem
                                </div>
                            <p
                                style={{
                                    fontSize: "15px",
                                    fontWeight: 700,
                                    color: "rgba(253,253,253,0.8)",
                                    marginBottom: "16px",
                                    lineHeight: 1.3,
                                }}
                            >
                                {item.problem}
                            </p>
                            <div
                                style={{
                                    height: "1px",
                                    background: "linear-gradient(90deg, rgba(178,217,59,0.3), transparent)",
                                    marginBottom: "16px",
                                }}
                            />
                                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700, color: "#b2d93b", letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: "8px" }}>
                                    <IconShield size={12} color="#b2d93b" /> Cheetah&apos;s Fix
                                </div>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "rgba(253,253,253,0.6)",
                                    lineHeight: 1.6,
                                }}
                            >
                                {item.solution}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="gradient-divider" style={{ marginBottom: "80px" }} />

                {/* Security Features Grid */}
                <div style={{ marginBottom: "72px" }}>
                    <div style={{ textAlign: "center", marginBottom: "52px" }}>
                        <h3
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "clamp(26px, 3.5vw, 42px)",
                                fontWeight: 800,
                                color: "#fdfdfd",
                                letterSpacing: "-0.03em",
                                marginBottom: "12px",
                            }}
                        >
                            Enterprise security. SME price.
                        </h3>
                        <p style={{ color: "rgba(253,253,253,0.45)", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.65 }}>
                            You don&apos;t need a big IT department to run securely. Cheetah bakes security into every layer, automatically.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "20px",
                            opacity: visible ? 1 : 0,
                            transition: "opacity 0.8s ease 0.3s",
                        }}
                    >
                        {securityFeatures.map((feat, i) => (
                            <div
                                key={feat.title}
                                style={{
                                    background: `${feat.accent}08`,
                                    border: `1px solid ${feat.accent}20`,
                                    borderRadius: "18px",
                                    padding: "28px 28px 32px",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(20px)",
                                    transitionDelay: `${0.05 * i}s`,
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = `${feat.accent}45`;
                                    el.style.transform = "translateY(-4px)";
                                    el.style.boxShadow = `0 16px 48px ${feat.accent}14`;
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = `${feat.accent}20`;
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "none";
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: `${feat.accent}18`,
                                        border: `1px solid ${feat.accent}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: feat.accent,
                                        marginBottom: "18px",
                                    }}
                                >
                                    {feat.icon}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: "Syne, sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        color: "#fdfdfd",
                                        marginBottom: "10px",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {feat.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "rgba(253,253,253,0.55)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emotional CTA panel */}
                <div
                    className="mobile-stack mobile-text-center"
                    style={{
                        borderRadius: "24px",
                        background: "linear-gradient(135deg, rgba(244,162,97,0.1) 0%, rgba(10,61,36,0.8) 100%)",
                        border: "1px solid rgba(244,162,97,0.25)",
                        padding: "clamp(40px, 8vw, 64px) clamp(24px, 5vw, 56px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "32px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "-60px",
                            right: "-60px",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(244,162,97,0.08) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div style={{ maxWidth: "560px", position: "relative", zIndex: 1 }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#f4a261", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px", justifyContent: "inherit" }}>
                                <IconShield size={14} color="#f4a261" /> Stop losing money to fraud today
                            </p>
                        <h3
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontSize: "clamp(22px, 3vw, 34px)",
                                fontWeight: 800,
                                color: "#fdfdfd",
                                letterSpacing: "-0.03em",
                                lineHeight: 1.2,
                                marginBottom: "14px",
                            }}
                        >
                            Every day without Cheetah is a day your business is exposed.
                        </h3>
                        <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.5)", lineHeight: 1.6 }}>
                            Don&apos;t wait for a major theft incident to realise you needed better controls. Start protecting your business right now — free.
                        </p>
                    </div>
                    <div 
                        className="mobile-full-width"
                        style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1, minWidth: "200px" }}
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" className="mobile-full-width">
                            <button className="btn-primary" style={{ padding: "15px 36px", fontSize: "15px", width: "100%" }}>
                                Protect My Business — Free
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" className="mobile-full-width">
                            <button className="btn-secondary" style={{ padding: "15px 36px", fontSize: "15px", width: "100%" }}>
                                Book a Security Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
