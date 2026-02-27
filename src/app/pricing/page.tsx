"use client";
import { useState, useEffect } from "react";
import {
  IconUsers, IconBuilding, IconBox, IconShoppingCart, IconReceipt,
  IconActivity, IconSmartphone, IconLock, IconCloud, IconWifi,
  IconCpu, IconBookOpen, IconGlobe, IconLink, IconPosTerminal,
  IconTrendingDown, IconShieldCheck, IconFileText, IconBell,
  IconPieChart, IconMap, IconMessageCircle, IconGift, IconStar,
  IconArrowRight, IconRefreshCw, IconServer,
} from "@/components/Icons";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Currency = "NGN" | "USD";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const billingOptions = [
  { label: "Monthly",  key: "1M", discount: 0 },
  { label: "3 Months", key: "3M", discount: 0.05 },
  { label: "6 Months", key: "6M", discount: 0.10 },
  { label: "1 Year",   key: "1Y", discount: 0.20 },
  { label: "2 Years",  key: "2Y", discount: 0.30 },
];

const universalFeatures = [
  { icon: <IconUsers size={14} />,       label: "Unlimited staff accounts" },
  { icon: <IconBuilding size={14} />,    label: "Unlimited branches & locations" },
  { icon: <IconBox size={14} />,         label: "Unlimited products & variants" },
  { icon: <IconShoppingCart size={14}/>, label: "Online store included" },
  { icon: <IconReceipt size={14} />,     label: "Unlimited sales & orders" },
  { icon: <IconActivity size={14} />,    label: "Real-time sales dashboard" },
  { icon: <IconSmartphone size={14} />,  label: "Mobile & desktop access" },
  { icon: <IconLock size={14} />,        label: "AES-256 encryption" },
  { icon: <IconCloud size={14} />,       label: "Secure cloud backup" },
  { icon: <IconWifi size={14} />,        label: "Advanced offline mode" },
];

// Shared features for both Pro and Premium
const sharedFeatures = [
  { icon: <IconGlobe size={14} />,       label: "Online Store" },
  { icon: <IconPosTerminal size={14} />, label: "Front Desk POS" },
  { icon: <IconBuilding size={14} />,    label: "Back Office & Inventory" },
  { icon: <IconTrendingDown size={14} />,label: "Advanced AI Forecasting" },
  { icon: <IconMap size={14} />,         label: "Multi-location HQ Dashboard" },
  { icon: <IconPieChart size={14} />,    label: "Advanced Analytics & Reports" },
  { icon: <IconShieldCheck size={14} />, label: "Role-based access control" },
  { icon: <IconFileText size={14} />,    label: "Tamper-proof audit logs" },
  { icon: <IconBell size={14} />,        label: "Fraud anomaly alerts" },
];

const plans = [
  {
    key: "pro",
    name: "Pro",
    tagline: "Everything you need to run and grow your business — packed into one plan.",
    basePriceNGN: 10000,
    basePriceUSD: 10,
    badge: null as string | null,
    accent: "#b2d93b",
    accentBg: "rgba(178,217,59,0.06)",
    accentBorder: "rgba(178,217,59,0.2)",
    cta: "Get Started — 14 Days Free",
    ctaHref: "https://back-office.usecheetah.com/",
    features: [
      { icon: <IconCpu size={14} />,          label: "50 AI Credits / month" },
      ...sharedFeatures,
      { icon: <IconMessageCircle size={14} />, label: "Standard Support" },
    ],
  },
  {
    key: "premium",
    name: "Premium",
    tagline: "Full Cheetah power with more AI credits and priority support for scaling businesses.",
    basePriceNGN: 15000,
    basePriceUSD: 15,
    badge: "Most Popular",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.25)",
    cta: "Start Premium Free — 14 Days",
    ctaHref: "https://back-office.usecheetah.com/",
    features: [
      { icon: <IconCpu size={14} />,          label: "100 AI Credits / month" },
      ...sharedFeatures,
      { icon: <IconMessageCircle size={14} />, label: "Priority 24/7 Support" },
    ],
  },
];

