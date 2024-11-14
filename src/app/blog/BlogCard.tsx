/* eslint-disable @next/next/no-img-element */
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
  Badge,
  LoadingOverlay,
} from "@mantine/core";
import classes from "@/styles/BlogCard.module.css";
import Link from "next/link";

export function BlogCard({blogs}:any) {
  
  return (
    <SimpleGrid  mb='xl' spacing="xl" cols={{ lg: 3, md: 2, base: 1 }}>
      {blogs?
      blogs.map((blog:any)=>(

      <Link key={blog.id} href={`/post/${blog.slug}?i=${blog.id}`} passHref>
        <Card  radius="md" className={classes.card}>
          <CardSection>
            {/* <img src={blog.image_url} height={180} alt="blog image" /> */}
            <Image src={blog.image_url} height={180} alt="blog image" />
          </CardSection>
          
          <Text c='#fdfdfd' className='' fz='lg' my='lg'>{blog.blog_category.name}</Text>

          {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge> */}

          <Text fz='h2' mb='lg' c='#fdfdfd' className={classes.title} fw={600} lineClamp={2}>
          {blog.title}
          </Text>

          <Text c='#fdfdfd' fz="md"  lineClamp={4}>
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
              <Text c='#fdfdfd' fz="sm" inline>
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
      <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
    }
    </SimpleGrid>
  );
}
