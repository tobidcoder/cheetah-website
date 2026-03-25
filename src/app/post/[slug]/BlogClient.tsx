"use client";
import {
  Image, Avatar, Text, Group, SimpleGrid, Container, Box, LoadingOverlay, Divider, Title, Button, Stack
} from "@mantine/core";
import {
  FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon
} from "react-share";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { 
  IconShare, IconChevronRight, IconCalendar, IconArrowRight, IconArrowLeft, IconClock
} from "@tabler/icons-react";

interface Blog {
  id: number; slug: string; title: string; summary: string; image_url: string; created_by: string; created_by_profile_image: string; created_by_position?: string; blog_category: { name: string; id: number }; created_at: string; body: string;
}

interface BlogClientProps {
  initialBlog: Blog; initialRelated: Blog[]; shareUrl: string;
}

export function BlogClient({ initialBlog, initialRelated, shareUrl }: BlogClientProps) {
  const [htmlElements, setHtmlElements] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parseHtml = (body: any) => {
      if (typeof window === "undefined") return;
      const parser = new DOMParser();
      const doc = parser.parseFromString(body, "text/html");
      const elements = Array.from(doc.body.childNodes).map((node: any, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      ));
      setHtmlElements(elements);
    };
    if (initialBlog?.body) parseHtml(initialBlog.body);
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [initialBlog?.body]);

  if (!initialBlog) return <LoadingOverlay visible={true} />;

  return (
    <main ref={ref} style={{ background: "#052315", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background Aesthetics */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(178, 217, 59, 0.05) 0%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0, 255, 135, 0.04) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "radial-gradient(rgba(178, 217, 59, 0.02) 1px, transparent 1px)", backgroundSize: "45px 45px", pointerEvents: "none" }} />

      <Container py={120} size="lg" style={{ position: "relative", zIndex: 1 }}>
        {/* Back Link */}
        <Box mb={60} className={visible ? 'animate-fade' : 'hidden'}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#b2d93b", textDecoration: "none", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }} className="back-link">
             <IconArrowLeft size={18} /> Back to Insights
          </Link>
        </Box>

        {/* Hero Section */}
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={80} mb={100} style={{ alignItems: "center" }}>
          <Stack gap="xl">
            <Box className={`blog-post-eyebrow ${visible ? 'animate' : ''}`}>
              <Text tt="uppercase" c="#b2d93b" fw={900} size="xs" style={{ letterSpacing: "2.5px" }}>{initialBlog.blog_category?.name}</Text>
            </Box>
            
            <Title order={1} className={`blog-post-title ${visible ? 'animate' : ''}`}>
              {initialBlog.title}
            </Title>

            <Group gap="xl" className={`blog-post-meta ${visible ? 'animate' : ''}`}>
              <Group gap="md">
                <Avatar size={56} src={initialBlog.created_by_profile_image} radius="100%" style={{ border: "2,5px solid #b2d93b", boxShadow: "0 10px 20px rgba(178, 217, 59, 0.15)" }} />
                <Box>
                  <Text size="lg" fw={800} c="#fdfdfd" mb={2}>{initialBlog.created_by}</Text>
                  <Text size="xs" fw={700} c="rgba(253, 253, 253, 0.4)" tt="uppercase" lts="1px">
                    {initialBlog.created_by_position || "Cheetah Insider"}
                  </Text>
                </Box>
              </Group>
              <Box style={{ width: "1px", height: "40px", background: "rgba(253, 253, 253, 0.1)" }} />
              <Group gap="xs">
                <IconCalendar size={18} color="rgba(178, 217, 59, 0.6)" />
                <Text size="sm" fw={700} c="rgba(253, 253, 253, 0.5)">
                  {new Date(initialBlog.created_at).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
                </Text>
              </Group>
            </Group>
          </Stack>

          <Box className={`blog-post-hero-image ${visible ? 'animate' : ''}`}>
             <Image alt={initialBlog.title} src={initialBlog.image_url} radius="48px" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)", border: "1px solid rgba(253, 253, 253, 0.1)", transform: "perspective(1000px) rotateY(-5deg)" }} />
          </Box>
        </SimpleGrid>

        <Divider my={80} color="rgba(178, 217, 59, 0.1)" />

        {/* Content Body */}
        <Box style={{ maxWidth: "860px", margin: "0 auto" }} className={`blog-body-text ${visible ? 'animate-fade-up' : ''}`}>
          <div className="blog-content"> {htmlElements} </div>
        </Box>

        {/* Share Section */}
        <Box my={120} p={60} style={{ background: "rgba(253, 253, 253, 0.02)", borderRadius: "48px", border: "1px solid rgba(253, 253, 253, 0.05)", backdropFilter: "blur(20px)" }} className={visible ? 'animate-fade-up' : ''}>
           <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} style={{ alignItems: "center" }}>
              <Stack gap="xs">
                 <Text fw={900} size="xs" tt="uppercase" c="#b2d93b" style={{ letterSpacing: "3px" }}>Retail Velocity Community</Text>
                 <Title order={2} className="syne-title" c="#fff" style={{ fontSize: "32px", fontWeight: 800 }}>Spread The Intelligence</Title>
              </Stack>
              <Group gap="md">
                  {[
                    { btn: FacebookShareButton, icon: FacebookIcon },
                    { btn: TwitterShareButton, icon: XIcon },
                    { btn: LinkedinShareButton, icon: LinkedinIcon },
                    { btn: WhatsappShareButton, icon: WhatsappIcon },
                    { btn: TelegramShareButton, icon: TelegramIcon },
                  ].map((item, i) => (
                    <item.btn key={i} url={shareUrl} className="share-btn-modern">
                      <item.icon size={48} round />
                    </item.btn>
                  ))}
              </Group>
           </SimpleGrid>

           <Box mt={60} pt={60} style={{ borderTop: "1px solid rgba(253, 253, 253, 0.05)" }}>
              <Group wrap="nowrap" gap="xl">
                 <Avatar size={100} src={initialBlog.created_by_profile_image} radius="100%" style={{ border: "4px solid #b2d93b", padding: "4px" }} />
                 <Stack gap={4}>
                    <Text size="22px" fw={900} c="#fff" style={{ fontFamily: "Syne, sans-serif" }}>{initialBlog.created_by}</Text>
                    <Text size="sm" c="#b2d93b" fw={800} tt="uppercase" lts="1px" mb="sm">{initialBlog.created_by_position || "Cheetah Insider"}</Text>
                    <Text size="md" c="rgba(253, 253, 253, 0.5)" fw={500} style={{ lineHeight: 1.6, maxWidth: "600px" }}>
                       Strategic voice at Cheetah HQ, dedicated to engineering the digital evolution of African retail through tactical data and world-class AI.
                    </Text>
                 </Stack>
              </Group>
           </Box>
        </Box>

        {/* Related Posts */}
        {initialRelated.length > 0 && (
          <Box my={120}>
              <Group justify="space-between" mb={60}>
                  <Stack gap={4}>
                      <Text fw={900} size="xs" tt="uppercase" c="#b2d93b" style={{ letterSpacing: "3px" }}>Next Intelligence</Text>
                      <Title order={2} className="syne-title" c="#fff" style={{ fontSize: "40px", fontWeight: 800 }}>Related <span style={{ color: "#b2d93b" }}>Strategies</span></Title>
                  </Stack>
                  <Button variant="outline" size="lg" radius="xl" className="btn-modern-outline" component={Link} href="/blog" rightSection={<IconArrowRight size={18} />}>View Library</Button>
              </Group>
              
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
                  {initialRelated.map((post, i) => (
                      <Link key={post.id} href={`/post/${post.slug}?i=${post.id}`} className={`related-card-modern ${visible ? 'animate' : ''}`} style={{ textDecoration: "none", transitionDelay: `${i * 0.1}s` }}>
                          <Box style={{ background: "rgba(253, 253, 253, 0.02)", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(253, 253, 253, 0.05)", transition: "all 0.4s ease", height: "100%" }} className="related-inner">
                              <Box style={{ height: "240px", overflow: "hidden" }}>
                                  <Image src={post.image_url} alt={post.title} style={{ height: "100%", width: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} className="related-img" />
                              </Box>
                              <Box p={32}>
                                  <Group gap="xs" mb="md">
                                     <IconClock size={14} color="#b2d93b" />
                                     <Text size="xs" fw={800} c="#b2d93b" tt="uppercase" lts="1.5px">Insight · 5 min</Text>
                                  </Group>
                                  <Text fw={800} size="xl" c="#fff" lineClamp={2} mb="xl" style={{ fontFamily: "Syne, sans-serif", lineHeight: 1.25 }}>{post.title}</Text>
                                  <Group justify="space-between" mt="auto">
                                      <Text size="sm" fw={700} c="rgba(253, 253, 253, 0.4)">Read Strategy</Text>
                                      <IconArrowRight size={20} color="#b2d93b" />
                                  </Group>
                              </Box>
                          </Box>
                      </Link>
                  ))}
              </SimpleGrid>
          </Box>
        )}
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');
        .syne-title { font-family: 'Syne', sans-serif; letter-spacing: -0.04em; }
        .blog-post-eyebrow { opacity: 0; transform: translateY(20px); }
        .blog-post-eyebrow.animate { animation: fadeInUp 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .blog-post-title { font-size: clamp(34px, 8vw, 68px); fontWeight: 800; font-family: 'Syne', sans-serif; line-height: 0.95; letterSpacing: -0.05em; color: #fff; opacity: 0; transform: translateY(30px); }
        .blog-post-title.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.1s forwards; }
        .blog-post-meta { opacity: 0; transform: translateY(20px); }
        .blog-post-meta.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.2s forwards; }
        .blog-post-hero-image { opacity: 0; transform: perspective(1000px) rotateY(-10deg) translateX(40px); }
        .blog-post-hero-image.animate { animation: imageReveal 1.2s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; }
        .blog-body-text { opacity: 0; transform: translateY(40px); transition: all 1s ease 0.5s; }
        .blog-body-text.animate-fade-up { opacity: 1; transform: translateY(0); }
        .animate-fade { animation: fadeIn 1s ease forwards; }
        .hidden { opacity: 0; }
        .blog-content { color: rgba(253, 253, 253, 0.7); line-height: 1.8; font-size: 20px; font-weight: 500; font-family: 'Inter', sans-serif; }
        .blog-content h2, .blog-content h3 { font-family: 'Syne', sans-serif; color: #fff; margin-top: 60px; margin-bottom: 24px; font-weight: 800; letter-spacing: -0.02em; }
        .blog-content h2 { font-size: 36px; }
        .blog-content p { margin-bottom: 32px; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 40px; margin: 60px 0; border: 1px solid rgba(253, 253, 253, 0.1); box-shadow: 0 40px 80px rgba(0,0,0,0.4); }
        .blog-content blockquote { border-left: 4px solid #b2d93b; padding-left: 32px; margin: 48px 0; font-style: italic; font-size: 24px; color: #fdfdfd; font-weight: 700; }
        .share-btn-modern { transition: transform 0.3s ease; filter: grayscale(0.2); }
        .share-btn-modern:hover { transform: translateY(-8px) scale(1.1); filter: grayscale(0); }
        .back-link:hover { transform: translateX(-8px); opacity: 0.8; }
        .related-card-modern:hover .related-inner { border-color: rgba(178, 217, 59, 0.3) !important; background: rgba(178, 217, 59, 0.03) !important; transform: translateY(-10px); }
        .related-card-modern:hover .related-img { transform: scale(1.08); }
        .btn-modern-outline { background: rgba(253,253,253,0.03) !important; color: #fff !important; border: 1.5px solid rgba(253,253,253,0.1) !important; font-weight: 800 !important; }
        .btn-modern-outline:hover { background: rgba(253,253,253,0.08) !important; transform: translateY(-3px); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes imageReveal { from { opacity: 0; transform: perspective(1000px) rotateY(-10deg) translateX(40px); } to { opacity: 1; transform: perspective(1000px) rotateY(-5deg) translateX(0); } }
        @media (max-width: 768px) {
          .blog-content { font-size: 17px; }
          .blog-post-title { font-size: 38px; }
        }
      `}</style>
    </main>
  );
}
