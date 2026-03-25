"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, ScrollArea, rem, Divider } from "@mantine/core";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "0 24px",
          height: scrolled ? "80px" : "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          background: scrolled ? "rgba(5, 35, 21, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(178, 217, 59, 0.15)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1350px", margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link href="/" passHref style={{ display: "flex", alignItems: "center", gap: "10px", position: "relative", zIndex: 10 }}>
            <Image
                src="/images/favicon-light.png"
                alt="Cheetah"
                width={130}
                height={36}
                style={{
                objectFit: "contain",
                width: "clamp(110px, 12vw, 140px)",
                height: "auto",
                transition: "all 0.3s ease"
                }}
            />
            </Link>

            {/* Desktop Nav — Cinematic Center */}
            <nav
            style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px",
                background: scrolled ? "rgba(253,253,253,0.03)" : "rgba(253,253,253,0.05)",
                border: "1px solid rgba(253,253,253,0.08)",
                borderRadius: "100px",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                backdropFilter: "blur(10px)",
                transition: "all 0.4s ease"
            }}
            className="desktop-nav"
            >
            {[
                { label: "Home", href: "/" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Partner with us", href: "/partners" },
            ].map((item) => (
                <Link
                key={item.label}
                href={item.href}
                style={{
                    color: "rgba(253,253,253,0.6)",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: "100px",
                    transition: "all 0.3s ease",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap"
                }}
                className="nav-link-modern"
                >
                {item.label}
                </Link>
            ))}
            </nav>

            {/* CTA Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative", zIndex: 10 }} className="desktop-cta">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://back-office.usecheetah.com/"
                style={{
                color: "rgba(253,253,253,0.8)",
                fontSize: "14px",
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: "100px",
                transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fdfdfd";
                (e.target as HTMLElement).style.background = "rgba(253,253,253,0.08)";
                }}
                onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(253,253,253,0.8)";
                (e.target as HTMLElement).style.background = "transparent";
                }}
            >
                Log in
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
                <button 
                    className="btn-glow-primary" 
                    style={{ 
                        padding: "12px 28px", 
                        fontSize: "14px", 
                        background: "#b2d93b", 
                        color: "#052315", 
                        border: "none", 
                        borderRadius: "100px", 
                        fontWeight: 800, 
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.3s ease"
                    }}
                >
                Start Free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </button>
            </a>
            </div>

            {/* Mobile Burger — Custom Design */}
            <button
            onClick={toggleDrawer}
            style={{
                background: "rgba(253,253,253,0.05)",
                border: "1px solid rgba(253,253,253,0.1)",
                cursor: "pointer",
                padding: "12px",
                borderRadius: "14px",
                color: "#fdfdfd",
                display: "none",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-end",
                transition: "all 0.3s ease"
            }}
            className="mobile-burger"
            aria-label="Open menu"
            >
            <span style={{ display: "block", width: "24px", height: "2.5px", background: "#fdfdfd", borderRadius: "10px", transition: "all 0.3s" }} />
            <span style={{ display: "block", width: "16px", height: "2.5px", background: "#fdfdfd", borderRadius: "10px", transition: "all 0.3s" }} />
            </button>
        </div>
      </header>

      {/* Mobile Drawer — Full Modern Integration */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xl"
        title={
          <Image src="/images/favicon-light.png" alt="Cheetah" width={120} height={32} style={{ objectFit: "contain" }} />
        }
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
            content: { background: "#052315", color: "#fdfdfd" },
            header: { background: "#052315", borderBottom: "1px solid rgba(178,217,59,0.15)", padding: "24px" },
            close: { color: "#fdfdfd", background: "rgba(253,253,253,0.05)", borderRadius: "50%", width: "48px", height: "48px" }
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(120)})`} mx="-md" px="xl">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "32px 0" }}>
            {[
                { label: "Home", href: "/" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Partner Program", href: "/partners" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                style={{
                  color: "#fdfdfd",
                  fontSize: "32px",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  padding: "16px 0",
                  display: "block",
                  letterSpacing: "-0.04em",
                  borderBottom: "1px solid rgba(253,253,253,0.05)"
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%" }}>
                <button className="btn-glow-primary" style={{ width: "100%", padding: "20px", fontSize: "18px", background: "#b2d93b", border: "none", borderRadius: "100px", fontWeight: 800, color: "#052315" }}>
                    Get Started Free
                </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%" }}>
              <button style={{ width: "100%", padding: "20px", fontSize: "18px", background: "rgba(253,253,253,0.05)", border: "1px solid rgba(253,253,253,0.15)", borderRadius: "100px", color: "#fdfdfd", fontWeight: 700 }}>
                Log in
              </button>
            </a>
          </div>
        </ScrollArea>
      </Drawer>

      <style>{`
        .nav-link-modern:hover {
            color: #b2d93b !important;
            background: rgba(178,217,59,0.12) !important;
        }
        .btn-glow-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(178,217,59,0.4) !important;
            filter: brightness(1.1);
        }
        @media (max-width: 1100px) {
            .desktop-nav { display: none !important; }
            .mobile-burger { display: flex !important; }
            .desktop-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
