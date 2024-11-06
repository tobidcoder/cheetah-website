import { Tabs, rem , TabsList, TabsPanel, TabsTab} from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { BlogCard } from './BlogCard';

export function CategoryTab() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs  mt='xl' variant="pills" radius="md" defaultValue="gallery">
      <TabsList  style={{ justifyContent:'center'}} pb='lg' mb='lg'>
        <TabsTab className='primary-button' value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </TabsTab>
        <TabsTab className='primary-button' value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </TabsTab>
        <TabsTab className='primary-button' value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </TabsTab>
      </TabsList>

      <TabsPanel value="gallery">
        <BlogCard/>
      </TabsPanel>

      <TabsPanel value="messages">
        Messages tab content
      </TabsPanel>

      <TabsPanel value="settings">
        Settings tab content
      </TabsPanel>
    </Tabs>
  );
}