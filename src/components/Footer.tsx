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
import Script from 'next/script';
import { useEffect } from 'react';


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
      <a
        style={{ display: "flex", justifyContent: "center" }}
        key={index}
        className={classes.link}
        href={link.link}
      >
        {link.label}
      </a>
    ));

    return (
      <GridCol style={{ display: "flex", justifyContent: "center" }} span={{ base: 12, md: 4 }} key={group.title}>
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

  useEffect(() => {
    // Initialize Calendly widget after the script has loaded
    if ((window as any).Calendly) {
      (window as any).Calendly.initBadgeWidget({
        url: 'https://calendly.com/cheetahdemo/30min',
        text: 'Schedule time with ',
        color: '#052315',
        textColor: '#ffffff'
      });
    }
  }, []);


  return (
    <>
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
          Custom-tailored product suites for <b>supermarket, pharmacy, restaurants, retail, and beauty</b> businesses.
          </Text>
        </div>
        <Grid
          mt={{ base: "md", md: 0 }}
          justify="center"
          style={{ display: "flex", justifyContent: "center" }}
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

    <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).Calendly) {
            (window as any).Calendly.initBadgeWidget({
              url: 'https://calendly.com/cheetahdemo/30min',
              text: 'Schedule time with Us ',
              color: '#ffffff',
              textColor: '#052315',
              borderRadius: '10px',
              borderColor: '#052315',
            });
          }
        }}
      />
    </>
  );
}
