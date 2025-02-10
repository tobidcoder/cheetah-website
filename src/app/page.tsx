import { Features } from "@/components/Features";
import { Feedback } from "@/components/Feedback";
// import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Introduction } from "@/components/Introduction";
import { Paper, Container } from "@mantine/core";
import { News } from "@/components/News";
import { Benefits } from "../components/Benefits";

export default function HomePage() {
  return (
    <>
      <Container size="xl" style={{ overflow: "hidden" }}>
        <Paper pt={"lg"} bg={"#fafafa"} radius="lg">
          <Introduction />
        </Paper>
        <Benefits />
        <Features />
        <Feedback />
        <News />
      </Container>
      <GetStarted />
    </>
  );
}
