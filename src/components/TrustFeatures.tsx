"use client";
import { useEffect, useRef, useState } from "react";

const panels = [
    {
        badge: "Always On",
        accent: "#b2d93b",
        eyebrow: "No internet? No problem.",
        headline: "Your POS never sleeps, even when the network does.",
        body: "Power cuts. Patchy MTN data. Crowded peak hours. Nigerian retail doesn't pause, and neither does Cheetah. Our advanced offline engine keeps your cashiers ringing up sales, printing receipts, and managing stock whether you're online or completely off the grid.",
        subtext:
            "The moment connectivity returns, every transaction syncs automatically. No re-entering. No lost sales. No drama.",
        stat: { value: "100%", label: "uptime, offline & online" },
        cta: { label: "See how it works", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
        ),
        checks: [
            "Full POS operation with zero internet",
            "Receipt printing works offline",
            "Inventory deductions happen in real-time",
            "Auto-syncs when connection restores",
        ],
    },
    {
        badge: "Smart Sync",
        accent: "#00ff87",
        eyebrow: "Every kobo. Every transaction.",
        headline: "Real-time syncing that reconciles itself, automatically.",
        body: "Stop wasting hours manually reconciling your end-of-day sales across branches. Cheetah's Smart Syncing engine automatically pushes every offline transaction to the cloud the second you're back online, timestamped, sequenced, and verified.",
        subtext:
            "Your HQ gets a live picture of every store, every shift, every moment. Delegate with confidence. Sleep without worry.",
        stat: { value: "<2s", label: "average sync time" },
        cta: { label: "Book a live demo", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
        ),
        checks: [
            "Multi-branch dashboard in one view",
            "No manual reconciliation needed",
            "Timestamped transaction logs",
            "Conflict detection & smart resolution",
        ],
    },
    {
        badge: "Military Encryption",
        accent: "#60c6f0",
        eyebrow: "Your data is a target. We make it unbreakable.",
        headline: "AES-256 encryption, the same shield banks and governments use.",
        body: "In African retail, data breaches and internal fraud cost businesses millions every year. Cheetah wraps every byte of your data, sales records, customer info, staff transactions, in AES-256 encryption end-to-end. At rest. In transit. Always.",
        subtext:
            "Whether it's a thieving cashier or a sophisticated cyber attack, your business data stays yours. Period.",
        stat: { value: "AES-256", label: "encryption standard" },
        cta: { label: "Understand our security", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        checks: [
            "End-to-end encrypted transactions",
            "Zero-knowledge staff access controls",
            "GDPR-aligned data handling",
            "Tamper-proof audit logs",
        ],
    },
    {
        badge: "Always Backed Up",
        accent: "#a78bfa",
        eyebrow: "One power surge shouldn't erase years of business.",
        headline: "Secure cloud backup, your data is safe, accessible, everywhere.",
        body: "We've heard the horror stories: laptops stolen, servers fried by power surges, hard drives dead. In one moment, years of customer records and sales history, gone. With Cheetah, that's simply not possible. Every piece of your data is backed up to our secure cloud in real time.",
        subtext:
            "New device? Branch hit a disaster? Log in from anywhere and get back to business in minutes, not months.",
        stat: { value: "99.99%", label: "data durability" },
        cta: { label: "Start free, protect your data", href: "https://back-office.usecheetah.com/" },
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        checks: [
            "Continuous real-time cloud backup",
            "Instant data recovery on any device",
            "Encrypted offsite redundancy",
            "10-year transaction history retention",
        ],
    },
];

function PanelCard({ panel, index }: { panel: typeof panels[0]; index: number }) {
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

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className="trust-panel-grid"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                borderRadius: "48px",
                overflow: "hidden",
                border: `1px solid rgba(178,217,59,0.15)`,
                marginBottom: "32px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`,
                background: "rgba(10,61,36,0.3)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
            }}
        >
            {/* Text block */}
            <div
                style={{
                    padding: "clamp(48px, 6vw, 84px) clamp(32px, 6vw, 64px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: isEven ? 0 : 1,
                    position: "relative",
                    background: "rgba(10,61,36,0.2)"
                }}
            >
                <div 
                    style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: "10px", 
                        background: `${panel.accent}15`,
                        border: `1px solid ${panel.accent}30`,
                        borderRadius: "100px",
                        padding: "8px 20px",
                        marginBottom: "32px",
                        width: "fit-content"
                    }}
                >
                    <span style={{ width: "6px", height: "6px", background: panel.accent, borderRadius: "50%", animation: "pulse-dot 2s infinite" }} />
                    <span style={{ fontSize: "12px", fontWeight: 800, color: panel.accent, letterSpacing: "0.2em", textTransform: "uppercase" }}>{panel.badge}</span>
                </div>

                <p style={{ fontSize: "15px", fontWeight: 700, color: panel.accent, marginBottom: "16px", letterSpacing: "0.05em", fontStyle: "italic" }}>
                    {panel.eyebrow}
                </p>

                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "28px" }}>
                    {panel.headline}
                </h3>

                <p style={{ fontSize: "18px", color: "rgba(253,253,253,0.55)", lineHeight: 1.6, marginBottom: "24px" }}>
                    {panel.body}
                </p>
                <p style={{ fontSize: "16px", color: "rgba(253,253,253,0.35)", lineHeight: 1.6, fontStyle: "italic", marginBottom: "48px" }}>
                    {panel.subtext}
                </p>

                <a target="_blank" rel="noopener noreferrer" href={panel.cta.href} style={{ textDecoration: "none" }}>
                    <button
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            background: panel.accent,
                            color: "#052315",
                            border: "none",
                            borderRadius: "100px",
                            padding: "18px 40px",
                            fontSize: "16px",
                            fontWeight: 800,
                            cursor: "pointer",
                            transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                            width: "fit-content",
                        }}
                        className="trust-panel-cta"
                    >
                        {panel.cta.label}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </a>
            </div>

            {/* Visual block — Cinematic Stat Cards */}
            <div
                style={{
                    background: `linear-gradient(135deg, ${panel.accent}12 0%, rgba(5,35,21,0.6) 100%)`,
                    padding: "clamp(60px, 10vw, 100px) clamp(32px, 6vw, 64px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    order: isEven ? 1 : 0,
                    position: "relative",
                    overflow: "hidden",
                    borderLeft: isEven ? "1px solid rgba(178,217,59,0.15)" : "none",
                    borderRight: !isEven ? "1px solid rgba(178,217,59,0.15)" : "none",
                }}
            >
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${panel.accent}10 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(60px)" }} />

                <div style={{ width: "84px", height: "84px", borderRadius: "24px", background: `${panel.accent}15`, border: `1px solid ${panel.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", color: panel.accent, marginBottom: "48px", position: "relative", zIndex: 1 }}>
                    {panel.icon}
                </div>

                <div style={{ position: "relative", zIndex: 1, marginBottom: "48px" }}>
                    <div style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(56px, 8vw, 92px)", fontWeight: 800, color: panel.accent, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
                        {panel.stat.value}
                    </div>
                    <div style={{ fontSize: "14px", color: "rgba(253,253,253,0.4)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "16px" }}>
                        {panel.stat.label}
                    </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                    {panel.checks.map((check) => (
                        <li key={check} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", color: "rgba(253,253,253,0.6)", fontWeight: 500 }}>
                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${panel.accent}20`, border: `1px solid ${panel.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={panel.accent} strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            {check}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function TrustFeatures() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="section-padding" style={{ maxWidth: "1350px", margin: "0 auto", background: "#052315" }}>
            {/* Section Header — Refined & Cinematic */}
            <div style={{ textAlign: "center", marginBottom: "100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
                <div className="section-tag" style={{ display: "inline-flex", marginBottom: "28px", backdropFilter: "blur(10px)" }}>
                    <span className="dot" />
                    Built Different
                </div>
                <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, color: "#fdfdfd", maxWidth: "960px", margin: "0 auto 28px" }}>
                    Infrastructure your business <br />
                    <span style={{ background: "linear-gradient(135deg, #b2d93b, #00ff87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>can actually rely on.</span>
                </h2>
                <p style={{ color: "rgba(253,253,253,0.55)", fontSize: "20px", maxWidth: "720px", margin: "0 auto", lineHeight: 1.6 }}>
                    Most African retail businesses have been let down by tech that wasn&apos;t built for them. Cheetah is different, engineered for the realities of running a business in Africa.
                </p>
            </div>

            {/* Panel Sections */}
            {panels.map((panel, i) => (
                <PanelCard key={panel.badge} panel={panel} index={i} />
            ))}

            <style>{`
                .trust-panel-cta:hover {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                    filter: brightness(1.1);
                    transform: translateY(-5px);
                }
                @media (max-width: 1100px) {
                    .trust-panel-grid { grid-template-columns: 1fr !important; border-radius: 40px !important; }
                    .trust-panel-grid > div { border: none !important; order: 1 !important; }
                    .trust-panel-grid > div:last-child { order: 0 !important; } /* Stat/Visual first on mobile */
                }
                @media (max-width: 768px) {
                    .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
                    .trust-panel-grid { border-radius: 32px !important; }
                    .trust-panel-grid > div { padding: 48px 24px !important; }
                }
            `}</style>
        </section>
    );
}
