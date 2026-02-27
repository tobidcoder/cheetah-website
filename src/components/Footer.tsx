"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    // { label: "Marketplace", href: "/marketplace" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Book a Demo", href: "https://calendly.com/cheetahdemo/30min", external: true },
    { label: "Contact", href: "mailto:hello@usecheetah.com", external: true },
  ],
  Social: [
    { label: "X (Twitter)", href: "https://x.com/CheetahHq", external: true },
    { label: "Facebook", href: "https://web.facebook.com/cheetahHQ", external: true },
    { label: "Instagram", href: "https://www.instagram.com/cheetah_hq/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cheetah-hq/", external: true },
  ],
};

const socialIcons = [
  {
    label: "X",
    href: "https://x.com/CheetahHq",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/cheetahHQ",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cheetah_hq/",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cheetah-hq/",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  useEffect(() => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initBadgeWidget({
        url: "https://calendly.com/cheetahdemo/30min",
        text: "Schedule time with Us",
        color: "#ffffff",
        textColor: "#052315",
      });
    }
  }, []);

  return (
    <>
      <footer
        style={{
          borderTop: "1px solid rgba(178,217,59,0.1)",
          padding: "80px 24px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(178,217,59,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand Column */}
          <div>
            <Link href="/" passHref style={{ display: "inline-block", marginBottom: "20px" }}>
              <Image
                src="/images/favicon-light.png"
                alt="Cheetah"
                width={140}
                height={38}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(253,253,253,0.45)",
                lineHeight: 1.7,
                maxWidth: "280px",
                marginBottom: "28px",
              }}
            >
              Custom-tailored product suites for{" "}
              <strong style={{ color: "rgba(253,253,253,0.65)" }}>
                supermarket, pharmacy, restaurants, retail, and beauty
              </strong>{" "}
              businesses.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid rgba(178,217,59,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(253,253,253,0.45)",
                    background: "rgba(10,61,36,0.3)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(178,217,59,0.12)";
                    el.style.borderColor = "rgba(178,217,59,0.35)";
                    el.style.color = "#b2d93b";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(10,61,36,0.3)";
                    el.style.borderColor = "rgba(178,217,59,0.15)";
                    el.style.color = "rgba(253,253,253,0.45)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgba(253,253,253,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "12px" }}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14px",
                          color: "rgba(253,253,253,0.5)",
                          fontWeight: 450,
                          transition: "color 0.2s ease",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#b2d93b";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "rgba(253,253,253,0.5)";
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{
                          fontSize: "14px",
                          color: "rgba(253,253,253,0.5)",
                          fontWeight: 450,
                          transition: "color 0.2s ease",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#b2d93b";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "rgba(253,253,253,0.5)";
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderTop: "1px solid rgba(178,217,59,0.08)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(253,253,253,0.3)",
              fontWeight: 450,
            }}
          >
            © {new Date().getFullYear()} Cheetah HQ. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(253,253,253,0.3)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#b2d93b";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(253,253,253,0.3)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            footer > div:first-of-type > div:first-child {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 600px) {
            footer > div:first-of-type > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </footer>

      {/* Calendly */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).Calendly) {
            (window as any).Calendly.initBadgeWidget({
              url: "https://calendly.com/cheetahdemo/30min",
              text: "Schedule time with Us",
              color: "#ffffff",
              textColor: "#052315",
              borderRadius: "10px",
              borderColor: "#052315",
            });
          }
        }}
      />
    </>
  );
}
