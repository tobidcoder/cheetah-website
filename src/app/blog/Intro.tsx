import { Title, Text, Container } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./Intro.module.css";

export function Intro() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Learn how real businesses reach their goals with Cheetah.
          {/* <Text component="span" className="text-secondary" inherit>
            peak sales
          </Text>{" "}
          performance */}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Explore the must-have resources and tactics that are driving business
            success in today&apos;s competitive landscape.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
