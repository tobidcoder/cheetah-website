"use client";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetch } from "@/app/api";

export function News() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetch("blogs");
        setBlogs(data?.data || []);
      } catch (e) {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section
      style={{
        padding: "80px 24px 100px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "48px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
            <span className="dot" />
            Latest from Cheetah
          </div>
          <h2
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Insights &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b, #8fb22e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resources
            </span>
          </h2>
        </div>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#b2d93b",
            fontWeight: 600,
            fontSize: "14px",
            border: "1px solid rgba(178,217,59,0.3)",
            borderRadius: "50px",
            padding: "8px 20px",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(178,217,59,0.08)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,217,59,0.3)";
          }}
        >
          View all posts
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {loading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                height: "380px",
                background:
                  "linear-gradient(90deg, rgba(10,61,36,0.3) 25%, rgba(10,61,36,0.5) 50%, rgba(10,61,36,0.3) 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
          ))}
        </div>
      ) : blogs.length > 0 ? (
        <Carousel
          slideSize={{ base: "88%", sm: "50%", lg: "33.333%" }}
          slideGap={{ base: "md", sm: "lg" }}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          withControls={blogs.length > 3}
          styles={{
            control: {
              background: "rgba(10,61,36,0.8)",
              border: "1px solid rgba(178,217,59,0.3)",
              color: "#b2d93b",
              "&:hover": {
                background: "rgba(178,217,59,0.15)",
              },
            },
          }}
        >
          {blogs.map((blog: any) => (
            <Carousel.Slide key={blog.id}>
              <Link href={`/post/${blog.slug}?i=${blog.id}`} passHref>
                <div
                  className="glass-card"
                  style={{
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-5px)";
                    el.style.borderColor = "rgba(178,217,59,0.3)";
                    el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(178,217,59,0.12)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div style={{ overflow: "hidden", height: "200px" }}>
                    {blog.image_url ? (
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          display: "block",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.transform = "scale(1)";
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          background: "linear-gradient(135deg, rgba(178,217,59,0.1), rgba(10,61,36,0.5))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "40px",
                        }}
                      >
                        📰
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {blog.blog_category && (
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(178,217,59,0.1)",
                          border: "1px solid rgba(178,217,59,0.2)",
                          borderRadius: "50px",
                          padding: "3px 12px",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#b2d93b",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          marginBottom: "14px",
                        }}
                      >
                        {blog.blog_category.name}
                      </span>
                    )}
                    <h3
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#fdfdfd",
                        lineHeight: 1.35,
                        marginBottom: "12px",
                        letterSpacing: "-0.01em",
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
                        color: "rgba(253,253,253,0.5)",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flex: 1,
                      }}
                    >
                      {blog.summary}
                    </p>

                    {/* Author */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "20px",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(178,217,59,0.08)",
                      }}
                    >
                      {blog.created_by_profile_image ? (
                        <img
                          src={blog.created_by_profile_image}
                          alt={blog.created_by}
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: "rgba(178,217,59,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                          }}
                        >
                          👤
                        </div>
                      )}
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(253,253,253,0.4)",
                          fontWeight: 500,
                        }}
                      >
                        {blog.created_by}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Carousel.Slide>
          ))}
        </Carousel>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 24px",
            color: "rgba(253,253,253,0.4)",
            fontSize: "16px",
          }}
        >
          No articles found. Check back soon!
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
