"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, ScrollArea, rem } from "@mantine/core";
import { 
  IconReceipt, IconCreditCard, IconMessageCircle, IconClipboard, IconCoin, 
  IconPackage, IconTrendingDown, IconBarChart, IconTrendingUp, IconShieldCheck, 
  IconZap, IconGlobe, IconSparkles, IconStore, IconLeaf, IconShoppingBag, 
  IconBookOpen, IconCalendar, IconInfo, IconBuilding, IconTarget
} from "./Icons";

type MenuKey = "Products" | "Solutions" | "Compare" | "Resources" | "Company";

interface MenuItem { icon?: React.ComponentType<any>; label: string; desc?: string; href: string; external?: boolean; }
interface MenuCol { title?: string; items: MenuItem[]; }
interface MenuConfig {
  cols: MenuCol[];
  featured?: { badge?: string; title: string; desc: string; href: string };
  testimonial?: { quote: string; image: string };
}

const menuConfig: Record<MenuKey, MenuConfig> = {
  Products: {
    cols: [
      {
        title: "FRONT DECK",
        items: [
          { icon: IconReceipt, label: "Point of Sale", desc: "Ring shoppers faster", href: "/pos" },
          { icon: IconCreditCard, label: "Payments", desc: "Accept every way shoppers pay", href: "/payments" },
          { icon: IconMessageCircle, label: "Shopper Engagement", desc: "Turn trips into bigger baskets", href: "/shopper" },
        ],
      },
      {
        title: "BACK OFFICE",
        items: [
          { icon: IconClipboard, label: "Order Management", desc: "Simplify ordering from one place", href: "/back-office" },
          { icon: IconCoin, label: "Pricing Automation", desc: "Protect your margin", href: "/margin" },
          { icon: IconPackage, label: "Inventory Management", desc: "Know what's in stock", href: "/inventory-management" },
          { icon: IconTrendingDown, label: "Shrink Tracking", desc: "Track loss early", href: "/shrink-tracking" },
          { icon: IconBarChart, label: "Reporting & Insights", desc: "See what's working", href: "/reporting" },
        ],
      },
    ],
    featured: {
      badge: "100% Free",
      title: "Run your entire store from one system",
      desc: "Give your store the same advantages as the big chains — completely free, forever.",
      href: "https://back-office.usecheetah.com/",
    },
  },
  Solutions: {
    cols: [
      {
        title: "BY BUSINESS GOAL",
        items: [
          { icon: IconTrendingUp, label: "Grow your sales", desc: "Earn more from your shoppers", href: "/grow-sales" },
          { icon: IconShieldCheck, label: "Protect your margins", desc: "Stop margin leaks", href: "/protect-margin" },
          { icon: IconZap, label: "Optimize your labor", desc: "Get more done", href: "/optimize-labor" },
          { icon: IconGlobe, label: "Expand your market share", desc: "Grow to many locations", href: "/expand-market-share" },
          { icon: IconSparkles, label: "Upgrade with confidence", desc: "Modernize without headaches", href: "/upgrade-with-confidence" },
        ],
      },
      {
        title: "BY STORE FORMAT",
        items: [
          { icon: IconStore, label: "Supermarkets", desc: "Keep checkout fast and in sync", href: "/supermarkets" },
          { icon: IconStore, label: "Meat Markets", desc: "Price accurately and reduce shrink", href: "/meat-markets" },
          { icon: IconLeaf, label: "Natural & Organic Stores", desc: "Run bulk items without delays", href: "/natural-organic-food-stores" },
          { icon: IconLeaf, label: "Produce Markets", desc: "Stay stocked and cut spoilage", href: "/produce-markets" },
          { icon: IconShoppingBag, label: "Specialty Food Stores", desc: "Handle complex items with ease", href: "/specialty-food-stores" },
        ],
      },
    ],
  },
  Compare: {
    cols: [
      {
        title: "COMPARISON",
        items: [
          { label: "Cheetah vs NCR", href: "/cheetah-vs-ncr" },
          { label: "Cheetah vs ECRS", href: "/cheetah-vs-ecrs" },
          { label: "Cheetah vs LOC", href: "/cheetah-vs-loc" },
          { label: "Cheetah vs RORC", href: "/cheetah-vs-rorc" },
          { label: "Cheetah vs IT Retail", href: "/cheetah-vs-it-retail" },
          { label: "Cheetah vs Markt POS", href: "/cheetah-vs-markt-pos" },
          { label: "Cheetah vs Toast", href: "/cheetah-vs-toast" },
        ],
      },
    ],
    testimonial: {
      quote: "Switching to Cheetah was the best business decision I've made in the last 20 years.",
      image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=400&auto=format&fit=crop&q=60",
    },
  },
  Resources: {
    cols: [
      {
        items: [
          { icon: IconBookOpen, label: "Blog", desc: "Insights and strategies for modern retailers", href: "/blog" },
          { icon: IconCalendar, label: "Book a Demo", desc: "See Cheetah in action", href: "https://calendly.com/cheetahdemo/30min", external: true },
          { icon: IconInfo, label: "Contact Support", desc: "Get help from our team", href: "mailto:hello@usecheetah.com", external: true },
        ],
      },
    ],
    testimonial: {
      quote: "When you are partnered with a system like Cheetah you are already ahead. It is extremely important for small businesses like us to thrive.",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=400&auto=format&fit=crop&q=60",
    },
  },
  Company: {
    cols: [
      {
        items: [
          { icon: IconBuilding, label: "About Us", desc: "Why we built Cheetah", href: "/about" },
          { icon: IconTarget, label: "Careers", desc: "Build the future of retail in Africa", href: "/careers" },
        ],
      },
    ],
  },
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerH = scrolled ? 76 : 96;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const navKeys = Object.keys(menuConfig) as MenuKey[];
  const isOpen = !!activeMenu;

  return (
    <>
      {/* ── Header bar ── */}
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          height: `${headerH}px`,
          display: "flex", alignItems: "center", padding: "0 5%",
          background: (scrolled || isOpen) ? "rgba(5,35,21,0.97)" : "transparent",
          backdropFilter: (scrolled || isOpen) ? "blur(24px)" : "none",
          WebkitBackdropFilter: (scrolled || isOpen) ? "blur(24px)" : "none",
          borderBottom: (scrolled || isOpen) ? "1px solid rgba(178,217,59,0.15)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        <div style={{ maxWidth: "1350px", margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: "40px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <Image priority src="/images/favicon-light.png" alt="Cheetah" width={130} height={36}
              style={{ objectFit: "contain", width: "clamp(100px, 10vw, 128px)", height: "auto" }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1 }}>
            {navKeys.map((key) => (
              <div key={key} style={{ position: "relative" }}
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
              >
                <button className="mega-nav-btn" style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  background: activeMenu === key ? "rgba(178,217,59,0.1)" : "transparent",
                  border: "none", cursor: "pointer",
                  color: activeMenu === key ? "#b2d93b" : "rgba(253,253,253,0.7)",
                  fontSize: "14px", fontWeight: 600, padding: "10px 14px",
                  borderRadius: "10px", transition: "all 0.25s ease",
                  fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em", whiteSpace: "nowrap",
                }}>
                  {key}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: activeMenu === key ? "rotate(180deg)" : "none", transition: "transform 0.25s ease", flexShrink: 0 }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            ))}
            <Link href="/blog" className="mega-nav-btn-link" style={{
              color: "rgba(253,253,253,0.7)", fontSize: "14px", fontWeight: 600,
              padding: "10px 14px", borderRadius: "10px", transition: "all 0.25s ease",
              letterSpacing: "-0.01em", textDecoration: "none", whiteSpace: "nowrap",
            }}>
              Blog
            </Link>
          </nav>

          {/* CTAs */}
          <div className="desktop-cta" style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/"
              className="header-login-btn"
              style={{ color: "rgba(253,253,253,0.7)", fontSize: "14px", fontWeight: 700, padding: "10px 18px", borderRadius: "10px", transition: "all 0.3s ease", textDecoration: "none", whiteSpace: "nowrap" }}>
              Log In
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ textDecoration: "none" }}>
              <button className="btn-glow-primary" style={{
                padding: "11px 22px", fontSize: "14px", background: "#b2d93b", color: "#052315",
                border: "none", borderRadius: "10px", fontWeight: 800, cursor: "pointer",
                display: "flex", alignItems: "center", gap: "7px", transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}>
                Start Free
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={toggleDrawer} className="mobile-burger" aria-label="Open menu"
            style={{ background: "rgba(253,253,253,0.05)", border: "1px solid rgba(253,253,253,0.1)", cursor: "pointer", padding: "12px", borderRadius: "12px", color: "#fdfdfd", display: "none", flexDirection: "column", gap: "5px", alignItems: "flex-end", marginLeft: "auto" }}>
            <span style={{ display: "block", width: "22px", height: "2px", background: "#fdfdfd", borderRadius: "10px" }} />
            <span style={{ display: "block", width: "14px", height: "2px", background: "#fdfdfd", borderRadius: "10px" }} />
          </button>
        </div>
      </header>

      {/* ── Mega Menu Panel ── */}
      {isOpen && (
        <div
          className="mega-panel-outer"
          style={{
            position: "fixed", top: `${headerH}px`, left: 0, right: 0, zIndex: 9998,
            background: "rgba(5,35,21,0.98)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)",
            borderBottom: "1px solid rgba(178,217,59,0.12)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
            animation: "mega-slide-in 0.22s ease forwards",
          }}
          onMouseEnter={cancelClose}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "40px 5% 44px" }}>
            {(() => {
              const cfg = menuConfig[activeMenu!];
              const hasSide = !!(cfg.featured || cfg.testimonial);
              return (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: hasSide
                    ? `repeat(${cfg.cols.length}, 1fr) 300px`
                    : `repeat(${cfg.cols.length}, 1fr)`,
                  gap: "0 56px",
                }}>
                  {/* Link columns */}
                  {cfg.cols.map((col, ci) => (
                    <div key={ci}>
                      {col.title && (
                        <p style={{ fontSize: "10px", fontWeight: 900, color: "#b2d93b", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "18px" }}>
                          {col.title}
                        </p>
                      )}
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {col.items.map((item) => (
                          <Link key={item.label} href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            rel={item.external ? "noopener noreferrer" : ""}
                            onClick={() => setActiveMenu(null)}
                            className="mega-link"
                            style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "9px 10px", borderRadius: "12px", transition: "all 0.2s ease", textDecoration: "none" }}
                          >
                            {item.icon && (
                              <span style={{ display: "inline-flex", color: "#b2d93b", marginTop: "3px", flexShrink: 0 }}>
                                <item.icon size={20} />
                              </span>
                            )}
                            <div>
                              <div style={{ fontSize: "14px", fontWeight: 700, color: "#fdfdfd", lineHeight: 1.25 }}>{item.label}</div>
                              {item.desc && <div style={{ fontSize: "12px", color: "rgba(253,253,253,0.42)", marginTop: "3px", lineHeight: 1.4 }}>{item.desc}</div>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Featured card */}
                  {cfg.featured && (
                    <div style={{ borderLeft: "1px solid rgba(178,217,59,0.1)", paddingLeft: "40px" }}>
                      <a href={cfg.featured.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <div className="featured-card" style={{
                          background: "linear-gradient(135deg, rgba(178,217,59,0.1) 0%, rgba(10,61,36,0.55) 100%)",
                          border: "1px solid rgba(178,217,59,0.22)", borderRadius: "20px", padding: "26px",
                          cursor: "pointer", transition: "all 0.3s ease", height: "100%",
                        }}>
                          {cfg.featured.badge && (
                            <span style={{ fontSize: "10px", fontWeight: 900, color: "#052315", background: "#b2d93b", borderRadius: "100px", padding: "4px 12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                              {cfg.featured.badge}
                            </span>
                          )}
                          <h4 style={{ fontFamily: "Syne, sans-serif", fontSize: "18px", fontWeight: 800, color: "#fdfdfd", margin: "16px 0 10px", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                            {cfg.featured.title}
                          </h4>
                          <p style={{ fontSize: "13px", color: "rgba(253,253,253,0.5)", lineHeight: 1.55 }}>{cfg.featured.desc}</p>
                          <div style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 800, color: "#b2d93b" }}>
                            Get started free
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}

                  {/* Testimonial card */}
                  {cfg.testimonial && (
                    <div style={{ borderLeft: "1px solid rgba(178,217,59,0.1)", paddingLeft: "40px" }}>
                      <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", height: "100%", minHeight: "220px" }}>
                        <Image src={cfg.testimonial.image} alt="" fill sizes="300px" style={{ objectFit: "cover", display: "block" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,35,21,0.97) 0%, rgba(5,35,21,0.3) 100%)" }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "22px" }}>
                          <p style={{ fontSize: "13px", color: "rgba(253,253,253,0.85)", lineHeight: 1.55, fontStyle: "italic" }}>&ldquo;{cfg.testimonial.quote}&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9997, background: "rgba(0,0,0,0.45)", animation: "mega-slide-in 0.22s ease" }}
          onClick={() => setActiveMenu(null)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xl"
        title={<Image priority src="/images/favicon-light.png" alt="Cheetah" width={120} height={32} style={{ objectFit: "contain" }} />}
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
          content: { background: "#052315", color: "#fdfdfd" },
          header: { background: "#052315", borderBottom: "1px solid rgba(178,217,59,0.15)", padding: "24px" },
          close: { color: "#fdfdfd", background: "rgba(253,253,253,0.05)", borderRadius: "50%", width: "48px", height: "48px" },
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(120)})`} mx="-md" px="xl">
          <div style={{ padding: "24px 0", display: "flex", flexDirection: "column", gap: "0" }}>
            {navKeys.map((key) => (
              <div key={key}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "none", border: "none", cursor: "pointer",
                    color: "#fdfdfd", fontSize: "21px", fontFamily: "Syne, sans-serif",
                    fontWeight: 800, padding: "16px 0", letterSpacing: "-0.04em",
                    borderBottom: "1px solid rgba(253,253,253,0.06)",
                  }}
                >
                  {key}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: mobileExpanded === key ? "rotate(180deg)" : "none", transition: "transform 0.25s ease", flexShrink: 0 }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileExpanded === key && (
                  <div style={{ paddingLeft: "12px", paddingBottom: "12px", display: "flex", flexDirection: "column" }}>
                    {menuConfig[key].cols.flatMap(col => col.items).map((item) => (
                      <Link key={item.label} href={item.href} onClick={closeDrawer}
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : ""}
                        style={{ color: "rgba(253,253,253,0.6)", fontSize: "15px", fontWeight: 600, padding: "10px 0", display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", borderBottom: "1px solid rgba(253,253,253,0.03)" }}>
                        {item.icon && (
                          <span style={{ display: "inline-flex", color: "#b2d93b", flexShrink: 0 }}>
                            <item.icon size={18} />
                          </span>
                        )}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/blog" onClick={closeDrawer} style={{ color: "#fdfdfd", fontSize: "21px", fontFamily: "Syne, sans-serif", fontWeight: 800, padding: "16px 0", display: "block", letterSpacing: "-0.04em", borderBottom: "1px solid rgba(253,253,253,0.06)", textDecoration: "none" }}>
              Blog
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%", textDecoration: "none" }}>
              <button style={{ width: "100%", padding: "20px", fontSize: "17px", background: "#b2d93b", border: "none", borderRadius: "100px", fontWeight: 800, color: "#052315", cursor: "pointer" }}>
                Get Started Free
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://back-office.usecheetah.com/" style={{ width: "100%", textDecoration: "none" }}>
              <button style={{ width: "100%", padding: "20px", fontSize: "17px", background: "rgba(253,253,253,0.05)", border: "1px solid rgba(253,253,253,0.15)", borderRadius: "100px", color: "#fdfdfd", fontWeight: 700, cursor: "pointer" }}>
                Log In
              </button>
            </a>
          </div>
        </ScrollArea>
      </Drawer>

      <style>{`
        @keyframes mega-slide-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-nav-btn:hover {
          color: #b2d93b !important;
          background: rgba(178,217,59,0.08) !important;
        }
        .mega-nav-btn-link:hover {
          color: #b2d93b !important;
          background: rgba(178,217,59,0.08) !important;
        }
        .mega-link:hover {
          background: rgba(178,217,59,0.08) !important;
        }
        .mega-link:hover div div:first-child {
          color: #b2d93b !important;
        }
        .header-login-btn:hover {
          color: #fdfdfd !important;
          background: rgba(253,253,253,0.08) !important;
          border-radius: 10px;
        }
        .btn-glow-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(178,217,59,0.4) !important;
          filter: brightness(1.1);
        }
        .featured-card:hover {
          background: linear-gradient(135deg, rgba(178,217,59,0.18) 0%, rgba(10,61,36,0.7) 100%) !important;
          border-color: rgba(178,217,59,0.45) !important;
        }
        @media (max-width: 1100px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
        @media (max-width: 768px) {
          header { padding: 0 16px !important; }
        }
      `}</style>
    </>
  );
}
