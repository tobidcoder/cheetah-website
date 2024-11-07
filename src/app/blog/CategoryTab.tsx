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

  return (
    <Box>
      {blogs ?
      <Tabs mt="xl" variant="pills" radius="md" defaultValue="gallery">
        <TabsList style={{ justifyContent: "center" }} pb="lg" mb="lg">
          <TabsTab
            className="primary-button"
            value="gallery"
            onClick={()=>alert('gooosd')}
            leftSection={<IconPhoto style={iconStyle} />}
          >
            All
          </TabsTab>
          <TabsTab
            className="primary-button"
            value="gallery"
            leftSection={<IconPhoto style={iconStyle} />}
          >
            Gallery
          </TabsTab>
          <TabsTab
            className="primary-button"
            value="messages"
            leftSection={<IconMessageCircle style={iconStyle} />}
          >
            Messages
          </TabsTab>
          <TabsTab
            className="primary-button"
            value="settings"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Settings
          </TabsTab>
        </TabsList>

        <TabsPanel value="gallery">
          <BlogCard blogs={blogs}/>
        </TabsPanel>

        <TabsPanel value="messages">
          {
            isLoading? <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> 
            :
            <BlogCard blogs={categoryBlogs}/>

          }
        </TabsPanel>

        <TabsPanel value="settings">Settings tab content</TabsPanel>
      </Tabs> : <LoadingOverlay loaderProps={{ color: '#052315' }} visible={true} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} /> }
    </Box>
  )
}
