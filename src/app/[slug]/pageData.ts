// ── Plain data file — NO "use client" ──
// Both the Server Component (page.tsx) and Client Component (PageClient.tsx)
// can safely import from here without violating Next.js server/client boundaries.

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ComparePricing {
  licenseFee: string;
  setupFee: string;
  offlineCapability: string;
  hardwareCompatibility: string;
  digitalReceipts: string;
  customerSupport: string;
}

export interface PageData {
  slug: string;
  type: "product" | "solution-goal" | "solution-format" | "compare" | "company";
  tag: string;
  title: string;
  metaDesc: string;
  heading: string;
  subheading: string;
  heroMedia: { type: "image" | "video"; url: string };
  stats: { value: string; label: string }[];
  features: Feature[];
  integrations?: string[];
  testimonial: { quote: string; author: string; role: string; image: string };
  faqs?: FAQ[];
  competitorName?: string;
  comparePricing?: ComparePricing;
}

// Complete registry of all 27 pages
export const pageRegistry: Record<string, PageData> = {
  // ─── PRODUCTS ───
  pos: {
    slug: "pos",
    type: "product",
    tag: "FRONT STORE PRODUCT",
    title: "Point of Sale (POS) — Cheetah Retail OS",
    metaDesc: "Ring shoppers faster, prevent checkout fraud, and process transactions offline with Africa's No.1 smart retail POS terminal software.",
    heading: "Ring up sales faster, even offline",
    subheading: "A beautiful, lightning-fast cash register built specifically for high-volume African supermarkets, retail stores, and busy wholesale depots. Engineered for zero downtime, zero missed sales, and immediate transaction reconciliation.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4121270/" },
    stats: [
      { value: "0.8s", label: "Average item scan speed" },
      { value: "100%", label: "Offline uptime guaranteed" },
      { value: "35%+", label: "Checkout speedup rate" }
    ],
    features: [
      { icon: "zap", title: "Instant Barcode Scanning", desc: "Say goodbye to annoying lag. Scan multiple items per second with camera or hardware scanners using our hyper-optimized local cache database." },
      { icon: "wifi", title: "True Offline Mode", desc: "Keep ringing up customers during network cuts and power outages. Data is stored securely on the device and syncs automatically when connection returns." },
      { icon: "lock", title: "Fraud & Void Protection", desc: "Protect your hard-earned margins. Require instantaneous manager approval for item deletes, price overrides, and cash drawer openings." }
    ],
    integrations: ["M-Pesa Mobile Payments", "Interswitch Gateway", "Paystack Billing", "Moniepoint POS", "Hardware Barcode Scanners", "ESC/POS Receipt Printers"],
    testimonial: {
      quote: "Cheetah's POS is incredibly responsive and reliable. Even during major network cuts, our cashiers continue ringing sales without any interruption. Our customers never have to stand in long queues anymore.",
      author: "Abiodun Bello",
      role: "Operations Director, MegaMart Supermarkets",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "Does the POS work without an active internet connection?", a: "Yes, 100%. All transaction processing, barcode lookups, and tax calculations run locally on your device's offline database. Once your internet reconnects, all data is safely and seamlessly synced to the cloud." },
      { q: "What hardware is compatible with Cheetah POS?", a: "Cheetah POS runs on any tablet, Android POS terminal, iPad, or computer. We support standard USB/Bluetooth barcode scanners, ESC/POS receipt printers, and automatic cash drawers." }
    ]
  },
  payments: {
    slug: "payments",
    type: "product",
    tag: "FRONT STORE PRODUCT",
    title: "Integrated Payments — Cheetah Retail OS",
    metaDesc: "Accept all forms of mobile money, cards, bank transfers, and local payment types directly on your POS with zero hidden fees.",
    heading: "Accept every payment type instantly",
    subheading: "Eliminate payment reconciliation headaches. Accept debit cards, bank transfers, mobile money, and USSD payments with immediate confirmation on the cashier screen. Zero fraud, zero waiting.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/8421356/" },
    stats: [
      { value: "0%", label: "Setup and integration fees" },
      { value: "99.9%", label: "Transaction success rate" },
      { value: "Same-day", label: "Payout settlements" }
    ],
    features: [
      { icon: "smartphone", title: "All-in-One Acceptance", desc: "Process Visa, Mastercard, Verve, Bank Transfers, USSD, and Mobile Money directly inside the POS check-out flow without juggling multiple terminals." },
      { icon: "creditcard", title: "Split & Multi-Pay", desc: "Allow customers to split their payments across cash, card, mobile money, and vouchers seamlessly. Instant verification keeps the line moving." },
      { icon: "receipt", title: "Automated Reconciliation", desc: "Say goodbye to matching bank alerts. Payments are automatically linked to transaction records and cross-referenced in real-time." }
    ],
    integrations: ["Visa Card Processing", "Mastercard network", "Verve Local Card", "MTN MoMo", "Orange Money", "Airtel Money", "Direct Transfer API"],
    testimonial: {
      quote: "Our daily reconciliation time went from 3 hours to absolutely zero. The instant payment verification on the cashier screen means we are protected against fake bank alerts.",
      author: "Evelyn Kamau",
      role: "Founder, Peak Organic Grocers",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "How long do payouts take?", a: "Payments are processed and settled directly to your connected bank account or settlement wallet on a same-day or next-day basis." },
      { q: "Is there an extra charge for setup?", a: "No. The integration is completely free to set up, and we offer the lowest transaction processing rates on the continent." }
    ]
  },
  shopper: {
    slug: "shopper",
    type: "product",
    tag: "FRONT STORE PRODUCT",
    title: "Shopper Engagement & Loyalty — Cheetah Retail OS",
    metaDesc: "Turn simple retail trips into repeat visits. Drive bigger baskets with dynamic loyalty points, discounts, and personalized rewards.",
    heading: "Turn one-time shoppers into loyal regulars",
    subheading: "Build personal relationships with your shoppers. Track shopping preferences, launch customizable reward points, and send targeted WhatsApp/SMS offers that keep customers returning to your store.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/29824278/" },
    stats: [
      { value: "22%+", label: "Average basket size increase" },
      { value: "4.8x", label: "Higher return shopper rate" },
      { value: "100%", label: "Digital receipt delivery" }
    ],
    features: [
      { icon: "gift", title: "Customizable Loyalty Schemes", desc: "Award points per product or purchase amount. Customers redeem points instantly at checkout with simple phone number lookup." },
      { icon: "message", title: "WhatsApp & SMS Receipts", desc: "Save paper costs and build your customer database. Send elegant, interactive digital receipts directly to their favorite messaging apps." },
      { icon: "barchart", title: "Purchase History Analytics", desc: "Know exactly what your top customers are buying. Run personalized promotional campaigns designed to increase lifetime value." }
    ],
    testimonial: {
      quote: "Sending digital receipts via WhatsApp doubled our repeat customers in just 30 days. Customers love tracking their loyalty points on their phone.",
      author: "Chinedu Okafor",
      role: "Owner, Prime Choice Supermarket",
      image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "How do customers track their loyalty points?", a: "Customers receive their current point balance at the bottom of every digital receipt sent via WhatsApp or SMS, keeping them engaged without needing another app." },
      { q: "Is sending WhatsApp receipts expensive?", a: "No, Cheetah offers a generous free tier of digital receipt delivery and very low local rates for bulk SMS/WhatsApp campaigns." }
    ]
  },
  "back-office": {
    slug: "back-office",
    type: "product",
    tag: "BACK OFFICE PRODUCT",
    title: "Order Management & Back-Office — Cheetah Retail OS",
    metaDesc: "Simplify purchase orders, manage multi-vendor supply chains, and automate back-office operations from one central dashboard.",
    heading: "Take absolute control of your back office",
    subheading: "Streamline multi-vendor orders, manage supplier pricing matrices, and control inventory receipts. The powerful brain of your retail business designed to optimize operations.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/36108507/" },
    stats: [
      { value: "4.5hr", label: "Saved daily on admin tasks" },
      { value: "15%+", label: "Better purchasing terms" },
      { value: "Zero", label: "Paper invoice headaches" }
    ],
    features: [
      { icon: "filetext", title: "Smart Purchase Orders", desc: "Generate multi-vendor purchase orders instantly based on dynamic low-stock alerts, sales speed, and historic lead times." },
      { icon: "building", title: "Multi-Store Management", desc: "Control stock transfers, view unified sales, and manage pricing across multiple store locations and warehouses from anywhere." },
      { icon: "trendingup", title: "Vendor Performance Score", desc: "Track supplier lead times, order fill rates, and price variances across all your wholesale suppliers automatically." }
    ],
    testimonial: {
      quote: "Cheetah's order management lets us coordinate 3 branches and over 80 suppliers from a single screen. We never over-order or run short of key assets.",
      author: "Mariam Diallo",
      role: "Supply Chain Manager, SeneFood Centers",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "Can I manage stock transfers between stores?", a: "Yes, Cheetah handles full multi-branch transfer workflows, tracking departure, transit, and receipt confirmation with full variance reporting." },
      { q: "How do low-stock alerts work?", a: "You can set custom low-stock thresholds for each item or store. The system automatically highlights these items and lists them for reordering." }
    ]
  },
  margin: {
    slug: "margin",
    type: "product",
    tag: "BACK OFFICE PRODUCT",
    title: "Pricing Automation & Margins — Cheetah Retail OS",
    metaDesc: "Protect your retail margins with automated pricing engines. Adjust prices in real-time to hedge inflation and input costs.",
    heading: "Automate pricing to protect your margins",
    subheading: "Never sell at a loss due to inflation or volatile wholesale prices. Cheetah continuously tracks cost changes and updates your retail prices automatically to protect profit margins.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/29778910/" },
    stats: [
      { value: "100%", label: "Price consistency across shelves" },
      { value: "5.2%+", label: "Gross profit margin uplift" },
      { value: "Real-time", label: "Inflation adjustment updates" }
    ],
    features: [
      { icon: "coin", title: "Dynamic Pricing Rules", desc: "Set automatic markup margins by department. When supply costs change, shelf prices update in lockstep to secure profits." },
      { icon: "smartphone", title: "Instant Electronic Shelf Labels", desc: "Sync POS prices with digital shelf labels or generate print-ready barcodes in bulk in one click for manual tags." },
      { icon: "trendingdown", title: "Margin Leak Alerts", desc: "Get real-time mobile push warnings if competitive discounting or cost adjustments drop margins below your safe threshold." }
    ],
    testimonial: {
      quote: "With constant currency changes, updating prices manually was impossible. Cheetah has secured our margins by automating retail adjustments.",
      author: "Kofi Mensah",
      role: "CEO, Mensah Wholesale Grocery",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "How does inflation protection pricing work?", a: "When you receive a new batch with a higher cost price, Cheetah automatically recalculates the retail price based on your target markup rules, warning you of margin compression." },
      { q: "Can I set promotions that override these rules?", a: "Yes, you can schedule promotional pricing that runs for a set time window, after which prices automatically revert to original margin rules." }
    ]
  },
  "inventory-management": {
    slug: "inventory-management",
    type: "product",
    tag: "BACK OFFICE PRODUCT",
    title: "Smart Inventory Management — Cheetah Retail OS",
    metaDesc: "Avoid stockouts and eliminate dead stock. Cheetah tracks thousands of SKUs in real-time with automated ordering lists.",
    heading: "Always know what is on your shelves",
    subheading: "Automated stock tracking, batch/expiry alerts, and predictive replenishment tools. Prevent stockouts of your most profitable items and eliminate dead stock losses.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/7125839/" },
    stats: [
      { value: "85%", label: "Reduction in stockout days" },
      { value: "28%+", label: "Better inventory turnover" },
      { value: "Zero", label: "Expired product losses" }
    ],
    features: [
      { icon: "calendar", title: "Expiry Date Tracking", desc: "Receive automated notifications months before batches expire so you can run clear-out sales and prevent total waste." },
      { icon: "target", title: "Stock audit on the fly", desc: "Conduct stock counts while the store is open. The system automatically adjusts for live checkout sales to keep counts accurate." },
      { icon: "barchart", title: "Predictive Restocking", desc: "AI-based recommendations analyze historic sales velocity to recommend the exact order amount for any season." }
    ],
    testimonial: {
      quote: "Before Cheetah, we expired thousands of dollars in stock. Now we get notifications 90 days before and clear it out at great margins.",
      author: "Sarah Tetteh",
      role: "Proprietress, Tetteh Pharma & Wellness",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "Can I track batches and expiry dates?", a: "Yes. Every inventory intake batch can be assigned an expiry date. Cheetah tracks these and prioritizes them in cashier layouts." },
      { q: "Does the system support multiple warehouses?", a: "Yes, you can track stock across multiple physical locations, central distribution warehouses, and retail shelves simultaneously." }
    ]
  },
  "shrink-tracking": {
    slug: "shrink-tracking",
    type: "product",
    tag: "BACK OFFICE PRODUCT",
    title: "Shrink & Fraud Tracking — Cheetah Retail OS",
    metaDesc: "Stop theft, shrinkage, and inventory leakages. Cheetah's AI tracks cash drawer voids, manual returns, and stock discrepancies.",
    heading: "Eliminate internal theft and margin shrink",
    subheading: "Secure your hard-earned profits. Monitor cash register voids, stock adjustments, and supplier short-shipments with complete transparency and real-time auditing.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4121627/" },
    stats: [
      { value: "92%", label: "Drop in register discrepancy" },
      { value: "4x", label: "Faster fraud identification" },
      { value: "$2.4k", label: "Average monthly shrink savings" }
    ],
    features: [
      { icon: "eyeoff", title: "Cashier Behavior Logs", desc: "Audit every keypress. Flag cashiers with unusually high void counts, custom discounts, or cancelled sales instantly." },
      { icon: "clipboard", title: "Blind Stock Counts", desc: "Require stock-counters to input actual quantities without showing system estimates to prevent lazy counting and audit falsification." },
      { icon: "bell", title: "Real-time Discrepancy Alerts", desc: "Instant mobile alerts notify you of stockouts, irregular inventory adjustments, or suspect manual overrides as they happen." }
    ],
    testimonial: {
      quote: "Cheetah's cashier void reports revealed thousands of dollars in leakage that had been happening right under our noses for months.",
      author: "Emmanuel Nduka",
      role: "Managing Director, Landmark Stores",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "How do blind stock counts protect against fraud?", a: "By hiding the expected stock quantity, employees must physically count items. This prevents them from simply entering matching numbers or hiding missing items." },
      { q: "What alerts do store managers receive?", a: "Managers receive instant notifications for high-value voids, custom manual price changes, cash drawers opened without sales, and negative stock overrides." }
    ]
  },
  reporting: {
    slug: "reporting",
    type: "product",
    tag: "BACK OFFICE PRODUCT",
    title: "Reporting & Intelligent Insights — Cheetah Retail OS",
    metaDesc: "Make data-driven retail decisions. Cheetah's gorgeous visual reporting provides sales analysis, cash flow summaries, and SKU profitability.",
    heading: "Deep retail insights, simplified",
    subheading: "Beautiful, interactive visual reports delivered directly to your mobile phone. Know your net profit, best-selling categories, and cash status instantly with absolute precision.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4122971/" },
    stats: [
      { value: "100%", label: "Real-time accuracy" },
      { value: "2sec", label: "To load any complex report" },
      { value: "Weekly", label: "Automated executive digests" }
    ],
    features: [
      { icon: "trendingup", title: "Real-time Gross Profit Reports", desc: "Instantly see exactly how much money you made today, subtracting precise product cost calculations and discount effects." },
      { icon: "sparkles", title: "Winner vs. Loser SKUs", desc: "Identify high-margin winners that deserve prime shelf placement and low-turnover dead items to clear out before they expire." },
      { icon: "package", title: "Supplier Performance Metrics", desc: "Compare actual lead times, invoice accuracy, and profit margin contribution across all your third-party distributors." }
    ],
    testimonial: {
      quote: "No more messy spreadsheets at the end of the month. I open my Cheetah app and see my exact store health in beautifully clean charts.",
      author: "Fatoumata Traore",
      role: "Owner, Traore Boutique & Grocery",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "Can I access sales reports remotely?", a: "Yes. All sales, margins, and inventory metrics sync securely to your cloud console, letting you audit performance from any device worldwide." },
      { q: "Can these reports be exported?", a: "Yes, you can export any report into Excel, CSV, or print-ready PDF formats with one tap." }
    ]
  },
  financing: {
    slug: "financing",
    type: "product",
    tag: "GROWTH & CAPITAL",
    title: "Inventory Financing & Supplier Network — Cheetah Retail OS",
    metaDesc: "Connect directly with suppliers for better margins and access inventory financing to scale your supermarket or pharmacy without cash strain.",
    heading: "Stock more. Pay later. Grow faster.",
    subheading: "Cheetah isn't just a POS. We connect you directly to major manufacturers for better wholesale prices and provide the inventory financing you need to keep your shelves full.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "0%", label: "Upfront capital required for stock" },
      { value: "Direct", label: "Manufacturer pricing" },
      { value: "24hr", label: "Approval based on POS sales" }
    ],
    features: [
      { icon: "building", title: "Direct Supplier Network", desc: "Order directly from manufacturers through your POS. Eliminate middlemen and protect your margins with wholesale pricing." },
      { icon: "creditcard", title: "Inventory Financing", desc: "Get access to credit lines based on your actual sales data. Stock up for peak seasons without draining your cash flow." },
      { icon: "package", title: "Automated Restocking", desc: "When stock runs low, Cheetah automatically generates purchase orders to your approved suppliers. Just approve and receive." }
    ],
    testimonial: {
      quote: "The ability to order stock on credit directly through Cheetah changed my business. I can stock up for the holidays without emptying my bank account, and the direct supplier prices mean my margins are better than ever.",
      author: "Chinedu Okafor",
      role: "Owner, Prime Choice Supermarket",
      image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "How do I qualify for inventory financing?", a: "Qualification is based on your sales history within the Cheetah POS. The more you use Cheetah to process transactions, the larger the credit line you can access." },
      { q: "Which suppliers are in the network?", a: "We partner with major FMCG manufacturers and distributors across Nigeria, Kenya, South Africa, and Ghana. The list is constantly growing." }
    ]
  },
  marketplace: {
    slug: "marketplace",
    type: "product",
    tag: "SUPPLIER NETWORK",
    title: "B2B Marketplace & Direct Manufacturer Access — Cheetah",
    metaDesc: "Bypass middlemen and source inventory directly from major FMCG manufacturers at the best wholesale prices on the Cheetah B2B Marketplace.",
    heading: "Source directly from the manufacturer",
    subheading: "Stop overpaying for inventory. The Cheetah Marketplace connects your store directly to verified distributors and major FMCG brands for seamless ordering and better margins.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "100%", label: "Direct manufacturer pricing" },
      { value: "1,000+", label: "Verified distributors" },
      { value: "Next-day", label: "Average delivery time" }
    ],
    features: [
      { icon: "shoppingcart", title: "Unified Ordering Dashboard", desc: "Browse thousands of SKUs from multiple suppliers and build a single, unified purchase order in minutes." },
      { icon: "trendingup", title: "Transparent Pricing Matrices", desc: "See the exact wholesale price and instantly calculate your retail margin before confirming any order." },
      { icon: "truck", title: "Automated Logistics Tracking", desc: "Track your incoming stock deliveries in real-time, from the distributor's warehouse to your store's back door." }
    ],
    testimonial: {
      quote: "Before the Cheetah Marketplace, I had to negotiate with five different middlemen just to stock my shelves. Now, I order directly from the brands and my margins have improved by over 12%.",
      author: "Grace Mwangi",
      role: "Director, Apex Wholesalers",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    },
    faqs: [
      { q: "Is the marketplace available in my region?", a: "We are currently connecting retailers with distributors in major metropolitan areas across Nigeria, Kenya, and South Africa, with more regions opening soon." },
      { q: "Can I use my inventory financing on the marketplace?", a: "Yes. Any approved credit lines from Cheetah can be applied directly to purchases made on the B2B Marketplace at checkout." }
    ]
  },

  // ─── SOLUTIONS BY GOAL ───
  "grow-sales": {
    slug: "grow-sales",
    type: "solution-goal",
    tag: "BUSINESS GOAL SOLUTION",
    title: "Grow Sales & Increase Basket Sizes — Cheetah",
    metaDesc: "Unlock powerful retail revenue growth. Use Cheetah POS smart promotions, loyalty programs, and payment methods to drive larger purchases.",
    heading: "Increase ticket size and draw more shoppers",
    subheading: "Deploy modern retail promotions, digital customer marketing, and fast checkout flows that keep shoppers happy, loyal, and spending more per visit.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4121754/" },
    stats: [
      { value: "22%+", label: "Increase in average basket size" },
      { value: "45%+", label: "Faster shopper check-outs" },
      { value: "10x", label: "ROI on marketing campaigns" }
    ],
    features: [
      { icon: "gift", title: "Dynamic Promo Engine", desc: "Launch buy-one-get-one, bundle discounts, and weekend flash promotions across specific categories in seconds." },
      { icon: "target", title: "Targeted Customer Reach", desc: "Send personalized WhatsApp/SMS coupons directly to customers who haven't visited in over 30 days to re-engage them." },
      { icon: "smartphone", title: "Integrated Payment Options", desc: "Keep customer friction low by accepting all cards, bank transfers, mobile money, and partial payment options seamlessly." }
    ],
    testimonial: {
      quote: "Cheetah's loyalty system helped us grow sales by 25% in three months. Shoppers come in more often to stack up points.",
      author: "David Adeleke",
      role: "Managing Director, GreenLife Markets",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    }
  },
  "protect-margin": {
    slug: "protect-margin",
    type: "solution-goal",
    tag: "BUSINESS GOAL SOLUTION",
    title: "Protect Margins against Inflation — Cheetah",
    metaDesc: "Insulate your retail profits. Automatically track cost adjustments and calculate optimized pricing rules to counter inflation.",
    heading: "Insulate your retail margins from inflation",
    subheading: "With rising wholesale prices, manual tag changes lead to margin leakages. Automate markups and cost-tracking to stay profitable in real-time.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1664300133951-32fdd1435994?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "5.4%+", label: "Immediate margin protection" },
      { value: "100%", label: "Real-time cost updates" },
      { value: "Zero", label: "Underpriced sales errors" }
    ],
    features: [
      { icon: "coin", title: "Automated Markup Rulebook", desc: "Establish pricing margins by brand or department. As supplier price lists change, sales prices adapt automatically." },
      { icon: "info", title: "Cost Change Alerts", desc: "Get instantly flagged whenever a supplier charges more for a product than agreed on your pricing matrix." },
      { icon: "filetext", title: "Accurate LIFO/FIFO Tracking", desc: "Accurately compute net profit using actual cost batches, guaranteeing you never underprice older stock." }
    ],
    testimonial: {
      quote: "We were losing thousands monthly due to delayed pricing changes. Cheetah keeps our markups perfectly locked to wholesale updates.",
      author: "Grace Mwangi",
      role: "Director, Apex Wholesalers",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "optimize-labor": {
    slug: "optimize-labor",
    type: "solution-goal",
    tag: "BUSINESS GOAL SOLUTION",
    title: "Optimize Labor & Cashier Productivity — Cheetah",
    metaDesc: "Save hours of daily manual work. Simplify inventory counts, eliminate manual calculations, and speed up cashiers.",
    heading: "Get more done with half the manual work",
    subheading: "Automate boring manual tasks. Make cashier shifts, stock intake, purchase orders, and sales auditing fast, effortless, and automated for everyone.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/14936143/" },
    stats: [
      { value: "3.5hr", label: "Saved daily per store manager" },
      { value: "60%+", label: "Faster physical inventory counting" },
      { value: "Zero", label: "Manual shift closure mistakes" }
    ],
    features: [
      { icon: "users", title: "Optimized Cashier Shifts", desc: "Track checkout scans-per-minute. Optimize shift schedules around peak customer volume hours." },
      { icon: "clipboard", title: "One-Click Shift Reconciliation", desc: "No more counting cash for hours. Cashiers close shifts in 2 minutes with automated register reports." },
      { icon: "package", title: "Bulk Price & Tag Updates", desc: "Modify 1,000 prices and export print-ready price tags in seconds rather than spending hours on separate items." }
    ],
    testimonial: {
      quote: "Cheetah turned our closing shifts from an exhausting 2-hour auditing battle into a stress-free 5-minute automated wrap-up.",
      author: "Chouaib Bensaid",
      role: "Operations Manager, Nour Superettes",
      image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=300&auto=format&fit=crop&q=60"
    }
  },
  "expand-market-share": {
    slug: "expand-market-share",
    type: "solution-goal",
    tag: "BUSINESS GOAL SOLUTION",
    title: "Expand Market Share & Scale Store Locations — Cheetah",
    metaDesc: "Run multiple retail stores seamlessly. Track inventory transfers, control employee access, and audit sales from anywhere.",
    heading: "Grow your retail footprint with zero friction",
    subheading: "Coordinate multiple warehouses, store branches, and staff accounts from a single cloud panel. Scaling your brand has never been this simple.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/28671131/" },
    stats: [
      { value: "Unlimited", label: "Locations supported" },
      { value: "Real-time", label: "Centralized inventory sync" },
      { value: "100%", label: "Remote operational auditing" }
    ],
    features: [
      { icon: "building", title: "Unified Cloud Console", desc: "View total sales, profit margins, and inventory levels across all branches from your mobile dashboard." },
      { icon: "globe", title: "Inter-Store Stock Transfers", desc: "Seamlessly transfer products between branches. Cheetah tracks departures, transits, and arrivals dynamically." },
      { icon: "lock", title: "Granular Employee Roles", desc: "Assign specific cashiers, managers, and warehouse staff with custom security permissions at each branch." }
    ],
    testimonial: {
      quote: "We grew from 2 stores to 6 in a single year using Cheetah. Having immediate remote auditing and automated inventory transfer saved us.",
      author: "Julius Okoro",
      role: "Founder, Prime Plaza Supermarkets",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    }
  },
  "upgrade-with-confidence": {
    slug: "upgrade-with-confidence",
    type: "solution-goal",
    tag: "BUSINESS GOAL SOLUTION",
    title: "Upgrade with Confidence — Migrate to Cheetah Retail OS",
    metaDesc: "Say goodbye to laggy legacy POS platforms. Migrate stock lists, cashier history, and loyalty databases to Cheetah with zero downtime.",
    heading: "Modernize your store without the headaches",
    subheading: "Ditch outdated, expensive POS systems. Migrate to Cheetah's beautiful, cloud-synced, offline-first operating system in less than a day with active local support.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "<2hr", label: "Complete data migration time" },
      { value: "15min", label: "Cashier training window" },
      { value: "$0", label: "Migration setup fee" }
    ],
    features: [
      { icon: "package", title: "Seamless Excel Import", desc: "Simply upload your existing product spreadsheet. We automatically categorize and structure all your items." },
      { icon: "users", title: "White-Glove Setup Assistance", desc: "Our local support engineering team will map your legacy databases and configure all POS terminals." },
      { icon: "cpu", title: "Ultra-Simple UI", desc: "No complex manuals. Cashiers learn Cheetah's clean, modern layout in less than fifteen minutes." }
    ],
    testimonial: {
      quote: "We had used a legacy system for 15 years and were terrified of upgrading. Cheetah migrated all our 12,000 SKUs in under 90 minutes. Remarkable.",
      author: "Moussa Diop",
      role: "General Manager, Diop Family Superstores",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    }
  },

  // ─── SOLUTIONS BY STORE FORMAT ───
  supermarkets: {
    slug: "supermarkets",
    type: "solution-format",
    tag: "STORE FORMAT SOLUTION",
    title: "Smart Supermarket POS & Inventory Software — Cheetah",
    metaDesc: "Keep checkouts fast, inventory in sync, and secure gross profit margins with Cheetah's enterprise supermarket operating system.",
    heading: "Keep high-volume checkouts moving smoothly",
    subheading: "Manage tens of thousands of SKUs, handle thousands of shoppers daily, and prevent cashier shrink with Africa's No.1 smart supermarket system.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/15754279/" },
    stats: [
      { value: "30k+", label: "SKUs handled seamlessly" },
      { value: "35%+", label: "Checkout speed increase" },
      { value: "99.9%", label: "Offline uptime reliability" }
    ],
    features: [
      { icon: "shoppingcart", title: "Heavy-Duty Scale Integrations", desc: "Connect directly to digital weight scales to ring up produce and loose inventory instantly at checkout." },
      { icon: "link", title: "Unified Multi-Terminal Sync", desc: "Sync pricing updates and inventory adjustments across 10+ cashier terminals in real-time." },
      { icon: "slash", title: "Strict Void Permissions", desc: "Mitigate collusion fraud by requiring manager barcode scan overrides to void items or open cash drawers." }
    ],
    testimonial: {
      quote: "Cheetah keeps our 8 lanes running in perfect sync. The offline capabilities mean power cuts never slow down our checkout speeds.",
      author: "Abel Mula",
      role: "Store Manager, Sun City Supermarkets",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "meat-markets": {
    slug: "meat-markets",
    type: "solution-format",
    tag: "STORE FORMAT SOLUTION",
    title: "Meat Market & Butcher Shop POS — Cheetah",
    metaDesc: "Accurately price meat by weight, track cold storage shrinkage, and streamline batch processing with Cheetah's meat market OS.",
    heading: "Precision weight pricing and shrink control",
    subheading: "Handle random-weight products, track meat cuts, and manage cold storage waste. Stop losing valuable margin to moisture loss and manual pricing errors.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "Random", label: "Weight barcode support" },
      { value: "-14%", label: "Reduction in waste and shrink" },
      { value: "100%", label: "Real-time cost batch tracing" }
    ],
    features: [
      { icon: "flame", title: "Random-Weight Barcodes", desc: "Instantly scan industry-standard variable weight barcodes (e.g. GS1 Databar) generated by butcher scales." },
      { icon: "server", title: "Cold Storage Waste Audit", desc: "Log shrinkage due to moisture evaporation or spoilage to maintain perfect inventory valuation." },
      { icon: "trendingdown", title: "Carcass to Cut Yield Maps", desc: "Track primal cuts and compute real yield percentages to calculate correct wholesale product margins." }
    ],
    testimonial: {
      quote: "Cheetah's native variable weight barcode scanning saved our butcher counter. Cashiers just scan the printed tag and checkout is complete.",
      author: "Babatunde Alao",
      role: "Managing Partner, The Prime Cut Butcheries",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    }
  },
  "natural-organic-food-stores": {
    slug: "natural-organic-food-stores",
    type: "solution-format",
    tag: "STORE FORMAT SOLUTION",
    title: "Natural & Organic Store Software — Cheetah",
    metaDesc: "Manage bulk loose bins, organic product batches, and run specialized retail loyalty programs with Cheetah's organic grocer OS.",
    heading: "Sleek organic grocery & bulk bin tracking",
    subheading: "Track organic product expiration dates, coordinate loose grain bin inventories, and build loyalty points for eco-conscious shoppers.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "Bulk Bins", label: "Tare weight tracking" },
      { value: "90 days", label: "Expiry advance alerts" },
      { value: "4.8x", label: "Higher repeat shoppers" }
    ],
    features: [
      { icon: "leaf", title: "Tare-Weight Scale Billing", desc: "Deduct packaging weights automatically at the register when customers bring their own reusable containers." },
      { icon: "sparkles", title: "Specialized Loyalty Hubs", desc: "Reward shoppers for eco-friendly practices and build deep loyalty databases using integrated SMS vouchers." },
      { icon: "bell", title: "Batch Expiry Monitors", desc: "Track organic produce shelf-lives and automatically adjust retail prices as expiries near." }
    ],
    testimonial: {
      quote: "Our customers love using their own jars. Cheetah's POS lets cashiers input container tare weights instantly, keeping checkout fast.",
      author: "Chioma Nze",
      role: "Founder, Earthly Goodness Organic",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "produce-markets": {
    slug: "produce-markets",
    type: "solution-format",
    tag: "STORE FORMAT SOLUTION",
    title: "Produce Market POS & Inventory Software — Cheetah",
    metaDesc: "Maximize farm-fresh margins. Easily manage seasonal price fluctuations, track fresh produce spoilage, and coordinate weigh scales.",
    heading: "Fresh produce management, simplified",
    subheading: "Keep fresh fruit and vegetable inventories stocked, price accurately by weight, and optimize seasonal profit margins.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4121754/" },
    stats: [
      { value: "-18%", label: "Produce spoilage rates" },
      { value: "0.5s", label: "Scale-to-POS data transfer" },
      { value: "Real-time", label: "Seasonal pricing adjustments" }
    ],
    features: [
      { icon: "leaf", title: "Integrated Weight Scales", desc: "Connect standard scales to the POS terminal. Prices are instantly generated based on weigh metrics." },
      { icon: "trendingdown", title: "Spoilage & Loss Logging", desc: "Track inventory loss by weight or item to pinpoint exactly which suppliers' stock spoils fastest." },
      { icon: "sparkles", title: "Dynamic Seasonal Markdowns", desc: "Run afternoon discounts to move perishable leafy greens before closing time at maximum profit." }
    ],
    testimonial: {
      quote: "Cheetah's scale-to-POS integration has saved us countless billing errors. Checkout is fast, and fresh produce waste is down by nearly 20%.",
      author: "Eliah Kwadwo",
      role: "Owner, Green Garden Produce",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    }
  },
  "specialty-food-stores": {
    slug: "specialty-food-stores",
    type: "solution-format",
    tag: "STORE FORMAT SOLUTION",
    title: "Specialty Food Store POS & Software — Cheetah",
    metaDesc: "Handle unique imported goods, wine batches, and complex packaging configurations with Cheetah's boutique retail OS.",
    heading: "Handle complex boutique inventory beautifully",
    subheading: "Perfect for high-end delis, wine boutiques, and imported goods stores. Manage case-to-item splits and trace custom gift packs.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "Case-to-Unit", label: "Automatic break down" },
      { value: "100%", label: "Import tax calculations" },
      { value: "+8%", label: "Overall retail margin increase" }
    ],
    features: [
      { icon: "shoppingbag", title: "Case and Unit Tracking", desc: "Receive inventory in bulk crates/cases and sell individual bottles or packs with automatic stock counts." },
      { icon: "gift", title: "Custom Gift Packs & Bundles", desc: "Create special hampers and combined bundles. The system adjusts separate SKU quantities in real-time." },
      { icon: "package", title: "Premium Visual Barcodes", desc: "Generate custom branding labels and price tags that fit high-end aesthetic store interiors." }
    ],
    testimonial: {
      quote: "Our fine wine bottles require distinct packaging pricing. Cheetah handles our custom cases and item breakdowns with absolute perfection.",
      author: "Antoinette Silva",
      role: "General Manager, Vineyard Imports",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    }
  },

  // ─── COMPARISONS ───
  "cheetah-vs-ncr": {
    slug: "cheetah-vs-ncr",
    type: "compare",
    tag: "CHEETAH VS NCR",
    title: "Cheetah vs NCR — Why Retailers are Upgrading",
    metaDesc: "Compare Cheetah vs NCR. Learn why modern supermarkets are swapping expensive, rigid legacy NCR registers for Cheetah's free offline-first operating system.",
    heading: "The modern, free alternative to legacy NCR systems",
    subheading: "NCR is the retail standard of the past, but it locks independent stores to massive capital outlays, rigid software license updates, and slow, offline-incapable servers. Cheetah delivers a cloud-backed checkout engine completely free.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "$0", label: "License fees (vs $2,500+/register)" },
      { value: "15min", label: "To get set up (vs weeks for NCR)" },
      { value: "True Cloud", label: "With real-time sync (no server racks)" }
    ],
    features: [
      { icon: "coin", title: "Zero Upfront vs Severe Fees", desc: "Skip NCR's steep upfront hardware fees and expensive software license contracts. Cheetah provides enterprise-grade checkout flows completely free forever." },
      { icon: "cloud", title: "Resilient Cloud vs In-Store Server", desc: "Avoid building costly local server closets. Cheetah runs beautifully on any standard tablet or iPad, with cloud sync backed by secure database backups." },
      { icon: "link", title: "Native Mobile Money vs Closed APIs", desc: "Integrate Orange Money, MTN MoMo, cards, and scanners natively in seconds. NCR requires long contract approvals and high consulting fees to add integrations." }
    ],
    comparePricing: {
      licenseFee: "$1,800 - $3,600 / year (per register)",
      setupFee: "$5,000 - $15,000 (site cabling & servers)",
      offlineCapability: "Locks checkouts if local back-office Windows Server crashes",
      hardwareCompatibility: "Strictly locked to NCR proprietary terminals ($2,000+ each)",
      digitalReceipts: "Requires expensive third-party custom software integrations",
      customerSupport: "Standard reseller support agreements ($1,500 - $5,000/year)"
    },
    competitorName: "NCR",
    testimonial: {
      quote: "NCR required a local IT administrator and over $10,000 in upfront costs just for two lanes. We deployed Cheetah in a single afternoon for zero cost.",
      author: "Marcus Adebayo",
      role: "Operations Director, Adebayo Retail Chains",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-ecrs": {
    slug: "cheetah-vs-ecrs",
    type: "compare",
    tag: "CHEETAH VS ECRS",
    title: "Cheetah vs ECRS Catapult — Retail Software Review",
    metaDesc: "Compare Cheetah vs ECRS Catapult. Escape expensive hardware bundles, annual maintenance agreements, and locked payment gateways.",
    heading: "Escape ECRS Catapult's high upfront costs",
    subheading: "ECRS Catapult delivers stable grocer checkouts, but forces you onto proprietary hardware bundles and expensive annual service contracts. Cheetah offers an open, highly compatible supermarket engine for free.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "$0", label: "Proprietary hardware lock-in fees" },
      { value: "0% markup", label: "Transparent payment gateway options" },
      { value: "Free", label: "24/7 Priority remote support assistance" }
    ],
    features: [
      { icon: "monitor", title: "Open Device Sync vs Strict Hardware", desc: "ECRS forces you to buy their expensive custom hardware terminals. Cheetah runs on any tablet, phone, or computer, allowing you to use existing hardware." },
      { icon: "coin", title: "No Base Contracts vs High Maintenance", desc: "Skip ECRS's hefty annual service fees and hardware markup agreements. Cheetah keeps your store cashflow fully protected with zero base costs." },
      { icon: "message", title: "Immediate WhatsApp Care vs Ticket Lag", desc: "Ditch complex ticketing escalations. Reach our local support engineers in 30 seconds via WhatsApp whenever you need setup or hardware troubleshooting." }
    ],
    comparePricing: {
      licenseFee: "$1,200 - $3,000 / year (mandatory lane support fees)",
      setupFee: "$3,000 - $7,000 (white-glove certified ECRS databases)",
      offlineCapability: "Handles localized redundancies but requires proprietary switches",
      hardwareCompatibility: "Locked to ECRS multi-touch station packages ($2,500+)",
      digitalReceipts: "Requires customer portal subscription add-ons",
      customerSupport: "Strict ticketing support tiers with paid annual service agreements"
    },
    competitorName: "ECRS",
    testimonial: {
      quote: "ECRS quoted us massive fees just for basic support and database configuration. With Cheetah, we went online and resolved our multi-store tracking for free.",
      author: "Nadine Toure",
      role: "Founder, Toure Pharmacy Group",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-loc": {
    slug: "cheetah-vs-loc",
    type: "compare",
    tag: "CHEETAH VS LOC SMS",
    title: "Cheetah vs LOC Software — Modern POS Comparison",
    metaDesc: "Compare Cheetah vs LOC SMS. Ditch complex, keyboard-heavy legacy designs and access cloud remote reporting on your phone for free.",
    heading: "Ditch LOC's complex 90s server layouts",
    subheading: "LOC SMS is stable but relies on keyboard-heavy, MS-DOS style interfaces that require specialized employee training. Cheetah delivers a gorgeous, touch-first interface and live cloud dashboards on your mobile phone.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/14936143/" },
    stats: [
      { value: "Modern", label: "Touch-first UI (vs LOC 90s keyboard)" },
      { value: "Instant", label: "Cloud mobile reporting (vs physical locks)" },
      { value: "Free", label: "WhatsApp & SMS receipts (vs heavy paper)" }
    ],
    features: [
      { icon: "smartphone", title: "Touch UI vs Complex Keys", desc: "No more memo-pad training sheets. Cashiers master Cheetah's gorgeous, modern touchscreen layout in under 15 minutes." },
      { icon: "cloud", title: "Real-Time Cloud vs Local Server Locks", desc: "LOC locks your sales reports to a physical back-office computer. Cheetah syncs everything securely, letting you audit store health from your phone." },
      { icon: "receipt", title: "Free WhatsApp Invoicing vs Costly Paper", desc: "Save thousands of dollars on thermal paper roll costs. Cheetah delivers elegant, interactive digital receipts directly to your shoppers' WhatsApp." }
    ],
    comparePricing: {
      licenseFee: "$1,200 - $2,500 upfront register + $250 - $500 / year support",
      setupFee: "$2,500 - $6,000 (reseller pricebook & setup fee)",
      offlineCapability: "Highly stable locally, but reporting locks to physical store desk",
      hardwareCompatibility: "Requires specialized serial scale boards and keyboard maps",
      digitalReceipts: "Requires custom scripting or third-party receipt designers",
      customerSupport: "Reseller-dependent phone support with hourly charges ($150/hr)"
    },
    competitorName: "LOC Software",
    testimonial: {
      quote: "LOC was stable but felt like using an ancient Windows machine. Cheetah gave our cashier lanes a fresh interface and unlocked total remote store visibility.",
      author: "Hassan Alami",
      role: "CEO, Alami Mini-Marts",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-rorc": {
    slug: "cheetah-vs-rorc",
    type: "compare",
    tag: "CHEETAH VS RORC",
    title: "Cheetah vs RORC — Enterprise Supermarket POS",
    metaDesc: "Compare Cheetah vs RORC. Keep checkout lanes moving during power outages with localized, power-cut proof sqlite databases.",
    heading: "A stable, offline retail system built for Africa",
    subheading: "RORC requires localized physical Windows servers that easily suffer database corruption during sudden power cuts or voltage changes. Cheetah POS runs locally on tablets with power-cut proof offline technology.",
    heroMedia: { type: "image", url: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "SQLite", label: "Power-cut proof local database" },
      { value: "Auto-Sync", label: "Syncs immediately when power returns" },
      { value: "$0", label: "Server closet infrastructure costs" }
    ],
    features: [
      { icon: "wifi", title: "Offline Local Core vs Windows Servers", desc: "When load shedding hits, physical servers crash. Cheetah POS runs completely locally on tablets and mobile devices with zero data loss or check-out delays." },
      { icon: "server", title: "0 Server Setup vs Costly Hardware Closets", desc: "Save thousands. Skip costly back-up generators, server closet routers, and server-card wiring. Cheetah connects seamlessly via local Wi-Fi." },
      { icon: "refresh", title: "Automatic Micro-Backups vs Manual Exports", desc: "RORC relies on manual daily batch exports. Cheetah performs automated, secure micro-backups every second, protecting every transaction log." }
    ],
    comparePricing: {
      licenseFee: "$1,000 - $1,500 upfront terminal + $300 - $600 / year support",
      setupFee: "$1,500 - $3,500 (data loading and scale mapping)",
      offlineCapability: "Vulnerable to local Windows database corruption during sudden power cuts",
      hardwareCompatibility: "Requires specific certified receipt printers and scale boards",
      digitalReceipts: "Basic PDF export; no native SMS or WhatsApp delivery",
      customerSupport: "Phone support only; high hourly fees for after-hours calls"
    },
    competitorName: "RORC",
    testimonial: {
      quote: "Erratic power cuts would regularly crash our RORC database, losing transactions. Cheetah POS has kept our registers running flawlessly on battery tablets.",
      author: "Lamin Touray",
      role: "Owner, Touray Express Grocery",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-it-retail": {
    slug: "cheetah-vs-it-retail",
    type: "compare",
    tag: "CHEETAH VS IT RETAIL",
    title: "Cheetah vs IT Retail — Supermarket Software Review",
    metaDesc: "Compare Cheetah vs IT Retail. Get full multi-store analytics, automated purchasing order sheets, and void tracking without high subscription fees.",
    heading: "Enterprise multi-store software without subscriptions",
    subheading: "IT Retail charges high monthly subscriptions ($150-$299/mo) per register and locks you to expensive processing setups. Cheetah provides advanced multi-store inventory, fraud audits, and POS free.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/28671131/" },
    stats: [
      { value: "$0/mo", label: "Register base subscription" },
      { value: "Unlimited", label: "Register licenses & users included" },
      { value: "100%", label: "Transparent processing (no hidden markup)" }
    ],
    features: [
      { icon: "coin", title: "No Subscription Trap vs Register Fees", desc: "IT Retail fees pile up quickly as you grow store locations. Cheetah gives you unlimited registers and store logins completely free forever." },
      { icon: "map", title: "Smart Warehouse Routing vs Local Systems", desc: "Coordinate stock transfers between multiple central distribution warehouses and stores, with digital audits that trace every cargo box." },
      { icon: "barchart", title: "Deep AI Profit Insights vs Basic Invoices", desc: "Our AI highlights margin-leaking SKUs, flags slow stock turnover, and tracks cashier voids to secure your gross profits automatically." }
    ],
    comparePricing: {
      licenseFee: "$948 - $2,388 / year (per register subscription)",
      setupFee: "$999 - $2,500 (upfront software config & training)",
      offlineCapability: "Basic scanning offline, but reports and inventory syncing fully block",
      hardwareCompatibility: "Locked to specific certified touchscreen bundles ($1,500+)",
      digitalReceipts: "Email only (SMS/WhatsApp not supported natively)",
      customerSupport: "Standard email support; priority support restricted to highest tiers"
    },
    competitorName: "IT Retail",
    testimonial: {
      quote: "We were paying IT Retail over $500 monthly just for basic register licenses. Cheetah gave us a better, faster POS and saved us thousands.",
      author: "Binyam Demisse",
      role: "Founder, Ethiopian Food Emporiums",
      image: "https://plus.unsplash.com/premium_photo-1664300137035-d5f2d3d54cd3?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-markt-pos": {
    slug: "cheetah-vs-markt-pos",
    type: "compare",
    tag: "CHEETAH VS MARKT POS",
    title: "Cheetah vs Markt POS — Retail POS Comparison",
    metaDesc: "Compare Cheetah vs Markt POS. Maximize your grocery store's efficiency and eliminate hidden checkout fees. Try Cheetah 100% free.",
    heading: "Clean, lightning-fast POS with zero hidden costs",
    subheading: "Markt POS locks merchants into high payment processing markup fees and expensive custom scale setups. Cheetah offers complete transparency and checkout freedom.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "0.2s", label: "Checkout transaction load speed" },
      { value: "Clear", label: "Transparent payouts (no hidden processor charges)" },
      { value: "Free", label: "Custom weight scale & scanner integrations" }
    ],
    features: [
      { icon: "zap", title: "Zero Checkout Delays vs Markt POS Lag", desc: "Don't make customers wait. Cheetah's checkout engine loads cashout screens in 0.2 seconds under heavy supermarket traffic." },
      { icon: "lock", title: "Processor Independence vs strict gateways", desc: "Markt POS charges obscure card processing rates and integration fees. Cheetah offers complete payment choice with zero markup." },
      { icon: "trendingup", title: "Auto-Replenish vs Manual Orders", desc: "Move expired stock quickly. Cheetah lists expiring items automatically and drafts reordering sheets so you never run out of top SKUs." }
    ],
    comparePricing: {
      licenseFee: "$1,188 - $1,788 / year (per terminal subscription)",
      setupFee: "$1,000 - $2,000 (implementation & menu migration)",
      offlineCapability: "Offline scanning enabled, but real-time reconciliation and cards fully disable",
      hardwareCompatibility: "Proprietary terminals or Touch Dynamic certified hardware",
      digitalReceipts: "Standard email receipts; SMS/WhatsApp requires external carrier integration",
      customerSupport: "Standard email/chat; phone assistance requires extra SLA fees"
    },
    competitorName: "Markt POS",
    testimonial: {
      quote: "Markt POS locked us to their processing gateways and charged hidden fees. Cheetah gave us a faster POS and total payment freedom.",
      author: "Tunde Williams",
      role: "Manager, ValueMax Supermarket",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  },
  "cheetah-vs-toast": {
    slug: "cheetah-vs-toast",
    type: "compare",
    tag: "CHEETAH VS TOAST",
    title: "Cheetah vs Toast — Smart Retail & Food Service POS",
    metaDesc: "Compare Cheetah vs Toast. Stop paying Toast's high monthly fees and hardware markups. Run restaurants, supermarkets, and delis for free.",
    heading: "The beautiful, zero-fee alternative to Toast POS",
    subheading: "Toast is built for high-margin US restaurants, charging heavy subscriptions ($75-$165/mo) and proprietary hardware markups. Cheetah is optimized for African grocers and 100% free.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/15754279/" },
    stats: [
      { value: "$0/mo", label: "Base terminal software (vs Toast's $75+)" },
      { value: "$0", label: "Proprietary hardware requirements (use any device)" },
      { value: "Grocery", label: "Built for grocers (vs Toast restaurant-only layout)" }
    ],
    features: [
      { icon: "coin", title: "100% Free Retail vs Restaurant Taxes", desc: "Toast demands expensive custom registers and monthly subscription packages. Cheetah runs on any Android or iOS device for free." },
      { icon: "shoppingbag", title: "Grocery & Scales vs Food Service Only", desc: "Toast lacks weight scale integrations, randomized bins tare-weights, case splits, and multi-vendor wholesale purchase routing." },
      { icon: "wifi", title: "Local Offline Cashout vs Cloud Lock-In", desc: "Toast POS fails or locks features if internet is disconnected. Cheetah POS handles full weighing and checkouts completely offline." }
    ],
    comparePricing: {
      licenseFee: "$900 - $1,980 / year base + loyalty & inventory add-ons (+$1,500/yr)",
      setupFee: "$600 - $1,500 (professional restaurant menu design)",
      offlineCapability: "Offline credit card processing, but lacks weight scales or bulk transfer offline support",
      hardwareCompatibility: "Strict hardware lock-in (Toast Android registers, starts at $800+)",
      digitalReceipts: "SMS & email (stores data on Toast's marketing network)",
      customerSupport: "24/7 phone support (standard response times vary)"
    },
    competitorName: "Toast",
    testimonial: {
      quote: "Toast demanded custom expensive tablets and software licensing. Cheetah runs perfectly on our standard Android devices with zero base fees.",
      author: "Rania Mansour",
      role: "Owner, Mansour Gourmet Deli",
      image: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=300&auto=format&fit=crop&q=60"
    }
  },

  // ─── COMPANY ───
  about: {
    slug: "about",
    type: "company",
    tag: "OUR MISSION",
    title: "About Us — The Cheetah Mission to Modernize Retail",
    metaDesc: "Learn how Cheetah is building the intelligent, offline-first operating system designed to empower African retailers, supermarkets, and SMEs.",
    heading: "We build the software that powers African retail",
    subheading: "Our mission is to give every independent supermarket, pharmacy, and retail store in Africa the exact same software advantages as the world's largest chains.",
    heroMedia: { type: "image", url: "https://images.unsplash.com/photo-1739300293398-468ba82fd418?w=900&auto=format&fit=crop&q=60" },
    stats: [
      { value: "20+", label: "Cities across Africa active" },
      { value: "10m+", label: "Transactions processed" },
      { value: "99.99%", label: "System uptime index" }
    ],
    features: [
      { icon: "globe", title: "Custom Built for Africa", desc: "We design software to conquer real local challenges: erratic electricity, slow internet connectivity, and currency fluctuations." },
      { icon: "coin", title: "100% Free Forever", desc: "We align our incentives with yours. Our core retail operating system is completely free, making digital tools accessible to every shop." },
      { icon: "cloud", title: "True Offline Technology", desc: "We spent years developing database syncing systems that run completely offline on simple tablets and sync seamlessly in background threads." }
    ],
    testimonial: {
      quote: "We don't look at Cheetah as just a service provider. They are a deep technology partner committed to helping independent local businesses survive and scale.",
      author: "Tobi Loba",
      role: "Co-Founder, Cheetah Retail Group",
      image: "https://images.unsplash.com/photo-1739303987882-230db3156099?w=300&auto=format&fit=crop&q=60"
    }
  },
  careers: {
    slug: "careers",
    type: "company",
    tag: "WE ARE HIRING",
    title: "Careers at Cheetah — Join the Retail Revolution",
    metaDesc: "Build the future of retail in Africa. Explore active career openings in engineering, product design, support, and sales at Cheetah.",
    heading: "Help us build the operating system for African commerce",
    subheading: "Join a fast-moving, mission-driven team of engineers, product designers, and retail experts building tools that impact thousands of merchants every day.",
    heroMedia: { type: "video", url: "https://www.pexels.com/download/video/4121754/" },
    stats: [
      { value: "100%", label: "Remote-first culture" },
      { value: "Equity", label: "Ownership stock options" },
      { value: "30 days", label: "Annual paid leave allocations" }
    ],
    features: [
      { icon: "zap", title: "Real High-Scale Impact", desc: "Your code and designs will immediately impact real-world checkouts, warehouse inventories, and small business lifelines." },
      { icon: "cpu", title: "High Talent Density", desc: "Collaborate with former senior engineers and leads from global tech giants in an environment of total respect and freedom." },
      { icon: "globe", title: "Work From Anywhere", desc: "We hire the best minds across Africa, Europe, and globally. Work wherever you feel most creative and inspired." }
    ],
    testimonial: {
      quote: "The engineering challenges we tackle at Cheetah are massive: from building robust offline local state engines to real-time sync networks.",
      author: "David Adeolu",
      role: "Lead Software Architect, Cheetah",
      image: "https://plus.unsplash.com/premium_photo-1661380997331-2ec5dfb769b7?w=300&auto=format&fit=crop&q=60"
    }
  }
};
