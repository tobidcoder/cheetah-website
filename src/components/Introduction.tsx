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
        FREE to sell anywhere easily, quickly, and seamlessly.
          {/* <Text component="span" className={classes.highlight} inherit>
          
          </Text> */}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c='#052315' ta='center'  className={classes.desc}>
          Custom-tailored product suites for <b>suppermarket, pharmacy, restaurants, retail, and beauty</b> businesses.
          </Text>
        </Container>

        <Box mb='xl' className={classes.controls}>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
          <Button
            me={{ base: "0", lg: "lg" }}
            mb={{ base: "lg", lg: "0" }}
            className={"primary-button"}
            size="lg"
            radius="md"
          >
            Get Started FREE
          </Button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
          <Button
            // mb={{ lg: "xs" }}
            className={"secondary-button"}
            size="lg"
            variant="default"
            color="gray"
             radius="md"
          >
            Book A Demo
          </Button>
          </a>
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
