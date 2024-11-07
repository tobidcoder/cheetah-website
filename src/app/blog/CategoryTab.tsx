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

  const baseUrl = process.env.BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/blogs`); // Replace with your endpoint
        console.log("blogs:", response.data); 
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
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
          <BlogCard />
        </TabsPanel>

        <TabsPanel value="messages">Messages tab content</TabsPanel>

        <TabsPanel value="settings">Settings tab content</TabsPanel>
      </Tabs> : <LoadingOverlay/> }
    </Box>
  );
}
