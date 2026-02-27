"use client";

import { useEffect, useState, useCallback } from "react";
import { fetch } from "@/app/api";
import { BlogCard } from "./BlogCard";

interface Blog {
  id: number;
  slug: string;
  title: string;
  summary: string;
  image_url: string;
  created_by: string;
  created_by_profile_image: string;
  blog_category: { name: string };
  created_at: string;
}

interface Category {
  id: number;
  name: string;
}

export function CategoryTab() {
  const [blogs, setBlogs]               = useState<Blog[] | null>(null);
  const [categories, setCategories]     = useState<Category[]>([]);
  const [activeTab, setActiveTab]       = useState<string>("all");
  const [categoryBlogs, setCategoryBlogs] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading]       = useState(false);

  // ── Initial data load ────────────────────
  useEffect(() => {
    (async () => {
      const [blogsData, catData] = await Promise.all([
        fetch("blogs"),
        fetch("blog-categories"),
      ]);
      setBlogs(blogsData?.data ?? blogsData ?? []);
      setCategories(Array.isArray(catData) ? catData : catData?.data ?? []);
    })();
  }, []);

  // ── Category filter ───────────────────────
  const handleTab = useCallback(
    async (key: string, categoryId?: number) => {
      setActiveTab(key);
      if (key === "all" || !categoryId) return;
      setIsLoading(true);
      const data = await fetch(`get_category_blogs/${categoryId}`);
      setCategoryBlogs(data?.data ?? data ?? []);
      setIsLoading(false);
    },
    []
  );

  const displayedBlogs =
    activeTab === "all" ? blogs : categoryBlogs;

  /* ── Skeleton placeholders while loading ── */
  const Skeleton = () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          style={{
            background: "rgba(10,61,36,0.3)",
            border: "1px solid rgba(178,217,59,0.08)",
            borderRadius: "20px",
            height: "380px",
            animation: "pulse 1.6s ease-in-out infinite",
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );

  return (
    <div>
      {/* ── Category pill tabs ───────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "52px",
          padding: "6px",
        }}
      >
        {/* All tab */}
        <button
          onClick={() => handleTab("all")}
          style={{
            background: activeTab === "all" ? "#b2d93b" : "rgba(10,61,36,0.5)",
            color: activeTab === "all" ? "#052315" : "rgba(253,253,253,0.6)",
            border: `1px solid ${activeTab === "all" ? "#b2d93b" : "rgba(178,217,59,0.15)"}`,
            borderRadius: "50px",
            padding: "8px 22px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontFamily: "Inter, sans-serif",
          }}
          onMouseEnter={(e) => {
            if (activeTab !== "all") {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#fdfdfd";
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab !== "all") {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.15)";
              (e.currentTarget as HTMLElement).style.color = "rgba(253,253,253,0.6)";
            }
          }}
        >
          All Posts
        </button>

        {/* Category tabs */}
        {categories.map((cat) => {
          const isActive = activeTab === `cat-${cat.id}`;
          return (
            <button
              key={cat.id}
              onClick={() => handleTab(`cat-${cat.id}`, cat.id)}
              style={{
                background: isActive ? "#b2d93b" : "rgba(10,61,36,0.5)",
                color: isActive ? "#052315" : "rgba(253,253,253,0.6)",
                border: `1px solid ${isActive ? "#b2d93b" : "rgba(178,217,59,0.15)"}`,
                borderRadius: "50px",
                padding: "8px 22px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#fdfdfd";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.15)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(253,253,253,0.6)";
                }
              }}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* ── Content area ─────────────────────── */}
      {isLoading ? (
        <Skeleton />
      ) : displayedBlogs === null ? (
        <Skeleton />
      ) : displayedBlogs.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontSize: "18px", color: "rgba(253,253,253,0.35)", fontWeight: 500 }}>
            No posts in this category yet.
          </p>
        </div>
      ) : (
        <BlogCard blogs={displayedBlogs} />
      )}
    </div>
  );
}
