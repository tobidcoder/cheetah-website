"use client";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";

export function Introduction() {
  const [opened, { open, close }] = useDisclosure(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const floatingStats = [
    { value: "80%", label: "Less Stockouts" },
    { value: "+35%", label: "Sales Growth" },
    { value: "10x", label: "ROI" },
  ];

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "80px 24px 60px",
          overflow: "hidden",
        }}
        className="grid-pattern"
      >
        {/* Background orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(178,217,59,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,61,36,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Section tag */}
        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            zIndex: 1,
          }}
        >
          <div className="section-tag">
            <span className="dot" />
            AI-Powered Retail Intelligence
          </div>

          {/* Hero Headline */}
          <h1
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "28px",
              color: "#fdfdfd",
            }}
          >
            Sell smarter.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b 0%, #8fb22e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Grow faster.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(17px, 2.5vw, 21px)",
              color: "rgba(253,253,253,0.65)",
              lineHeight: 1.65,
              maxWidth: "620px",
              marginBottom: "48px",
              fontWeight: 400,
            }}
          >
            Custom-tailored inventory & POS solutions for{" "}
            <strong style={{ color: "#fdfdfd", fontWeight: 600 }}>
              supermarkets, pharmacies, restaurants, retail,
            </strong>{" "}
            and beauty businesses — powered by AI.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "64px",
            }}
          >
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
              <button
                className="btn-primary"
                style={{ fontSize: "16px", padding: "16px 36px" }}
              >
                Get Started — It&apos;s Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/cheetahdemo/30min"
            >
              <button
                className="btn-secondary"
                style={{ fontSize: "16px", padding: "16px 36px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book a Demo
              </button>
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
            {[
              "✓ Free 14-day trial",
              "✓ No credit card needed",
              "✓ Setup in minutes",
            ].map((text) => (
              <span
                key={text}
                style={{
                  fontSize: "13px",
                  color: "rgba(253,253,253,0.5)",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "64px",
            zIndex: 1,
            width: "100%",
            maxWidth: "700px",
          }}
        >
          {floatingStats.map((stat) => (
            <div
              key={stat.value}
              className="glass-card"
              style={{
                padding: "20px 32px",
                textAlign: "center",
                flex: "1",
                minWidth: "140px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "#b2d93b",
                  letterSpacing: "-0.03em",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(253,253,253,0.55)",
                  fontWeight: 500,
                  marginTop: "4px",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={open}
        >
          {/* Glow behind image */}
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              background: "radial-gradient(ellipse, rgba(178,217,59,0.12) 0%, transparent 70%)",
              borderRadius: "32px",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(178,217,59,0.15)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(178,217,59,0.1)",
              zIndex: 1,
              background: "rgba(10,61,36,0.3)",
            }}
          >
            <Image
              src="/images/cheetah.png"
              alt="Cheetah Dashboard"
              width={1100}
              height={620}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                opacity: imgLoaded ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
              onLoad={() => setImgLoaded(true)}
              priority
            />
            {/* Play button overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(5,35,21,0.2)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(5,35,21,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(5,35,21,0.2)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(178,217,59,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 0 16px rgba(178,217,59,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 20px rgba(178,217,59,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 16px rgba(178,217,59,0.15)";
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#052315"
                  style={{ marginLeft: "4px" }}
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "120px",
              background: "linear-gradient(to top, #052315, transparent)",
              borderRadius: "0 0 24px 24px",
              zIndex: 2,
            }}
          />
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        withCloseButton
        styles={{
          content: {
            background: "#052315",
            border: "1px solid rgba(178,217,59,0.15)",
            borderRadius: "20px",
          },
          header: { background: "#052315", borderBottom: "1px solid rgba(178,217,59,0.1)" },
          title: { color: "#fdfdfd" },
          close: { color: "#fdfdfd" },
        }}
        title="Cheetah in Action"
      >
        <iframe
          style={{ minHeight: "60dvh", height: "100%", width: "100%", borderRadius: "12px" }}
          src="https://www.youtube.com/embed/mZ2eh3nMxH0?si=qwU6or1JXPfcZ6x3&autoplay=1"
          title="Cheetah POS Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Modal>
    </>
  );
}
