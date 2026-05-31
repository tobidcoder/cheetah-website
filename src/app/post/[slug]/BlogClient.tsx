"use client";
import {
  Image, Avatar, Text, Group, SimpleGrid, Container, Box, LoadingOverlay, Divider, Title, Button, Stack
} from "@mantine/core";
import {
  FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon
} from "react-share";
import Link from "next/link";
import { 
  IconArrowLeft, IconCalendar, IconArrowRight, IconClock
} from "@tabler/icons-react";

interface Blog {
  id: number; slug: string; title: string; summary: string; image_url: string; created_by: string; created_by_profile_image: string; created_by_position?: string; blog_category: { name: string; id: number }; created_at: string; body: string;
}

interface BlogClientProps {
  initialBlog: Blog; initialRelated: Blog[]; shareUrl: string;
}

export function BlogClient({ initialBlog, initialRelated, shareUrl }: BlogClientProps) {
  if (!initialBlog) return <LoadingOverlay visible={true} />;

  return (
    <main style={{ background: "#052315", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background Aesthetics */}
      <div className="bg-glow bg-glow-1" style={{ position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(178, 217, 59, 0.05) 0%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div className="bg-glow bg-glow-2" style={{ position: "absolute", top: "40%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0, 255, 135, 0.04) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "radial-gradient(rgba(178, 217, 59, 0.02) 1px, transparent 1px)", backgroundSize: "45px 45px", pointerEvents: "none" }} />

      <Container className="blog-container" size="lg" style={{ position: "relative", zIndex: 1 }}>
        {/* Back Link */}
        <Box className="animate-fade back-link-container">
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#b2d93b", textDecoration: "none", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }} className="back-link">
             <IconArrowLeft size={18} /> Back to Insights
          </Link>
        </Box>

        {/* Hero Section */}
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={60} className="hero-grid" style={{ alignItems: "center" }}>
          <Stack gap="xl">
            <Box className="blog-post-eyebrow animate">
              <Text tt="uppercase" c="#b2d93b" fw={900} size="xs" style={{ letterSpacing: "2.5px" }}>{initialBlog.blog_category?.name || "Insight"}</Text>
            </Box>
            
            <Title order={1} className="blog-post-title animate">
              {initialBlog.title}
            </Title>

            <Group gap="xl" className="blog-post-meta animate" style={{ rowGap: "24px" }}>
              <Group gap="md">
                <Avatar size={56} src={initialBlog.created_by_profile_image} radius="100%" style={{ border: "2px solid #b2d93b", boxShadow: "0 10px 20px rgba(178, 217, 59, 0.15)" }} />
                <Box>
                  <Text size="lg" fw={800} c="#fdfdfd" mb={2}>{initialBlog.created_by}</Text>
                  <Text size="xs" fw={700} c="rgba(253, 253, 253, 0.6)" tt="uppercase" lts="1px">
                    {initialBlog.created_by_position || "Cheetah Insider"}
                  </Text>
                </Box>
              </Group>
              <Box className="meta-divider" style={{ width: "1px", height: "40px", background: "rgba(253, 253, 253, 0.1)" }} />
              <Group gap="xs">
                <IconCalendar size={18} color="rgba(178, 217, 59, 0.8)" />
                <Text size="sm" fw={700} c="rgba(253, 253, 253, 0.7)">
                  {new Date(initialBlog.created_at).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
                </Text>
              </Group>
            </Group>
          </Stack>

          <Box className="blog-post-hero-image animate">
             <Image alt={initialBlog.title} src={initialBlog.image_url} className="hero-img-element" style={{ border: "1px solid rgba(253, 253, 253, 0.1)" }} />
          </Box>
        </SimpleGrid>

        <Divider className="content-divider" color="rgba(178, 217, 59, 0.1)" />

        {/* Content Body */}
        <Box style={{ maxWidth: "860px", margin: "0 auto" }} className="blog-body-text animate">
          <div className="blog-content" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: initialBlog.body }} />
        </Box>

        {/* Share Section */}
        <Box className="share-section animate-fade">
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

           <Box className="author-bio-box">
              <Group wrap="nowrap" gap="xl" align="flex-start">
                 <Avatar size={90} src={initialBlog.created_by_profile_image} radius="100%" style={{ border: "3px solid #b2d93b", padding: "4px" }} />
                 <Stack gap={4}>
                    <Text size="xl" fw={900} c="#fff" style={{ fontFamily: "Syne, sans-serif" }}>{initialBlog.created_by}</Text>
                    <Text size="sm" c="#b2d93b" fw={800} tt="uppercase" lts="1px" mb="xs">{initialBlog.created_by_position || "Cheetah Insider"}</Text>
                    <Text size="md" c="rgba(253, 253, 253, 0.7)" fw={500} style={{ lineHeight: 1.6, maxWidth: "600px" }}>
                       Strategic voice at Cheetah HQ, dedicated to engineering the digital evolution of African retail through tactical data and world-class AI.
                    </Text>
                 </Stack>
              </Group>
           </Box>
        </Box>

        {/* Related Posts */}
        {initialRelated.length > 0 && (
          <Box className="related-section">
              <Group justify="space-between" mb={40} align="flex-end">
                  <Stack gap={4}>
                      <Text fw={900} size="xs" tt="uppercase" c="#b2d93b" style={{ letterSpacing: "3px" }}>Next Intelligence</Text>
                      <Title order={2} className="syne-title related-title" c="#fff">Related <span style={{ color: "#b2d93b" }}>Strategies</span></Title>
                  </Stack>
                  <Button variant="outline" size="md" radius="xl" className="btn-modern-outline hide-mobile" component={Link} href="/blog" rightSection={<IconArrowRight size={18} />}>View Library</Button>
              </Group>
              
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
                  {initialRelated.map((post, i) => (
                      <Link key={post.id} href={`/post/${post.slug}?i=${post.id}`} className="related-card-modern animate" style={{ textDecoration: "none", animationDelay: `${i * 0.1}s` }}>
                          <Box style={{ background: "rgba(253, 253, 253, 0.02)", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(253, 253, 253, 0.05)", transition: "all 0.4s ease", height: "100%", display: "flex", flexDirection: "column" }} className="related-inner">
                              <Box style={{ height: "200px", overflow: "hidden" }}>
                                  <Image src={post.image_url} alt={post.title} style={{ height: "100%", width: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} className="related-img" />
                              </Box>
                              <Box p={24} style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                  <Group gap="xs" mb="md">
                                     <IconClock size={14} color="#b2d93b" />
                                     <Text size="xs" fw={800} c="#b2d93b" tt="uppercase" lts="1.5px">Insight</Text>
                                  </Group>
                                  <Text fw={800} size="lg" c="#fff" lineClamp={3} mb="xl" style={{ fontFamily: "Syne, sans-serif", lineHeight: 1.3 }}>{post.title}</Text>
                                  <Group justify="space-between" mt="auto">
                                      <Text size="sm" fw={700} c="rgba(253, 253, 253, 0.5)">Read Strategy</Text>
                                      <IconArrowRight size={18} color="#b2d93b" />
                                  </Group>
                              </Box>
                          </Box>
                      </Link>
                  ))}
              </SimpleGrid>
              <Button variant="outline" size="lg" radius="xl" className="btn-modern-outline show-mobile" component={Link} href="/blog" rightSection={<IconArrowRight size={18} />} mt={40} fullWidth>View Library</Button>
          </Box>
        )}
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .syne-title { font-family: 'Syne', sans-serif; letter-spacing: -0.04em; }
        
        /* Container Spacing */
        .blog-container { padding-top: 120px; padding-bottom: 120px; }
        .back-link-container { margin-bottom: 60px; }
        .hero-grid { margin-bottom: 80px; }
        .content-divider { margin-top: 80px; margin-bottom: 80px; }
        
        /* Animations */
        .blog-post-eyebrow.animate { animation: fadeInUp 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .blog-post-title { font-size: clamp(25px, 4.2vw, 45px); font-weight: 800; font-family: 'Syne', sans-serif; line-height: 1.1; letter-spacing: -0.02em; color: #fff; }
        .blog-post-title.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.1s forwards; }
        .blog-post-meta.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.2s forwards; }
        
        .blog-post-hero-image { perspective: 1000px; }
        .hero-img-element {
           border-radius: 40px; 
           box-shadow: 0 40px 100px rgba(0,0,0,0.6);
           transform: rotateY(-5deg) rotateX(2deg);
           transition: transform 0.5s ease;
        }
        .blog-post-hero-image.animate { animation: imageReveal 1.2s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; }
        
        .blog-body-text.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.4s forwards; }
        .related-card-modern.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.5s forwards; }
        .animate-fade { animation: fadeIn 1s ease forwards; }
        
        /* Content Styling */
        .blog-content { color: rgba(253, 253, 253, 0.85); line-height: 1.85; font-size: 21px; font-weight: 400; font-family: 'Inter', sans-serif; letter-spacing: -0.01em; }
        .blog-content h2, .blog-content h3 { font-family: 'Syne', sans-serif; color: #fff; margin-top: 64px; margin-bottom: 24px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; }
        .blog-content h2 { font-size: 38px; }
        .blog-content h3 { font-size: 28px; }
        .blog-content p { margin-bottom: 32px; }
        .blog-content strong { color: #fff; font-weight: 700; }
        .blog-content a { color: #b2d93b; text-decoration: none; border-bottom: 1px solid rgba(178, 217, 59, 0.4); transition: border-color 0.2s; }
        .blog-content a:hover { border-color: #b2d93b; }
        .blog-content ul, .blog-content ol { margin-bottom: 32px; padding-left: 24px; }
        .blog-content li { margin-bottom: 12px; }
        
        .blog-content img { max-width: 100%; height: auto; border-radius: 24px; margin: 56px 0; border: 1px solid rgba(253, 253, 253, 0.1); box-shadow: 0 30px 60px rgba(0,0,0,0.3); }
        .blog-content blockquote { border-left: 4px solid #b2d93b; padding-left: 32px; margin: 48px 0; font-style: italic; font-size: 24px; color: #fdfdfd; font-weight: 600; line-height: 1.6; }
        
        /* Share Section */
        .share-section { background: rgba(253, 253, 253, 0.02); border-radius: 40px; border: 1px solid rgba(253, 253, 253, 0.05); backdrop-filter: blur(20px); padding: 60px; margin-top: 100px; margin-bottom: 100px; }
        .author-bio-box { margin-top: 60px; padding-top: 60px; border-top: 1px solid rgba(253, 253, 253, 0.05); }
        
        .share-btn-modern { transition: transform 0.3s ease; filter: grayscale(0.2); }
        .share-btn-modern:hover { transform: translateY(-6px) scale(1.1); filter: grayscale(0); }
        .back-link:hover { transform: translateX(-6px); opacity: 0.8; }
        
        .related-section { margin-bottom: 120px; }
        .related-title { font-size: 40px; font-weight: 800; }
        .related-card-modern:hover .related-inner { border-color: rgba(178, 217, 59, 0.4) !important; background: rgba(178, 217, 59, 0.04) !important; transform: translateY(-8px); }
        .related-card-modern:hover .related-img { transform: scale(1.05); }
        
        .btn-modern-outline { background: rgba(253,253,253,0.03) !important; color: #fff !important; border: 1.5px solid rgba(253,253,253,0.1) !important; font-weight: 800 !important; }
        .btn-modern-outline:hover { background: rgba(253,253,253,0.08) !important; transform: translateY(-3px); }
        
        .show-mobile { display: none; }
        
        @keyframes fadeInUp { 
          0% { opacity: 0; transform: translateY(30px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fadeIn { 
          0% { opacity: 0; } 
          100% { opacity: 1; } 
        }
        @keyframes imageReveal { 
          0% { opacity: 0; transform: rotateY(-10deg) translateX(40px); } 
          100% { opacity: 1; transform: rotateY(-5deg) translateX(0); } 
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 992px) {
           .blog-post-hero-image { perspective: none; }
           .hero-img-element { transform: none !important; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
           .blog-post-hero-image.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; }
           .meta-divider { display: none; }
        }
        
        @media (max-width: 768px) {
          .bg-glow { opacity: 0.5; }
          .blog-container { padding-top: 60px; padding-bottom: 60px; }
          .back-link-container { margin-bottom: 40px; }
          .hero-grid { margin-bottom: 40px; gap: 40px !important; }
          .content-divider { margin-top: 40px; margin-bottom: 40px; }
          
          .blog-post-title { font-size: 26px; line-height: 1.15; }
          .blog-content { font-size: 18px; line-height: 1.7; }
          .blog-content h2 { font-size: 30px; margin-top: 48px; }
          .blog-content h3 { font-size: 24px; }
          .blog-content blockquote { font-size: 20px; padding-left: 20px; margin: 32px 0; }
          
          .share-section { padding: 32px; border-radius: 24px; margin-top: 60px; margin-bottom: 60px; }
          .author-bio-box { margin-top: 40px; padding-top: 40px; }
          
          .related-section { margin-bottom: 60px; }
          .related-title { font-size: 32px; }
          
          .hide-mobile { display: none; }
          .show-mobile { display: block; }
        }
      ` }} />
    </main>
  );
}
