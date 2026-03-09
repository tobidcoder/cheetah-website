"use client";

import {
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    Card,
    ThemeIcon,
    List,
    Modal,
    TextInput,
    Select,
    Textarea,
    Group,
    Stack,
    Box,
    rem,
    Divider,
    Slider,
    SegmentedControl,
    Timeline,
    Accordion,
    Badge,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
    IconCheck,
    IconRocket,
    IconChartBar,
    IconShieldLock,
    IconCloudUpload,
    IconUsers,
    IconChartPie,
    IconDeviceAnalytics,
    IconBrain,
    IconMapPin,
    IconBrandLinkedin,
    IconCalculator,
    IconCoin,
    IconTrendingUp,
    IconArrowRight,
    IconGlobe,
    IconAward,
    IconSchool,
    IconVolume,
    IconHeartHandshake,
    IconSearch,
    IconUserPlus,
    IconCashBanknote,
    IconCircleCheck,
    IconStar,
    IconExternalLink,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { post, fetch as apiFetch } from "../api";

export default function PartnersPage() {
    const [opened, { open, close }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Calculator State
    const [numBusinesses, setNumBusinesses] = useState(10);
    const [staffPerBranch, setStaffPerBranch] = useState(5);
    const [selectedPlan, setSelectedPlan] = useState("Premium");
    const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

    // Auto-detect currency via IP
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((r) => r.json())
            .then((data) => {
                if (data?.country_code && data.country_code !== "NG") {
                    setCurrency("USD");
                }
            })
            .catch(() => {
                try {
                    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    if (!tz.toLowerCase().includes("lagos") && !tz.toLowerCase().includes("africa")) {
                        setCurrency("USD");
                    }
                } catch { }
            });
    }, []);

    // Auto-detect currency via IP

    // Calculator Logic
    const planPrice = selectedPlan === "Pro"
        ? (currency === "NGN" ? 10000 : 10)
        : (currency === "NGN" ? 15000 : 15);

    const monthlyCommission = planPrice * staffPerBranch * 0.2 * numBusinesses;
    const twoYearEarnings = monthlyCommission * 24;

    const formatValue = (val: number) => {
        if (currency === "USD") return `$${val.toLocaleString("en-US")}`;
        // More compact formatting for millions to prevent overflow
        if (val >= 1000000) {
            return `₦${(val / 1000000).toFixed(1)}M`;
        }
        return `₦${val.toLocaleString("en-NG")}`;
    };

    return (
        <main style={{ minHeight: "100vh", background: "#052315", paddingTop: rem(100), paddingBottom: rem(100) }}>
            {/* Hero Section */}
            <Container size="lg">
                <Stack align="center" gap="xl" style={{ textAlign: "center", marginBottom: rem(120) }}>
                    <Box
                        style={{
                            padding: "10px 28px",
                            background: "rgba(178, 217, 59, 0.15)",
                            borderRadius: "50px",
                            border: "1px solid rgba(178, 217, 59, 0.3)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: rem(10),
                        }}
                    >
                        <IconGlobe size={18} color="#b2d93b" />
                        <Text size="xs" fw={900} c="#b2d93b" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>
                            Global Expansion Program
                        </Text>
                    </Box>
                    <Title
                        order={1}
                        style={{
                            fontSize: "clamp(40px, 8vw, 102px)",
                            lineHeight: 0.9,
                            fontWeight: 900,
                            maxWidth: rem(1200),
                            color: "#fdfdfd",
                            letterSpacing: "-0.06em",
                        }}
                    >
                        Empower Retail. <br />
                        Build <span style={{ color: "#b2d93b" }}>Recurring Wealth.</span>
                    </Title>
                    <Text size="xl" c="rgba(253, 253, 253, 0.6)" style={{ maxWidth: rem(800), lineHeight: 1.5, fontSize: rem(22) }}>
                        Join the retail revolution. Help businesses across Africa scale with Cheetah&apos;s AI—and secure a lifetime of recurring commissions.
                    </Text>
                    <Group gap="lg" wrap="wrap" justify="center" mt="xl">
                        <Button component={Link} href="/partners/apply" size="xl" radius="xl" className="btn-primary" style={{ height: rem(80), padding: "0 60px", fontSize: rem(20) }}>
                            Join the Program
                        </Button>
                        <Button onClick={open} variant="outline" size="xl" radius="xl" color="green" style={{ height: rem(80), padding: "0 60px", border: "1.5px solid rgba(178, 217, 59, 0.4)", color: "#b2d93b", fontSize: rem(20), background: "rgba(178, 217, 59, 0.03)" }}>
                            Watch Demo
                        </Button>
                    </Group>
                </Stack>
            </Container>

            {/* Trust Banner */}
            <Box py={50} style={{ borderY: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                <Container size="lg">
                    <Text ta="center" size="xs" fw={800} c="rgba(253,253,253,0.3)" mb="xl" style={{ textTransform: "uppercase", letterSpacing: "3px" }}>Trusted by Africa&apos;s Market Leaders</Text>
                    <Group justify="center" gap={60} opacity={0.4}>
                        <Text size="xl" fw={900}>PRINCE EBEANO</Text>
                        <Text size="xl" fw={900}>FOODCO</Text>
                        <Text size="xl" fw={900}>MARKET SQUARE</Text>
                        <Text size="xl" fw={900}>GRAND SQUARE</Text>
                    </Group>
                </Container>
            </Box>

            {/* Strengths Grid */}
            <Container size="lg" py={120}>
                <Stack align="center" mb={60}>
                    <Text fw={800} c="#b2d93b" size="xs" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>Technology Edge</Text>
                    <Title order={2} ta="center" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900 }}>Why Retailers <span style={{ color: "#b2d93b" }}>Choose Cheetah</span></Title>
                </Stack>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={32}>
                    {[
                        { title: "Offline Resilience", desc: "Our proprietary engine handles power and internet outages without losing a single transaction.", icon: IconShieldLock },
                        { title: "AI Demand Forecasting", desc: "Automated inventory management that predicts stockouts before they happen.", icon: IconBrain },
                        { title: "Multi-Currency HQ", desc: "Unified dashboards for chains operating across borders with real-time conversion.", icon: IconDeviceAnalytics },
                        { title: "Revenue Leakage Guard", desc: "Real-time fraud detection AI identifies internal theft instantly.", icon: IconShieldLock },
                        { title: "Bank-Grade Security", desc: "AES-256 encryption. Zero data loss. Secure backups and automated cloud sync.", icon: IconCloudUpload },
                        { title: "Priority Support", desc: "24/7 technical priority for businesses signed by our strategic partners.", icon: IconAward },
                    ].map((feature, i) => (
                        <Card
                            key={i}
                            padding="xl"
                            radius="32px"
                            style={{
                                background: "rgba(255, 255, 255, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                            }}
                            className="strength-card"
                        >
                            <ThemeIcon size={56} radius="xl" variant="light" color="green" mb="xl" style={{ background: "rgba(178, 217, 59, 0.1)" }}>
                                <feature.icon size={28} />
                            </ThemeIcon>
                            <Text fw={800} size="lg" mb="sm" c="#fdfdfd" style={{ letterSpacing: "-0.02em" }}>{feature.title}</Text>
                            <Text size="sm" c="rgba(253, 253, 253, 0.45)" style={{ lineHeight: 1.6 }}>{feature.desc}</Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>

            <Box id="calculator" style={{ background: "rgba(178, 217, 59, 0.02)", padding: rem(140) + " 0", borderY: "1px solid rgba(255, 255, 255, 0.05)" }} className="grid-pattern">
                <Container size="lg">
                    <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={80} style={{ alignItems: "center" }}>
                        <Stack gap={60}>
                            <Box>
                                <Title order={2} mb="md" style={{ fontSize: rem(48), fontWeight: 900, color: "#fdfdfd" }}>Revenue <span style={{ color: "#b2d93b" }}>Forecaster</span></Title>
                                <Text size="lg" c="rgba(253,253,253,0.5)" style={{ maxWidth: 500 }}>Calculate your potential passive income based on your client portfolio size and staff strength.</Text>
                            </Box>

                            <Stack gap={40}>
                                <Box>
                                    <Group justify="space-between" mb="lg">
                                        <Text fw={800} c="#fdfdfd" size="sm" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>1. Portfolio Size (Businesses)</Text>
                                        <Text fw={900} c="#b2d93b" style={{ fontSize: rem(32) }}>{numBusinesses}</Text>
                                    </Group>
                                    <Slider
                                        size="xl"
                                        min={1}
                                        max={100}
                                        step={1}
                                        label={null}
                                        value={numBusinesses}
                                        onChange={setNumBusinesses}
                                        color="green"
                                        styles={{
                                            track: { background: "rgba(255, 255, 255, 0.08)", height: rem(10) },
                                            thumb: { border: "6px solid #b2d93b", background: "#052315", width: rem(28), height: rem(28) },
                                            bar: { background: "#b2d93b" }
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Group justify="space-between" mb="lg">
                                        <Text fw={800} c="#fdfdfd" size="sm" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>2. Avg Staff Strength</Text>
                                        <Text fw={900} c="#b2d93b" style={{ fontSize: rem(32) }}>{staffPerBranch}</Text>
                                    </Group>
                                    <Slider
                                        size="xl"
                                        min={1}
                                        max={50}
                                        step={1}
                                        label={null}
                                        value={staffPerBranch}
                                        onChange={setStaffPerBranch}
                                        color="green"
                                        styles={{
                                            track: { background: "rgba(255, 255, 255, 0.08)", height: rem(10) },
                                            thumb: { border: "6px solid #b2d93b", background: "#052315", width: rem(28), height: rem(28) },
                                            bar: { background: "#b2d93b" }
                                        }}
                                    />
                                </Box>

                                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                                    <Box>
                                        <Text size="xs" fw={900} mb={14} c="rgba(253, 253, 253, 0.4)" style={{ letterSpacing: "1.5px", textTransform: "uppercase" }}>Plan Tier</Text>
                                        <SegmentedControl
                                            fullWidth
                                            data={["Pro", "Premium"]}
                                            value={selectedPlan}
                                            onChange={setSelectedPlan}
                                            color="green"
                                            radius="xl"
                                            styles={{
                                                root: { background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: rem(5) },
                                                control: { border: "none" },
                                                label: { fontWeight: 900, fontSize: rem(14), padding: "10px 0" }
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Text size="xs" fw={900} mb={14} c="rgba(253, 253, 253, 0.4)" style={{ letterSpacing: "1.5px", textTransform: "uppercase" }}>Base Currency</Text>
                                        <SegmentedControl
                                            fullWidth
                                            data={["NGN", "USD"]}
                                            value={currency}
                                            onChange={(v: any) => setCurrency(v)}
                                            color="green"
                                            radius="xl"
                                            styles={{
                                                root: { background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: rem(5) },
                                                control: { border: "none" },
                                                label: { fontWeight: 900, fontSize: rem(14), padding: "10px 0" }
                                            }}
                                        />
                                    </Box>
                                </SimpleGrid>
                            </Stack>
                        </Stack>

                        <Card padding={isMobile ? "xl" : rem(50)} radius="40px" style={{ background: "linear-gradient(165deg, rgba(178, 217, 59, 0.15) 0%, rgba(5, 35, 21, 1) 100%)", border: "1.5px solid rgba(178, 217, 59, 0.3)", boxShadow: "0 60px 120px rgba(0,0,0,0.6)" }}>
                            <Stack gap={40}>
                                <Box>
                                    <Group justify="space-between" mb="xs">
                                        <Text fw={900} size="xs" c="#b2d93b" style={{ letterSpacing: "2.5px", textTransform: "uppercase" }}>Monthly Commission</Text>
                                        <ThemeIcon color="green" radius="xl" variant="light" size="sm" style={{ background: "rgba(178, 217, 59, 0.1)" }}><IconCoin size={16} /></ThemeIcon>
                                    </Group>
                                    <Title order={3} style={{ fontSize: "clamp(36px, 6vw, 68px)", color: "#fdfdfd", fontWeight: 900, letterSpacing: "-0.05em", wordBreak: "break-word" }}>{formatValue(monthlyCommission)}</Title>
                                </Box>

                                <Divider color="rgba(178, 217, 59, 0.15)" />

                                <Box>
                                    <Group justify="space-between" mb="xs">
                                        <Text fw={900} size="xs" c="#b2d93b" style={{ letterSpacing: "2.5px", textTransform: "uppercase" }}>2-Year Asset Value</Text>
                                        <ThemeIcon color="green" radius="xl" variant="light" size="sm" style={{ background: "rgba(178, 217, 59, 0.1)" }}><IconTrendingUp size={16} /></ThemeIcon>
                                    </Group>
                                    <Title order={3} style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#fdfdfd", fontWeight: 800, letterSpacing: "-0.04em", wordBreak: "break-word" }}>{formatValue(twoYearEarnings)}</Title>
                                </Box>

                                <Button component={Link} href="/partners/apply" size="xl" radius="xl" className="btn-primary" fullWidth style={{ height: rem(76), fontSize: rem(18), marginTop: rem(20) }}>
                                    Join the Elite Circle
                                </Button>
                            </Stack>
                        </Card>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Partner Levels / Tiers */}
            <Container size="lg" py={120}>
                <Stack align="center" mb={60}>
                    <Text fw={800} c="#b2d93b" size="xs" style={{ letterSpacing: "2px", textTransform: "uppercase" }}>Elite Progression</Text>
                    <Title order={2} ta="center" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900 }}>Scale Your <span style={{ color: "#b2d93b" }}>Ambition</span></Title>
                </Stack>
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
                    {[
                        { name: "Silver Partner", businesses: "1-20 Branches", perk: "20% Base Commission", color: "#C0C0C0" },
                        { name: "Gold Partner", businesses: "21-100 Branches", perk: "20% + Marketing Support", color: "#FFD700" },
                        { name: "Platinum Global", businesses: "100+ Branches", perk: "Equity & Revenue Share Options", color: "#E5E4E2" },
                    ].map((tier, i) => (
                        <Card key={i} padding="xl" radius="32px" style={{ background: "rgba(255,255,255,0.01)", border: `1px solid rgba(255,255,255,0.05)`, textAlign: "center", transition: "all 0.3s ease" }}>
                            <Box mb="md">
                                <ThemeIcon variant="light" color="gray" size={54} radius="xl" mb="md" style={{ background: `${tier.color}11`, border: `1px solid ${tier.color}22`, margin: "0 auto" }}>
                                    <IconStar size={24} color={tier.color} />
                                </ThemeIcon>
                                <Text fw={900} size="xl" c="#fdfdfd" mb="xs">{tier.name}</Text>
                                <Badge variant="dot" color="green" size="lg" mb="xl" styles={{ root: { padding: "0 12px" } }}>{tier.businesses}</Badge>
                                <Text size="sm" c="rgba(253,253,253,0.4)" fw={500}>{tier.perk}</Text>
                            </Box>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Benefits Section */}
            <Box py={160} style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "20%", left: "-10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(178, 217, 59, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                <Container size="lg">
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={120} style={{ alignItems: "center" }}>
                        <Stack gap={40}>
                            <Box>
                                <Text fw={800} c="#b2d93b" size="xs" mb="md" style={{ letterSpacing: "2.5px", textTransform: "uppercase" }}>Partner Support</Text>
                                <Title order={2} style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.1, color: "#fdfdfd" }}>
                                    Infrastructure that <br /><span style={{ color: "#b2d93b" }}>Fuels Your Success.</span>
                                </Title>
                            </Box>
                            <Text size="lg" c="rgba(253, 253, 253, 0.5)" style={{ lineHeight: 1.8, fontSize: rem(18) }}>
                                We don&apos;t just provide a platform; we provide a dedicated success ecosystem. Your growth is our primary metric.
                            </Text>
                            <List
                                spacing="lg"
                                size="md"
                                center
                                icon={<ThemeIcon color="green" size={24} radius="xl" variant="light" style={{ background: "rgba(178, 217, 59, 0.1)" }}><IconCircleCheck size={16} /></ThemeIcon>}
                                styles={{ item: { color: "rgba(253, 253, 253, 0.7)", fontWeight: 500, borderLeft: "none" } }}
                            >
                                <List.Item>Dedicated Partner Success Manager</List.Item>
                                <List.Item>Whitelabel Marketing & Sales Assets</List.Item>
                                <List.Item>Direct Technical Priority for Your Clients</List.Item>
                                <List.Item>Quarterly Strategic Masterclasses</List.Item>
                            </List>
                        </Stack>
                        <Box style={{ position: "relative" }}>
                            <Box style={{ transform: "perspective(1000px) rotateY(-5deg)", transition: "transform 0.5s ease" }} className="hover-tilt">
                                <Image
                                    src="/images/hero-pos.png"
                                    alt="Cheetah App"
                                    width={640}
                                    height={440}
                                    style={{
                                        objectFit: "contain",
                                        borderRadius: "40px",
                                        border: "1px solid rgba(178,217,59,0.15)",
                                        boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                                        background: "rgba(255,255,255,0.01)"
                                    }}
                                />
                            </Box>
                            <Card radius="24px" padding="xl" style={{ position: "absolute", bottom: -30, left: -20, background: "#052315", border: "1.5px solid rgba(178,217,59,0.4)", maxWidth: "280px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                                <Group gap="sm" mb={10}>
                                    <ThemeIcon color="green" size="md" radius="sm" variant="filled" style={{ background: "#b2d93b" }}><IconHeartHandshake size={18} color="#052315" /></ThemeIcon>
                                    <Text fw={900} size="sm" c="#fdfdfd">Strategic Concierge</Text>
                                </Group>
                                <Text size="xs" c="rgba(253,253,253,0.5)" style={{ lineHeight: 1.5 }}>Our engineering team handles the complex migrations while you focus on the relationship.</Text>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Step by Step Journey */}
            <Box py={160} style={{ background: "rgba(178, 217, 59, 0.01)", borderY: "1px solid rgba(255, 255, 255, 0.04)" }}>
                <Container size="lg">
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={120} style={{ alignItems: "center" }}>
                        <Stack gap={40}>
                            <Box>
                                <Text fw={800} c="#b2d93b" size="xs" mb="md" style={{ letterSpacing: "2.5px", textTransform: "uppercase" }}>The Roadmap</Text>
                                <Title order={2} style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.1, color: "#fdfdfd" }}>
                                    How to Join the <br /><span style={{ color: "#b2d93b" }}>Next Frontier</span>
                                </Title>
                            </Box>
                            <Text size="lg" c="rgba(253, 253, 253, 0.5)" style={{ lineHeight: 1.8, fontSize: rem(18) }}>
                                We&apos;ve engineered a frictionless boarding process to take you from applicant to your first recurring commission in record time.
                            </Text>
                        </Stack>

                        <Timeline active={-1} bulletSize={54} lineWidth={2} color="green" styles={{
                            itemTitle: { fontWeight: 900, color: "#fdfdfd", fontSize: rem(22), marginBottom: 8 },
                            itemBullet: { background: "#052315", border: "2px solid #b2d93b", color: "#b2d93b", boxShadow: "0 0 20px rgba(178, 217, 59, 0.2)" },
                            itemBody: { color: "rgba(253, 253, 253, 0.45)", fontSize: rem(16), lineHeight: 1.7 },
                            item: { paddingBottom: rem(48) }
                        }}>
                            <Timeline.Item bullet={<IconSearch size={22} />} title="01. Strategic Review">
                                Submit your professional footprint. We evaluate your network density and market alignment within 48 hours.
                            </Timeline.Item>
                            <Timeline.Item bullet={<IconSchool size={22} />} title="02. Elite Certification">
                                Master the Cheetah AI engine. Gain access to your personalized enablement vault and whitelabel assets.
                            </Timeline.Item>
                            <Timeline.Item bullet={<IconUserPlus size={22} />} title="03. First Modernization">
                                Execute your first branch activation. Our tech team provides direct concierge support for a flawless launch.
                            </Timeline.Item>
                            <Timeline.Item bullet={<IconCashBanknote size={22} />} title="04. Recurring Harvest">
                                Monitor your portfolio in real-time. Secure your 20% commission every single month, automatically.
                            </Timeline.Item>
                        </Timeline>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* FAQ Section */}
            <Container size="sm" py={100}>
                <Stack align="center" mb={60}>
                    <Title order={2} ta="center" style={{ fontSize: "42px", fontWeight: 900 }}>Common Questions</Title>
                </Stack>
                <Accordion variant="separated" styles={{
                    item: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: rem(16), marginBottom: rem(16) },
                    control: { color: "#fdfdfd", fontWeight: 700, padding: rem(24) },
                    content: { color: "rgba(253,253,253,0.5)", lineHeight: 1.7, padding: rem(24) },
                    chevron: { color: "#b2d93b" }
                }}>
                    <Accordion.Item value="payment">
                        <Accordion.Control>How and when do I get paid?</Accordion.Control>
                        <Accordion.Panel>Commissions are calculated daily and paid out on the 1st of every month. We support bank transfers across Nigeria, Ghana, Kenya, and Uganda.</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="duration">
                        <Accordion.Control>How long does the recurring commission last?</Accordion.Control>
                        <Accordion.Panel>You earn commission for the first 24 months of every business&apos;s active subscription. After this period, you can renew your partner status based on portfolio performance.</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="commitment">
                        <Accordion.Control>Is there a minimum quota I must meet?</Accordion.Control>
                        <Accordion.Panel>We don&apos;t impose rigid quotas, but we prioritize partners who show consistent activity. Gold and Platinum levels require specific portfolio sizes.</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>

            {/* Velocity Section */}
            <Box py={140} style={{ background: "rgba(5, 35, 21, 0.2)", position: "relative" }}>
                <Container size="lg">
                    <Stack align="center" gap="xl" style={{ textAlign: "center" }}>
                        <div style={{ display: "inline-flex", padding: "8px 20px", background: "rgba(178, 217, 59, 0.1)", borderRadius: "50px", color: "#b2d93b", fontWeight: 800, fontSize: rem(13), letterSpacing: "1px", textTransform: "uppercase" }}>
                            Product Velocity
                        </div>
                        <Title order={2} style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#fdfdfd", maxWidth: 900 }}>
                            Built on Feedback. <br />Driven by <span style={{ color: "#b2d93b" }}>Real Growth.</span>
                        </Title>
                        <Text size="xl" c="rgba(253, 253, 253, 0.5)" style={{ maxWidth: 800, lineHeight: 1.6 }}>
                            We release new features and updates every two weeks, directly influenced by the businesses our partners serve. We&apos;re not just building software; we&apos;re building the No. 1 OS for business globally.
                        </Text>

                        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={40} mt={60} style={{ width: "100%" }}>
                            <Box style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <ThemeIcon size={48} radius="xl" color="green" variant="light" mb="md" style={{ background: "rgba(178,217,59,0.1)" }}><IconRocket size={24} /></ThemeIcon>
                                <Text fw={900} size="xl" c="#fdfdfd" mb="xs">14-Day Sprint</Text>
                                <Text size="sm" c="rgba(253,253,253,0.4)">Continuous innovation cycle with updates pushed every fortnight.</Text>
                            </Box>
                            <Box style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <ThemeIcon size={48} radius="xl" color="green" variant="light" mb="md" style={{ background: "rgba(178,217,59,0.1)" }}><IconUsers size={24} /></ThemeIcon>
                                <Text fw={900} size="xl" c="#fdfdfd" mb="xs">Business-First</Text>
                                <Text size="sm" c="rgba(253,253,253,0.4)">Our roadmap is 100% determined by partner and business feedback.</Text>
                            </Box>
                            <Box style={{ padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <ThemeIcon size={48} radius="xl" color="green" variant="light" mb="md" style={{ background: "rgba(178,217,59,0.1)" }}><IconGlobe size={24} /></ThemeIcon>
                                <Text fw={900} size="xl" c="#fdfdfd" mb="xs">Global Vision</Text>
                                <Text size="sm" c="rgba(253,253,253,0.4)">Architected to be the unified operating system for retail worldwide.</Text>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>

            {/* Final CTA Section */}
            <Box style={{ background: "rgba(178, 217, 59, 0.05)", padding: "140px 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-250px", right: "-250px", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(178, 217, 59, 0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                <Container size="sm" style={{ position: "relative", zIndex: 1 }}>
                    <Stack align="center" gap={48} style={{ textAlign: "center" }}>
                        <Title order={2} style={{ fontSize: "clamp(34px, 6vw, 76px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.95 }}> Ready to own the <br /><span style={{ color: "#b2d93b" }}>Retail Frontier?</span></Title>
                        <Text size="xl" c="rgba(253, 253, 253, 0.7)" style={{ maxWidth: rem(650), lineHeight: 1.6 }}>
                            Join the elite circle of Cheetah Partners today. Scale the digitial transformation and build your recurring high-yield engine.
                        </Text>
                        <Button component={Link} href="/partners/apply" size="xl" radius="xl" className="btn-primary" style={{ height: rem(84), padding: "0 92px", fontSize: rem(22) }} rightSection={<IconArrowRight size={28} />}>
                            Start Certification Now
                        </Button>
                        <Group gap="sm" opacity={0.6}>
                            <IconCheck size={16} color="#b2d93b" />
                            <Text size="xs" fw={700}>Free Certification included for a limited time.</Text>
                        </Group>
                    </Stack>
                </Container>
            </Box>


            <Modal
                opened={opened}
                onClose={close}
                size="70%"
                padding={0}
                radius="xl"
                centered
                withCloseButton={false}
                styles={{
                    content: { background: "black", overflow: "hidden" },
                    body: { padding: 0 }
                }}
            >
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Cheetah Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    ></iframe>
                </div>
            </Modal>

            <style dangerouslySetInnerHTML={{
                __html: `
        .btn-primary {
          background: #b2d93b !important;
          color: #031600 !important;
          font-weight: 950 !important;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          border: none !important;
        }
        .btn-primary:hover {
          transform: translateY(-8px) scale(1.03) !important;
          box-shadow: 0 35px 70px rgba(178, 217, 59, 0.4) !important;
          background: #c3e65a !important;
        }
        .strength-card {
           cursor: pointer;
        }
        .strength-card:hover {
          transform: translateY(-10px);
          border-color: rgba(178, 217, 59, 0.3) !important;
          background: rgba(178, 217, 59, 0.05) !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4) !important;
        }
        .hover-tilt:hover {
          transform: perspective(1000px) rotateY(0deg) scale(1.02) !important;
        }
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(178, 217, 59, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(178, 217, 59, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Smooth Transitions */
        * {
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
            ` }} />
        </main>
    );
}
