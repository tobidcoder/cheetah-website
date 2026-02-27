/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const theme = createTheme({
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
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
  title: "Cheetah — AI-Powered Retail Inventory & POS Platform",
  description:
    "Custom-tailored inventory and point-of-sale solutions for supermarkets, pharmacies, restaurants, retail, and beauty businesses. Start free today.",
  keywords:
    "retail POS, inventory management, AI forecasting, point of sale, supermarket software, pharmacy POS, restaurant POS Nigeria",
  openGraph: {
    title: "Cheetah — Sell smarter. Grow faster.",
    description:
      "AI-powered retail inventory optimization and POS platform for African businesses.",
    type: "website",
    url: "https://usecheetah.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#052315" }}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
