"use client";
import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
// import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Introduction } from "@/components/Introduction";
import { Paper, Container } from "@mantine/core";
import {CategoryTab} from '@/app/blog/CategoryTab'

export default function HomePage() {
  return (
    <>
      <Container size="xl" style={{ overflow: "hidden" }}>
        <Paper pt={"lg"} bg={"#fafafa"} radius="lg">
          <Introduction />
        </Paper>

        <Features />
        <Feedback />
        <CategoryTab/>
      </Container>
      <GetStarted />
    </>
  );
}
