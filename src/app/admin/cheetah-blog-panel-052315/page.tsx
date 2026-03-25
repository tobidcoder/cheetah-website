"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const BodyEditor = dynamic(() => import("./BodyEditor").then(mod => mod.BodyEditor), { 
  ssr: false,
  loading: () => (
    <Box 
      style={{ 
        height: "400px", 
        background: "rgba(253,253,253,0.05)", 
        borderRadius: "16px",
        border: "1px solid rgba(178,217,59,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text c="rgba(253,253,253,0.3)">Loading editor...</Text>
    </Box>
  )
});

import {
  Container,
  Box,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  Select,
  Button,
  Group,
  Image,
  Avatar,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import NewCategory from "./NewCategory";
import { post, fetch, upload } from "@/app/api";
import { BlogsTable } from "./BlogsTable";
import ProductCategoryManager from "./ProductCategoryManager";

export default function Page() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [blogCategoryId, setBlogCategoryId] = useState<string | null>("1");
  const [createdBy, setCreatedBy] = useState<string | null>("");
  const [team, setTeam] = useState<string | null>("");
  const [createdByPosition, setCreatedByPosition] = useState<string | null>("");
  const [createdByProfileImage, setCreatedByProfileImage] = useState("");
  const [summary, setSummary] = useState("");
  const [refetch, setRefetch] = useState(true);
  const [body, setBody] = useState<string>("");
  const [imageValue, setImageValue] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  interface Category {
    id: number;
    name: string;
  }

  interface FormErrors {
    [key: string]: string;
  }

  // Update state definition
  const [categories, setCategories] = useState<Category[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  const [refetchCategories, setRefetchCategories] = useState(false);

  // Fetch categories when the page loads
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch("blog-categories");
      setCategories(data);
    };

    fetchCategories();
  }, [refetchCategories]);

  useEffect(() => {
    if (createdBy == "Rapheal Odejinmi") {
      setCreatedByProfileImage("/images/rapheal.png");
    }
    if (createdBy == "Tobiloba Odejinmi") {
      setCreatedByProfileImage("/images/tobiloba.png");
    }
    if (createdBy == "Winifred Bello") {
      setCreatedByProfileImage("/images/winifred.png");
    }
    if (createdBy == "Oyinade Tobi-Odejinmi") {
      setCreatedByProfileImage("/images/oyinade.jpeg");
    }
  }, [createdBy]);

  const [currentBlogId, setCurrentBlogId] = useState<number | null>(null);

  // Validate form fields
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title) newErrors.title = "Title is required";
    if (!imageUrl) newErrors.imageUrl = "Image URL is required";
    if (!blogCategoryId) newErrors.blogCategoryId = "Blog category is required";
    if (!createdBy) newErrors.createdBy = "Created by is required";
    if (!team) newErrors.team = "Team is required";
    if (!createdByPosition)
      newErrors.createdByPosition = "Position is required";
    if (!createdByProfileImage)
      newErrors.createdByProfileImage = "Profile image URL is required";
    if (!summary) newErrors.summary = "Summary is required";
    if (!body) newErrors.body = "Body content is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = async (blog: any) => {
    setLoading(true);
    // Fetch full blog details to get the body
    const fullBlog = await fetch(`blogs/${blog.id}`);
    setLoading(false);

    if (fullBlog) {
      setCurrentBlogId(fullBlog.id);
      setTitle(fullBlog.title);
      setImageUrl(fullBlog.image_url);
      setBlogCategoryId(fullBlog.blog_category_id?.toString() || "");
      setCreatedBy(fullBlog.created_by);
      setTeam(fullBlog.team || "");
      setCreatedByPosition(fullBlog.created_by_position || "");
      setCreatedByProfileImage(fullBlog.created_by_profile_image || "");
      setSummary(fullBlog.summary);
      setBody(fullBlog.body || ""); 
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    const formData = {
      title: title,
      image_url: imageUrl,
      blog_category_id: blogCategoryId,
      created_by: createdBy,
      team: team,
      created_by_position: createdByPosition,
      created_by_profile_image: createdByProfileImage,
      summary: summary,
      body: body,
    };
    // console.log(formData);

    if (currentBlogId) {
      // Import put from api.ts
      const { put } = await import("@/app/api");
      await put(`blogs/${currentBlogId}`, formData);
    } else {
      await post("blogs", formData);
    }
    
    setRefetch(!refetch);
    setCurrentBlogId(null);
    setLoading(false);
    
    // Clear form
    setTitle("");
    setImageUrl("");
    setBlogCategoryId("1");
    setCreatedBy("");
    setTeam("");
    setCreatedByPosition("");
    setCreatedByProfileImage("");
    setSummary("");
    setBody("");
    setImageValue(null);
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (!imageValue) return;
      
      try {
        const formData = new FormData();
        formData.append("image", imageValue);
        
        const response = await upload(
          "https://api-production.usecheetah.com/api/upload_blog_image",
          formData
        );
        
        if (response && response.data) {
          setImageUrl(response.data);
          return response.data;
        }
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    };
    // const handleImageUpload = async () => {
    //   // e.preventDefault();
    //   // if (!validateForm()) return;
    //   const formData = {
    //     //  title: title,
    //     image: imageValue,
    //   };
    //   console.log(imageValue);
    //   const data = await post("upload_blog_image", formData);
    //   console.log(data);
    //   setImageUrl("");
    // };
    uploadImage();
    // handleImageUpload();
  }, [imageValue]);

  // const newCat=(<NewCategory/>)

  return (
    <Box style={{ background: "#052315", minHeight: "100vh", padding: "40px 20px", paddingTop: "35px" }}>
      <Container size="md">
        <LoadingOverlay visible={loading} overlayProps={{ blur: 2, backgroundOpacity: 0.6, color: "#052315" }} />
        
        <Box mb={40}>
          <Text 
            style={{ 
              fontFamily: "Syne, sans-serif", 
              fontSize: "clamp(32px, 5vw, 48px)", 
              fontWeight: 800, 
              color: "#fdfdfd", 
              letterSpacing: "-0.03em",
              marginBottom: "8px",
              marginTop: "15px"
            }}
          >
            {currentBlogId ? "Edit Blog Post" : "Blog Management"}
          </Text>
          <Text style={{ color: "rgba(253,253,253,0.5)", fontSize: "16px" }}>
            {currentBlogId ? "Update your current blog post." : "Create and manage your Cheetah blog posts from one central dashboard."}
          </Text>
        </Box>

        <Box 
          style={{ 
            background: "rgba(253,253,253,0.03)", 
            border: "1px solid rgba(178,217,59,0.15)", 
            borderRadius: "24px", 
            padding: "clamp(24px, 5vw, 48px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }}
        >
          <SimpleGrid
            style={{ alignItems: "start" }}
            cols={{ base: 1, md: 2 }}
            spacing="xl"
          >
            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Title</Text>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="lg"
                radius="lg"
                variant="filled"
                styles={{
                  input: {
                    background: "rgba(253,253,253,0.05)",
                    border: "1px solid rgba(178,217,59,0.2)",
                    color: "#fdfdfd",
                    '&:focus': { borderColor: "#b2d93b" }
                  }
                }}
                placeholder="Enter blog title"
              />
              {errors.title && <Text fz="xs" mt={4} c="red.4">{errors.title}</Text>}
            </Box>

            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Featured Image</Text>
              <Box style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <FileInput
                  flex={1}
                  size="lg"
                  radius="lg"
                  variant="filled"
                  styles={{
                    input: {
                      background: "rgba(253,253,253,0.05)",
                      border: "1px solid rgba(178,217,59,0.2)",
                      color: "#fdfdfd",
                      '&:focus': { borderColor: "#b2d93b" }
                    }
                  }}
                  placeholder="Upload featured image"
                  value={imageValue}
                  onChange={setImageValue}
                />
                <Box 
                  style={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: "12px", 
                    overflow: "hidden", 
                    border: "1px solid rgba(178,217,59,0.2)",
                    background: "rgba(253,253,253,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image src={imageUrl} alt="preview" fallbackSrc="https://placehold.co/600x400?text=None" />
                </Box>
              </Box>
              {errors.imageUrl && <Text fz="xs" mt={4} c="red.4">{errors.imageUrl}</Text>}
            </Box>

            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Category</Text>
              <Box style={{ display: "flex", gap: "12px", alignItems: "end" }}>
                <Select
                  flex={1}
                  searchable
                  radius="lg"
                  placeholder="Select category"
                  size="lg"
                  variant="filled"
                  styles={{
                    input: {
                      background: "rgba(253,253,253,0.05)",
                      border: "1px solid rgba(178,217,59,0.2)",
                      color: "#fdfdfd",
                    },
                    dropdown: {
                      background: "#0a3d24",
                      border: "1px solid rgba(178,217,59,0.2)",
                      color: "#fdfdfd",
                    },
                    option: {
                      '&[data-selected]': { background: "#b2d93b", color: "#052315" },
                      '&[data-hovered]': { background: "rgba(178,217,59,0.15)" }
                    }
                  }}
                  data={categories?.map((cat: any) => ({
                    value: cat.id.toString(),
                    label: cat.name,
                  }))}
                  value={blogCategoryId}
                  onChange={setBlogCategoryId}
                />
                <NewCategory categories={categories} onRefetch={() => setRefetchCategories(!refetchCategories)} />
              </Box>
              {errors.blogCategoryId && (
                <Text fz="xs" mt={4} c="red.4">{errors.blogCategoryId}</Text>
              )}
            </Box>

            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Author</Text>
              <Box style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Select
                  flex={1}
                  radius="lg"
                  variant="filled"
                  placeholder="Select author"
                  size="lg"
                  styles={{
                    input: {
                      background: "rgba(253,253,253,0.05)",
                      border: "1px solid rgba(178,217,59,0.2)",
                      color: "#fdfdfd",
                    },
                    dropdown: {
                      background: "#0a3d24",
                      border: "1px solid rgba(178,217,59,0.2)",
                    },
                    option: {
                      '&[data-selected]': { background: "#b2d93b", color: "#052315" },
                      '&[data-hovered]': { background: "rgba(178,217,59,0.15)" }
                    }
                  }}
                  data={["Rapheal Odejinmi", "Tobiloba Odejinmi", "Winifred Bello", "Oyinade Tobi-Odejinmi"]}
                  value={createdBy}
                  onChange={setCreatedBy}
                />
                <Avatar size={50} src={createdByProfileImage} radius="md" style={{ border: "1px solid rgba(178,217,59,0.3)" }} />
              </Box>
              {errors.createdBy && <Text fz="xs" mt={4} c="red.4">{errors.createdBy}</Text>}
            </Box>

            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Team</Text>
              <Select
                radius="lg"
                variant="filled"
                placeholder="Select Team"
                size="lg"
                styles={{
                  input: {
                    background: "rgba(253,253,253,0.05)",
                    border: "1px solid rgba(178,217,59,0.2)",
                    color: "#fdfdfd",
                  },
                  dropdown: {
                    background: "#0a3d24",
                    border: "1px solid rgba(178,217,59,0.2)",
                  },
                  option: {
                    '&[data-selected]': { background: "#b2d93b", color: "#052315" },
                    '&[data-hovered]': { background: "rgba(178,217,59,0.15)" }
                  }
                }}
                data={["Marketing Team", "Engineering Team"]}
                value={team}
                onChange={setTeam}
              />
              {errors.team && <Text fz="xs" mt={4} c="red.4">{errors.team}</Text>}
            </Box>

            <Box>
              <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Position</Text>
              <Select
                searchable
                radius="lg"
                variant="filled"
                placeholder="Select Position"
                size="lg"
                styles={{
                  input: {
                    background: "rgba(253,253,253,0.05)",
                    border: "1px solid rgba(178,217,59,0.2)",
                    color: "#fdfdfd",
                  },
                  dropdown: {
                    background: "#0a3d24",
                    border: "1px solid rgba(178,217,59,0.2)",
                  },
                  option: {
                    '&[data-selected]': { background: "#b2d93b", color: "#052315" },
                    '&[data-hovered]': { background: "rgba(178,217,59,0.15)" }
                  }
                }}
                data={[
                  "CEO & Co-Founder",
                  "CTO & Co-Founder",
                  "Product Manager",
                  "Head of Marketing",
                  "Head of Engineering",
                  "Head of Operations",
                  "Head of Design",
                  "Head of Product",
                  "Head of Sales",
                  "Head of Finance",
                  "Head of HR",
                  "Head of Legal",
                  "Head of Customer Success",
                  "CEO",
                  "CTO",
                  "CFO",
                  "CMO",
                  "COO",
                  "CIO",
                  "CPO",
                  "CRO",
                  "CSO",
                  "CGO",
                ]}
                value={createdByPosition}
                onChange={setCreatedByPosition}
              />
              {errors.createdByPosition && (
                <Text fz="xs" mt={4} c="red.4">{errors.createdByPosition}</Text>
              )}
            </Box>
          </SimpleGrid>

          <Box mt="xl">
            <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Post Summary</Text>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              size="lg"
              radius="lg"
              variant="filled"
              styles={{
                input: {
                  background: "rgba(253,253,253,0.05)",
                  border: "1px solid rgba(178,217,59,0.2)",
                  color: "#fdfdfd",
                  minHeight: "100px"
                }
              }}
              placeholder="Enter a brief summary of the blog post"
            />
            {errors.summary && <Text fz="xs" mt={4} c="red.4">{errors.summary}</Text>}
          </Box>

          <Box mt="xl">
            <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Full Article Content</Text>
            <BodyEditor body={body} setBody={setBody} />
            {errors.body && <Text fz="xs" mt={4} c="red.4">{errors.body}</Text>}
          </Box>

          <Group justify="center" mt={40}>
            {currentBlogId && (
               <Button
               variant="outline"
               color="gray"
               size="xl"
               radius="lg"
               style={{
                 fontWeight: 800,
                 fontSize: "18px",
                 height: "60px",
                 transition: "all 0.3s ease",
               }}
               onClick={() => {
                 setCurrentBlogId(null);
                 setTitle("");
                 setImageUrl("");
                 setBlogCategoryId("1");
                 setCreatedBy("");
                 setTeam("");
                 setCreatedByPosition("");
                 setCreatedByProfileImage("");
                 setSummary("");
                 setBody("");
                 setImageValue(null);
               }}
             >
               Cancel Edit
             </Button>
            )}
            <Button
              disabled={loading}
              size="xl"
              radius="lg"
              flex={1}
              style={{
                background: "#b2d93b",
                color: "#052315",
                fontWeight: 800,
                fontSize: "18px",
                height: "60px",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? "Publishing..." : currentBlogId ? "Update Blog Post" : "Publish Blog Post"}
            </Button>
          </Group>
        </Box>

        <Box mt={80}>
          <Text 
            fw={800} 
            fz="xl" 
            mb={24} 
            c="#fdfdfd" 
            style={{ 
              fontFamily: "Syne, sans-serif", 
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <Box style={{ width: 8, height: 24, background: "#b2d93b", borderRadius: 4 }} />
            Existing Blog Posts
          </Text>
          <BlogsTable refetch={refetch} onEdit={handleEdit} />
        </Box>

        <Box mt={100} pt={40} style={{ borderTop: "1px solid rgba(178,217,59,0.1)" }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
            <Box>
                <Text 
                    fw={800} 
                    fz="xl" 
                    mb={16} 
                    c="#fdfdfd" 
                    style={{ 
                        fontFamily: "Syne, sans-serif", 
                        letterSpacing: "-0.02em",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <Box style={{ width: 8, height: 24, background: "rgba(178,217,59,0.4)", borderRadius: 4 }} />
                    Inventory Management
                </Text>
                <Text size="sm" c="rgba(253,253,253,0.5)" mb="xl">
                    Manage global product categories and stock settings for the Cheetah ecosystem. 
                    Changes here affect all business profiles using default categories.
                </Text>
                <ProductCategoryManager />
            </Box>

            <Box 
              p="xl" 
              style={{ 
                background: "rgba(178,217,59,0.03)", 
                borderRadius: "24px", 
                border: "1px solid rgba(178,217,59,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
                <Text fw={800} c="#b2d93b" mb="xs">Quick Tip</Text>
                <Text size="sm" c="rgba(253,253,253,0.7)">
                    When you update a product category, it immediately becomes available to all Cheetah POS users. 
                    Ensure names are clear and descriptive for better inventory organization.
                </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

