import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "@/styles/GetStarted.module.css";

export function GetStarted() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <Container size="sm" className={classes.inner}>
        <Title className={classes.title}>
          Let&apos;s start manage your business with Cheetah
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button bd="" className="light-button" size="lg">
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
}
