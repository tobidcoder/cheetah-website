"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useParams, notFound } from "next/navigation";
import { CoreInfrastructure } from "@/components/CoreInfrastructure";
import { SecuritySection } from "@/components/SecuritySection";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  IconZap,
  IconWifi,
  IconLock,
  IconReceipt,
  IconPackage,
  IconBarChart,
  IconTarget,
  IconUsers,
  IconClipboard,
  IconCpu,
  IconStore,
  IconShoppingCart,
  IconBuilding,
  IconShoppingBag,
  IconSparkles,
  IconFlame,
  IconLeaf,
  IconAlertTriangle,
  IconSlash,
  IconEyeOff,
  IconGlobe,
  IconSmartphone,
  IconShield,
  IconActivity,
  IconMonitor,
  IconCloud,
  IconBookOpen,
  IconLink,
  IconPosTerminal,
  IconTrendingDown,
  IconShieldCheck,
  IconFileText,
  IconBell,
  IconPieChart,
  IconMap,
  IconMessageCircle,
  IconGift,
  IconCalendar,
  IconStar,
  IconCheck,
  IconX,
  IconMapPin,
  IconArrowRight,
  IconInfo,
  IconRefreshCw,
  IconServer,
  IconCalculator,
  IconCoin,
  IconCreditCard,
  IconChevronDown,
  IconChevronUp
} from "@/components/Icons";

import { type Feature, type FAQ, type ComparePricing, type PageData, pageRegistry } from "./pageData";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  zap: IconZap,
  wifi: IconWifi,
  lock: IconLock,
  receipt: IconReceipt,
  package: IconPackage,
  barchart: IconBarChart,
  target: IconTarget,
  users: IconUsers,
  clipboard: IconClipboard,
  cpu: IconCpu,
  store: IconStore,
  shoppingcart: IconShoppingCart,
  building: IconBuilding,
  shoppingbag: IconShoppingBag,
  sparkles: IconSparkles,
  flame: IconFlame,
  leaf: IconLeaf,
  alert: IconAlertTriangle,
  slash: IconSlash,
  eyeoff: IconEyeOff,
  globe: IconGlobe,
  smartphone: IconSmartphone,
  shield: IconShield,
  activity: IconActivity,
  monitor: IconMonitor,
  cloud: IconCloud,
  bookopen: IconBookOpen,
  link: IconLink,
  terminal: IconPosTerminal,
  trendingdown: IconTrendingDown,
  shieldcheck: IconShieldCheck,
  filetext: IconFileText,
  bell: IconBell,
  piechart: IconPieChart,
  map: IconMap,
  message: IconMessageCircle,
  gift: IconGift,
  calendar: IconCalendar,
  star: IconStar,
  check: IconCheck,
  x: IconX,
  mappin: IconMapPin,
  arrowright: IconArrowRight,
  info: IconInfo,
  refresh: IconRefreshCw,
  server: IconServer,
  calculator: IconCalculator,
  coin: IconCoin,
  creditcard: IconCreditCard,
  chevrondown: IconChevronDown,
  chevronup: IconChevronUp
};



