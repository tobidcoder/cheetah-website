"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BodyEditor } from "./BodyEditor";
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
} from "@mantine/core";
import NewCategory from './NewCategory'

export default function Page() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [blogCategoryId, setBlogCategoryId] = useState<string | null>("1");
  const [createdBy, setCreatedBy] = useState<string | null>("");
  const [team, setTeam] = useState<string | null>("");
  const [createdByPosition, setCreatedByPosition] = useState<string | null>("");
  const [createdByProfileImage, setCreatedByProfileImage] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState<any>();
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

  const baseUrl = process.env.BASE_URL;

  // Fetch categories when the page loads
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blog-categories`); // Replace with your endpoint
        console.log("Categories:", response.data.data); 
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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

  // Handle form submission
  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // if (!validateForm()) return;

    const formData = {
      title:title,
      image_url: imageUrl,
      blog_category_id: blogCategoryId,
      created_by: createdBy,
      team :team,
      created_by_position: createdByPosition,
      created_by_profile_image: createdByProfileImage,
      summary:summary,
      body:body,
    };
    console.log(formData)
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/blogs`, formData); // Replace with your endpoint
      console.log("Form submitted successfully:", response.data);
      setTitle('')
      setImageUrl('')
      setBlogCategoryId('')
      setCreatedBy('')
      setTeam('')
      setCreatedByPosition('')
      // setCreatedByProfileImage('')
      setSummary('')
      setBody('')
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const newCat=(<NewCategory/>)

  return (
    <Container size="md">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing='xl'>
        <Box>
          <Text>Title</Text>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="xl"
            radius="lg"
            placeholder="Title"
          />
          {errors.title && <Text c="red">{errors.title}</Text>}
        </Box>
        <Box>
          <Text>Image Url</Text>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            size="xl"
            radius="lg"
            placeholder="Image Url"
          />
          {errors.imageUrl && <Text c="red">{errors.imageUrl}</Text>}
        </Box>
        {Object.keys(categories).length == 0 ? (
          <NewCategory />
        ) : (
          <Box>
            <Text>Blog Category</Text>
            <Group></Group>
            <Select
              radius="lg"
              placeholder="Select Blog Category"
              size="xl"
              data={categories?.map((cat: any) => ({
                value: cat.id.toString(),
                label: cat.name,
              }))}
              value={blogCategoryId}
              onChange={setBlogCategoryId}
            />
            {errors.blogCategoryId && (
              <Text c="red">{errors.blogCategoryId}</Text>
            )}
            <Text ta='center' className="text-secondary" fz='lg' fw='600'>Or</Text>
            <NewCategory />
          </Box>
        )}
        <Box>
          <Text>Created By</Text>
          <Select
            radius="lg"
            placeholder="Created By"
            size="xl"
            data={["Rapheal Odejinmi", "Tobiloba Odejinmi", "Winifred"]}
            value={createdBy}
            onChange={setCreatedBy}
          />
          {errors.createdBy && <Text c="red">{errors.createdBy}</Text>}
        </Box>

        <Box>
          <Text>Creator&apos;s Image Url</Text>
          <Input
            value={createdByProfileImage}
            onChange={(e) => setCreatedByProfileImage(e.target.value)}
            size="xl"
            radius="lg"
            placeholder="Image Url"
          />
          {errors.createdByProfileImage && (
            <Text c="red">{errors.createdByProfileImage}</Text>
          )}
        </Box>
        <Box>
          <Text>Team</Text>
          <Select
            radius="lg"
            placeholder="Select Team"
            size="xl"
            data={["Marketing Team", "Engineering Team"]}
            value={team}
            onChange={setTeam}
          />
          {errors.team && <Text c="red">{errors.team}</Text>}
        </Box>
        <Box>
          <Text>Position</Text>
          <Select
            radius="lg"
            placeholder="Select Position"
            size="xl"
            data={[
              "CEO & Co-Founder",
              "CTO & Co-Founder",
              "CFO",
              "CMO",
              "COO",
              "CIO",
            ]}
            value={createdByPosition}
            onChange={setCreatedByPosition}
          />
          {errors.createdByPosition && (
            <Text c="red">{errors.createdByPosition}</Text>
          )}
        </Box>
      </SimpleGrid>
      <Textarea
      
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        size="xl"
        radius="lg"
        label="Summary"
        withAsterisk
        placeholder="Blog Summary"
      />
      {errors.summary && <Text c="red">{errors.summary}</Text>}
      <BodyEditor body={body} setBody={setBody} />
      {errors.body && <Text c="red">{errors.body}</Text>}

      <Group justify="center" my="xl">
        <Button
          size="xl"
          miw="100%"
          className="secondary-button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Group>
      {/* <Box>
        { body }
      </Box> */}

      <hr />
    </Container>
  );
}
