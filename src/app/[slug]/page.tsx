import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DynamicSubPageClient from "./PageClient";
import { pageRegistry } from "./pageData";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(pageRegistry).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  let data = pageRegistry[slug];
  if (!data && slug.startsWith("vs-")) {
    data = pageRegistry[`cheetah-${slug}`];
  }

  if (!data) return {};

  let geoTitle = data.title;
  let geoDesc = data.metaDesc;

  // Enhancing the SEO and Geotargeting dynamically based on type
  if (data.type === "compare") {
    geoTitle = `Cheetah vs ${data.competitorName} — Free POS System for Supermarkets`;
    geoDesc = `Switch from ${data.competitorName} to Cheetah in Nigeria, Kenya, South Africa, and Ghana. Zero subscription fees, true offline operation, and automatic fraud prevention.`;
  } else if (data.type === "solution-format" || data.type === "solution-goal") {
    geoTitle = `${data.title} | Local African Retail Systems`;
    geoDesc = `${data.metaDesc} Custom built for retail grocery operators in Lagos, Nairobi, Johannesburg, and Accra with offline scaling and AI margins protection.`;
  } else if (data.type === "product") {
    geoTitle = `${data.title} | Cheetah Retail OS Africa`;
    geoDesc = `${data.metaDesc} Empowering supermarkets and wholesale stores in West & East Africa to scan and sync offline with zero setup cost.`;
  }

  return {
    title: geoTitle,
    description: geoDesc,
    alternates: {
      canonical: `https://usecheetah.com/${slug}`,
    },
    openGraph: {
      title: geoTitle,
      description: geoDesc,
      url: `https://usecheetah.com/${slug}`,
      siteName: "Cheetah POS",
      images: [
        {
          url: "https://usecheetah.com/images/og-home.png",
          width: 1200,
          height: 630,
          alt: `${data.title} - Cheetah Retail OS`,
        },
      ],
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: geoTitle,
      description: geoDesc,
      images: ["https://usecheetah.com/images/og-home.png"],
    },
    other: {
      "geo.region": "NG-LA, KE-110, ZA-GP, GH-AA",
      "geo.placename": "Lagos, Nairobi, Johannesburg, Accra",
      "geo.position": "6.5244;3.3792; -1.2921;36.8219; -26.2041;28.0473; 5.6037;-0.1870",
      "ICBM": "6.5244, 3.3792; -1.2921, 36.8219; -26.2041, 28.0473; 5.6037, -0.1870"
    }
  };
}

export default function DynamicSubPage({ params }: Props) {
  const slug = params.slug;
  let data = pageRegistry[slug];
  if (!data && slug.startsWith("vs-")) {
    data = pageRegistry[`cheetah-${slug}`];
  }

  if (!data) {
    notFound();
  }

  return <DynamicSubPageClient />;
}
