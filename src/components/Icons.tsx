/** Shared SVG Icon Library — Cheetah Website
 *  All icons are stroke-based (Lucide-style), 24×24 viewBox.
 *  Pass size, color, and strokeWidth as needed.
 */

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

const base = (color = "currentColor", sw = 1.8) => ({
  fill: "none" as const,
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/* ── Stats / Benefits ─────────────────────── */
export const IconBox = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export const IconTrendingUp = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const IconDollarSign = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const IconZap = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* ── Features ─────────────────────────────── */
export const IconBarChart = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6"  y1="20" x2="6"  y2="14" />
  </svg>
);

export const IconTarget = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconUsers = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconClipboard = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9"  y1="12" x2="15" y2="12" />
    <line x1="9"  y1="16" x2="13" y2="16" />
  </svg>
);

export const IconCpu = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9"  y1="1"  x2="9"  y2="4" />
    <line x1="15" y1="1"  x2="15" y2="4" />
    <line x1="9"  y1="20" x2="9"  y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9"  x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1"  y1="9"  x2="4"  y2="9" />
    <line x1="1"  y1="14" x2="4"  y2="14" />
  </svg>
);

/* ── Brand / Logos ────────────────────────── */
export const IconStore = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M3 9l1-5h16l1 5" />
    <path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
    <path d="M5 9v11h14V9" />
    <rect x="9" y="14" width="6" height="6" />
  </svg>
);

export const IconShoppingCart = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const IconBuilding = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

export const IconShoppingBag = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const IconSparkles = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export const IconFlame = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

export const IconLeaf = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

/* ── Security Pain Points ─────────────────── */
export const IconAlertTriangle = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const IconSlash = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

export const IconPackage = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export const IconEyeOff = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

/* ── Trust / GetStarted ───────────────────── */
export const IconLock = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const IconGlobe = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const IconSmartphone = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const IconShield = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ── Pricing — Universal features ────────── */
export const IconReceipt = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
    <line x1="8" y1="9"  x2="16" y2="9" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

export const IconActivity = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export const IconMonitor = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const IconCloud = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export const IconWifi = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

/* ── Pricing — Plan features ──────────────── */
export const IconBookOpen = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const IconLink = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const IconPosTerminal = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h.01M12 12h.01M17 12h.01" />
  </svg>
);

export const IconTrendingDown = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);

export const IconShieldCheck = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const IconFileText = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8"  y2="13" />
    <line x1="16" y1="17" x2="8"  y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const IconBell = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const IconPieChart = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

export const IconMap = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8"  y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

export const IconMessageCircle = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconGift = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

export const IconCalendar = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8"  y1="2" x2="8"  y2="6" />
    <line x1="3"  y1="10" x2="21" y2="10" />
  </svg>
);

export const IconStar = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconCheck = ({ size = 24, color, strokeWidth = 2.5 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconX = ({ size = 24, color = "rgba(253,253,253,0.2)", strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6"  y1="6" x2="18" y2="18" />
  </svg>
);

export const IconMapPin = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconArrowRight = ({ size = 24, color, strokeWidth = 2.5 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconInfo = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const IconRefreshCw = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export const IconServer = ({ size = 24, color, strokeWidth = 1.8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base(color, strokeWidth)}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);
