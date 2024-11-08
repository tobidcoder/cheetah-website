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
} from "@mantine/core";
import classes from "./Styles.module.css";
import { useSearchParams } from 'next/navigation';
import {useEffect,useState} from 'react'
import axios from 'axios'


export default function Page() {

  const param = useSearchParams();
  const i = param.get('i'); // Access slug and query parameter 'i'
  const [blog, setBlog] = useState<any>()
  const [body, setBody] = useState<any>();
  const [htmlElements, setHtmlElements] = useState<any>([]);




  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${i}`); // Replace with your endpoint
        console.log("blogs:", response.data.data); 
        setBlog(response.data.data);
        setBody(response.data.data.body)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
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
        <Image
          alt="image"
          src={blog.image_url}
          //   height={160}
          mah={250}
        />
      </SimpleGrid>
      <Box>
        <div>  {htmlElements} </div>
      </Box>
      </Box>
       : <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      }
     
    </Container>
  );
}
