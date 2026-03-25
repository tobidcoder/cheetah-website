"use client";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { fetch } from "@/app/api";

export function News() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
      ref={ref}
      className="section-padding"
      style={{
        maxWidth: "1350px",
        margin: "0 auto",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {/* Section Header */}
      <div
        className="news-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "24px",
          padding: "0 24px"
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px", backdropFilter: "blur(10px)" }}>
            <span className="dot" />
            Insights & Intelligence
          </div>
          <h2
            style={{
              fontFamily: "Syne, Inter, sans-serif",
              fontSize: "clamp(34px, 5vw, 56px)",
              fontWeight: 800,
              color: "#fdfdfd",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            The Future of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #b2d93b, #00ff87)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              African Retail.
            </span>
          </h2>
        </div>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "#b2d93b",
            fontWeight: 800,
            fontSize: "15px",
            background: "rgba(178,217,59,0.05)",
            border: "1px solid rgba(178,217,59,0.25)",
            borderRadius: "100px",
            padding: "16px 32px",
            transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
            textDecoration: "none",
            backdropFilter: "blur(10px)"
          }}
          className="blog-all-btn"
        >
          Explore All Posts
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div style={{ padding: "0 24px" }}>
        {loading ? (
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
            }}
            >
            {[1, 2, 3].map((i) => (
                <div
                key={i}
                style={{
                    height: "480px",
                    background: "rgba(10,61,36,0.2)",
                    borderRadius: "40px",
                    border: "1px solid rgba(178,217,59,0.08)",
                    animation: "pulse-tag 2s infinite",
                }}
                />
            ))}
            </div>
        ) : blogs.length > 0 ? (
            <Carousel
            slideSize={{ base: "100%", sm: "50%", lg: "33.333%" }}
            slideGap="24"
            align="start"
            slidesToScroll={mobile ? 1 : 1}
            withControls={blogs.length > (mobile ? 1 : 3)}
            loop
            styles={{
                root: { paddingBottom: "40px" },
                control: {
                background: "rgba(10,61,36,0.9)",
                border: "1px solid rgba(178,217,59,0.3)",
                color: "#b2d93b",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                    background: "#b2d93b",
                    color: "#052315",
                    transform: "scale(1.1)",
                },
                },
                indicator: {
                    background: "rgba(178,217,59,0.2)",
                    width: "12px",
                    height: "6px",
                    transition: "all 0.3s ease",
                    "&[data-active]": {
                        background: "#b2d93b",
                        width: "32px"
                    }
                }
            }}
            withIndicators
            >
            {blogs.map((blog: any, i: number) => (
                <Carousel.Slide key={blog.id}>
                <Link href={`/post/${blog.slug}?i=${blog.id}`} style={{ textDecoration: "none" }}>
                    <div
                    className="blog-card-modern"
                    style={{
                        overflow: "hidden",
                        height: "540px",
                        display: "flex",
                        flexDirection: "column",
                        background: "rgba(10,61,36,0.3)",
                        border: "1px solid rgba(178,217,59,0.12)",
                        borderRadius: "44px",
                        transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                        position: "relative"
                    }}
                    >
                    {/* Image Area */}
                    <div style={{ overflow: "hidden", height: "260px", position: "relative" }}>
                        {blog.image_url ? (
                        <Image
                            src={blog.image_url}
                            alt={blog.title}
                            width={600}
                            height={400}
                            style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                            display: "block",
                            }}
                            className="blog-img"
                        />
                        ) : (
                        <div
                            style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(135deg, rgba(178,217,59,0.1), rgba(10,61,36,0.5))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "64px",
                            }}
                        >
                            🐆
                        </div>
                        )}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(5,35,21,0.6))" }} />
                    </div>

                    {/* Content Area */}
                    <div style={{ padding: "40px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                            {blog.blog_category && (
                            <span
                                style={{
                                background: "rgba(178,217,59,0.1)",
                                border: "1px solid rgba(178,217,59,0.25)",
                                borderRadius: "100px",
                                padding: "6px 16px",
                                fontSize: "11px",
                                fontWeight: 900,
                                color: "#b2d93b",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                }}
                            >
                                {blog.blog_category.name}
                            </span>
                            )}
                            <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(253,253,253,0.3)", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                {new Date(blog.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                        
                        <h3
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 800,
                            fontSize: "22px",
                            color: "#fdfdfd",
                            lineHeight: 1.25,
                            marginBottom: "16px",
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
                            fontSize: "15px",
                            color: "rgba(253,253,253,0.5)",
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            marginBottom: "24px"
                        }}
                        >
                        {blog.summary}
                        </p>

                        <div
                        style={{
                            marginTop: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "24px",
                            borderTop: "1px solid rgba(253,253,253,0.1)",
                        }}
                        >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            {blog.created_by_profile_image ? (
                            <Image
                                src={blog.created_by_profile_image}
                                alt={blog.created_by}
                                width={32}
                                height={32}
                                style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(178,217,59,0.3)" }}
                            />
                            ) : (
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(178,217,59,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#b2d93b", fontSize: "14px", fontWeight: 800 }}>{blog.created_by?.charAt(0) || 'C'}</div>
                            )}
                            <span style={{ fontSize: "14px", color: "rgba(253,253,253,0.5)", fontWeight: 700 }}>
                                {blog.created_by || 'Admin'}
                            </span>
                        </div>
                        <div className="read-more-accent" style={{ color: "#b2d93b", fontWeight: 800, fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                            Read More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                        </div>
                    </div>
                    </div>
                </Link>
                </Carousel.Slide>
            ))}
            </Carousel>
        ) : (
            <div style={{ textAlign: "center", padding: "100px 24px", color: "rgba(253,253,253,0.3)", fontSize: "18px", background: "rgba(253,253,253,0.02)", borderRadius: "40px", border: "1px solid rgba(253,253,253,0.08)" }}>
            No articles found. Check back soon for the latest retail intelligence.
            </div>
        )}
      </div>

      <style>{`
        .blog-all-btn:hover {
            background: #b2d93b !important;
            color: #052315 !important;
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(178,217,59,0.4);
        }
        .blog-card-modern:hover {
            background: rgba(10,61,36,0.45) !important;
            border-color: rgba(178,217,59,0.4) !important;
            transform: translateY(-10px);
            box-shadow: 0 40px 100px rgba(0,0,0,0.6);
        }
        .blog-card-modern:hover .blog-img {
            transform: scale(1.08);
        }
        .blog-card-modern:hover .read-more-accent {
            transform: translateX(5px);
            opacity: 0.8;
        }
        @keyframes pulse-tag {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
            .section-padding { padding-top: 80px !important; padding-bottom: 80px !important; }
            .news-header { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
            .blog-all-btn { width: 100% !important; justify-content: center !important; }
            .blog-card-modern { height: auto !important; min-height: 560px !important; border-radius: 32px !important; }
        }
      `}</style>
    </section>
  );
}
