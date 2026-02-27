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
          position: "sticky",
          top: 0,
          zIndex: 9999,
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          transition: "all 0.3s ease",
        }}
      >
        {/* Sticky glass bar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            height: "72px",
            background: scrolled
              ? "rgba(5, 35, 21, 0.95)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(178, 217, 59, 0.12)"
              : "1px solid transparent",
            transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {/* Logo */}
        <Link href="/" passHref style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/images/favicon-light.png"
            alt="Cheetah"
            width={130}
            height={36}
            style={{ 
              objectFit: "contain",
              width: "clamp(100px, 12vw, 130px)",
              height: "auto"
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="desktop-nav"
        >
          {[
            { label: "Home", href: "/" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "/blog" },
            // { label: "Marketplace", href: "/marketplace" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "rgba(253,253,253,0.75)",
                fontSize: "14px",
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fdfdfd";
                (e.target as HTMLElement).style.background = "rgba(178,217,59,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(253,253,253,0.75)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="desktop-cta">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://back-office.usecheetah.com/"
            style={{
              color: "rgba(253,253,253,0.75)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#fdfdfd";
              (e.target as HTMLElement).style.background = "rgba(178,217,59,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "rgba(253,253,253,0.75)";
              (e.target as HTMLElement).style.background = "transparent";
            }}
          >
            Log in
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
            <button className="btn-primary" style={{ padding: "10px 22px", fontSize: "14px" }}>
              Get Started Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/cheetahdemo/30min"
            style={{ display: "none" }}
            className="book-demo-header"
          >
            <button className="btn-secondary" style={{ padding: "10px 22px", fontSize: "14px" }}>
              Book Demo
            </button>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={toggleDrawer}
          className="mobile-burger"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#fdfdfd",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Open menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fdfdfd", borderRadius: "1px", transition: "all 0.3s" }} />
          <span style={{ display: "block", width: "16px", height: "2px", background: "#fdfdfd", borderRadius: "1px", transition: "all 0.3s" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fdfdfd", borderRadius: "1px", transition: "all 0.3s" }} />
        </button>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="80%"
        padding="xl"
        title={
          <Image src="/images/favicon-light.png" alt="Cheetah" width={110} height={30} style={{ objectFit: "contain" }} />
        }
        hiddenFrom="sm"
        zIndex={1000000}
        className="header-drawer"
      >
        <ScrollArea className="header-drawer" h={`calc(100vh - ${rem(100)})`} mx="-md">
          <Divider my="sm" color="rgba(178,217,59,0.15)" />

          <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "12px 16px" }}>
            {[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              // { label: "Marketplace", href: "/marketplace" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeDrawer}
                style={{
                  color: "rgba(253,253,253,0.8)",
                  fontSize: "17px",
                  fontWeight: 500,
                  padding: "14px 16px",
                  borderRadius: "12px",
                  display: "block",
                  transition: "all 0.2s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Divider my="sm" color="rgba(178,217,59,0.15)" />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 16px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%" }}>
              <button className="btn-secondary" style={{ width: "100%", padding: "14px", fontSize: "16px" }}>
                Log in
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%" }}>
              <button className="btn-primary" style={{ width: "100%", padding: "14px", fontSize: "16px" }}>
                Get Started Free
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" style={{ width: "100%" }}>
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "16px",
                  background: "rgba(178,217,59,0.1)",
                  border: "1px solid rgba(178,217,59,0.3)",
                  borderRadius: "50px",
                  color: "#b2d93b",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                📅 Book a Demo
              </button>
            </a>
          </div>
        </ScrollArea>
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .book-demo-header { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
