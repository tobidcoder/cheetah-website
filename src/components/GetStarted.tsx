import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "@/styles/GetStarted.module.css";

export function GetStarted() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.9} zIndex={1} />

      <Container size="sm" className={classes.inner}>
        <Title className={classes.title}>
        Ready to start selling?
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Set up is fast, secure, and FREE.
          </Text>
        </Container>

        <div className={classes.controls}>
        <a target="_blank" rel="noopener noreferrer" href="https://app.usecheetah.com/#/register">
          <Button bd="" className="secondary-button" size="lg">
            Get started FREE
          </Button>
        </a>
        </div>
      </Container>
    </div>
  );
}
