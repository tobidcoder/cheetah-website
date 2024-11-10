'use client'
import { useEffect, useState } from "react";
import {fetch} from '@/app/api';

import cx from 'clsx';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem } from '@mantine/core';
import classes from './BlogsTable.module.css';


export function BlogsTable({refetch}:any) {
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

  const rows = blogs?.map((item, i) => {
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
      </Table.Tr>
    );
  });

  return (
    <ScrollArea my={80}>
        <hr/>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              S/N
            </Table.Th>
            <Table.Th>Author</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Summary</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}