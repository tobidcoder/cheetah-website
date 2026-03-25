/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Inter, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const theme = createTheme({
  fontFamily: `${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, sans-serif`,
  primaryColor: "green",
  colors: {
    green: [
      "#f0fae6",
      "#daf3b6",
      "#c4eb86",
      "#aee356",
      "#b2d93b",
      "#8fb22e",
      "#6c8b21",
      "#496414",
      "#263d07",
      "#031600",
    ],
  },
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usecheetah.com"),
  title: {
    default: "Cheetah — AI-Powered Retail Inventory & POS Platform",
    template: "%s | Cheetah POS",
  },
  description:
    "Custom-tailored inventory and point-of-sale solutions for supermarkets, pharmacies, restaurants, retail, and beauty businesses. Cheetah's AI forecasts demand, prevents fraud, and scales your business. Start free.",
  applicationName: "Cheetah POS",
  authors: [{ name: "Cheetah Team" }],
  generator: "Next.js",
  keywords: [
    "retail POS",
    "inventory management",
    "AI forecasting",
    "point of sale Nigeria",
    "supermarket software",
    "pharmacy POS",
    "restaurant POS",
    "business control",
    "Africa retail OS",
  ],
  referrer: "origin-when-cross-origin",
  themeColor: "#052315",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Cheetah — Sell smarter. Grow faster.",
    description:
      "AI-powered retail inventory optimization and POS platform for African businesses. Real-time insights, fraud prevention, and offline resilience.",
    type: "website",
    url: "https://usecheetah.com",
    siteName: "Cheetah",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetah — AI-Powered Retail OS",
    description: "Scale your retail business with AI-driven inventory and POS.",
    creator: "@usecheetah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#052315" }} className={`${inter.variable} ${syne.variable}`}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body style={{ background: "#052315", color: "#fdfdfd" }}>
        <MantineProvider theme={theme} forceColorScheme="dark">
          <NextTopLoader color="#b2d93b" shadow={false} />
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
