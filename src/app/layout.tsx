/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
// import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
// import "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Cheetah: FREE to sell anywhere easily, quickly, and seamlessly.",
  description: "Custom-tailored product suites for supermarket, pharmacy, restaurants, retails, and beauty businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body
      //  className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <MantineProvider>
          <NextTopLoader color="#b2d93b"/>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
