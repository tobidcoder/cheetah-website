"use client";

import {
    Container, Title, Text, Button, SimpleGrid, Card, ThemeIcon, List, Modal, Group, Stack, Box, rem, Divider, Slider, SegmentedControl, Accordion,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
    IconRocket, IconShieldLock, IconCloudUpload, IconUsers, IconDeviceAnalytics, IconBrain, IconBrandLinkedin, IconCoin, IconTrendingUp, IconArrowRight, IconGlobe, IconAward, IconCircleCheck,
} from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { post, fetch as apiFetch } from "../api";

export default function PartnersPage() {
    const [opened, { open, close }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Calculator State
    const [numBusinesses, setNumBusinesses] = useState(100);
    const [selectedPlan, setSelectedPlan] = useState("Premium");
    const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Auto-detect currency
    useEffect(() => {
        fetch("https://ip-api.com/json?fields=countryCode")
            .then((r) => r.json())
            .then((data) => { if (data?.countryCode && data.countryCode !== "NG") setCurrency("USD"); })
            .catch(() => {
                try {
                    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (!tz.toLowerCase().includes("lagos") && !tz.toLowerCase().includes("africa")) setCurrency("USD");
                } catch { }
            });
    }, []);

    const planPrice = selectedPlan === "Pro" ? (currency === "NGN" ? 20000 : 20) : (currency === "NGN" ? 50000 : 50);
    const monthlyCommission = planPrice * numBusinesses * 0.25;
    const twoYearEarnings = monthlyCommission * 24;

    const formatValue = (val: number) => {
        if (currency === "USD") return `$${val.toLocaleString("en-US")}`;
        if (val >= 1000000) return `₦${(val / 1000000).toFixed(1)}M`;
        return `₦${val.toLocaleString("en-NG")}`;
    };

    return (
        <main ref={ref} style={{ minHeight: "100vh", background: "#052315", paddingTop: isMobile ? rem(120) : rem(180), paddingBottom: rem(100), position: "relative", overflow: "hidden" }}>
            {/* Background Aesthetics */}
            <div style={{ position: "absolute", top: "-100px", left: "-100px", width: rem(600), height: rem(600), background: "radial-gradient(circle, rgba(178, 217, 59, 0.08) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "20%", right: "-100px", width: rem(500), height: rem(500), background: "radial-gradient(circle, rgba(0, 255, 135, 0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "radial-gradient(rgba(178, 217, 59, 0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

            <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
                {/* Hero Section */}
                <Stack align="center" gap="xl" style={{ textAlign: "center", marginBottom: isMobile ? rem(80) : rem(140) }}>
                    <Box className={`hero-badge-partner ${visible ? 'animate' : ''}`}>
                        <IconGlobe size={18} color="#b2d93b" />
                        <Text size="xs" fw={900} c="#b2d93b" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>Global Expansion Program</Text>
                    </Box>
                    <Title order={1} className={`partners-hero-title ${visible ? 'animate' : ''}`}>
                        Empower Retail. <br />
                        Build <span style={{ color: "#b2d93b" }}>Recurring Wealth.</span>
                    </Title>
                    <Text size="xl" className={`partners-hero-subtitle ${visible ? 'animate' : ''}`}>
                        Join the retail revolution. Help businesses across Africa scale with Cheetah’s AI, and secure a lifetime of recurring commissions.
                    </Text>
                    <Group gap="lg" mt="xl" className={`partners-hero-actions ${visible ? 'animate' : ''}`}>
                        <Button component="a" href="https://back-office.usecheetah.com/register-partner" size="xl" radius="xl" className="btn-modern-primary">Join the Program</Button>
                        <Button onClick={open} variant="outline" size="xl" radius="xl" className="btn-modern-outline">Watch Demo</Button>
                    </Group>
                </Stack>

                {/* Trust Banner */}
                <Box py={50} mb={100} style={{ borderRadius: "40px", background: "rgba(253, 253, 253, 0.02)", border: "1px solid rgba(253, 253, 253, 0.05)", backdropFilter: "blur(20px)" }} className={visible ? 'animate-fade' : ''}>
                    <Text ta="center" size="xs" fw={900} c="rgba(253,253,253,0.3)" mb="xl" style={{ textTransform: "uppercase", letterSpacing: "4px" }}>Engineering The Future of Retail</Text>
                    <Group justify="center" gap={isMobile ? 30 : 80} opacity={0.5}>
                        {["COMPRAMART", "YOUMART", "GRAND SQUARE", "MARKET SQUARE"].map(brand => (
                            <Text key={brand} size={isMobile ? rem(14) : rem(24)} fw={900} style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.04em" }}>{brand}</Text>
                        ))}
                    </Group>
                </Box>

                {/* Strengths Grid */}
                <Stack align="center" mb={60}>
                    <Text fw={900} c="#b2d93b" size="xs" style={{ letterSpacing: "3px", textTransform: "uppercase" }}>The Cheetah Edge</Text>
                    <Title order={2} ta="center" className="syne-title" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800 }}>Why Retailers <span style={{ color: "#b2d93b" }}>Choose Us</span></Title>
                </Stack>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40} mb={160}>
                    {[
                        { title: "Offline Resilience", desc: "Our tactical offline engine handles power outages without losing a single transaction.", icon: IconShieldLock },
                        { title: "AI Forecasting", desc: "Predict stockouts before they happen. Real-time JIT inventory triggers.", icon: IconBrain },
                        { title: "Global Multi-Currency", desc: "Unified dashboards for chains operating across borders with zero friction.", icon: IconDeviceAnalytics },
                        { title: "Fraud Elimination", desc: "Real-time AI monitoring detects revenue leakage and theft instantly.", icon: IconShieldLock },
                        { title: "Military-Grade Security", desc: "AES-256 encryption. Automated cloud-backups and zero-trust parity.", icon: IconCloudUpload },
                        { title: "High-Priority Success", desc: "Direct 24/7 technical concierge for businesses signed by elite partners.", icon: IconAward },
                    ].map((feature, i) => (
                        <Card key={i} className={`partners-feature-card ${visible ? 'animate' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <ThemeIcon size={64} radius="20px" variant="light" color="green" mb={24} style={{ background: "rgba(178, 217, 59, 0.1)" }}>
                                <feature.icon size={32} />
                            </ThemeIcon>
                            <Text fw={800} size="xl" mb="sm" c="#fdfdfd" style={{ fontFamily: "Syne, sans-serif" }}>{feature.title}</Text>
                            <Text size="md" c="rgba(253, 253, 253, 0.5)" style={{ lineHeight: 1.6, fontWeight: 500 }}>{feature.desc}</Text>
                        </Card>
                    ))}
                </SimpleGrid>

                {/* Forecaster */}
                <Box id="calculator" className={`forecaster-section ${visible ? 'animate' : ''}`} style={{ marginBottom: rem(160) }}>
                    <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={80} style={{ alignItems: "center" }}>
                        <Stack gap={60}>
                            <Box>
                                <Title order={2} className="syne-title" mb="md" style={{ fontSize: rem(56), fontWeight: 800, color: "#fdfdfd" }}>Forecasting <span style={{ color: "#b2d93b" }}>Wealth</span></Title>
                                <Text size="xl" c="rgba(253,253,253,0.5)" fw={500}>Strategic income projections based on your anticipated retail portfolio and plan distribution.</Text>
                            </Box>

                            <Stack gap={48}>
                                <Box>
                                    <Group justify="space-between" mb="lg">
                                        <Text fw={900} c="rgba(253, 253, 253, 0.4)" size="xs" style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Active Retailers</Text>
                                        <Text fw={900} c="#b2d93b" style={{ fontSize: rem(48), fontFamily: "Syne, sans-serif" }}>{numBusinesses}</Text>
                                    </Group>
                                    <Slider size="xl" min={1} max={500} label={null} value={numBusinesses} onChange={setNumBusinesses} color="green" styles={{ track: { background: "rgba(255, 255, 255, 0.08)", height: rem(12) }, thumb: { border: "8px solid #b2d93b", background: "#052315", width: rem(36), height: rem(36) }, bar: { background: "#b2d93b" } }} />
                                </Box>

                                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                                    <Box>
                                        <Text size="xs" fw={900} mb={16} c="rgba(253, 253, 253, 0.4)" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>Plan Tier</Text>
                                        <SegmentedControl fullWidth data={["Pro", "Premium"]} value={selectedPlan} onChange={setSelectedPlan} color="green" radius="xl" styles={{ root: { background: "rgba(253, 253, 253, 0.03)", border: "1px solid rgba(253, 253, 253, 0.08)" }, control: { fontWeight: 900 } }} />
                                    </Box>
                                    <Box>
                                        <Text size="xs" fw={900} mb={16} c="rgba(253, 253, 253, 0.4)" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>Currency</Text>
                                        <SegmentedControl fullWidth data={["NGN", "USD"]} value={currency} onChange={(v: any) => setCurrency(v)} color="green" radius="xl" styles={{ root: { background: "rgba(253, 253, 253, 0.03)", border: "1px solid rgba(253, 253, 253, 0.08)" }, control: { fontWeight: 900 } }} />
                                    </Box>
                                </SimpleGrid>
                            </Stack>
                        </Stack>

                        <Card padding={60} radius="64px" className="forecaster-card-premium">
                            <Stack gap={60}>
                                <Box>
                                    <Group justify="space-between" mb="xs">
                                        <Text fw={900} size="xs" c="#b2d93b" style={{ letterSpacing: "3px", textTransform: "uppercase" }}>Daily Accrual Rank</Text>
                                        <IconCoin size={20} color="#b2d93b" />
                                    </Group>
                                    <Title order={3} style={{ fontSize: rem(72), color: "#fdfdfd", fontWeight: 800, letterSpacing: "-0.05em", fontFamily: "Syne, sans-serif" }}>{formatValue(monthlyCommission)}</Title>
                                    <Text c="rgba(253,253,253,0.4)" fw={600}>Estimated Monthly Recurring Commission</Text>
                                </Box>
                                <Divider color="rgba(178, 217, 59, 0.15)" />
                                <Box>
                                    <Group justify="space-between" mb="xs">
                                        <Text fw={900} size="xs" c="#00ff87" style={{ letterSpacing: "3px", textTransform: "uppercase" }}>24-Month Projection</Text>
                                        <IconTrendingUp size={20} color="#00ff87" />
                                    </Group>
                                    <Title order={3} style={{ fontSize: rem(44), color: "#fdfdfd", fontWeight: 800, letterSpacing: "-0.04em", fontFamily: "Syne, sans-serif" }}>{formatValue(twoYearEarnings)}</Title>
                                </Box>
                                <Button component="a" href="https://back-office.usecheetah.com/register-partner" size="xl" radius="xl" className="btn-modern-primary" fullWidth style={{ height: rem(60), fontSize: rem(15) }}>Start Earning Now</Button>
                            </Stack>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* FAQ */}
                <Box py={120}>
                    <Stack align="center" mb={64}>
                        <Title order={2} className="syne-title" style={{ fontSize: rem(48), fontWeight: 800 }}>Clarifying <span style={{ color: "#b2d93b" }}>The Vision</span></Title>
                    </Stack>
                    <Accordion variant="separated" styles={{
                        item: { background: "rgba(253, 253, 253, 0.02)", border: "1px solid rgba(253, 253, 253, 0.05)", borderRadius: rem(24), marginBottom: rem(20), padding: rem(10) },
                        control: { fontSize: rem(18), fontWeight: 800, color: "#fff", fontFamily: "Syne, sans-serif" },
                        content: { color: "rgba(253,253,253,0.5)", lineHeight: 1.8, fontSize: rem(16), fontWeight: 500 },
                        chevron: { color: "#b2d93b" }
                    }}>
                        <Accordion.Item value="commission"><Accordion.Control>How is commission calculated?</Accordion.Control><Accordion.Panel>Elite partners earn a **25% recurring commission** on every paid subscription for life. Commissions are calculated in real-time and paid out monthly with zero withdrawal minimums.</Accordion.Panel></Accordion.Item>
                        <Accordion.Item value="regions"><Accordion.Control>Which regions are supported?</Accordion.Control><Accordion.Panel>Cheetah is built for the global retail market. While our core infrastructure is optimized for Nigeria, Kenya, and Ghana, we support retailers and payouts globally via bank transfer and SWIFT.</Accordion.Panel></Accordion.Item>
                        <Accordion.Item value="training"><Accordion.Control>Is there technical training provided?</Accordion.Control><Accordion.Panel>Yes. Every partner receives access to the **Cheetah Certification Vault**, including Sales Playbooks, POS Setup Guides, and directo concierge support for enterprise deals.</Accordion.Panel></Accordion.Item>
                        <Accordion.Item value="support"><Accordion.Control>What priority support do clients get?</Accordion.Control><Accordion.Panel>Clients signed by Strategic Partners receive **Platinum Tier Support**, including a 30-minute SLA for mission-critical POS and inventory issues.</Accordion.Panel></Accordion.Item>
                    </Accordion>
                </Box>
            </Container>

            {/* Final CTA Section */}
            <Box style={{ background: "rgba(178, 217, 59, 0.05)", padding: rem(140) + " 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: "-300px", left: "50%", transform: "translateX(-50%)", width: "1200px", height: "1200px", background: "radial-gradient(circle, rgba(178, 217, 59, 0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
                <Container size="sm" style={{ position: "relative", zIndex: 2 }}>
                    <Stack align="center" gap={48} style={{ textAlign: "center" }}>
                        <Title order={2} className="syne-title" style={{ fontSize: "clamp(32px, 8vw, 84px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.05em" }}> own the retail <br /><span style={{ color: "#b2d93b" }}>frontier.</span></Title>
                        <Text size="xl" c="rgba(253, 253, 253, 0.6)" fw={500}>Join the elite circle of digital transformers. Scale African retail and secure your high-yield recurring future today.</Text>
                        <Button component="a" href="https://back-office.usecheetah.com/register-partner" size="xl" radius="xl" className="btn-modern-primary" style={{ height: rem(88), padding: "0 80px", fontSize: rem(22) }} rightSection={<IconArrowRight size={28} />}>Start Earning Today</Button>
                    </Stack>
                </Container>
            </Box>

            <Modal opened={opened} onClose={close} size="70%" radius="32px" centered withCloseButton={false} styles={{ content: { background: "#000", overflow: "hidden" }, body: { padding: 0 } }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}><iframe src="https://www.youtube.com/embed/yyKnT1jRbr8?autoplay=1" title="Cheetah Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></iframe></div>
            </Modal>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');
                .syne-title { font-family: 'Syne', sans-serif; letter-spacing: -0.04em; }
                .hero-badge-partner { background: rgba(178, 217, 59, 0.1); border: 1px solid rgba(178, 217, 59, 0.2); border-radius: 99px; padding: 10px 24px; display: inline-flex; align-items: center; gap: 12px; opacity: 0; transform: translateY(20px); }
                .hero-badge-partner.animate { animation: fadeInUp 0.8s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                .partners-hero-title { font-size: clamp(48px, 10vw, 102px); font-weight: 800; font-family: 'Syne', sans-serif; line-height: 0.9; letter-spacing: -0.05em; color: #fff; opacity: 0; transform: translateY(30px); }
                .partners-hero-title.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.1s forwards; }
                .partners-hero-subtitle { font-size: 22px; color: rgba(253, 253, 253, 0.5); font-weight: 500; max-width: 800px; opacity: 0; transform: translateY(20px); }
                .partners-hero-subtitle.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.2s forwards; }
                .partners-hero-actions { opacity: 0; transform: translateY(20px); }
                .partners-hero-actions.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) 0.3s forwards; }
                .btn-modern-primary { background: #b2d93b !important; color: #052315 !important; font-weight: 900 !important; font-family: 'Syne', sans-serif; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.4s ease !important; border: none !important; }
                .btn-modern-primary:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 20px 40px rgba(178, 217, 59, 0.3); }
                .btn-modern-outline { background: rgba(253, 253, 253, 0.03) !important; color: #fff !important; border: 1.5px solid rgba(253, 253, 253, 0.1) !important; font-weight: 800 !important; transition: all 0.4s ease !important; backdrop-filter: blur(10px); }
                .btn-modern-outline:hover { background: rgba(253, 253, 253, 0.06) !important; border-color: rgba(253, 253, 253, 0.3) !important; transform: translateY(-3px); }
                .partners-feature-card { background: rgba(253, 253, 253, 0.02) !important; border: 1px solid rgba(253, 253, 253, 0.06) !important; padding: 40px !important; border-radius: 40px !important; backdrop-filter: blur(20px); transition: all 0.5s ease; opacity: 0; transform: translateY(30px); }
                .partners-feature-card.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                .partners-feature-card:hover { transform: translateY(-10px); background: rgba(178, 217, 59, 0.04) !important; border-color: rgba(178, 217, 59, 0.2) !important; }
                .forecaster-card-premium { background: linear-gradient(165deg, rgba(178, 217, 59, 0.1) 0%, rgba(5, 35, 21, 1) 100%) !important; border: 1.5px solid rgba(178, 217, 59, 0.2) !important; backdrop-filter: blur(20px); box-shadow: 0 60px 120px rgba(0,0,0,0.5) !important; }
                .forecaster-section { opacity: 0; transform: translateY(40px); }
                .forecaster-section.animate { animation: fadeInUp 1s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
                .animate-fade { animation: fadeIn 2s ease forwards; }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </main>
    );
}
