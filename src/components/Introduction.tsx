import { Title, Text, Button, Container, Image, Box } from "@mantine/core";
// import { Dots } from './Dots';
import classes from "@/styles/Introduction.module.css";

export function Introduction() {
  return (
    <Container mt='xl' pb={0} className={classes.wrapper} size={"md"}>
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <Container size={"md"} className={classes.inner}>
        <Title className={classes.introTitle}>
          The Simple, Secure, and Scalable Way to{" "}
          <Text component="span" className={classes.highlight} inherit>
            Run Your Business
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Cheetah is a sales management platform designed to help you grow
            your business with ease.
          </Text>
        </Container>

        <Box mb='xl' className={classes.controls}>
          <Button
            me={{ base: "0", lg: "lg" }}
            mb={{ base: "lg", lg: "0" }}
            className={"primary-button"}
            size="lg"
          >
            Get Started
          </Button>
          <Button
            // mb={{ lg: "xs" }}
            className={"secondary-button"}
            size="lg"
            variant="default"
            color="gray"
          >
            Live Demo
          </Button>
        </Box>
      </Container>
      <Image
        className={classes.image}
        src={"/images/cheetah.png"}
        alt="Cheetah Dashboard"
      />
    </Container>
  );
}
