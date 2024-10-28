"use client";
import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Introduction } from "@/components/Introduction";
import { Paper, Container } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Container size="xl" style={{ overflow: "hidden" }}>
        <Paper pt={"lg"} bg={"#fafafa"} radius="lg">
          <Introduction />
        </Paper>

        <Features />
        <Feedback />

        {/* <Paper shadow="md" p="lg" radius="md">
        <Grid>
          <Grid.Col span={6}>
            <Box>
              <Text fw={700}>Inventory</Text>
              <Text>Manage your store&apos;s inventory efficiently.</Text>
            </Box>
            <Box mt="md">
              <Text fw={700}>Sales Analytics</Text>
              <Text>Gain insights into your sales performance.</Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box>
              <Text fw={700}>Customer Profiles</Text>
              <Text>Maintain detailed customer profiles.</Text>
            </Box>
            <Box mt="md">
              <Text fw={700}>Reporting</Text>
              <Text>Access comprehensive reporting and analytics.</Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>

      <Paper shadow="md" p="lg" radius="md">
        <Grid justify="center" align="center">
          <Grid.Col span={6}>
            <Text size="xl" fw={700}>
              Let&apos;s start manage your finances with NextSales
            </Text>
            <Text mt="md">
              NextSales provides a range of features to help you manage your
              business finances more effectively.
            </Text>
            <Button variant="filled" color="blue" size="md" mt="lg">
              Get Started
            </Button>
          </Grid.Col>
        </Grid>
      </Paper> */}
      </Container>
      <GetStarted />
      <Footer />
    </>
  );
}
