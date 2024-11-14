'use client'
import {
  Image,
  Avatar,
  Text,
  Group,
  SimpleGrid,
  Container,
  Box,
  LoadingOverlay,
  Divider,
} from "@mantine/core";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import classes from "./Styles.module.css";
import { useSearchParams } from 'next/navigation';
import {useEffect,useState} from 'react'
import {fetch} from '@/app/api'




export default function Page() {
  const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}`;

  const param = useSearchParams();
  const i = param.get('i'); // Access slug and query parameter 'i'
  const [blog, setBlog] = useState<any>()
  const [body, setBody] = useState<any>();
  const [htmlElements, setHtmlElements] = useState<any>([]);



  useEffect(() => {
    const fetchBlog = async () => {
      const data = await fetch(`blogs/${i}`)
        setBlog(data);
        setBody(data.body)
    };
    // if(i!=undefined){

      fetchBlog();
    // }
   
  }, [i]);


  useEffect(() => {
    

    const parseHtml = (body:any) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(body, 'text/html');
      const elements = Array.from(doc.body.childNodes).map((node:any, index) => {
        return <div key={index} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />;
      });
      setHtmlElements(elements);
      console.log(elements);
    };

    parseHtml(body)
  }, [body]);
 
  return (
    <Container py='xl' size={"lg"} mb='xl' mt='xl'>
      
      {blog ?
      <Box mb='xl' mt='xl'>

        <SimpleGrid pb='xl' mb='xl' mt='xl' cols={{base:1, lg:2}} spacing="lg" >
          <Group wrap="nowrap" gap={0}>
            <div className={classes.body}>
              <Text tt="uppercase" c="dimmed" fw={700} size="sm">
                {blog?.blog_category.name}
              </Text>
              <Text fz='h1' className={classes.title} mt="xs" mb="md">
              {blog.title}
              </Text>
              <Group wrap="nowrap" gap="xs">
                <Group gap="xs" wrap="nowrap">
                  <Avatar
                    size={20}
                    src={blog.created_by_profile_image}
                  />
                  <Text size="xs">{blog.created_by}</Text>
                </Group>
                {/* <Text size="xs" c="dimmed">
                  •
                </Text>
                <Text size="xs" c="dimmed">
                  Feb 6th
                </Text> */}
              </Group>
            </div>
          </Group>
          <img
            alt="image"
            src={blog.image_url}
            className={classes.image}
            //   height={160}
            style={{maxHeight:'250px'}}
            // mah={250}
          />
          {/* <Image
            alt="image"
            src={blog.image_url}
            className={classes.image}
            //   height={160}
            mah={250}
          /> */}
        </SimpleGrid>
      <Box my='xl'>
        <div>  {htmlElements} </div>
      </Box>

      <Box my='xl' py='xl'>
        <Text mb='lg'>Share this post</Text>
        <Group>
                <div className="Demo__some-network">
                <FacebookShareButton title={blog.title} hashtag="#cheetah #cheetahPos #pos #pointofsales #inventory #quickcommerce #grocerystore #store #cheetahinventory #cheetahpos #localmarket" url={shareUrl} className="Demo__some-network__share-button">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <div>
                  <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                    {count => count}
                  </FacebookShareCount>
                </div>
              </div>

              {/* <div className="Demo__some-network">
                <FacebookMessengerShareButton
                  url={shareUrl}
                  appId="521270401588372"
                  className="Demo__some-network__share-button"
                >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
              </div> */}

              <div className="Demo__some-network">
                <TwitterShareButton
                hashtags={["cheetah", "cheetahPos", "pos", "pointofsales", "inventory", "quickcommerce", "grocerystore", "store", "cheetahinventory", "cheetahpos", "localmarket"]}
                  url={shareUrl}
                  title={blog.title}
                  className="Demo__some-network__share-button"
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
              </div>

              <div className="Demo__some-network">
                <TelegramShareButton
                  url={shareUrl}
                  title={blog.title}
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>

              <div className="Demo__some-network">
                <WhatsappShareButton
                  url={shareUrl}
                  title={blog.title}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>

              <div className="Demo__some-network">
                <LinkedinShareButton title={blog.title} summary={blog.summary} url={shareUrl} className="Demo__some-network__share-button">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

          </Group>

          <Divider my='xl'/>
          <Group wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar
                  size={60}
                  src={blog.created_by_profile_image}
                />
                <Box>

                <Text size="xs">{blog.created_by}</Text>
                <Text size="xs">{blog.created_by_position}</Text>
                </Box>
              </Group>
              {/* <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text> */}
          </Group>
        </Box>
      </Box>
       : <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      }
     
    </Container>
  );
}
