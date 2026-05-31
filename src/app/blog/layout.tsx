import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheetah Insights — Supermarket & Retail Strategy in Africa",
  description: "Explore practical guides, retail bookkeeping, pricing automation strategies, and demand forecasting tips for supermarkets, pharmacies, and grocers in Nigeria, Kenya, South Africa, and Ghana.",
  alternates: {
    canonical: "https://usecheetah.com/blog",
  },
  openGraph: {
    title: "Cheetah Insights — High-Performance Retail Strategies",
    description: "Expert strategy, tactical guides, and demand forecasting insights built specifically for retail store operators in Lagos, Nairobi, Johannesburg, and Accra.",
    url: "https://usecheetah.com/blog",
    siteName: "Cheetah POS",
    images: [
      {
        url: "https://usecheetah.com/images/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Cheetah Insights Blog",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetah Insights — Supermarket & Retail Strategy in Africa",
    description: "Learn how to optimize stock turnover, prevent checkout fraud, and protect margins against inflation.",
    images: ["https://usecheetah.com/images/og-blog.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
