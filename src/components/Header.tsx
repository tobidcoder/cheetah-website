"use client";
import {
  // HoverCard,
  Group,
  Button,
  // UnstyledButton,
  // Text,
  // SimpleGrid,
  // ThemeIcon,
  // Anchor,
  Divider,
  // Center,
  Box,
  Burger,
  Drawer,
  // Collapse,
  ScrollArea,
  rem,
  // useMantineTheme,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
// import {
//   IconNotification,
//   IconCode,
//   IconBook,
//   IconChartPie3,
//   IconFingerprint,
//   IconCoin,
//   IconChevronDown,
// } from "@tabler/icons-react";
import classes from "@/styles/Header.module.css";

// const mockdata = [
//   {
//     icon: IconCode,
//     title: "Open source",
//     description: "This Pokémon’s cry is very loud and distracting",
//   },
//   {
//     icon: IconCoin,
//     title: "Free for everyone",
//     description: "The fluid of Smeargle’s tail secretions changes",
//   },
//   {
//     icon: IconBook,
//     title: "Documentation",
//     description: "Yanma is capable of seeing 360 degrees without",
//   },
//   {
//     icon: IconFingerprint,
//     title: "Security",
//     description: "The shell’s rounded shape and the grooves on its.",
//   },
//   {
//     icon: IconChartPie3,
//     title: "Analytics",
//     description: "This Pokémon uses its flying ability to quickly chase",
//   },
//   {
//     icon: IconNotification,
//     title: "Notifications",
//     description: "Combusken battles with the intensely hot flames it spews",
//   },
// ];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  // const theme = useMantineTheme();

  // const links = mockdata.map((item) => (
  //   <UnstyledButton className={classes.subLink} key={item.title}>
  //     <Group wrap="nowrap" align="flex-start">
  //       <ThemeIcon size={34} variant="default" radius="md">
  //         <item.icon
  //           className="text-white"
  //           style={{ width: rem(22), height: rem(22) }}
  //           // color={theme.colors.blue[6]}
  //         />
  //       </ThemeIcon>
  //       <div>
  //         <Text className="text-white" size="sm" fw={500}>
  //           {item.title}
  //         </Text>
  //         <Text className="text-white" size="xs" c="dimmed">
  //           {item.description}
  //         </Text>
  //       </div>
  //     </Group>
  //   </UnstyledButton>
  // ));

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          <Link href="/" passHref>
          <Image w={150} src={"/images/favicon-light.png"} alt="logo" />
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            
            <Link href="/blog" className={classes.link}>
              Blog
            </Link>
          </Group>

          <Group visibleFrom="sm">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
            <Button className="secondary-button">Log in</Button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
            <Button className="primary-button">Sign up</Button>
          </a>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            // c='white'
            color="#fdfdfd"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="75%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
        // bg={'black'}
        className="header-drawer"
      >
        <ScrollArea className="header-drawer" h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          
          <Link href="/blog" className={classes.link}>
            Blog
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
            <Button className="secondary-button">Log in</Button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/cheetahdemo/30min">
            <Button className="primary-button">Sign up</Button>
          </a>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