// ROI Calculator Sub-Component for Products
function ROICalculator() {
  const [revenue, setRevenue] = useState(5000);
  const [shrinkPercent, setShrinkPercent] = useState(3);
  
  const estimatedSavings = Math.round(revenue * (shrinkPercent / 100) * 0.85);
  const efficiencyHours = Math.round(18 * 4.3); // 18 hours/week saved

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(10, 61, 36, 0.45) 0%, rgba(5, 35, 21, 0.8) 100%)",
      border: "1px solid rgba(178, 217, 59, 0.2)",
      borderRadius: "24px",
      padding: "36px",
      maxWidth: "600px",
      margin: "40px auto 0",
      boxShadow: "0 30px 70px rgba(0, 0, 0, 0.5)",
      fontFamily: "Inter, sans-serif"
    }}>
      <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.02em", margin: "0 0 8px 0" }}>
        Calculate your Cheetah ROI
      </h4>
      <p style={{ fontSize: "13px", color: "rgba(253, 253, 253, 0.6)", marginBottom: "28px" }}>
        See how much money and labor hours you will save by switching to Cheetah.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
            <span style={{ color: "rgba(253,253,253,0.8)" }}>Monthly Store Revenue:</span>
            <span style={{ color: "#b2d93b" }}>${revenue.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            step="1000" 
            value={revenue} 
            onChange={(e) => setRevenue(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#b2d93b", cursor: "pointer" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(253,253,253,0.4)", marginTop: "4px" }}>
            <span>$1,000</span>
            <span>$100,000</span>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
            <span style={{ color: "rgba(253,253,253,0.8)" }}>Estimated Inventory Loss (Theft/Waste/Outs):</span>
            <span style={{ color: "#b2d93b" }}>{shrinkPercent}%</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="15" 
            step="0.5" 
            value={shrinkPercent} 
            onChange={(e) => setShrinkPercent(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#b2d93b", cursor: "pointer" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "rgba(253,253,253,0.4)", marginTop: "4px" }}>
            <span>1% (Very Secure)</span>
            <span>15% (High Leakage)</span>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "32px",
        padding: "20px",
        background: "rgba(178, 217, 59, 0.08)",
        border: "1px solid rgba(178, 217, 59, 0.15)",
        borderRadius: "16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        textAlign: "center"
      }}>
        <div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#b2d93b", fontFamily: "Syne, sans-serif" }}>
            ${estimatedSavings.toLocaleString()}
          </div>
          <div style={{ fontSize: "11px", color: "rgba(253, 253, 253, 0.5)", marginTop: "2px" }}>
            Estimated Monthly Savings
          </div>
        </div>
        <div style={{ borderLeft: "1px solid rgba(178, 217, 59, 0.15)" }}>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#b2d93b", fontFamily: "Syne, sans-serif" }}>
            {efficiencyHours} hrs
          </div>
          <div style={{ fontSize: "11px", color: "rgba(253, 253, 253, 0.5)", marginTop: "2px" }}>
            Manager Hours Reclaimed/Mo
          </div>
        </div>
      </div>
    </div>
  );
}

// Dynamic Page Main Component
export default function DynamicSubPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const data = pageRegistry[slug];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const showCoreInfra = ["pos", "back-office", "inventory-management"].includes(slug) || slug.startsWith("vs-");
  const showSecurity = ["payments", "shrink-tracking", "margin"].includes(slug);

  // Set the document title and description dynamically on mount
  useEffect(() => {
    if (data) {
      document.title = data.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", data.metaDesc);
      }
    }
  }, [data]);

  if (!data) {
    notFound();
  }

  return (
    <main style={{ background: "#052315", color: "#fdfdfd", overflowX: "hidden", minHeight: "100vh", paddingTop: "96px" }}>
      {/* Dynamic SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": data.title,
            "description": data.metaDesc,
            "url": `https://usecheetah.com/${data.slug}`,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Cheetah POS",
              "url": "https://usecheetah.com"
            }
          })
        }}
      />

      {/* ── HERO SECTION ── */}
      <section style={{ position: "relative", padding: "100px 5% 80px", overflow: "hidden" }}>
        {/* Background Gradients & Grids */}
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />
        <div style={{
          position: "absolute", top: "10%", left: "5%", width: "450px", height: "450px",
          background: "radial-gradient(circle, rgba(178,217,59,0.08) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none", zIndex: 0
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%", width: "450px", height: "450px",
          background: "radial-gradient(circle, rgba(10,61,36,0.3) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none", zIndex: 0
        }} />

        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", position: "relative", zIndex: 1 }} className="mobile-grid-1">
          {/* Hero text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="mobile-text-center">
            <span className="section-tag" style={{ animation: "fadeInUp 0.6s ease" }}>
              <span className="dot" />
              {data.tag}
            </span>
            <h1 style={{
              fontFamily: "Syne, sans-serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800,
              lineHeight: 1.1, color: "#fdfdfd", letterSpacing: "-0.03em", margin: "16px 0 24px",
              animation: "fadeInUp 0.8s cubic-bezier(0.2,0.8,0.2,1)"
            }}>
              {data.heading}
            </h1>
            <p style={{
              fontSize: "17px", color: "rgba(253, 253, 253, 0.65)", lineHeight: 1.6,
              marginBottom: "36px", animation: "fadeInUp 1s cubic-bezier(0.2,0.8,0.2,1)"
            }}>
              {data.subheading}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }} className="mobile-only:justify-center">
              <a href="https://back-office.usecheetah.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ animation: "fadeInUp 1.2s ease" }}>
                Start Free Instantly
                <IconArrowRight size={15} style={{ marginLeft: "4px" }} />
              </a>
              <a href="mailto:hello@usecheetah.com" className="btn-secondary" style={{ animation: "fadeInUp 1.2s ease" }}>
                Talk to Sales
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px",
              marginTop: "56px", borderTop: "1px solid rgba(178,217,59,0.12)", paddingTop: "32px", width: "100%"
            }}>
              {data.stats.map((s, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#b2d93b", fontFamily: "Syne, sans-serif", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(253, 253, 253, 0.5)", marginTop: "8px", fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="glass-card" style={{
              padding: "12px", width: "100%", height: "100%", minHeight: "380px", display: "flex", borderRadius: "28px"
            }}>
              {data.heroMedia.type === "video" ? (
                <video
                  src={data.heroMedia.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", minHeight: "360px", objectFit: "cover", borderRadius: "20px" }}
                />
              ) : (
                <Image
                  src={data.heroMedia.url}
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION / BENTO FEATURES ── */}
      <ScrollReveal>
        <section style={{ padding: "100px 5%", background: "rgba(10, 61, 36, 0.25)", borderTop: "1px solid rgba(178,217,59,0.06)", borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-tag">
                <span className="dot" />
                CAPABILITIES
              </span>
              <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "36px", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.03em", marginTop: "12px" }}>
                Tailored features for smart operators
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(253, 253, 253, 0.55)", marginTop: "12px", maxWidth: "600px", marginInline: "auto" }}>
                Explore how Cheetah delivers unmatched operational advantages compared to standard retail tools.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }} className="mobile-grid-1">
              {data.features.map((f, idx) => {
                const IconComponent = iconMap[f.icon] || IconInfo;
                return (
                  <ScrollReveal key={idx} delay={idx * 150} style={{ display: "flex" }}>
                    <div className="glass-card" style={{ padding: "36px", display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
                      <div style={{ display: "inline-flex", width: "48px", height: "48px", borderRadius: "12px", background: "rgba(178, 217, 59, 0.1)", alignItems: "center", justifyContent: "center" }}>
                        <IconComponent size={24} color="#b2d93b" />
                      </div>
                      <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "20px", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.02em" }}>{f.title}</h3>
                      <p style={{ fontSize: "14px", color: "rgba(253, 253, 253, 0.5)", lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Interactive Calculator Block for Product Pages */}
            {data.type === "product" && <ROICalculator />}

            {/* Interactive Comparison Block for Competitor Pages */}
            {data.type === "compare" && (
              <div style={{ marginTop: "80px", borderTop: "1px solid rgba(178,217,59,0.12)", paddingTop: "80px" }}>
                <div style={{ textAlign: "center", marginBottom: "44px" }}>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "28px", fontWeight: 800, color: "#fdfdfd" }}>
                    Head-to-Head: Cheetah vs {data.competitorName}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(253,253,253,0.5)", marginTop: "8px" }}>
                    See how the math and operations stack up for independent store owners.
                  </p>
                </div>

                <div className="glass-card" style={{ overflowX: "auto", padding: "16px", border: "1px solid rgba(178, 217, 59, 0.18)" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", color: "#fdfdfd", fontSize: "14px" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid rgba(178,217,59,0.15)" }}>
                        <th style={{ padding: "18px 12px", textAlign: "left", fontWeight: 800, color: "#b2d93b" }}>Operational Metric</th>
                        <th style={{ padding: "18px 12px", textAlign: "left", fontWeight: 800, color: "#b2d93b" }}>Cheetah Retail OS</th>
                        <th style={{ padding: "18px 12px", textAlign: "left", fontWeight: 800 }}>{data.competitorName}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Software License Fee</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>$0 (Free Forever)</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>$2,000 - $8,000 / year</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Setup & Installation</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>$0 (Zero Setup Cost)</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>$1,500+ integration fee</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Offline Execution</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>True offline SQLite syncing database</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>Rigid cloud load times or local hardware servers</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Hardware Compatibility</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>Any tablet, computer, or phone</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>Locked to brand proprietary registers</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid rgba(178,217,59,0.06)" }}>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Digital Receipts</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>WhatsApp, SMS, Email (Included)</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>Paper only or extra license tier required</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "18px 12px", fontWeight: 700 }}>Customer Support</td>
                        <td style={{ padding: "18px 12px", color: "#b2d93b", fontWeight: 700 }}>24/7 Priority local WhatsApp group</td>
                        <td style={{ padding: "18px 12px", color: "rgba(253,253,253,0.6)" }}>Slow ticket dashboard callbacks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Integrations Listing for Products */}
            {data.integrations && (
              <div style={{ marginTop: "64px", borderTop: "1px solid rgba(178,217,59,0.12)", paddingTop: "48px", textAlign: "center" }}>
                <p style={{ fontSize: "11px", fontWeight: 900, color: "rgba(253,253,253,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  PLUG AND PLAY HARDWARE & PAYMENT COMPATIBILITY
                </p>
                <div style={{ display: "flex", gap: "16px 28px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
                  {data.integrations.map((item, idx) => (
                    <div key={idx} style={{
                      fontSize: "14px", fontWeight: 700, color: "rgba(253,253,253,0.75)",
                      padding: "8px 20px", background: "rgba(10,61,36,0.5)", border: "1px solid rgba(178, 217, 59, 0.1)", borderRadius: "100px"
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* ── CONDITIONAL CORE INFRASTRUCTURE ── */}
      {showCoreInfra && (
        <ScrollReveal>
          <section style={{ borderTop: "1px solid rgba(178,217,59,0.06)", background: "#052315" }}>
            <CoreInfrastructure />
          </section>
        </ScrollReveal>
      )}

      {/* ── CONDITIONAL SECURITY SECTION ── */}
      {showSecurity && (
        <ScrollReveal>
          <section style={{ borderTop: "1px solid rgba(178,217,59,0.06)", background: "#052315" }}>
            <SecuritySection />
          </section>
        </ScrollReveal>
      )}

      {/* ── TESTIMONIAL SLIDER/CARD ── */}
      <ScrollReveal>
        <section style={{ padding: "100px 5%", position: "relative" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "64px", color: "#b2d93b", fontFamily: "Georgia, serif", lineHeight: 0.5, opacity: 0.35 }}>“</div>
            <p style={{
              fontFamily: "Syne, sans-serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700,
              lineHeight: 1.5, color: "#fdfdfd", fontStyle: "italic", margin: "10px 0 32px"
            }}>
              &ldquo;{data.testimonial.quote}&rdquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", overflow: "hidden", border: "2px solid #b2d93b", flexShrink: 0, position: "relative" }}>
                <Image src={data.testimonial.image} alt={data.testimonial.author} fill sizes="56px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "15px", fontWeight: 800, color: "#fdfdfd" }}>{data.testimonial.author}</div>
                <div style={{ fontSize: "12px", color: "rgba(253, 253, 253, 0.5)", marginTop: "2px" }}>{data.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── DYNAMIC FAQ ACCORDION ── */}
      {data.faqs && data.faqs.length > 0 && (
        <ScrollReveal>
          <section style={{ padding: "80px 5% 100px", background: "rgba(10, 61, 36, 0.15)", borderTop: "1px solid rgba(178,217,59,0.06)" }}>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "30px", fontWeight: 800 }}>Frequently Asked Questions</h2>
                <p style={{ fontSize: "14px", color: "rgba(253,253,253,0.5)", marginTop: "8px" }}>Got questions? We&apos;ve got answers.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(178,217,59,0.1)" }}>
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      style={{
                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                        background: "transparent", border: "none", cursor: "pointer",
                        padding: "24px", color: "#fdfdfd", fontSize: "15px", fontWeight: 700,
                        textAlign: "left"
                      }}
                    >
                      {faq.q}
                      <IconChevronDown 
                        size={16} 
                        color="#b2d93b"
                        style={{ transform: activeFaq === idx ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}
                      />
                    </button>
                    {activeFaq === idx && (
                      <div style={{ padding: "0 24px 24px", fontSize: "14px", color: "rgba(253,253,253,0.65)", lineHeight: 1.6, borderTop: "1px solid rgba(178,217,59,0.05)", paddingTop: "16px" }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* ── BOTTOM CTA CARD ── */}
      <ScrollReveal>
        <section style={{ padding: "80px 5% 120px", position: "relative" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="glass-card" style={{
              background: "linear-gradient(135deg, rgba(10, 61, 36, 0.85) 0%, rgba(2, 18, 8, 0.95) 100%)",
              border: "1px solid rgba(178, 217, 59, 0.22)",
              borderRadius: "32px",
              padding: "80px 40px",
              textAlign: "center",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute", top: "-30%", left: "-10%", width: "400px", height: "400px",
                background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)", filter: "blur(50px)"
              }} />
              <div style={{
                position: "absolute", bottom: "-30%", right: "-10%", width: "400px", height: "400px",
                background: "radial-gradient(circle, rgba(178,217,59,0.06) 0%, transparent 70%)", filter: "blur(50px)"
              }} />

              <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
                <span className="section-tag" style={{ background: "rgba(178,217,59,0.15)" }}>
                  <span className="dot" />
                  START TODAY
                </span>
                <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.03em", margin: "20px 0 16px" }}>
                  Deploy Cheetah POS in your store for free
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(253,253,253,0.6)", lineHeight: 1.6, marginBottom: "40px" }}>
                  Zero subscriptions. Zero setup fees. 100% free forever. Give your cashiers, inventory managers, and accountants the smartest tools available.
                </p>
                
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="https://back-office.usecheetah.com/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "18px 40px" }}>
                    Get Started Free
                    <IconArrowRight size={15} style={{ marginLeft: "4px" }} />
                  </a>
                  <a href="mailto:hello@usecheetah.com" className="btn-secondary" style={{ padding: "18px 40px" }}>
                    Request Setup Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Styled utilities for smooth loading transitions and custom visual pulses */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-primary:hover {
          box-shadow: 0 12px 40px rgba(178, 217, 59, 0.45) !important;
        }
        .btn-secondary:hover {
          box-shadow: 0 12px 40px rgba(253, 253, 253, 0.15) !important;
        }
      `}} />
    </main>
  );
}
