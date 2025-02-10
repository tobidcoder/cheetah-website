"use client";

import { useEffect, useState } from "react";
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
  Image,
  Avatar,
  FileInput,
  LoadingOverlay,
} from "@mantine/core";
import NewCategory from "./NewCategory";
import { post, fetch, upload } from "@/app/api";
import { BlogsTable } from "./BlogsTable";

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
  const [body, setBody] = useState<any>();
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

  // Fetch categories when the page loads
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetch("blog-categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

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
  }, [createdBy]);

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

    const data = await post("blogs", formData);
    setRefetch(!refetch);

    setLoading(false);
    // setTitle("");
    // setImageUrl("");
    // setBlogCategoryId("");
    // setCreatedBy("");
    // setTeam("");
    // setCreatedByPosition("");
    // // setCreatedByProfileImage('')
    // setSummary("");
    // setBody("");
  };

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      if (imageValue) {
        formData.append("image", imageValue);
      }
      const response = await upload(
        "https://app.usecheetah.com/api/upload_blog_image",
        formData
      );
      // console.log(response.data);
      setImageUrl(response.data);
      return response.data;
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
    <Container size="md">
      <LoadingOverlay visible={loading} />
      <SimpleGrid
        style={{ alignItems: "center" }}
        cols={{ base: 1, md: 2 }}
        spacing="xl"
      >
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
          <Text>Upload Image</Text>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <FileInput
              w={"70%"}
              mr={10}
              size="xl"
              variant="filled"
              placeholder="Upload Image"
              value={imageValue}
              onChange={setImageValue}
            />
            <Avatar size={60} src={imageUrl} />
          </Box>

          {errors.imageUrl && <Text c="red">{errors.imageUrl}</Text>}
        </Box>

        <Box>
          <Text>Blog Category</Text>
          <Group></Group>
          <Select
            searchable
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
          {/* <Text ta='center' className="text-secondary" fz='lg' fw='600'>Or</Text> */}
        </Box>

        <NewCategory />

        <Box>
          <Text>Created By</Text>
          <Select
            radius="lg"
            placeholder="Created By"
            size="xl"
            data={["Rapheal Odejinmi", "Tobiloba Odejinmi", "Winifred Bello"]}
            value={createdBy}
            onChange={setCreatedBy}
          />
          {errors.createdBy && <Text c="red">{errors.createdBy}</Text>}
        </Box>

        <Group justify="center">
          <Avatar size={60} src={createdByProfileImage} />
        </Group>
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
            searchable
            radius="lg"
            placeholder="Select Position"
            size="xl"
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
          disabled={loading}
          size="xl"
          miw="100%"
          className="secondary-button"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Group>
      {/* <Box>
        { body }
      </Box> */}

      <hr />

      <BlogsTable refetch={refetch} />
    </Container>
  );
}
