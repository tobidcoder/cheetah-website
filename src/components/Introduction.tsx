"use client";
import {
  Title,
  Text,
  Modal,
  Button,
  Container,
  Image,
  Box,
} from "@mantine/core";
// import { Dots } from './Dots';
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/Introduction.module.css";
import { PlayButton } from "./PlayButton";

export function Introduction() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container mt="xl" pb={0} className={classes.wrapper} size={"md"}>
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <Container size={"md"} className={classes.inner}>
        <Title className={classes.introTitle}>
          AI-powered retail inventory optimization.
          {/* <Text component="span" className={classes.highlight} inherit>
          
          </Text> */}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="#052315" ta="center" className={classes.desc}>
            Custom-tailored product suites for{" "}
            <b>suppermarket, pharmacy, restaurants, retail, and beauty</b>{" "}
            businesses.
          </Text>
        </Container>

        <Box mb="xl" className={classes.controls}>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
          <a
            style={{ margin: "12px" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.usecheetah.com/"
          >
            <Button
              me={{ base: "0", lg: "lg" }}
              mb={{ base: "lg", lg: "0" }}
              className={"primary-button"}
              w={{ base: "100%" }}
              size="lg"
              radius="md"
            >
              Get Started FREE
            </Button>
          </a>
          <a
            style={{ margin: "12px" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/cheetahdemo/30min"
          >
            <Button
              // mb={{ lg: "xs" }}
              className={"secondary-button"}
              w={{ base: "100%" }}
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

      <div className={classes.image}></div>

      <Modal
        opened={opened}
        mih={"80dvh"}
        // bg='blue'
        size="xl"
        // style={{ color: "blue" }}
        onClose={close}
        title="Authentication"
        centered
      >
        <iframe
          style={{ minHeight: "70dvh", height: "100%", width: "100%" }}
          // width="560"

          // height="315"
          src="https://www.youtube.com/embed/mZ2eh3nMxH0?si=qwU6or1JXPfcZ6x3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Modal>

      {/* <Button variant="default" onClick={open}></Button> */}
      <div onClick={open} className="">
        <Image
          onClick={open}
          className={classes.image}
          src={"/images/cheetah.png"}
          alt="Cheetah Dashboard"
        />
        <div
          // style={{  }}
          className={classes.playButton}
        >
          <PlayButton />
        </div>
      </div>
    </Container>
  );
}
