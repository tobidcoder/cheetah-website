"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface FooterLink { label: string; href: string; external?: boolean; }

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Partner with us", href: "/partners" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Book a Demo", href: "https://calendly.com/cheetahdemo/30min", external: true },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Support", href: "mailto:hello@usecheetah.com", external: true },
  ],
  Social: [
    { label: "X (Twitter)", href: "https://x.com/CheetahHq", external: true },
    { label: "Facebook", href: "https://web.facebook.com/cheetahHQ", external: true },
    { label: "Instagram", href: "https://www.instagram.com/cheetah_hq/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cheetah-hq/", external: true },
  ],
};

const socialIcons = [
  { label: "X", href: "https://x.com/CheetahHq", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
  { label: "Facebook", href: "https://web.facebook.com/cheetahHQ", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { label: "Instagram", href: "https://www.instagram.com/cheetah_hq/", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cheetah-hq/", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
];

export function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    
    if ((window as any).Calendly) {
      (window as any).Calendly.initBadgeWidget({
        url: "https://calendly.com/cheetahdemo/30min",
        text: "Schedule time with Us",
        color: "#ffffff",
        textColor: "#052315",
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer
        ref={ref}
        style={{
          background: "#052315",
          borderTop: "1px solid rgba(178,217,59,0.15)",
          position: "relative",
          overflow: "hidden",
          padding: "160px 24px 0",
        }}
      >
        {/* Cinematic Background Orbs */}
        <div style={{ position: "absolute", bottom: "40%", left: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,255,135,0.05) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "80px",
            marginBottom: "120px",
            position: "relative",
            zIndex: 1,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="footer-grid-mobile"
        >
          {/* Brand Column */}
          <div>
            <Link href="/" passHref style={{ display: "inline-block", marginBottom: "32px" }}>
              <Image
                src="/images/favicon-light.png"
                alt="Cheetah"
                width={140}
                height={38}
                style={{ objectFit: "contain", width: "160px", height: "auto" }}
              />
            </Link>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(253,253,253,0.5)",
                lineHeight: 1.6,
                maxWidth: "320px",
                marginBottom: "48px",
                fontWeight: 500
              }}
            >
              The unified retail operating system for Africa. Built for speed, resilient by design, and hardened for total security.
              <br /><br />
              <strong style={{ color: "#b2d93b", fontWeight: 800 }}>Lagos · Nairobi · Accra · London</strong>
            </p>
            {/* Social Icons — Enhanced */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn-footer"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    border: "1px solid rgba(253,253,253,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(253,253,253,0.5)",
                    background: "rgba(253,253,253,0.03)",
                    transition: "all 0.4s ease",
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns — Premium Typography */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "13px",
                  fontWeight: 800,
                  color: "#fdfdfd",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="footer-link-modern"
                      style={{
                        fontSize: "15px",
                        color: "rgba(253,253,253,0.55)",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        display: "inline-block",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big Animated CHEETAH Text — World Class Branding */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            userSelect: "none",
            pointerEvents: "none",
            display: "flex",
            marginTop: "80px",
            marginBottom: "-40px"
          }}
        >
          <div className="marquee-container" style={{ display: "flex", animation: "panText 60s linear infinite" }}>
            {[1, 2, 3, 4].map(i => (
                 <div key={i} className="marquee-text" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(100px, 18vw, 260px)", fontWeight: 900, lineHeight: 0.8, paddingRight: "6vw", color: "transparent", WebkitTextStroke: "1px rgba(178,217,59,0.08)", whiteSpace: "nowrap" }}>
                    CHEETAH
                 </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar — Minimal & Sharp */}
        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
            borderTop: "1px solid rgba(178,217,59,0.1)",
            padding: "64px 0 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
            position: "relative",
            zIndex: 1,
          }}
          className="footer-bottom-mobile"
        >
          <p style={{ fontSize: "14px", color: "rgba(253,253,253,0.35)", fontWeight: 600, letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Cheetah HQ. Engineering the future of retail velocity.
          </p>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="status-pulse" style={{ width: "8px", height: "8px", background: "#b2d93b", borderRadius: "50%", display: "block" }} />
                <span style={{ fontSize: "12px", color: "rgba(253,253,253,0.3)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Infrastructure: <span style={{ color: "#b2d93b" }} className="animate-pulse-text">Operational</span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "24px" }}>
                <Link href="/privacy" style={{ fontSize: "13px", color: "rgba(253,253,253,0.4)", fontWeight: 700 }}>Privacy</Link>
                <Link href="/terms" style={{ fontSize: "13px", color: "rgba(253,253,253,0.4)", fontWeight: 700 }}>Terms</Link>
              </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes panText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes statusPulse {
            0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 217, 59, 0.4); }
            70% { transform: scale(1.1); opacity: 0.8; box-shadow: 0 0 0 10px rgba(178, 217, 59, 0); }
            100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 217, 59, 0); }
        }
        @keyframes pulseText {
            0%, 100% { opacity: 1; filter: brightness(1); }
            50% { opacity: 0.7; filter: brightness(1.2); }
        }
        .status-pulse {
            animation: statusPulse 2s infinite ease-in-out;
        }
        .animate-pulse-text {
            animation: pulseText 2s infinite ease-in-out;
        }
        .footer-link-modern:hover {
            color: #b2d93b !important;
            transform: translateX(8px);
        }
        .social-btn-footer:hover {
            background: #b2d93b !important;
            border-color: #b2d93b !important;
            color: #052315 !important;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 15px 30px rgba(178,217,59,0.3);
        }
        @media (max-width: 900px) {
            .footer-grid-mobile { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
            .footer-grid-mobile > div:first-child { grid-column: span 2 !important; margin-bottom: 20px; }
            .footer-bottom-mobile { flex-direction: column; text-align: center; }
        }
        @media (max-width: 500px) {
            .footer-grid-mobile { grid-template-columns: 1fr !important; }
            .footer-grid-mobile > div:first-child { grid-column: span 1 !important; }
        }
      `}</style>

      {/* Calendly Integration */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
