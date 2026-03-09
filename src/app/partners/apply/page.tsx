"use client";

import {
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    Card,
    ThemeIcon,
    TextInput,
    Select,
    Textarea,
    Group,
    Stack,
    Box,
    rem,
    Divider,
    Badge,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
    IconCheck,
    IconRocket,
    IconBrandLinkedin,
    IconArrowLeft,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { post, fetch as apiFetch } from "../../api";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PartnerApplyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState<any[]>([]);
    const [states, setStates] = useState<any[]>([]);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        country_code: "+234",
        country: "",
        state: "",
        address: "",
        business_type: "",
        linkedin_url: "",
        reason_joining: "",
        years_experience: "",
        potential_clients: "",
        referral_source: "",
        message: "",
    });

    useEffect(() => {
        const loadCountries = async () => {
            const data = await apiFetch("country");
            if (data) setCountries(data);
        };
        loadCountries();
    }, []);

    const handleCountryChange = async (countryId: string | null) => {
        const country = countries.find(c => c.id.toString() === countryId);
        setFormData({
            ...formData,
            country: country?.name || "",
            country_code: country?.phone_code ? `+${country.phone_code}` : formData.country_code,
            state: ""
        });
        if (countryId) {
            const data = await apiFetch(`country-states/${countryId}`);
            if (data) setStates(data);
        } else {
            setStates([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await post("partner-application", {
            ...formData,
            phone_number: `${formData.country_code}${formData.phone_number}`
        });
        if (result) {
            router.push("/partners?applied=true");
        }
        setLoading(false);
    };

    const inputStyles = {
        label: { marginBottom: rem(isMobile ? 8 : 12), fontWeight: 800, fontSize: rem(isMobile ? 12 : 13), color: "#fdfdfd", textTransform: "uppercase" as const, letterSpacing: "1.5px", opacity: 0.9 },
        input: { background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.08)", color: "#fdfdfd", height: rem(isMobile ? 54 : 60), borderRadius: rem(isMobile ? 12 : 16), transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:focus": { borderColor: "#b2d93b", background: "rgba(255,255,255,0.04)", boxShadow: "0 0 20px rgba(178,217,59,0.1)" } }
    };

    const selectStyles = {
        label: { marginBottom: rem(isMobile ? 8 : 12), fontWeight: 800, fontSize: rem(isMobile ? 12 : 13), color: "#fdfdfd", textTransform: "uppercase" as const, letterSpacing: "1.5px", opacity: 0.9 },
        input: { background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.08)", color: "#fdfdfd", height: rem(isMobile ? 54 : 60), borderRadius: rem(isMobile ? 12 : 16), transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", "&:focus": { borderColor: "#b2d93b" } },
        dropdown: { background: "#051A0D", border: "1px solid rgba(255,255,255,0.1)", color: "#fdfdfd", borderRadius: rem(12), padding: rem(8) }
    };

    return (
        <main style={{ minHeight: "100vh", background: "#051A0D", padding: isMobile ? rem(40) + " 0" : rem(100) + " 0", position: "relative", overflow: "hidden" }}>
            {/* Background elements */}
            <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(178,217,59,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(178,217,59,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

            <Container size="md" style={{ position: "relative", zIndex: 1, padding: isMobile ? "0 24px" : "0" }}>
                <Button
                    component={Link}
                    href="/partners"
                    variant="subtle"
                    color="gray"
                    leftSection={<IconArrowLeft size={18} />}
                    mb={isMobile ? 30 : 50}
                    styles={{ root: { color: "rgba(253, 253, 253, 0.4)", fontWeight: 700, "&:hover": { background: "rgba(255,255,255,0.03)", color: "#fdfdfd" } } }}
                >
                    Return to Overview
                </Button>

                <Card radius={isMobile ? "32px" : "48px"} padding={isMobile ? 30 : 80} style={{
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(178,217,59,0.15)",
                    backdropFilter: "blur(40px)",
                    boxShadow: "0 60px 150px rgba(0,0,0,0.6)"
                }}>
                    <Stack gap={isMobile ? 40 : 60}>
                        <Box>
                            <Title order={1} fw={900} c="#fdfdfd" mb="md" style={{ fontSize: "clamp(28px, 6vw, 56px)", lineHeight: 1, letterSpacing: "-0.05em" }}>
                                Strategic Partner <span style={{ color: "#b2d93b" }}>Intake Form</span>
                            </Title>
                            {/* <IconRocket size={32} color="rgba(178,217,59,0.2)" /> */}

                            <Text size={isMobile ? "sm" : "md"} c="rgba(253, 253, 253, 0.5)" style={{ lineHeight: 1.6, maxWidth: 750 }}>
                                Join the elite network building Africa's retail future. Provide your strategic profile below for priority vetting.
                            </Text>
                        </Box>

                        <form onSubmit={handleSubmit}>
                            <Stack gap={isMobile ? 50 : 80}>
                                {/* Section 01 */}
                                <Box>
                                    <Group mb={isMobile ? 24 : 40} gap="xs">
                                        <Text size={isMobile ? "lg" : "xl"} fw={950} c="#b2d93b" style={{ letterSpacing: "2px" }}>01.</Text>
                                        <Text size="xs" fw={950} c="#b2d93b" style={{ textTransform: "uppercase", letterSpacing: "4px" }}>Core Identity</Text>
                                    </Group>
                                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={isMobile ? 20 : 30}>
                                        <TextInput label="Full Name" placeholder="John Emmanuel" required size="lg" styles={inputStyles} value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} />
                                        <TextInput label="Email Address" placeholder="organization@domain.com" required type="email" size="lg" styles={inputStyles} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        <TextInput
                                            label="WhatsApp Phone Number"
                                            placeholder="801..."
                                            required
                                            size="lg"
                                            styles={inputStyles}
                                            value={formData.phone_number}
                                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                            leftSection={
                                                <Select
                                                    data={countries.map(c => ({ value: `+${c.phone_code}`, label: `${c.phone_code}` }))}
                                                    value={formData.country_code}
                                                    onChange={(val) => setFormData({ ...formData, country_code: val || "" })}
                                                    variant="unstyled"
                                                    styles={{
                                                        input: {
                                                            width: rem(isMobile ? 85 : 100),
                                                            color: "#b2d93b",
                                                            fontWeight: 900,
                                                            paddingLeft: rem(isMobile ? 12 : 20),
                                                            fontSize: rem(isMobile ? 13 : 14),
                                                            cursor: "pointer"
                                                        },
                                                        dropdown: selectStyles.dropdown
                                                    }}
                                                />
                                            }
                                            leftSectionWidth={isMobile ? 95 : 120}
                                            leftSectionProps={{ style: { pointerEvents: "all" } }}
                                        />
                                        <TextInput label="LinkedIn Profile" placeholder="linkedin.com/in/..." size="lg" leftSection={<IconBrandLinkedin size={22} />} styles={inputStyles} value={formData.linkedin_url} onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })} />
                                    </SimpleGrid>
                                </Box>

                                {/* Section 02 */}
                                <Box>
                                    <Group mb={isMobile ? 24 : 40} gap="xs">
                                        <Text size={isMobile ? "lg" : "xl"} fw={950} c="#b2d93b" style={{ letterSpacing: "2px" }}>02.</Text>
                                        <Text size="xs" fw={950} c="#b2d93b" style={{ textTransform: "uppercase", letterSpacing: "4px" }}>Market Focus</Text>
                                    </Group>
                                    <Stack gap={isMobile ? 20 : 30}>
                                        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={isMobile ? 20 : 30}>
                                            <Select label="Country of Operations" placeholder="Global Region" required size="lg" styles={selectStyles} data={countries.map(c => ({ value: c.id.toString(), label: c.name }))} onChange={handleCountryChange} />
                                            <Select label="State / Province" placeholder="Local Jurisdiction" required size="lg" styles={selectStyles} data={states.map(s => ({ value: s.name, label: s.name }))} value={formData.state} onChange={(val) => setFormData({ ...formData, state: val || "" })} />
                                        </SimpleGrid>
                                        <Textarea label="Residential / Office Address" placeholder="Street name, Building No, Unit, etc." required minRows={3} size="lg" styles={inputStyles} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                                    </Stack>
                                </Box>

                                {/* Section 03 */}
                                <Box>
                                    <Group mb={isMobile ? 24 : 40} gap="xs">
                                        <Text size={isMobile ? "lg" : "xl"} fw={950} c="#b2d93b" style={{ letterSpacing: "2px" }}>03.</Text>
                                        <Text size="xs" fw={950} c="#b2d93b" style={{ textTransform: "uppercase", letterSpacing: "4px" }}>Strategic Fit</Text>
                                    </Group>
                                    <Stack gap={isMobile ? 20 : 30}>
                                        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={isMobile ? 20 : 30}>
                                            <Select label="Focus Area" placeholder="Professional Niche" size="lg" styles={selectStyles} data={["Retail Consulting", "Growth & Strategy", "Logistics", "IT Solutions", "Financial Services", "Other"]} value={formData.business_type} onChange={(val) => setFormData({ ...formData, business_type: val || "" })} />
                                            <Select label="Years in Ecosystem" placeholder="Track Record" size="lg" styles={selectStyles} data={["1-3 Years", "4-7 Years", "8-12 Years", "12+ Years"]} value={formData.years_experience} onChange={(val) => setFormData({ ...formData, years_experience: val || "" })} />
                                            <Select label="Projected Reach" placeholder="Network Capacity" size="lg" styles={selectStyles} data={["1-10 Businesses", "11-50 Businesses", "51-200 Businesses", "200+ Businesses"]} value={formData.potential_clients} onChange={(val) => setFormData({ ...formData, potential_clients: val || "" })} />
                                            <Select label="Acquisition Source" placeholder="Discovery Point" size="lg" styles={selectStyles} data={["LinkedIn", "Twitter (X)", "Facebook", "Instagram", "Social Media", "Direct Outreach", "Referral", "Other"]} value={formData.referral_source} onChange={(val) => setFormData({ ...formData, referral_source: val || "" })} />
                                        </SimpleGrid>
                                        <Textarea label="Strategic Growth Vision" placeholder="How do you intend to scale the Cheetah ecosystem within your network?" required minRows={5} size="lg" styles={inputStyles} value={formData.reason_joining} onChange={(e) => setFormData({ ...formData, reason_joining: e.target.value })} />
                                        <Textarea label="Additional Insights (Optional)" placeholder="Any specific notes for the vetting team?" minRows={3} size="lg" styles={inputStyles} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                    </Stack>
                                </Box>

                                <Stack gap="xl">
                                    <Button type="submit" fullWidth size="xl" radius="xl" loading={loading} style={{
                                        height: rem(isMobile ? 70 : 90),
                                        fontSize: rem(isMobile ? 18 : 22),
                                        background: "#b2d93b",
                                        color: "#051A0D",
                                        fontWeight: 950,
                                        border: "none",
                                        boxShadow: "0 20px 40px rgba(178,217,59,0.2)",
                                        transition: "all 0.3s ease"
                                    }}>
                                        Submit Application
                                    </Button>
                                    <Group justify="center" gap="xs" opacity={0.4}>
                                        <IconCheck size={isMobile ? 14 : 16} color="#b2d93b" />
                                        <Text size="xs" ta="center" fw={700} style={{ letterSpacing: "1px" }}>SECURE 256-BIT ENCRYPTED ADMISSION PROTOCOL</Text>
                                    </Group>
                                </Stack>
                            </Stack>
                        </form>
                    </Stack>
                </Card>
            </Container>
        </main>
    );
}
