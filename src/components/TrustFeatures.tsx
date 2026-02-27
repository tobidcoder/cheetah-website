"use client";
import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------
   Each panel is a full "mini-section" — not just a card.
   They speak to real SME pain points African retailers face daily.
--------------------------------------------------------------- */

const panels = [
    {
        badge: "Always On",
        accent: "#b2d93b",
        eyebrow: "No internet? No problem.",
        headline: "Your POS never sleeps — even when the network does.",
        body: "Power cuts. Patchy MTN data. Crowded peak hours. Nigerian retail doesn't pause — and neither does Cheetah. Our advanced offline engine keeps your cashiers ringing up sales, printing receipts, and managing stock whether you're online or completely off the grid.",
        subtext:
            "The moment connectivity returns, every transaction syncs automatically. No re-entering. No lost sales. No drama.",
        stat: { value: "100%", label: "uptime, offline & online" },
        cta: { label: "See how it works", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
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
        accent: "#60c6f0",
        eyebrow: "Every kobo. Every transaction.",
        headline: "Real-time syncing that reconciles itself — automatically.",
        body: "Stop wasting hours manually reconciling your end-of-day sales across branches. Cheetah's Smart Syncing engine automatically pushes every offline transaction to the cloud the second you're back online — timestamped, sequenced, and verified.",
        subtext:
            "Your HQ gets a live picture of every store, every shift, every moment. Delegate with confidence. Sleep without worry.",
        stat: { value: "<2s", label: "average sync time" },
        cta: { label: "Book a live demo", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
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
        accent: "#f4a261",
        eyebrow: "Your data is a target. We make it unbreakable.",
        headline: "AES-256 encryption — the same shield banks and governments use.",
        body: "In African retail, data breaches and internal fraud cost businesses millions every year. Cheetah wraps every byte of your data — sales records, customer info, staff transactions — in AES-256 encryption end-to-end. At rest. In transit. Always.",
        subtext:
            "Whether it's a thieving cashier or a sophisticated cyber attack, your business data stays yours. Period.",
        stat: { value: "AES-256", label: "encryption standard" },
        cta: { label: "Understand our security", href: "https://calendly.com/cheetahdemo/30min" },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
        headline: "Secure cloud backup — your data is safe, always accessible, everywhere.",
        body: "We've heard the horror stories: laptops stolen, servers fried by power surges, hard drives dead. In one moment, years of customer records and sales history — gone. With Cheetah, that's simply not possible. Every piece of your business data is backed up to our secure cloud infrastructure in real time.",
        subtext:
            "New phone? Different device? Branch hit a disaster? Log in from anywhere and get back to business in minutes — not months.",
        stat: { value: "99.99%", label: "data durability guarantee" },
        cta: { label: "Start free — protect your data", href: "https://back-office.usecheetah.com/" },
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
            { threshold: 0.12 }
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
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "0",
                borderRadius: "28px",
                overflow: "hidden",
                border: `1px solid ${panel.accent}22`,
                marginBottom: "24px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
                background: "rgba(10,61,36,0.2)",
            }}
        >
            {/* Text block */}
            <div
                style={{
                    padding: "clamp(32px, 5vw, 56px) clamp(24px, 5vw, 52px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: isEven ? 0 : 1,
                    borderRight: "none",
                    borderLeft: "none",
                }}
            >
                {/* Badge */}
                <span
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: `${panel.accent}15`,
                        border: `1px solid ${panel.accent}35`,
                        borderRadius: "50px",
                        padding: "5px 14px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: panel.accent,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                        width: "fit-content",
                    }}
                >
                    <div
                        style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: panel.accent,
                            animation: "pulse-dot 2s infinite",
                        }}
                    />
                    {panel.badge}
                </span>

                {/* Eyebrow */}
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: panel.accent,
                        marginBottom: "12px",
                        letterSpacing: "0.02em",
                        fontStyle: "italic",
                    }}
                >
                    {panel.eyebrow}
                </p>

                {/* Headline */}
                <h3
                    style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(22px, 2.8vw, 32px)",
                        fontWeight: 800,
                        color: "#fdfdfd",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        marginBottom: "20px",
                    }}
                >
                    {panel.headline}
                </h3>

                {/* Body */}
                <p
                    style={{
                        fontSize: "15px",
                        color: "rgba(253,253,253,0.6)",
                        lineHeight: 1.75,
                        marginBottom: "16px",
                    }}
                >
                    {panel.body}
                </p>
                <p
                    style={{
                        fontSize: "14px",
                        color: "rgba(253,253,253,0.4)",
                        lineHeight: 1.65,
                        fontStyle: "italic",
                        marginBottom: "28px",
                    }}
                >
                    {panel.subtext}
                </p>

                {/* CTA */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={panel.cta.href}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: panel.accent,
                        color: "#052315",
                        border: `2px solid ${panel.accent}`,
                        borderRadius: "50px",
                        padding: "12px 28px",
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        width: "fit-content",
                        textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "transparent";
                        el.style.color = panel.accent;
                        el.style.transform = "translateY(-2px)";
                        el.style.boxShadow = `0 8px 30px ${panel.accent}35`;
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = panel.accent;
                        el.style.color = "#052315";
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "none";
                    }}
                >
                    {panel.cta.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            {/* Visual block */}
            <div
                style={{
                    background: `linear-gradient(135deg, ${panel.accent}08 0%, rgba(5,35,21,0.8) 100%)`,
                    padding: "clamp(40px, 8vw, 64px) clamp(24px, 5vw, 48px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    order: isEven ? 1 : 0,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${panel.accent}14 0%, transparent 70%)`,
                        pointerEvents: "none",
                    }}
                />

                {/* Icon circle */}
                <div
                    style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "20px",
                        background: `${panel.accent}15`,
                        border: `1px solid ${panel.accent}35`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: panel.accent,
                        marginBottom: "32px",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {panel.icon}
                </div>

                {/* Big stat */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        marginBottom: "36px",
                    }}
                >
                    <div
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontSize: "clamp(48px, 6vw, 72px)",
                            fontWeight: 800,
                            color: panel.accent,
                            letterSpacing: "-0.05em",
                            lineHeight: 1,
                        }}
                    >
                        {panel.stat.value}
                    </div>
                    <div
                        style={{
                            fontSize: "13px",
                            color: "rgba(253,253,253,0.4)",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            marginTop: "8px",
                        }}
                    >
                        {panel.stat.label}
                    </div>
                </div>

                {/* Checklist */}
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    {panel.checks.map((check) => (
                        <li
                            key={check}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                fontSize: "14px",
                                color: "rgba(253,253,253,0.65)",
                                fontWeight: 500,
                            }}
                        >
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    background: `${panel.accent}18`,
                                    border: `1px solid ${panel.accent}35`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={panel.accent} strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
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
    return (
        <section
            className="section-padding"
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
                <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
                    <span className="dot" />
                    Built Different
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
                        margin: "0 auto 20px",
                    }}
                >
                    Infrastructure your business{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        can actually rely on
                    </span>
                </h2>
                <p
                    style={{
                        color: "rgba(253,253,253,0.5)",
                        fontSize: "18px",
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}
                >
                    Most African retail businesses have been let down by tech that wasn&apos;t built for them. Cheetah is different — engineered from the ground up for the realities of running a business in Africa.
                </p>
            </div>

            {/* Panel Sections */}
            {panels.map((panel, i) => (
                <PanelCard key={panel.badge} panel={panel} index={i} />
            ))}

            <style>{`
        @media (max-width: 900px) {
          .trust-panel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
