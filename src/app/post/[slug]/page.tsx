import { Metadata, ResolvingMetadata } from "next";
import { fetch as apiFetch } from "@/app/api";
import { BlogClient } from "./BlogClient";

interface Blog {
  id: number;
  slug: string;
  title: string;
  summary: string;
  image_url: string;
  created_by: string;
  created_by_profile_image: string;
  created_by_position?: string;
  blog_category: { name: string; id: number };
  created_at: string;
  body: string;
}

interface Props {
  params: { slug: string };
  searchParams: { i: string };
}

// Advanced SEO: Dynamic Metadata Generation
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = searchParams.i;
  const blog: Blog = await apiFetch(`blogs/${id}`);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Cheetah",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.summary,
    keywords: [
      blog.blog_category?.name,
      "Cheetah retail",
      "inventory management",
      "POS Africa",
      "retail technology",
      ...blog.title.toLowerCase().split(" "),
    ],
    openGraph: {
      title: blog.title,
      description: blog.summary,
      url: `https://usecheetah.com/post/${blog.slug}?i=${blog.id}`,
      siteName: "Cheetah Insights",
      images: [
        {
          url: blog.image_url,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
        ...previousImages,
      ],
      locale: "en_NG",
      type: "article",
      publishedTime: blog.created_at,
      authors: [blog.created_by],
      section: blog.blog_category?.name,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [blog.image_url],
      creator: "@usecheetah",
    },
    // Geo Tagging for regional SEO
    alternates: {
      canonical: `https://usecheetah.com/post/${blog.slug}?i=${blog.id}`,
    },
    other: {
      "geo.region": "NG",
      "geo.placename": "Lagos",
      "geo.position": "6.5244;3.3792",
      ICBM: "6.5244, 3.3792",
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const id = searchParams.i;
  const blog: Blog = await apiFetch(`blogs/${id}`);
  
  let relatedPosts: Blog[] = [];
  if (blog?.blog_category?.id) {
    const relatedData = await apiFetch(`get_category_blogs/${blog.blog_category.id}`);
    const related = relatedData?.data?.data ?? relatedData?.data ?? relatedData ?? [];
    relatedPosts = related.filter((p: Blog) => p.id !== parseInt(id)).slice(0, 3);
  }

  const shareUrl = `https://usecheetah.com/post/${blog?.slug}?i=${blog?.id}`;

  // LLM txt & Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl,
    },
    "headline": blog?.title,
    "description": blog?.summary,
    "image": blog?.image_url,
    "author": {
      "@type": "Person",
      "name": blog?.created_by,
      "jobTitle": blog?.created_by_position || "Cheetah Insider",
      "image": blog?.created_by_profile_image,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cheetah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usecheetah.com/images/favicon-light.png",
      },
    },
    "datePublished": blog?.created_at,
    "dateModified": blog?.created_at,
    "articleSection": blog?.blog_category?.name,
    "contentLocation": {
      "@type": "Place",
      "name": "Lagos, Nigeria",
    },
  };

  return (
    <>
      {/* LLM txt & SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient 
        initialBlog={blog} 
        initialRelated={relatedPosts} 
        shareUrl={shareUrl} 
      />
    </>
  );
}
