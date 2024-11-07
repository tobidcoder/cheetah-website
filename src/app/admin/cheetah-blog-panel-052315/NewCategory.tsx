'use client'
import {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button,Box,Text,Input } from '@mantine/core';
import axios from "axios";

export default function NewCategory() {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState<any>();
  const [description, setDescription] = useState<any>();


  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // if (!validateForm()) return;

    const formData = {
      name:name,
      description:description,
    };

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/blog-categories`, formData); // Replace with your endpoint
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
      <Box>
          <Text>Name</Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="lg"
            radius="lg"
            placeholder="Name"
          />
          {/* {errors.imageUrl && <Text c="red">{errors.imageUrl}</Text>} */}
        </Box><Box>
          <Text>Description</Text>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            size="lg"
            radius="lg"
            placeholder="Description"
          />
          {/* {errors.imageUrl && <Text c="red">{errors.imageUrl}</Text>} */}
        </Box>
        <Button w='100%' className='primary-button' onClick={(e)=>handleSubmit(e)}>Submit</Button>
      </Modal>

      <Button w='100%' className='primary-button' onClick={open}>New Category</Button>
    </>
  );
}