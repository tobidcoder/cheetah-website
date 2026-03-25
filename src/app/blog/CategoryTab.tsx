"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
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
  blog_category: { name: string; id: number };
  created_at: string;
}

interface Category {
  id: number;
  name: string;
}

export function CategoryTab() {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <CategoryContent />
    </Suspense>
  );
}

function CategoryContent() {
  const [blogs, setBlogs]               = useState<Blog[] | null>(null);
  const [categories, setCategories]     = useState<Category[]>([]);
  const [activeTab, setActiveTab]       = useState<string>("all");
  const [categoryBlogs, setCategoryBlogs] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading]       = useState(false);
  const [pagination, setPagination]     = useState<any>(null);
  const [currentPage, setCurrentPage]   = useState(1);

  const searchParams = useSearchParams();
  const router       = useRouter();
  const pathname     = usePathname();

  const currentCategory = searchParams.get("category");

  // ── Unified Fetch Logic ───────────────────
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      if (activeTab === "all") {
        const blogsData = await fetch(`blogs?page=${currentPage}&per_page=16`);
        const fetchedBlogs = blogsData?.data?.data ?? blogsData?.data ?? blogsData ?? [];
        setBlogs(fetchedBlogs);
        if (blogsData?.data?.last_page) {
          setPagination(blogsData.data);
        }
      } else {
        const categoryId = activeTab.replace("cat-", "");
        const data = await fetch(`get_category_blogs/${categoryId}?page=${currentPage}&per_page=16`);
        const fetchedCategoryBlogs = data?.data?.data ?? data?.data ?? data ?? [];
        setCategoryBlogs(fetchedCategoryBlogs);
        if (data?.data?.last_page) {
          setPagination(data.data);
        } else {
          setPagination(null);
        }
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, currentPage]);

  // Initial load and tab/page sync
  useEffect(() => {
    (async () => {
      // 1. Load categories if not loaded
      if (categories.length === 0) {
        const catData = await fetch("blog-categories");
        const fetchedCats = Array.isArray(catData) ? catData : catData?.data ?? [];
        setCategories(fetchedCats);

        // 2. Handle initial category from URL
        if (currentCategory && fetchedCats.length > 0) {
          const cat = fetchedCats.find((c: Category) => 
            c.name.toLowerCase().replace(/\s+/g, '-') === currentCategory
          );
          if (cat) {
            setActiveTab(`cat-${cat.id}`);
            return; // useEffect will re-run with new activeTab
          }
        }
      }

      // 3. Fetch blogs for current state
      fetchData();
    })();
  }, [activeTab, currentPage, categories.length]);

  // ── Category tab handler ───────────────────
  const handleTab = useCallback(
    async (key: string, categoryId?: number, updateUrl = true) => {
      if (activeTab === key) return;
      
      setActiveTab(key);
      setCurrentPage(1); // ALWAYS reset on tab change

      if (updateUrl) {
          const params = new URLSearchParams(searchParams);
          if (key === "all") {
              params.delete("category");
          } else {
              const cat = categories.find(c => c.id === categoryId);
              if (cat) {
                params.set("category", cat.name.toLowerCase().replace(/\s+/g, '-'));
              }
          }
          router.push(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [router, pathname, searchParams, categories, activeTab]
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const displayedBlogs =
    activeTab === "all" ? blogs : categoryBlogs;

  /* ── Skeleton placeholders while loading ── */
  const Skeleton = () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <div
          key={n}
          style={{
            background: "rgba(10,61,36,0.25)",
            border: "1px solid rgba(178,217,59,0.08)",
            borderRadius: "24px",
            height: "400px",
            animation: "pulse 1.6s ease-in-out infinite",
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 0.3; }
          50% { opacity: 0.5; }
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
        <>
          <BlogCard blogs={displayedBlogs} />
          
          {/* ── Pagination controls ─────────────── */}
          {pagination && pagination.last_page > 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "80px",
                gap: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                {/* Previous */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{
                    background: "rgba(10,61,36,0.3)",
                    border: "1px solid rgba(178,217,59,0.1)",
                    color: currentPage === 1 ? "rgba(253,253,253,0.2)" : "#fdfdfd",
                    borderRadius: "14px",
                    padding: "12px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: currentPage === 1 ? "default" : "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  Prev
                </button>

                {/* Page numbers (Mobile Optimized Window) */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                  {Array.from({ length: pagination.last_page }, (_, i) => i + 1)
                    .filter(p => {
                      // Show first, last, and 2 pages around current
                      if (p === 1 || p === pagination.last_page) return true;
                      return Math.abs(p - currentPage) <= 1;
                    })
                    .map((p, i, arr) => {
                      const isPageActive = currentPage === p;
                      const showEllipsis = i > 0 && p - arr[i-1] > 1;

                      return (
                        <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {showEllipsis && (
                            <span style={{ color: "rgba(253,253,253,0.3)", fontWeight: 700 }}>...</span>
                          )}
                          <button
                            onClick={() => handlePageChange(p)}
                            style={{
                              width: "44px",
                              height: "44px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "14px",
                              fontSize: "14px",
                              fontWeight: 800,
                              border: `1.5px solid ${isPageActive ? "#b2d93b" : "rgba(178,217,59,0.1)"}`,
                              background: isPageActive ? "#b2d93b" : "rgba(10,61,36,0.25)",
                              color: isPageActive ? "#052315" : "rgba(253,253,253,0.6)",
                              cursor: "pointer",
                              transition: "all 0.25s ease",
                            }}
                          >
                            {p}
                          </button>
                        </div>
                      );
                    })}
                </div>

                {/* Next */}
                <button
                  disabled={currentPage === pagination.last_page}
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{
                    background: "rgba(10,61,36,0.3)",
                    border: "1px solid rgba(178,217,59,0.1)",
                    color: currentPage === pagination.last_page ? "rgba(253,253,253,0.2)" : "#fdfdfd",
                    borderRadius: "14px",
                    padding: "12px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: currentPage === pagination.last_page ? "default" : "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  Next
                </button>
              </div>
              
              <p style={{ fontSize: "12px", color: "rgba(253,253,253,0.3)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
                Page {currentPage} of {pagination.last_page}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
