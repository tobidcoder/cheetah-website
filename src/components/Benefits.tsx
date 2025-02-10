"use client";
import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react";
import {
  Badge,
  Image,
  Avatar,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
  Grid,
  GridCol,
} from "@mantine/core";
import classes from "@/styles/Benefits.module.css";

const mockdata = [
  {
    title: "Less stockouts",
    value: "80%",
    description:
      "Guarantee product availability through AI-powered forecasting.",
    icon: IconGauge,
  },
  {
    title: "Increase in Sell-Through",
    value: "20%",
    description: "Minimize overstock while maximizing full-price sales.",
    icon: IconUser,
  },
  {
    title: "Growth in sales",
    value: "+35%",
    description: "Increase revenue by seizing more sales opportunities.",
    icon: IconCookie,
  },
  {
    title: "ROI",
    value: "10x",
    description: "Revamp your inventory strategy to achieve outstanding ROI.",
    icon: IconCookie,
  },
];

 const features = [
   {
     title: "Just in Time",
     description:
       "Our solution provides actionable insights to optimize operations by minimizing on-hand inventory and accurately forecasting reordering needs.",
     image: "/images/forecast.jpg",
     span: 6,
   },
   {
     title: "Never Out of Stock (NooS)",
     description:
       "We assist brands in maintaining optimal inventory levels to align with actual customer demand and prevent stockouts",
     image: "/images/forecast2.jpg",
     span: 6,
   },
 ];

export function Benefits() {
  const theme = useMantineTheme();
  const benefits = mockdata.map((benefit) => (
    <Card
      key={benefit.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Text style={{ fontSize: "4rem" }}>{benefit.value}</Text>
      <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
        {benefit.title}
      </Text>
      <Text fz="md" c="dimmed" mt="sm">
        {benefit.description}
      </Text>
    </Card>
  ));

  return (
    <Container mt="xl" size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="xl">
        Leverage data science expertise and AI-driven forecasting to transform
        precise predictions into actionable insights.
      </Title>

      {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you&apos;ll see a Golbat that&apos;s missing some
        fangs. This happens when hunger drives it to try biting a Steel-type
        Pokémon.
      </Text> */}

      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl" mt={50}>
        {benefits}
      </SimpleGrid>

      <Grid  mt={60}>
        {features.map((feature, i) => (
          <GridCol
            mb="xl"
            pb={0}
            span={{ base: 12, md: 6, lg: feature.span }}
            key={i}
          >
            <Card pb={0} pe={0} radius={15} bg={"#fafafa"}>
              <Text fz={"h2"} fw={"bold"}>
                {feature.title}
              </Text>
              <Text fz={"sm"}>{feature.description}</Text>
              <Image
                mt={"lg"}
                // maw={"250"}
                mah={"350"}
                className={classes.image}
                src={feature.image}
                alt="Cheetah"
              />
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}





