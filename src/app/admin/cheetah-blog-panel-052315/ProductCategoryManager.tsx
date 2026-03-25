'use client'
import {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Box, Text, Input, Group, ScrollArea } from '@mantine/core';
import { post, fetch as apiFetch } from '@/app/api'
import { useEffect } from 'react';


export default function ProductCategoryManager() {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchProductCategories = async () => {
    setLoading(true);
    const data = await apiFetch('product-categories');
    // Handle the case where it might be wrapped in .data from a Collection
    const items = data?.data || data || [];
    setCategories(items);
    setLoading(false);
  };

  useEffect(() => {
    if (opened) {
      fetchProductCategories();
    }
  }, [opened]);

  const handleSubmit = async (e: any) => {
    const formData = {
      name: name,
      description: description,
    };
    
    setLoading(true);
    if (editingId) {
      const { put } = await import('@/app/api');
      await put(`product-categories/${editingId}`, formData);
    } else {
      await post('product-categories', formData);
    }
    
    setName('');
    setDescription('');
    setEditingId(null);
    fetchProductCategories();
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
        title={<Text fw={800} fz="lg" c="#fdfdfd">Manage Product Categories</Text>}
        radius="lg"
        size="lg"
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
            placeholder="e.g., Electronics"
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
            disabled={loading}
            style={{ background: "#b2d93b", color: "#052315", fontWeight: 700 }}
            onClick={(e) => handleSubmit(e)}
          >
            {editingId ? "Update Product Category" : "Add Product Category"}
          </Button>
        </Group>

        <Box mt={40}>
          <Text fw={700} fz="sm" mb={16} c="#b2d93b" tt="uppercase" style={{ letterSpacing: '1px' }}>Existing Product Categories</Text>
          <ScrollArea h={300} type="always" offsetScrollbars>
             <Box pr="md">
               {categories.length === 0 && !loading && <Text c="dimmed" size="sm">No product categories found.</Text>}
               {categories?.map((cat: any) => (
                  <Group key={cat.id} justify="space-between" py="sm" style={{ borderBottom: "1px solid rgba(178,217,59,0.1)" }}>
                      <Box>
                          <Text size="sm" fw={600} c="#fdfdfd">{cat.name}</Text>
                          <Text size="xs" c="dimmed" lineClamp={1}>{cat.description || "No description"}</Text>
                      </Box>
                      <Button size="xs" variant="subtle" color="teal" onClick={() => startEdit(cat)}>Edit</Button>
                  </Group>
                ))}
             </Box>
          </ScrollArea>
        </Box>
      </Modal>

      <Button 
        radius="lg" 
        size="lg"
        variant="outline"
        fullWidth
        style={{ 
          borderColor: "rgba(178,217,59,0.3)", 
          color: "rgba(178,217,59,0.8)",
          background: "rgba(178,217,59,0.02)",
          fontWeight: 700,
          borderStyle: "dashed"
        }}
        onClick={open}
      >
        Manage Product Categories
      </Button>
    </>
  );
}
