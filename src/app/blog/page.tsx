"use client";
import type { Metadata } from "next";
import Script from "next/script";
import { useEffect, useState, useRef } from "react";
import { CategoryTab } from "./CategoryTab";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Cheetah Insights",
  "description": "Practical guides, retail strategy, and growth tactics built for African SMEs.",
  "publisher": { "@type": "Organization", "name": "Cheetah POS" },
  "url": "https://usecheetah.com/blog"
};

export default function BlogPage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ background: "#052315", minHeight: "100vh", overflowX: "hidden", position: "relative" }} ref={ref}>
      <Script id="blog-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Background Aesthetics */}
      <div style={{ position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "1000px", height: "600px", background: "radial-gradient(circle, rgba(178, 217, 59, 0.08) 0%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "radial-gradient(rgba(178, 217, 59, 0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

      {/* ─── HERO ─────────────────────────────── */}
      <section style={{ padding: "180px 24px 80px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow tag */}
          <div className={`blog-eyebrow ${visible ? 'animate' : ''}`}>
            <span className="dot" />
            Cheetah Retail Intelligence
          </div>

          <h1 className={`blog-hero-title ${visible ? 'animate' : ''}`}>
            Engineering the next<br />
            <span style={{ background: "linear-gradient(135deg, #b2d93b, #00ff87)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Retail Frontier</span>
          </h1>

          <p className={`blog-hero-subtitle ${visible ? 'animate' : ''}`}>
             Practical guides, tactical strategy, and high-performance growth engineering built for retailers who mean business.
          </p>
        </div>
      </section>

      {/* ─── BLOG GRID ────────────────────────── */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px 160px", position: "relative", zIndex: 2 }} className={visible ? 'animate-up' : 'hidden'}>
        <CategoryTab />
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');
        .blog-eyebrow { display: inline-flex; align-items: center; gap: 10px; background: rgba(178, 217, 59, 0.1); border: 1px solid rgba(178, 217, 59, 0.2); padding: 8px 18px; border-radius: 99px; font-size: 13px; font-weight: 800; color: #b2d93b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 32px; opacity: 0; transform: translateY(20px); }
        .blog-eyebrow.animate { animation: fadeInUp 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .blog-hero-title { font-family: 'Syne', sans-serif; font-size: clamp(48px, 10vw, 106px); fontWeight: 800; letterSpacing: -0.05em; line-height: 0.88; color: #fdfdfd; max-width: 1000px; margin: 0 auto 32px; opacity: 0; transform: translateY(40px); }
        .blog-hero-title.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.1s forwards; }
        .blog-hero-subtitle { font-family: 'Inter', sans-serif; font-size: 22px; color: rgba(253, 253, 253, 0.5); font-weight: 500; max-width: 720px; margin: 0 auto; line-height: 1.6; opacity: 0; transform: translateY(30px); }
        .blog-hero-subtitle.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.2s forwards; }
        .animate-up { animation: fadeInUp 1.2s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; }
        .hidden { opacity: 0; transform: translateY(60px); }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #b2d93b; box-shadow: 0 0 10px #b2d93b; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .blog-hero-title { font-size: 48px; }
          .blog-hero-subtitle { font-size: 18px; }
        }
      `}</style>
    </main>
  );
}
