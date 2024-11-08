'use client';

import { Tabs, rem, TabsList, TabsPanel, TabsTab, Box, LoadingOverlay } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function CategoryTab() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [blogs, setBlogs] = useState<any>()
  const [categories, setCategories] = useState<any>()
  const [categoryBlogs, setCategoryBlogs] = useState<any>()
  const [isLoading, setIsLoading] = useState<any>(false)

  const baseUrl = process.env.BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blogs'); // Replace with your endpoint
        console.log("blogs:", response.data.data.data); 
        setBlogs(response.data.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blog-categories'); // Replace with your endpoint
        console.log("blog-categories:", response.data.data); 
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchCategoryBlogs = async (id:any) => {
    setIsLoading(true)
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get_category_blogs/${id}`); // Replace with your endpoint
      console.log("blog-categories:", response.data.data.data); 
      setCategoryBlogs(response.data.data.data);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching categories:", error);
      setIsLoading(false)
    }
  };

  return (
    <Box my='xl'>
      {blogs ?
      <Tabs py='xl' my="xl" variant="pills" radius="md" defaultValue="all">
        <TabsList style={{ justifyContent: "center" }} pb="xl" mb="xl">
          <TabsTab
            className="primary-button"
            value="all"
            // onClick={()=>alert('gooosd')}
            leftSection={<IconPhoto style={iconStyle} />}
          >
            All
          </TabsTab>
          {categories&&
          categories.map((category:any)=>(

          <TabsTab key={category.id}
            className="primary-button"
            onClick={()=>fetchCategoryBlogs(category.id)}
            value={category.name}
            leftSection={<IconPhoto style={iconStyle} />}
          >
           {category.name}
          </TabsTab>
          ))
          }
         
        </TabsList>

        <TabsPanel value="all">
          <BlogCard blogs={blogs}/>
        </TabsPanel>

        {categories&&
          categories.map((category:any)=>(

        <TabsPanel key={category.id} value={category.name}>
          {
            isLoading? <LoadingOverlay loaderProps={{ color: '#052315' }} visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> 
            :
            <BlogCard blogs={categoryBlogs}/>

          }
        </TabsPanel>
          
          ))}



        
      </Tabs> : <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> }
    </Box>
  )
}
