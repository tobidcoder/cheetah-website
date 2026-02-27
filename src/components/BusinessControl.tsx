"use client";
import { useEffect, useRef, useState } from "react";

const controls = [
    {
        title: "Wholesale & Branch Pricing",
        description: "Set wholesale prices as fixed amounts or percentages. Command different prices for different branches with a single click. Your margins, your rules.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: "#b2d93b"
    },
    {
        title: "Negotiable Product Protection",
        description: "Enable custom pricing for negotiable items, but keep the keys. Every price change or high-value discount requires 2FA approval at the point of sale.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        color: "#60c6f0"
    },
    {
        title: "Cart & Theft Protection",
        description: "Stop 'missing' items and unauthorized cart edits. Reducing or deleting items from a cart triggers a 2FA request to the manager. No more 'offline' excuses.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        color: "#f4a261"
    },
    {
        title: "Live Branch Coordination",
        description: "Updates travel faster than sound. Change a price in the back office and watch it reflect across every branch in minutes, even with spotty internet.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                maxWidth: "1200px",
                margin: "120px auto",
                padding: "0 24px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
        >
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
                alignItems: "center"
            }}>
                <div>
                    <span style={{
                        color: "#b2d93b",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "16px"
                    }}>
                        Absolute Sovereignty
                    </span>
                    <h2 style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(32px, 4vw, 48px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: "#fdfdfd",
                        marginBottom: "24px"
                    }}>
                        100% control over every kobo, <span style={{ color: "rgba(253,253,253,0.5)" }}>even when you&apos;re not there.</span>
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        lineHeight: 1.6,
                        color: "rgba(253,253,253,0.6)",
                        marginBottom: "40px",
                        maxWidth: "500px"
                    }}>
                        Running a business with multiple branches is hard. Ensuring your staff follows your pricing and doesn&apos;t &quot;re-negotiate&quot; behind your back is harder. Cheetah gives you back your peace of mind.
                    </p>
                    
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                        <a 
                            href="https://back-office.usecheetah.com/signup"
                            style={{
                                background: "#b2d93b",
                                color: "#052315",
                                padding: "16px 32px",
                                borderRadius: "50px",
                                fontWeight: 700,
                                fontSize: "15px",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                boxShadow: "0 10px 30px rgba(178, 217, 59, 0.2)"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            Sign Up Now
                        </a>
                        <a 
                            href="https://calendly.com/cheetahdemo/30min"
                            style={{
                                border: "1px solid rgba(253,253,253,0.2)",
                                color: "#fdfdfd",
                                padding: "16px 32px",
                                borderRadius: "50px",
                                fontWeight: 600,
                                fontSize: "15px",
                                textDecoration: "none",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(253,253,253,0.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "20px"
                }}>
                    {controls.map((control, i) => (
                        <div 
                            key={i}
                            style={{
                                background: "rgba(253,253,253,0.03)",
                                border: "1px solid rgba(253,253,253,0.08)",
                                padding: "28px",
                                borderRadius: "24px",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(253,253,253,0.05)";
                                e.currentTarget.style.borderColor = `${control.color}44`;
                                e.currentTarget.style.transform = "translateY(-5px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(253,253,253,0.03)";
                                e.currentTarget.style.borderColor = "rgba(253,253,253,0.08)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <div style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: `${control.color}15`,
                                border: `1px solid ${control.color}35`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: control.color,
                                marginBottom: "20px"
                            }}>
                                {control.icon}
                            </div>
                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#fdfdfd",
                                marginBottom: "12px"
                            }}>
                                {control.title}
                            </h3>
                            <p style={{
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: "rgba(253,253,253,0.5)"
                            }}>
                                {control.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
