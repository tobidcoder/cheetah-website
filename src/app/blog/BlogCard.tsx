"use client";

import Link from "next/link";

interface Blog {
  id: number;
  slug: string;
  title: string;
  summary: string;
  image_url: string;
  created_by: string;
  created_by_profile_image: string;
  blog_category: { name: string };
  created_at?: string;
}

function estimateReadTime(text: string) {
  const words = (text || "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogCard({ blogs }: { blogs: Blog[] }) {
  if (!blogs?.length) return null;

  /* ── Feature the first post large ────── */
  const [featured, ...rest] = blogs;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

      {/* ── Featured post ───────────────────── */}
      <Link
        href={`/post/${featured.slug}?i=${featured.id}`}
        passHref
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            background: "rgba(10,61,36,0.35)",
            border: "1px solid rgba(178,217,59,0.12)",
            borderRadius: "24px",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.35)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.12)";
          }}
          className="featured-blog-card"
        >
          {/* Image */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "320px", background: "rgba(5,35,21,0.8)" }}>
            {featured.image_url && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={featured.image_url}
                alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            )}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(5,35,21,0.3))" }} />
          </div>

          {/* Content */}
          <div
            style={{
              padding: "44px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#b2d93b",
                  background: "rgba(178,217,59,0.12)",
                  border: "1px solid rgba(178,217,59,0.2)",
                  borderRadius: "50px",
                  padding: "4px 12px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {featured.blog_category?.name}
              </span>
              <span style={{ fontSize: "11px", color: "rgba(253,253,253,0.35)", fontWeight: 500 }}>
                {estimateReadTime(featured.summary)} min read
              </span>
            </div>

            <h2
              style={{
                fontFamily: "Syne, Inter, sans-serif",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                fontWeight: 800,
                color: "#fdfdfd",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: "16px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {featured.title}
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(253,253,253,0.5)",
                lineHeight: 1.7,
                marginBottom: "28px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {featured.summary}
            </p>

            {/* Author + date */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {featured.created_by_profile_image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={featured.created_by_profile_image}
                  alt={featured.created_by}
                  style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(178,217,59,0.25)" }}
                />
              ) : (
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(178,217,59,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#b2d93b" }}>
                  {(featured.created_by || "?")[0].toUpperCase()}
                </div>
              )}
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(253,253,253,0.75)", margin: 0 }}>{featured.created_by}</p>
                {formatDate(featured.created_at) && (
                  <p style={{ fontSize: "11px", color: "rgba(253,253,253,0.3)", margin: 0 }}>{formatDate(featured.created_at)}</p>
                )}
              </div>

              {/* Read more arrow */}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 700, color: "#b2d93b" }}>
                Read
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ── Remaining posts grid ─────────────── */}
      {rest.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {rest.map((blog) => (
            <Link
              key={blog.id}
              href={`/post/${blog.slug}?i=${blog.id}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "rgba(10,61,36,0.3)",
                  border: "1px solid rgba(178,217,59,0.1)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.22)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.1)";
                }}
              >
                {/* Card image */}
                {blog.image_url && (
                  <div style={{ position: "relative", paddingTop: "56%", background: "rgba(5,35,21,0.8)", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                    />
                  </div>
                )}

                {/* Card content */}
                <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#b2d93b", background: "rgba(178,217,59,0.1)", border: "1px solid rgba(178,217,59,0.18)", borderRadius: "50px", padding: "3px 10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      {blog.blog_category?.name}
                    </span>
                    <span style={{ fontSize: "11px", color: "rgba(253,253,253,0.3)" }}>
                      {estimateReadTime(blog.summary)} min read
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "Syne, Inter, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#fdfdfd",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      marginBottom: "10px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(253,253,253,0.45)",
                      lineHeight: 1.65,
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    {blog.summary}
                  </p>

                  {/* Footer */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid rgba(178,217,59,0.08)", paddingTop: "16px" }}>
                    {blog.created_by_profile_image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={blog.created_by_profile_image}
                        alt={blog.created_by}
                        style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(178,217,59,0.2)" }}
                      />
                    ) : (
                      <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(178,217,59,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#b2d93b", flexShrink: 0 }}>
                        {(blog.created_by || "?")[0].toUpperCase()}
                      </div>
                    )}
                    <span style={{ fontSize: "12px", color: "rgba(253,253,253,0.5)", fontWeight: 500, flex: 1 }}>{blog.created_by}</span>
                    {formatDate(blog.created_at) && (
                      <span style={{ fontSize: "11px", color: "rgba(253,253,253,0.25)" }}>{formatDate(blog.created_at)}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .featured-blog-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