const enterprisePerks = [
  { icon: <IconCpu size={14} />,          label: "Unlimited AI Credits" },
  { icon: <IconBookOpen size={14} />,     label: "Accounting module" },
  { icon: <IconGlobe size={14} />,        label: "Online Store + Custom domain" },
  { icon: <IconPosTerminal size={14} />,  label: "Front Desk POS" },
  { icon: <IconBuilding size={14} />,     label: "Back Office & Inventory" },
  { icon: <IconTrendingDown size={14} />, label: "Advanced AI Forecasting" },
  { icon: <IconMap size={14} />,          label: "Multi-location HQ Dashboard" },
  { icon: <IconPieChart size={14} />,     label: "Advanced Analytics & Reports" },
  { icon: <IconShieldCheck size={14} />,  label: "Role-based access & Audit logs" },
  { icon: <IconServer size={14} />,       label: "Custom integrations & API access" },
  { icon: <IconUsers size={14} />,        label: "Dedicated Account Manager" },
  { icon: <IconRefreshCw size={14} />,    label: "On-site training & onboarding" },
  { icon: <IconMessageCircle size={14} />,label: "24/7 Dedicated Support + SLA" },
  { icon: <IconActivity size={14} />,     label: "White-label options available" },
];

const tableRows: { feature: string; pro: boolean | string; premium: boolean | string; enterprise: boolean | string }[] = [
  { feature: "Unlimited staff",                   pro: true,          premium: true,          enterprise: true },
  { feature: "Unlimited branches",                pro: true,          premium: true,          enterprise: true },
  { feature: "Unlimited products",                pro: true,          premium: true,          enterprise: true },
  { feature: "Unlimited orders/sales",            pro: true,          premium: true,          enterprise: true },
  { feature: "Front Desk POS",                    pro: true,          premium: true,          enterprise: true },
  { feature: "Back Office & Inventory",           pro: true,          premium: true,          enterprise: true },
  { feature: "Online Store",                      pro: true,          premium: true,          enterprise: true },
  { feature: "Offline Mode",                      pro: true,          premium: true,          enterprise: true },
  { feature: "AES-256 Encryption",                pro: true,          premium: true,          enterprise: true },
  { feature: "Cloud Backup",                      pro: true,          premium: true,          enterprise: true },
  { feature: "Audit Logs & Fraud Alerts",         pro: true,          premium: true,          enterprise: true },
  { feature: "Advanced AI Forecasting",           pro: true,          premium: true,          enterprise: true },
  { feature: "Multi-location HQ Dashboard",       pro: true,          premium: true,          enterprise: true },
  { feature: "Advanced Analytics & Reports",      pro: true,          premium: true,          enterprise: true },
  { feature: "AI Credits",                        pro: "50 / month",  premium: "100 / month", enterprise: "Unlimited" },
  { feature: "Support",                           pro: "Standard",    premium: "Priority 24/7", enterprise: "Dedicated + SLA" },
  { feature: "Accounting Module",                 pro: false,         premium: true,          enterprise: true },
  { feature: "Custom Domain",                     pro: false,         premium: false,         enterprise: true },
  { feature: "Custom Integrations & API",         pro: false,         premium: false,         enterprise: true },
  { feature: "Dedicated Account Manager",         pro: false,         premium: false,         enterprise: true },
  { feature: "On-site Training & Onboarding",     pro: false,         premium: false,         enterprise: true },
  { feature: "White-Label Options",               pro: false,         premium: false,         enterprise: true },
];

