"use client";
import { useState, useEffect, useRef } from "react";
import {
  IconUsers, IconBuilding, IconBox, IconShoppingCart, IconReceipt,
  IconActivity, IconSmartphone, IconLock, IconCloud, IconWifi,
  IconTrendingDown, IconShieldCheck, IconGlobe, IconLink, 
  IconMessageCircle, IconGift, IconArrowRight, IconRefreshCw, 
  IconCheck, IconX, IconChevronDown
} from "@/components/Icons";
import axios from "axios";
import { environment } from "@/components/environment";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Currency = "NGN" | "USD";

interface Plan {
  id: number;
  name: string;
  amount_monthly: number;
  description: string;
  has_trial: boolean;
  trial_days: number;
  is_most_popular: boolean;
  currency: Currency;
  active: boolean;
  discount_3_months_percentage: number;
  discount_6_months_percentage: number;
  discount_1_year_percentage: number;
  discount_2_years_percentage: number;
  plan_modules: {
    rank: number;
    support: string;
    branches: number;
    total_users: number;
    product_limit: number;
    ai_forecasting: string;
    store_sales_fee: string;
    accounting: string;
    security: string;
    pos_inventory: string;
    marketplace_sync_label: string;
    total_users_label: string;
    product_limit_label: string;
    branches_label: string;
    online_payment_gateway: string;
    custom_domain?: boolean;
    store_design?: string;
    sales_history_label?: string;
    sales_history?: string;
    business_loan_label?: string;
    business_loan?: string;
  };
}

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */
const billingOptions = [
  { label: "Monthly",  key: "1M" },
  { label: "Quarterly", key: "3M" },
  { label: "Bi-Annual", key: "6M" },
  { label: "Yearly",   key: "1Y" },
  { label: "2-Year",  key: "2Y" },
];

const universalFeatures = [
  { icon: <IconUsers size={16} />, label: "Unlimited staff accounts" },
  { icon: <IconBuilding size={16} />, label: "Unlimited branches & locations" },
  { icon: <IconBox size={16} />, label: "Unlimited products & variants" },
  { icon: <IconShoppingCart size={16}/>, label: "Online store included" },
  { icon: <IconReceipt size={16} />, label: "Unlimited sales & orders" },
  { icon: <IconActivity size={16} />, label: "Real-time sales dashboard" },
  { icon: <IconSmartphone size={16} />, label: "Mobile & desktop access" },
  { icon: <IconLock size={16} />, label: "AES-256 encryption" },
  { icon: <IconCloud size={16} />, label: "Secure cloud backup" },
  { icon: <IconWifi size={16} />, label: "Advanced offline mode" },
];

const planConfigs: Record<string, any> = {
  "Free Forever": { accent: "#94a3b8", color: "slate", btnTheme: "outline" },
  "Starter": { accent: "#60c6f0", color: "sky", btnTheme: "secondary" },
  "Pro": { accent: "#b2d93b", color: "cheetah", btnTheme: "primary" },
  "Premium": { accent: "#a78bfa", color: "violet", btnTheme: "primary" },
  "Enterprise": { accent: "#f472b6", color: "pink", btnTheme: "secondary" }
};

