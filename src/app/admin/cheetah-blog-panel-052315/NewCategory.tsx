'use client'
import {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Box, Text, Input, Group } from '@mantine/core';
import {post} from '@/app/api'


export default function NewCategory({ categories, onRefetch } : any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // if (!validateForm()) return;
    
    const formData = {
      name:name,
      description:description,
    };
    
    if (editingId) {
       const { put } = await import('@/app/api');
       await put(`blog-categories/${editingId}`, formData);
    } else {
       await post('blog-categories', formData);
    }
    
    setName("");
    setDescription("");
    setEditingId(null);
    if(onRefetch) onRefetch();
  };

  const startEdit = (cat: any) => {
     setName(cat.name);
     setDescription(cat.description || "");
     setEditingId(cat.id);
  };

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={() => {
          close();
          setName("");
          setDescription("");
          setEditingId(null);
        }} 
        title={<Text fw={800} fz="lg" c="#fdfdfd">Manage Categories</Text>}
        radius="lg"
        styles={{
          content: { background: "#052315", border: "1px solid rgba(178,217,59,0.2)" },
          header: { background: "#052315", borderBottom: "1px solid rgba(178,217,59,0.1)" },
          close: { color: "#fdfdfd", '&:hover': { background: "rgba(178,217,59,0.1)" } }
        }}
      >
        <Box>
          <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Category Name</Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="lg"
            radius="lg"
            variant="filled"
            styles={{
              input: {
                background: "rgba(253,253,253,0.05)",
                border: "1px solid rgba(178,217,59,0.2)",
                color: "#fdfdfd",
              }
            }}
            placeholder="e.g., Inventory Management"
          />
        </Box>
        <Box mt="md">
          <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Description</Text>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            size="lg"
            radius="lg"
            variant="filled"
            styles={{
              input: {
                background: "rgba(253,253,253,0.05)",
                border: "1px solid rgba(178,217,59,0.2)",
                color: "#fdfdfd",
              }
            }}
            placeholder="Brief description of this category"
          />
        </Box>
        <Group mt={32}>
            {editingId && (
                <Button 
                    radius="lg" 
                    size="lg"
                    variant="outline"
                    color="gray"
                    onClick={() => {
                        setEditingId(null);
                        setName("");
                        setDescription("");
                    }}
                >
                    Cancel
                </Button>
            )}
            <Button 
            radius="lg" 
            size="lg"
            flex={1}
            style={{ background: "#b2d93b", color: "#052315", fontWeight: 700 }}
            onClick={(e) => handleSubmit(e)}
            >
            {editingId ? "Update Category" : "Add Category"}
            </Button>
        </Group>

        <Box mt="xl">
            <Text fw={700} fz="sm" mb={8} c="rgba(253,253,253,0.7)">Existing Categories</Text>
            {categories?.map((cat: any) => (
                <Group key={cat.id} justify="space-between" p="sm" style={{ borderBottom: "1px solid rgba(178,217,59,0.1)" }}>
                    <Text size="sm" c="#fdfdfd">{cat.name}</Text>
                    <Button size="xs" variant="subtle" color="teal" onClick={() => startEdit(cat)}>Edit</Button>
                </Group>
            ))}
        </Box>
      </Modal>

      <Button 
        radius="lg" 
        size="lg"
        variant="outline"
        style={{ 
          borderColor: "rgba(178,217,59,0.5)", 
          color: "#b2d93b",
          background: "transparent"
        }}
        onClick={open}
      >
        Manage Categories
      </Button>
    </>
  );
}