// import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  CardSection,
  Image,
  Text,
  // ActionIcon,
  // Badge,
  Group,
  Center,
  Avatar,
  // useMantineTheme,
  // rem,
  // Grid,
  SimpleGrid,
} from "@mantine/core";
import classes from "@/styles/BlogCard.module.css";
import Link from "next/link";

export function BlogCard({blogs}:any) {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  //   const theme = useMantineTheme();

  return (
    <SimpleGrid mb='xl' spacing="md" cols={{ lg: 3, md: 2, base: 1 }}>
      {blogs?
      blogs.map((blog:any)=>(

      <Link key={blog.id} href={`/post/${blog.slug}?i=${blog.id}`} passHref>
        <Card withBorder radius="md" className={classes.card}>
          <CardSection>
            <Image src={blog.image_url} height={180} />
          </CardSection>

          {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge> */}

          <Text className={classes.title} fw={500} component="a" {...linkProps}>
          {blog.title}
          </Text>

          <Text fz="sm" c="dimmed" lineClamp={4}>
          {blog.summary}
          </Text>

          <Group justify="space-between" className={classes.footer}>
            <Center>
              <Avatar
                src={blog.created_by_profile_image}
                size={24}
                radius="xl"
                mr="xs"
              />
              <Text fz="sm" inline>
                {blog.created_by}
              </Text>
            </Center>

            {/* <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group> */}
          </Group>
        </Card>
      </Link>
      ))
      :
      <Text>Loading...</Text>
    }
    </SimpleGrid>
  );
}
