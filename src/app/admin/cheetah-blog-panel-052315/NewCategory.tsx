'use client'
import {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button,Box,Text,Input } from '@mantine/core';
import {post} from '@/app/api'


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
    
    const data = await post('blog-categories', formData)
    close();
    
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
        <Button radius={'lg'} size="xl"
          miw="100%" className='primary-button' onClick={(e)=>handleSubmit(e)}>Submit</Button>
      </Modal>

      <Button radius={'lg'} size="xl"
          miw="100%" className='primary-button' onClick={open}>Add New Category</Button>
    </>
  );
}