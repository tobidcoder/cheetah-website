<<<<<<< HEAD
/* eslint-disable @next/next/no-img-element */
'use client';
=======
"use client";
>>>>>>> f90b8504cb7b113bec71ac8d9580755c9689ed81

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Card,
  CardSection,
  Image,
  Group,
  Center,
  Avatar,
  Badge,
  Loader,
  LoadingOverlay,
  rem,
} from "@mantine/core";
import classes from "@/styles/BlogCard.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetch } from "@/app/api";
// import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export function News() {
  const [blogs, setBlogs] = useState<any>();
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch("blogs");
      setBlogs(data?.data);
    };

    fetchBlogs();
  }, []);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  //   const slides = data.map((item) => (
  //     <Carousel.Slide key={item.title}>
  //       <Card {...item} />
  //     </Carousel.Slide>
  //   ));

  return (
    <Carousel
      mt="xl"
      slideSize={{ base: "80%", sm: "50%", lg: "33%" }}
      slideGap={{ base: 'sm', sm: "xl" }}
      align="center"
      slidesToScroll={mobile ? 1 : 2}
    >
<<<<<<< HEAD
      {blogs &&
      blogs?.map((blog:any)=>(
        <Carousel.Slide key={blog.id}>
      <Link href={`/post/${blog.slug}?i=${blog.id}`} passHref>
        <Card  radius="md" className={classes.card}>
          <CardSection>
            {/* <img src={blog.image_url} height={180} alt="blog image" /> */}
            <Image src={blog.image_url} height={180} alt="blog image" />
          </CardSection>
          
          <Text c='#fdfdfd' className='' fz='lg' my='lg'>{blog.blog_category.name}</Text>
=======
      {
        blogs &&
          blogs?.map((blog: any) => (
            <Carousel.Slide key={blog.id}>
              <Link href={`/post/${blog.slug}?i=${blog.id}`} passHref>
                <Card radius="md" className={classes.card}>
                  <CardSection>
                    <Image src={blog.image_url} alt="blog image" />
                  </CardSection>

                  <Text c="#fdfdfd" className="" fz="lg" my="lg">
                    {blog.blog_category.name}
                  </Text>
>>>>>>> f90b8504cb7b113bec71ac8d9580755c9689ed81

                  {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge> */}

                  <Text
                    fz="h2"
                    mb="lg"
                    c="#fdfdfd"
                    className={classes.title}
                    fw={600}
                    lineClamp={2}
                  >
                    {blog.title}
                  </Text>

                  <Text c="#fdfdfd" fz="md" lineClamp={4}>
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
                      <Text c="#fdfdfd" fz="sm" inline>
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
            </Carousel.Slide>
          ))
        //   :
        //   <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      }
    </Carousel>
  );
}
