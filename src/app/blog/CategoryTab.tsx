'use client';

import { Tabs, rem, TabsList, TabsPanel, TabsTab, Box, LoadingOverlay, Loader, Group } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { BlogCard } from "./BlogCard";
import { useEffect, useState } from "react";
import {fetch} from '@/app/api'


export function CategoryTab() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [blogs, setBlogs] = useState<any>()
  const [categories, setCategories] = useState<any>()
  const [categoryBlogs, setCategoryBlogs] = useState<any>()
  const [isLoading, setIsLoading] = useState<any>(false)

  
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch('blogs');
      setBlogs(data.data);
    };

    const fetchCategories = async () => {
      const data = await fetch('blog-categories');
      // blog-categories
        setCategories(data);
    };

    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchCategoryBlogs = async (id:any) => {
    setIsLoading(true)
    const data = await fetch(`get_category_blogs/${id}`)
      setCategoryBlogs(data.data);
      setIsLoading(false)
    
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



        
      </Tabs> : <Group justify="center
      ">
                  <Loader color="#b2d93b"/>
                </Group> 
       }
    </Box>
  )
}
