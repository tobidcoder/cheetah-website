'use client'
import { useEffect, useState } from "react";
import {fetch} from '@/app/api';

import cx from 'clsx';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import classes from './BlogsTable.module.css';


export function BlogsTable({refetch, onEdit}:any) {
  const [selection, setSelection] = useState(['1']);
  const [blogs, setBlogs] = useState<any>()
  
  
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch('blogs');
      setBlogs(data.data);
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch('blogs');
      setBlogs(data.data);
    };
    fetchBlogs();
  }, [refetch]);

//   const toggleRow = (id: string) =>
//     setSelection((current) =>
//       current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
//     );
//   const toggleAll = () =>
//     setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = blogs?.map((item:any, i:number) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
            {i+1}
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.created_by_profile_image} radius={26} />
            <Text size="sm" fw={500}>
              {item.created_by}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.title}</Table.Td>
        <Table.Td>{item.summary}</Table.Td>
        <Table.Td>
          <ActionIcon variant="subtle" color="teal" onClick={() => onEdit(item)}>
            <IconEdit size={16} />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea 
      my={40} 
      style={{ 
        background: "rgba(253,253,253,0.02)", 
        borderRadius: "20px", 
        border: "1px solid rgba(178,217,59,0.1)",
        padding: "20px"
      }}
    >
      <Table 
        miw={800} 
        verticalSpacing="md"
        styles={{
          table: { color: "#fdfdfd" },
          th: { 
            color: "#b2d93b !important", 
            borderBottom: "2px solid rgba(178,217,59,0.2) !important",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          },
          td: { borderBottom: "1px solid rgba(178,217,59,0.1) !important", color: "rgba(253,253,253,0.7)" },
          tr: {
            transition: "all 0.2s ease",
            '&:hover': {
              background: "rgba(178,217,59,0.04)"
            }
          }
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(60) }}>S/N</Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Blog Title</Table.Th>
            <Table.Th>Summary Preview</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}