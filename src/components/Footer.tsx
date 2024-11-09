"use client";

import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  GridCol,
  Grid,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "@/styles/Footer.module.css";
import Link from "next/link";

const data = [
  // {
  //   title: "About",
  //   links: [
  //     { label: "Features", link: "#" },
  //     // { label: "Pricing", link: "#" },
  //     { label: "Support", link: "#" },
  //     { label: "Forums", link: "#" },
  //   ],
  // },
  // {
  //   title: "Project",
  //   links: [
  //     { label: "Contribute", link: "#" },
  //     { label: "Media assets", link: "#" },
  //     { label: "Changelog", link: "#" },
  //     { label: "Releases", link: "#" },
  //   ],
  // },
  {
    title: "Community",
    links: [
      // { label: "Join Discord", link: "#" },
      { label: "Follow on X", link: "https://x.com/CheetahHq" },
      { label: "Follow on Facebook", link: "https://web.facebook.com/cheetahHQ" },
      { label: "Follow on Instagram", link: "https://www.instagram.com/cheetah_hq/" },
      { label: "Follow on Linkedin", link: "https://www.linkedin.com/company/cheetah-hq/" },
      // { label: "Email newsletter", link: "#" },
      // { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        style={{ display: "flex", justifyContent: "center" }}
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <GridCol span={{ base: 6, md: 4 }} key={group.title}>
        <div className={classes.wrapper}>
          <Text
            style={{ display: "flex", justifyContent: "center" }}
            className={classes.title}
          >
            {group.title}
          </Text>
          {links}
        </div>
      </GridCol>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Link href='/' passHref>
          <Image
            mb={"lg"}
            w={150}
            src={"/images/favicon-light.png"}
            alt="logo"
          />
          </Link>
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <Grid
          mt={{ base: "md", md: 0 }}
          justify="center"
          className={classes.groups}
        >
          {groups}
        </Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Cheetah. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/CheetahHq">

          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          </a>

          {/* <a target="_blank" rel="noopener noreferrer" href="">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          </a> */}

          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cheetah_hq/">

          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/cheetahHQ">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/cheetah-hq/">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          </a>
        </Group>
      </Container>
    </footer>
  );
}