const faqs = [
  { q: "Do I need a credit card to sign up?", a: "No. You can register with just your email and start your 14-day Pro trial immediately \u2014 zero credit card required. You only pay when you're ready to continue." },
  { q: "What happens after the 14-day trial?", a: "After your trial, you can choose any paid plan based on your needs. If you don't subscribe, your account will move to a read-only state. No data is ever deleted." },
  { q: "Are there any per-Store Sales Fee?", a: "Only on the Free Forever plan (3.5%). All paid plans have significantly lower or zero Store Sales Fee for online payments, while offline sales are always fee-free." },
  { q: "Does 'unlimited' really mean unlimited?", a: "Yes. For our Pro, Premium, and Enterprise plans, we do not cap the number of products, sales, or orders you can process. We scale as you scale." },
  { q: "Can I use Cheetah offline?", a: "Absolutely. Cheetah's advanced offline engine lets you make sales, manage stock, and print receipts with zero internet. Everything syncs automatically when you're back online." },
  { q: "How are annual discounts calculated?", a: "When you pay for 1 or 2 years upfront, you receive up to 30% off our monthly rates. This is the most cost-effective way to run your retail operations." },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function formatPrice(amount: number, currency: Currency) {
  if (amount === 0) return currency === "USD" ? "$0.00" : "\u20A60.00";
  const actual = amount / 100;
  return currency === "USD" ? `$${actual.toLocaleString("en-US")}` : `\u20A6${actual.toLocaleString("en-NG")}`;
}

function formatTotalBilled(amount: number, discount: number, months: number, currency: Currency) {
  const base = amount / 100;
  const total = Math.round(base * (1 - (discount / 100)) * months);
  return currency === "USD" ? `$${total.toLocaleString("en-US")}` : `\u20A6${total.toLocaleString("en-NG")}`;
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function PricingPage() {
  const [billing, setBilling]   = useState("3M");
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [currency, setCurrency] = useState<Currency>("NGN");
  const [plans, setPlans]       = useState<Plan[]>([]);
  const [loading, setLoading]   = useState(true);
  const [visible, setVisible]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get(`${environment.URL}/billing/plans`)
      .then(res => { if (res.data?.success) setPlans(res.data.data); })
      .catch(err => console.error("Error fetching plans:", err))
      .finally(() => setLoading(false));

    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("https://ip-api.com/json?fields=countryCode")
      .then((r) => r.json())
      .then((data) => { if (data?.countryCode && data.countryCode !== "NG") setCurrency("USD"); })
      .catch(() => {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (!tz.toLowerCase().includes("lagos") && !tz.toLowerCase().includes("africa")) setCurrency("USD");
        } catch {}
      });
  }, []);

  const filteredPlans = plans
    .filter(p => p.currency === currency && p.active)
    .sort((a,b) => (a.plan_modules.rank || 0) - (b.plan_modules.rank || 0));

  const getDiscountedRate = (plan: Plan) => {
    if (plan.amount_monthly === 0) return 0;
    const discountMap: Record<string, number> = {
        "1M": 0, "3M": plan.discount_3_months_percentage, "6M": plan.discount_6_months_percentage, "1Y": plan.discount_1_year_percentage, "2Y": plan.discount_2_years_percentage,
    };
    return (plan.amount_monthly * (1 - ((discountMap[billing] || 0) / 100)));
  };

  const getBillingLabel = (plan: Plan) => {
    const months = billing === "1M" ? 1 : billing === "3M" ? 3 : billing === "6M" ? 6 : billing === "1Y" ? 12 : 24;
    if (months === 1 || plan.amount_monthly === 0) return null;
    const discountMap: Record<string, number> = {
        "1M": 0, "3M": plan.discount_3_months_percentage, "6M": plan.discount_6_months_percentage, "1Y": plan.discount_1_year_percentage, "2Y": plan.discount_2_years_percentage,
    };
    const totalStr = formatTotalBilled(plan.amount_monthly, discountMap[billing] || 0, months, currency);
    return `Billed ${totalStr} upfront`;
  };

  return (
    <main className="pricing-root" ref={ref}>
      {/* Cinematic Background Elements */}
      <div className="bg-glow orb-1" />
      <div className="bg-glow orb-2" />
      <div className="grid-overlay" />

      {/* ─── MODERN HERO SECTION ──────────────── */}
      <section className="hero-section">
        <div className="container relative z-10">
          <div className={`hero-badge-wrapper ${visible ? 'animate' : ''}`}>
            <span className="hero-badge">
             <IconGift size={14} className="mr-2" /> 
             Limited Offer: 14 Days Free Pro Trial
            </span>
          </div>

          <h1 className={`hero-title ${visible ? 'animate' : ''}`}>
            The SME command center.<br />
            <span className="text-gradient">Engineered for velocity.</span>
          </h1>
          <p className={`hero-subtitle ${visible ? 'animate' : ''}`}>
            Cheetah is the high-performance operating system for modern retail. Choose the plan that fuels your ambition.
          </p>
        </div>
      </section>

      {/* ─── FLOATING CONTROLS ───────────────── */}
      <div className={`floating-controls-wrapper ${visible ? 'animate' : ''}`}>
          <div className="controls-container">
              <div className="segmented-control currency-control">
                {(["NGN", "USD"] as Currency[]).map(c => (
                  <button key={c} onClick={() => setCurrency(c)} className={`control-btn ${currency === c ? 'active' : ''}`}>{c}</button>
                ))}
              </div>
              <div className="control-divider" />
              <div className="segmented-control billing-control">
                {billingOptions.map(opt => (
                    <button key={opt.key} onClick={() => setBilling(opt.key)} className={`control-btn ${billing === opt.key ? 'active' : ''}`}>{opt.label}</button>
                ))}
              </div>
          </div>
      </div>

      {/* ─── PRICING GRID ─────────────────────── */}
      <section className="plans-section container">
        {loading ? (
             <div className="loading-state">
                <IconRefreshCw size={48} className="animate-spin text-cheetah" />
                <p>Syncing retail infrastructure...</p>
             </div>
        ) : (
            <div className="pricing-grid">
               {filteredPlans.map((plan, idx) => {
                   const isEnterprise = plan.name.toLowerCase().includes("enterprise");
                   const config = planConfigs[plan.name] || planConfigs["Pro"];
                   const modules = plan.plan_modules;
                   const discountedMonthly = getDiscountedRate(plan);

                   return (
                       <div 
                         key={plan.id} 
                         className={`plan-card-modern ${plan.is_most_popular ? 'most-popular' : ''} theme-${config.color} ${visible ? 'animate' : ''}`}
                         style={{ transitionDelay: `${idx * 0.15}s` }}
                        >
                           {plan.is_most_popular && <div className="popular-tag">Most Popular</div>}

                           <div className="card-header">
                               <div className="plan-name-badge">{plan.name}</div>
                               <div className="price-display">
                                   {!isEnterprise ? (
                                       <>
                                           <span className="currency-symbol">{formatPrice(discountedMonthly, currency).charAt(0)}</span>
                                           <span className="amount">{formatPrice(discountedMonthly, currency).substring(1)}</span>
                                           <span className="period">/month</span>
                                       </>
                                   ) : (
                                       <span className="amount custom-enterprise">Custom</span>
                                   )}
                               </div>
                               <p className="description">{plan.description}</p>
                           </div>

                           <div className="feature-list">
                               <div className="feature-item highlight"><IconUsers size={18} /> <span>{modules.total_users_label}</span></div>
                               <div className="feature-item highlight"><IconBuilding size={18} /> <span>{modules.branches_label}</span></div>
                               <div className="feature-item"><IconBox size={18} /> <span>{modules.product_limit_label}</span></div>
                               <div className="feature-item"><IconTrendingDown size={18} /> <span>AI: {modules.ai_forecasting}</span></div>
                               <div className="feature-item"><IconLink size={18} /> <span>{modules.marketplace_sync_label}</span></div>
                               <div className="feature-item"><IconActivity size={18} /> <span dangerouslySetInnerHTML={{ __html: modules.business_loan_label || "" }} /></div>
                               <div className="feature-item"><IconShieldCheck size={18} /> <span>{modules.accounting} module</span></div>
                               <div className="feature-item security"><IconLock size={16} /> <span>Zero-Trust Security included</span></div>
                           </div>

                           <div className="card-footer">
                               <a 
                                  href={isEnterprise ? "https://calendly.com/cheetahdemo/30min" : "https://back-office.usecheetah.com/register"} 
                                  className={`cta-button ${config.btnTheme}`}
                               >
                                   {isEnterprise ? 'Contact Us' : (plan.amount_monthly === 0 ? 'Start Free' : plan.has_trial ? 'Start Free Trial' : 'Get Started')}
                                   <IconArrowRight size={18} className="ml-2 icon-move" />
                               </a>
                               <div className="billing-summary">
                                   {!isEnterprise ? (plan.amount_monthly === 0 ? "Free forever" : (getBillingLabel(plan) || (plan.has_trial ? `${plan.trial_days} days trial included` : "No credit card required"))) : "Tailored infrastructure for scale"}
                               </div>
                           </div>
                       </div>
                   )
               })}
            </div>
        )}
      </section>

      {/* ─── UNIFIED FEATURE SECTION ───────────── */}
      <section className={`features-strip py-24 ${visible ? 'animate' : ''}`}>
          <div className="container">
              <div className="strip-inner">
                 <div className="strip-header">
                     <span className="section-subtitle">Universal Core</span>
                     <h2 className="section-title">Built-in Performance</h2>
                 </div>
                 <div className="features-flex">
                     {universalFeatures.map((f, i) => (
                         <div key={i} className="feature-bubble" style={{ transitionDelay: `${i * 0.05}s` }}>
                            <div className="icon-box">{f.icon}</div>
                            <span className="label">{f.label}</span>
                         </div>
                     ))}
                 </div>
              </div>
          </div>
      </section>

      {/* ─── DETAILED COMPARISON TABLE ─────────── */}
      <section className={`comparison-section container py-32 ${visible ? 'animate' : ''}`}>
          <div className="section-head text-center mb-16">
              <h2 className="section-title-large">Feature Matrix</h2>
              <p className="section-desc">Transparent comparison for precise retail decision making.</p>
          </div>

          <div className="table-container-modern shadow-premium">
              <table className="comparison-table">
                  <thead>
                      <tr>
                          <th className="feature-col">Modules</th>
                          {filteredPlans.map(p => (
                              <th key={p.id} className={`plan-col ${p.name.toLowerCase().includes('enterprise') ? 'enterprise' : ''}`}>
                                  <span className="col-name">{p.name}</span>
                              </th>
                          ))}
                      </tr>
                  </thead>
                  <tbody>
                      {[
                          { label: "Branches", key: "branches_label", icon: <IconBuilding size={14} /> },
                          { label: "Staff Seats", key: "total_users_label", icon: <IconUsers size={14} /> },
                          { label: "Product Inventory", key: "product_limit_label", icon: <IconBox size={14} /> },
                          { label: "AI Forecast Credits", key: "ai_forecasting", icon: <IconTrendingDown size={14} /> },
                          { label: "Business Loan", key: "business_loan", icon: <IconActivity size={14} /> },
                          { label: "Store Sales Fee", key: "store_sales_fee", icon: <IconReceipt size={14} /> },
                          { label: "Support Level", key: "support", icon: <IconMessageCircle size={14} /> },
                          { label: "Marketplace Sync", key: "marketplace_sync_label", icon: <IconLink size={14} /> },
                      ].map((row, i) => (
                          <tr key={row.key} className={i % 2 === 0 ? 'even' : 'odd'}>
                              <td className="row-label">
                                  <div className="flex items-center gap-2">{row.icon}{row.label}</div>
                              </td>
                              {filteredPlans.map(p => (
                                  <td key={p.id} className={`val-cell ${p.name === 'Enterprise' ? 'master' : ''}`}>
                                      {p.name === 'Enterprise' && row.key !== 'business_loan' && row.key !== 'store_sales_fee' && row.key !== 'support' ? "Custom Scaling" : <span dangerouslySetInnerHTML={{ __html: p.plan_modules[row.key as keyof typeof p.plan_modules]?.toString() || "" }} />}
                                  </td>
                              ))}
                          </tr>
                      ))}
                      <tr>
                          <td className="row-label"><div className="flex items-center gap-2"><IconGlobe size={14} /> Store Custom Domain</div></td>
                          {filteredPlans.map(p => (
                              <td key={p.id} className={`val-cell ${p.name === 'Enterprise' ? 'master' : ''}`}>
                                  {p.plan_modules.custom_domain || p.name === 'Premium' || p.name === 'Enterprise' ? <IconCheck className={p.name === 'Enterprise' ? "text-pink-400" : "text-cheetah"} /> : <IconX className="text-muted" />}
                              </td>
                          ))}
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>

      {/* ─── FAQ ──────────────────────────────── */}
      <section className={`faq-section container pb-40 ${visible ? 'animate' : ''}`}>
          <h2 className="faq-title">Retail Intelligence FAQ</h2>
          <div className="faq-grid">
              {faqs.map((faq, i) => (
                  <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <div className="faq-question">
                          <h3>{faq.q}</h3>
                          <div className="faq-icon-wrapper"><IconChevronDown size={16} /></div>
                      </div>
                      <div className="faq-answer"><p>{faq.a}</p></div>
                  </div>
              ))}
          </div>
      </section>

      {/* ─── FINAL ACTION ─────────────────────── */}
      <section className={`cta-final container ${visible ? 'animate' : ''}`}>
          <div className="cta-box shadow-glow">
              <div className="cta-content">
                  <h2 className="cta-title">Scale with zero friction.</h2>
                  <p className="cta-desc">14 days of Pro access. No credit card required. No setup fees.</p>
                  <div className="cta-actions">
                      <a href="https://back-office.usecheetah.com/register" className="btn-main primary">Get Started Now <IconArrowRight size={20} className="ml-2" /></a>
                      <a href="https://calendly.com/cheetahdemo/30min" className="btn-main secondary">Talk to Sales</a>
                  </div>
              </div>
              <div className="cta-visual"><div className="floating-circle c1" /><div className="floating-circle c2" /></div>
          </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');
        :root { --cheetah: #b2d93b; --cheetah-glow: rgba(178, 217, 59, 0.4); --bg-deep: #052315; --text-main: #fdfdfd; --text-muted: rgba(253, 253, 253, 0.5); --violet: #a78bfa; --sky: #60c6f0; --pink: #f472b6; --slate: #94a3b8; }
        * { box-sizing: border-box; }
        .pricing-root { background-color: var(--bg-deep); color: var(--text-main); font-family: 'Inter', sans-serif; overflow-x: hidden; position: relative; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; position: relative; }
        .bg-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 0; opacity: 0.6; }
        .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(178, 217, 59, 0.1) 0%, transparent 70%); top: -100px; left: -100px; }
        .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0, 255, 135, 0.08) 0%, transparent 70%); top: 40%; right: -100px; }
        .grid-overlay { position: absolute; top:0; left:0; width:100%; height:100%; background-image: radial-gradient(rgba(178, 217, 59, 0.03) 1.5px, transparent 1.5px); background-size: 40px 40px; pointer-events: none; z-index: 1; }
        .hero-section { padding: 180px 0 80px; text-align: center; position: relative; }
        .hero-title { font-family: 'Syne', sans-serif; font-size: clamp(48px, 10vw, 102px); font-weight: 800; line-height: 0.88; letter-spacing: -0.05em; margin-bottom: 32px; opacity: 0; transform: translateY(40px); }
        .hero-title.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .text-gradient { background: linear-gradient(135deg, var(--cheetah) 0%, #00ff87 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-subtitle { font-size: 22px; color: var(--text-muted); max-width: 720px; margin: 0 auto 56px; line-height: 1.5; opacity: 0; transform: translateY(30px); }
        .hero-subtitle.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.1s forwards; }
        .hero-badge-wrapper { display: inline-flex; margin-bottom: 32px; opacity: 0; transform: translateY(20px); }
        .hero-badge-wrapper.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .hero-badge { background: rgba(178, 217, 59, 0.1); border: 1px solid rgba(178, 217, 59, 0.15); color: var(--cheetah); padding: 8px 18px; border-radius: 100px; font-size: 14px; font-weight: 800; display: flex; align-items: center; text-transform: uppercase; letter-spacing: 0.05em; }
        
        .floating-controls-wrapper {
          position: sticky;
          top: 32px;
          z-index: 100;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
        }
        .floating-controls-wrapper.animate { 
          animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; 
          pointer-events: auto;
        }
        
        .controls-container { 
          display: flex; 
          flex-direction: row; 
          gap: 8px; 
          align-items: center; 
          margin: 0 auto;
          background: rgba(10, 35, 21, 0.7);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(178, 217, 59, 0.2);
          padding: 8px;
          border-radius: 100px;
          width: fit-content;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 20px rgba(178, 217, 59, 0.05);
          transition: all 0.4s ease;
        }
        .controls-container:hover {
          border-color: rgba(178, 217, 59, 0.4);
          transform: scale(1.02);
        }
        .control-divider {
          width: 1px;
          height: 24px;
          background: rgba(253, 253, 253, 0.15);
          margin: 0 8px;
        }
        .segmented-control { display: flex; gap: 4px; }
        .control-btn { background: transparent; border: none; color: var(--text-muted); padding: 10px 22px; border-radius: 999px; font-size: 13px; font-weight: 800; cursor: pointer; transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1); text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
        .control-btn:hover { color: #fff; background: rgba(253, 253, 253, 0.05); }
        .control-btn.active { background: var(--cheetah); color: var(--bg-deep); box-shadow: 0 4px 15px var(--cheetah-glow); }
        .pricing-grid { display: flex; flex-direction: column; gap: 32px; margin-top: 60px; padding-bottom: 80px; align-items: center; }
        .plan-card-modern { width: 100%; max-width: 1150px; background: rgba(253, 253, 253, 0.02); backdrop-filter: blur(30px); border: 1px solid rgba(253, 253, 253, 0.06); border-radius: 48px; padding: 50px 60px; display: flex; align-items: center; gap: 60px; text-align: left; opacity: 0; transform: translateY(50px); }
        .plan-card-modern.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .plan-card-modern:hover { transform: translateY(-8px); background: rgba(253, 253, 253, 0.04); border-color: rgba(178, 217, 59, 0.25); box-shadow: 0 40px 80px rgba(0,0,0,0.5); }
        .plan-card-modern.most-popular { border: 2.5px solid var(--cheetah); background: rgba(178, 217, 59, 0.03); transform: scale(1.02); }
        .popular-tag { position: absolute; top: 32px; right: 32px; background: var(--cheetah); color: var(--bg-deep); padding: 6px 18px; border-radius: 99px; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; }
        .card-header { flex: 0 0 320px; }
        .plan-name-badge { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 800; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.9; }
        .theme-slate .plan-name-badge { color: var(--slate); } .theme-sky .plan-name-badge { color: var(--sky); } .theme-cheetah .plan-name-badge { color: var(--cheetah); } .theme-violet .plan-name-badge { color: var(--violet); } .theme-pink .plan-name-badge { color: var(--pink); }
        .price-display { display: flex; align-items: baseline; gap: 4px; margin-bottom: 16px; font-family: 'Syne', sans-serif; }
        .amount { font-size: 64px; font-weight: 800; letter-spacing: -0.04em; }
        .amount.custom-enterprise { font-size: 44px; }
        .period { font-size: 15px; color: var(--text-muted); font-weight: 700; }
        .description { font-size: 16px; color: var(--text-muted); font-weight: 500; line-height: 1.6; }
        .feature-list { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 20px 48px; }
        .feature-item { display: flex; align-items: center; gap: 14px; font-size: 15px; font-weight: 600; color: rgba(253,253,253,0.8); }
        .feature-item.highlight { color: #fff; font-weight: 700; }
        .feature-item.security { grid-column: span 2; padding: 10px 20px; background: rgba(178,217,59,0.06); border: 1px solid rgba(178,217,59,0.1); border-radius: 14px; color: var(--cheetah); font-weight: 800; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; width: fit-content; }
        .card-footer { flex: 0 0 280px; }
        .cta-button { display: flex; align-items: center; justify-content: center; width: 100%; padding: 20px; border-radius: 20px; font-size: 16px; font-weight: 900; transition: all 0.4s cubic-bezier(0.2, 1, 0.2, 1); margin-bottom: 16px; text-decoration: none; }
        .cta-button.primary { background: var(--cheetah); color: var(--bg-deep); box-shadow: 0 10px 30px var(--cheetah-glow); }
        .cta-button.secondary { background: rgba(253,253,253,0.08); color: #fff; border: 1px solid rgba(253,253,253,0.1); }
        .cta-button.outline { background: transparent; color: #fff; border: 1px solid rgba(253,253,253,0.2); }
        .cta-button:hover { transform: translateY(-4px); filter: brightness(1.1); }
        .cta-button:hover .icon-move { transform: translateX(8px); }
        .billing-summary { font-size: 13px; text-align: center; color: var(--text-muted); font-weight: 600; }
        .strip-header { text-align: center; margin-bottom: 64px; }
        .section-subtitle { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 800; color: var(--cheetah); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 16px; display: block; }
        .section-title { font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
        .features-flex { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        .feature-bubble { background: rgba(253,253,253,0.03); border: 1px solid rgba(253,253,253,0.06); padding: 14px 28px; border-radius: 99px; display: flex; align-items: center; gap: 14px; transition: all 0.4s ease; opacity: 0; transform: translateY(20px); }
        .features-strip.animate .feature-bubble { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .feature-bubble:hover { transform: translateY(-4px); background: rgba(178,217,59,0.1); border-color: rgba(178,217,59,0.2); }
        .icon-box { width: 36px; height: 36px; background: rgba(178,217,59,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--cheetah); }
        .section-title-large { font-family: 'Syne', sans-serif; font-size: 64px; font-weight: 800; margin-bottom: 16px; letter-spacing: -0.04em; }
        .section-desc { font-size: 18px; color: var(--text-muted); margin-bottom: 64px; max-width: 600px; margin-inline: auto; font-weight: 500; }
        .table-container-modern { border-radius: 40px; border: 1px solid rgba(253,253,253,0.08); background: rgba(253,253,253,0.01); backdrop-filter: blur(40px); overflow: hidden; }
        .comparison-table { width: 100%; border-collapse: collapse; }
        .comparison-table th { padding: 40px 24px; background: rgba(253,253,253,0.02); text-align: center; border-bottom: 1px solid rgba(253,253,253,0.08); }
        .comparison-table td { padding: 24px; border-bottom: 1px solid rgba(253,253,253,0.04); text-align: center; font-weight: 600; font-size: 15px; color: rgba(253,253,253,0.7); }
        .col-name { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; }
        .row-label { text-align: left !important; padding-left: 40px !important; color: #fff; font-weight: 700; }
        .val-cell.master { color: #fff; font-weight: 800; }
        .faq-title { font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800; text-align: center; margin-bottom: 64px; }
        .faq-grid { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
        .faq-item { background: rgba(253,253,253,0.02); border: 1px solid rgba(253,253,253,0.05); border-radius: 28px; padding: 28px 40px; cursor: pointer; transition: all 0.4s cubic-bezier(0.2, 1, 0.2, 1); }
        .faq-item.active { background: rgba(178,217,59,0.05); border-color: rgba(178,217,59,0.3); }
        .faq-question { display: flex; justify-content: space-between; align-items: center; }
        .faq-question h3 { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
        .faq-icon-wrapper { transition: transform 0.4s ease; color: var(--text-muted); }
        .faq-item.active .faq-icon-wrapper { transform: rotate(180deg); color: var(--cheetah); }
        .faq-answer { max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s cubic-bezier(0.2, 1, 0.2, 1); }
        .faq-item.active .faq-answer { max-height: 300px; opacity: 1; padding-top: 20px; }
        .cta-box { background: linear-gradient(135deg, #0a3d24 0%, #052315 100%); border: 1px solid rgba(178, 217, 59, 0.2); border-radius: 64px; padding: 120px 80px; position: relative; overflow: hidden; text-align: center; }
        .cta-title { font-family: 'Syne', sans-serif; font-size: clamp(36px, 6vw, 84px); font-weight: 800; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 32px; color: #fff; }
        .cta-desc { font-size: 22px; color: var(--text-muted); margin-bottom: 60px; max-width: 600px; margin-inline: auto; }
        .btn-main { padding: 22px 56px; border-radius: 100px; font-size: 18px; font-weight: 900; transition: all 0.4s cubic-bezier(0.2, 1, 0.2, 1); text-decoration: none; display: inline-flex; align-items: center; }
        .btn-main.primary { background: var(--cheetah); color: var(--bg-deep); box-shadow: 0 15px 40px var(--cheetah-glow); }
        .btn-main.secondary { background: rgba(253, 253, 253, 0.1); color: #fff; border: 1px solid rgba(253,253,253,0.1); backdrop-filter: blur(20px); }
        .btn-main:hover { transform: translateY(-4px) scale(1.02); filter: brightness(1.1); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) { 
          .plan-card-modern { flex-direction: column; text-align: center; padding: 40px; border-radius: 36px; } 
          .card-header, .feature-list, .card-footer { flex: none; width: 100%; }
          .feature-list { grid-template-columns: 1fr; gap: 16px; text-align: left; }
          .price-display { justify-content: center; }
          .feature-item { justify-content: flex-start; }
          .feature-item.security { margin-inline: auto; }
        }
        @media (max-width: 768px) {
          .floating-controls-wrapper { top: 16px; margin-bottom: 40px; padding: 0 16px; }
          .controls-container { flex-direction: column; border-radius: 24px; padding: 12px; width: 100%; max-width: 400px; gap: 12px; }
          .control-divider { display: none; }
          .segmented-control { width: 100%; justify-content: center; flex-wrap: wrap; }
          .control-btn { flex: 1; padding: 10px 12px; font-size: 11px; }
          .section-title-large { font-size: 40px; }
          .cta-box { border-radius: 40px; padding: 60px 24px; }
          .cta-actions { flex-direction: column; gap: 16px; }
          .btn-main { width: 100%; justify-content: center; }
          .hero-section { padding-top: 140px; }
        }
      `}</style>
    </main>
  );
}