const faqs = [
  { q: "Do I need a credit card to sign up?", a: "No. You can register with just your email and start your 14-day Premium trial immediately — zero credit card required. You only pay when you're ready to continue." },
  { q: "What happens after the 14-day trial?", a: "After your trial, you can choose the Pro or Premium plan based on your needs. If you don't subscribe, you'll simply move to a read-only view of your data — nothing is deleted." },
  { q: "Does 'unlimited' really mean unlimited?", a: "Yes. There are no caps on staff, branches, products, or orders. We built Cheetah for ambitious businesses and we don't punish growth with extra fees." },
  { q: "What's included in the Online Store?", a: "Every plan includes a fully functional online store connected to your inventory in real time. Your customers can browse, order, and pay online — and your stock updates automatically." },
  { q: "Can I use Cheetah offline?", a: "Absolutely. Cheetah's advanced offline engine lets you make sales, manage stock, and print receipts with zero internet. Everything syncs automatically when you're back online." },
  { q: "How are billing discounts calculated?", a: "When you pay for 3, 6, 12, or 24 months upfront, you receive a 5%, 10%, 20%, or 30% discount respectively. The price shown is always per user per month before the discount." },
  { q: "What are AI Credits used for?", a: "AI credits power demand forecasting, automatic reorder suggestions, sales trend predictions, and smart reports. Pro gets 50/month; Premium gets 100/month; Enterprise is unlimited." },
  { q: "Is my business data safe?", a: "Every byte of your data is encrypted with AES-256 — at rest and in transit. We store backups across multiple regions, so your data is always safe, always available." },
  { q: "What currencies do you accept?", a: "We accept Nigerian Naira (₦) for businesses in Nigeria and US Dollars ($) for international customers. Prices are shown based on your detected region automatically." },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function formatPrice(amount: number, currency: Currency) {
  if (currency === "USD") return `$${amount.toLocaleString("en-US")}`;
  return `₦${amount.toLocaleString("en-NG")}`;
}

function formatTotal(base: number, discount: number, months: number, currency: Currency) {
  const total = Math.round(base * (1 - discount) * months);
  return currency === "USD"
    ? `$${total.toLocaleString("en-US")}`
    : `₦${total.toLocaleString("en-NG")}`;
}

/* Column accent colours (for table) */
const colAccents = ["#b2d93b", "#a78bfa", "#60c6f0"];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function PricingPage() {
  const [billing, setBilling]   = useState("6M");
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [currency, setCurrency] = useState<Currency>("NGN");

  // Auto-detect currency via ip-api.com (free, no key needed)
  useEffect(() => {
    fetch("http://ip-api.com/json?fields=countryCode")
      .then((r) => r.json())
      .then((data) => {
        if (data?.countryCode && data.countryCode !== "NG") {
          setCurrency("USD");
        }
      })
      .catch(() => {
        // Fallback: timezone heuristic if ip-api fails
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (!tz.toLowerCase().includes("lagos") && !tz.toLowerCase().includes("africa")) {
            setCurrency("USD");
          }
        } catch {}
      });
  }, []);

  const selectedBilling = billingOptions.find((b) => b.key === billing)!;

  const getPrice = (plan: typeof plans[0]) => {
    const base = currency === "USD" ? plan.basePriceUSD : plan.basePriceNGN;
    return formatPrice(Math.round(base * (1 - selectedBilling.discount)), currency);
  };

  const getOriginalPrice = (plan: typeof plans[0]) =>
    formatPrice(currency === "USD" ? plan.basePriceUSD : plan.basePriceNGN, currency);

  const getTotalLabel = (plan: typeof plans[0]) => {
    const months = billing === "1M" ? 1 : billing === "3M" ? 3 : billing === "6M" ? 6 : billing === "1Y" ? 12 : 24;
    if (months === 1) return null;
    const base = currency === "USD" ? plan.basePriceUSD : plan.basePriceNGN;
    const label = months < 12 ? `${months} months` : months === 12 ? "year" : "2 years";
    return `Billed ${formatTotal(base, selectedBilling.discount, months, currency)} every ${label}`;
  };

  /* Value badge renderer for comparison table */
  const renderVal = (val: boolean | string, colIdx: number) => {
    if (typeof val === "string") {
      const c = colAccents[colIdx];
      return (
        <span style={{ fontSize: "12px", fontWeight: 700, color: c, background: `${c}14`, border: `1px solid ${c}28`, borderRadius: "50px", padding: "3px 10px", whiteSpace: "nowrap" }}>
          {val}
        </span>
      );
    }
    if (val) {
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#b2d93b" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    }
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(253,253,253,0.18)" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  };

  return (
    <main style={{ background: "#052315", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ─── HERO ─────────────────────────────── */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }} className="grid-pattern">
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(178,217,59,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Hero badge + currency indicator */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "50px", padding: "7px 18px", fontSize: "13px", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.04em" }}>
            <IconGift size={14} color="#a78bfa" /> Register today — get 14 days Premium FREE
          </div>
          {/* Currency switcher */}
          <div style={{ display: "inline-flex", background: "rgba(10,61,36,0.6)", border: "1px solid rgba(178,217,59,0.15)", borderRadius: "50px", padding: "3px", gap: "2px" }}>
            {(["NGN", "USD"] as Currency[]).map((c) => (
              <button key={c} onClick={() => setCurrency(c)} style={{ background: currency === c ? "#b2d93b" : "transparent", color: currency === c ? "#052315" : "rgba(253,253,253,0.5)", border: "none", borderRadius: "50px", padding: "5px 14px", fontSize: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s ease" }}>
                {c === "NGN" ? "₦ NGN" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        <h1 style={{ fontFamily: "Syne, Inter, sans-serif", fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#fdfdfd", maxWidth: "820px", margin: "0 auto 20px" }}>
          Simple pricing.{" "}
          <span style={{ background: "linear-gradient(135deg, #b2d93b, #8fb22e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            No surprises.
          </span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.2vw, 20px)", color: "rgba(253,253,253,0.55)", maxWidth: "580px", margin: "0 auto 48px", lineHeight: 1.7 }}>
          One flat price per user. Every plan includes unlimited staff, branches, products, and orders — plus accounting, AI forecasting, and analytics. Grow without fear.
        </p>

        {/* Billing toggle */}
        <div style={{ display: "inline-flex", background: "rgba(10,61,36,0.6)", border: "1px solid rgba(178,217,59,0.15)", borderRadius: "50px", padding: "4px", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
          {billingOptions.map((opt) => (
            <button key={opt.key} onClick={() => setBilling(opt.key)} style={{ background: billing === opt.key ? "#b2d93b" : "transparent", color: billing === opt.key ? "#052315" : "rgba(253,253,253,0.55)", border: "none", borderRadius: "50px", padding: "9px 20px", fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.25s ease", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" }}>
              {opt.label}
              {opt.discount > 0 && (
                <span style={{ fontSize: "10px", fontWeight: 800, background: billing === opt.key ? "rgba(5,35,21,0.2)" : "rgba(178,217,59,0.15)", color: billing === opt.key ? "#052315" : "#b2d93b", borderRadius: "50px", padding: "2px 7px" }}>
                  -{Math.round(opt.discount * 100)}%
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ─── PLAN CARDS (ROWS) ─────────────────── */}
      <section style={{ padding: "20px 24px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          {/* ── Pro & Premium ── */}
          {plans.map((plan) => (
            <div
              key={plan.key}
              style={{
                background: plan.accentBg,
                border: `1px solid ${plan.accentBorder}`,
                borderRadius: "28px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 72px ${plan.accent}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {plan.badge && (
                <div style={{ background: plan.accent, color: "#052315", textAlign: "center", padding: "8px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <IconStar size={12} color="#052315" /> {plan.badge}
                  </div>
                </div>
              )}

              {/* Responsive Row Layout */}
              <div
                style={{
                  padding: "48px 40px",
                  display: "grid",
                  gridTemplateColumns: "minmax(250px, 300px) 1fr minmax(280px, 300px)",
                  gap: "48px",
                  alignItems: "center",
                }}
                className="plan-row-container"
              >
                {/* Left: Name & Price */}
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: `${plan.accent}15`, border: `1px solid ${plan.accent}30`, borderRadius: "50px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, color: plan.accent, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "16px" }}>
                    {plan.name}
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                      <span style={{ fontFamily: "Syne, sans-serif", fontSize: "52px", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.05em", lineHeight: 1 }}>
                        {getPrice(plan)}
                      </span>
                      <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.4)", fontWeight: 500, paddingBottom: "8px" }}>/user/mo</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "rgba(253,253,253,0.5)", lineHeight: 1.6, margin: 0 }}>{plan.tagline}</p>
                </div>

                {/* Center: Key Features Checklist */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
                  {plan.features.slice(0, 8).map((feat, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(253,253,253,0.7)", fontWeight: 500 }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "16px", flexShrink: 0, color: plan.accent }}>{feat.icon}</span>
                      {feat.label}
                    </div>
                  ))}
                </div>

                {/* Right: CTA */}
                <div>
                  <a target="_blank" rel="noopener noreferrer" href={plan.ctaHref} style={{ display: "block" }}>
                    <button
                      style={{ width: "100%", background: plan.accent, color: "#052315", border: `2px solid ${plan.accent}`, borderRadius: "50px", padding: "16px", fontSize: "15px", fontWeight: 800, cursor: "pointer", transition: "all 0.3s ease", fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "transparent"; el.style.color = plan.accent; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = plan.accent; el.style.color = "#052315"; }}
                    >
                      {plan.cta}
                    </button>
                  </a>
                  <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(253,253,253,0.3)", marginTop: "16px" }}>
                    14-day free trial &nbsp;·&nbsp; No credit card
                  </p>
                  {getTotalLabel(plan) && (
                    <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(253,253,253,0.2)", marginTop: "8px" }}>{getTotalLabel(plan)}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* ── Enterprise Card — Row Layout ── */}
          <div
            style={{
              background: "rgba(96,198,240,0.05)",
              border: "1px solid rgba(96,198,240,0.2)",
              borderRadius: "28px",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 72px rgba(96,198,240,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div style={{ height: "3px", background: "linear-gradient(90deg, #60c6f0, #a78bfa, #b2d93b)" }} />

            <div
              style={{
                padding: "48px 40px",
                display: "grid",
                gridTemplateColumns: "minmax(250px, 300px) 1fr minmax(280px, 300px)",
                gap: "48px",
                alignItems: "center",
              }}
              className="plan-row-container"
            >
              {/* Left */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(96,198,240,0.12)", border: "1px solid rgba(96,198,240,0.25)", borderRadius: "50px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, color: "#60c6f0", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Enterprise
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <span style={{ fontFamily: "Syne, sans-serif", fontSize: "52px", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    Custom
                  </span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(253,253,253,0.5)", lineHeight: 1.6, margin: 0 }}>
                  Tailored for retail chains, malls, and organisations with unique requirements.
                </p>
              </div>

              {/* Center */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
                {enterprisePerks.slice(0, 8).map((feat, fi) => (
                  <div key={fi} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(253,253,253,0.7)", fontWeight: 500 }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "16px", flexShrink: 0, color: "#60c6f0" }}>{feat.icon}</span>
                    {feat.label}
                  </div>
                ))}
              </div>

              {/* Right */}
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min" style={{ display: "block" }}>
                  <button
                    style={{ width: "100%", background: "transparent", color: "#60c6f0", border: "2px solid rgba(96,198,240,0.4)", borderRadius: "50px", padding: "16px", fontSize: "15px", fontWeight: 800, cursor: "pointer", transition: "all 0.3s ease", fontFamily: "Inter, sans-serif" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(96,198,240,0.1)"; el.style.borderColor = "#60c6f0"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "transparent"; el.style.borderColor = "rgba(96,198,240,0.4)"; }}
                  >
                    Contact Sales — Book Demo
                  </button>
                </a>
                <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(253,253,253,0.3)", marginTop: "16px" }}>
                  Dedicated support & onboarding
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── UNIVERSAL FEATURES STRIP ─────────── */}
        <div style={{ marginTop: "56px", background: "rgba(10,61,36,0.35)", border: "1px solid rgba(178,217,59,0.12)", borderRadius: "20px", padding: "40px 40px 36px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(253,253,253,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>Every Plan Includes</p>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.03em" }}>
              Everything. Unlimited. Always.
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {universalFeatures.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "rgba(253,253,253,0.65)", fontWeight: 500 }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(178,217,59,0.1)", border: "1px solid rgba(178,217,59,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#b2d93b", flexShrink: 0 }}>
                  {f.icon}
                </div>
                {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* ─── COMPARISON TABLE ─────────────────── */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.03em", textAlign: "center", marginBottom: "12px" }}>
            Compare all plans
          </h2>
          <p style={{ textAlign: "center", fontSize: "15px", color: "rgba(253,253,253,0.4)", marginBottom: "40px" }}>
            Pro vs Premium vs Enterprise
          </p>

          <div style={{ borderRadius: "20px", border: "1px solid rgba(178,217,59,0.12)", overflow: "hidden" }}>
            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", background: "rgba(10,61,36,0.7)", borderBottom: "1px solid rgba(178,217,59,0.1)" }}>
              <div style={{ padding: "20px 24px", fontSize: "12px", fontWeight: 700, color: "rgba(253,253,253,0.35)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Feature</div>
              {[
                { name: "Pro", price: getPrice(plans[0]), accent: "#b2d93b" },
                { name: "Premium", price: getPrice(plans[1]), accent: "#a78bfa" },
                { name: "Enterprise", price: "Custom", accent: "#60c6f0" },
              ].map((col) => (
                <div key={col.name} style={{ padding: "20px 16px", textAlign: "center", borderLeft: "1px solid rgba(178,217,59,0.08)" }}>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: col.accent, fontFamily: "Syne, sans-serif" }}>{col.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(253,253,253,0.3)", marginTop: "3px" }}>{col.price}{col.name !== "Enterprise" ? "/user/mo" : ""}</div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {tableRows.map((row, i) => (
              <div
                key={row.feature}
                style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", borderBottom: i < tableRows.length - 1 ? "1px solid rgba(178,217,59,0.05)" : "none", background: i % 2 === 0 ? "rgba(10,61,36,0.12)" : "transparent", transition: "background 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(10,61,36,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "rgba(10,61,36,0.12)" : "transparent"; }}
              >
                <div style={{ padding: "14px 24px", fontSize: "13px", color: "rgba(253,253,253,0.6)", fontWeight: 500, display: "flex", alignItems: "center" }}>{row.feature}</div>
                {[row.pro, row.premium, row.enterprise].map((val, j) => (
                  <div key={j} style={{ padding: "14px 16px", textAlign: "center", borderLeft: "1px solid rgba(178,217,59,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {renderVal(val, j)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ─── FAQ ──────────────────────────────── */}
        <div style={{ marginTop: "100px" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
              <span className="dot" /> FAQ
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.03em" }}>
              Frequently asked questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "800px", margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: openFaq === i ? "rgba(10,61,36,0.55)" : "rgba(10,61,36,0.25)", border: `1px solid ${openFaq === i ? "rgba(178,217,59,0.25)" : "rgba(178,217,59,0.1)"}`, borderRadius: "16px", overflow: "hidden", transition: "all 0.25s ease" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "transparent", border: "none", padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: "16px", textAlign: "left" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 600, color: openFaq === i ? "#fdfdfd" : "rgba(253,253,253,0.75)", lineHeight: 1.4 }}>{faq.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b2d93b" strokeWidth="2.5" style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 28px 24px" }}>
                    <p style={{ fontSize: "15px", color: "rgba(253,253,253,0.55)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ─── FINAL CTA ────────────────────────── */}
        <div style={{ marginTop: "100px", marginBottom: "80px", borderRadius: "28px", background: "linear-gradient(135deg, rgba(178,217,59,0.08) 0%, rgba(10,61,36,0.7) 100%)", border: "1px solid rgba(178,217,59,0.2)", padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }} className="grid-pattern">
          <div style={{ position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(178,217,59,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "50px", padding: "6px 16px", fontSize: "12px", fontWeight: 700, color: "#a78bfa", marginBottom: "24px" }}>
              <IconGift size={13} color="#a78bfa" /> 14 days Premium, on us
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#fdfdfd", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "16px" }}>
              Start free. Scale with{" "}
              <span style={{ background: "linear-gradient(135deg, #b2d93b, #8fb22e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                confidence.
              </span>
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(253,253,253,0.5)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.65 }}>
              No credit card. No setup fee. Register in 2 minutes and unlock 14 days of full Premium — no limits, no restrictions.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/">
                <button className="btn-primary" style={{ fontSize: "17px", padding: "18px 48px" }}>
                  Create Free Account
                  <IconArrowRight size={16} />
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
                <button className="btn-secondary" style={{ fontSize: "17px", padding: "18px 48px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconArrowRight size={15} /> Book a Demo First
                </button>
              </a>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(253,253,253,0.25)", marginTop: "20px" }}>
              Trusted by Prince Ebeano Supermarket, FoodCo, Market Square, Grand Square & more.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          #compare-table { font-size: 12px !important; }
          .plan-row-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 32px 24px !important;
            text-align: center;
          }
          .plan-row-container > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
}
