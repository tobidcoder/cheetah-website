"use client";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
// import Image from '@tiptap/extension-image'
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Youtube from '@tiptap/extension-youtube';
import "@mantine/tiptap/styles.css";
import { useState, useEffect } from "react";
import { Text, Box, Modal, TextInput, NumberInput, Button, Group, Stack, AspectRatio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function BodyEditor({ body, setBody }:any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [ytUrl, setYtUrl] = useState('');
  const [ytWidth, setYtWidth] = useState<number>(640);
  const [ytHeight, setYtHeight] = useState<number>(480);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Youtube.configure({
        inline: false,
        autoplay: false,
        width: 640,
        height: 480,
      }),
    ],
    content: body,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setBody(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && body !== editor.getHTML() && !editor.isFocused) {
      // Only set content if it's genuinely different and editor is NOT focused
      // to avoid breaking active node views (like Youtube) or losing cursor position
      editor.commands.setContent(body, false);
    }
  }, [editor, body]);

  const handleAddVideo = () => {
    const videoId = getYoutubeId(ytUrl);
    if (videoId && editor) {
      editor
        .chain()
        .focus()
        .setYoutubeVideo({
          src: `https://www.youtube.com/embed/${videoId}`,
          width: ytWidth,
          height: ytHeight,
        })
        .run();
      
      setYtUrl("");
      close();
    }
  };

  return (
    <Box>
      <Modal 
        opened={opened} 
        onClose={close} 
        title="Insert YouTube Video" 
        centered
        radius="lg"
        styles={{
          content: { background: "#0a3d24", color: "#fdfdfd", border: "1px solid rgba(178,217,59,0.2)" },
          header: { background: "#0a3d24", color: "#fdfdfd" },
          close: { color: "#fdfdfd", '&:hover': { background: "rgba(178,217,59,0.1)" } }
        }}
      >
        <Stack gap="md">
          <TextInput
            label="YouTube URL"
            placeholder="https://www.youtube.com/watch?v=..."
            value={ytUrl}
            onChange={(e) => setYtUrl(e.currentTarget.value)}
            styles={{ input: { background: "rgba(253,253,253,0.05)", border: "1px solid rgba(178,217,59,0.2)", color: "#fdfdfd" } }}
          />
          
          <Group grow>
            <NumberInput
              label="Width"
              value={ytWidth}
              onChange={(v) => setYtWidth(Number(v))}
              min={320}
              styles={{ input: { background: "rgba(253,253,253,0.05)", border: "1px solid rgba(178,217,59,0.2)", color: "#fdfdfd" } }}
            />
            <NumberInput
              label="Height"
              value={ytHeight}
              onChange={(v) => setYtHeight(Number(v))}
              min={180}
              styles={{ input: { background: "rgba(253,253,253,0.05)", border: "1px solid rgba(178,217,59,0.2)", color: "#fdfdfd" } }}
            />
          </Group>

          {getYoutubeId(ytUrl) && (
            <Box>
              <Text size="sm" fw={700} mb={8} c="rgba(253,253,253,0.7)">Preview</Text>
              <AspectRatio ratio={16 / 9} style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(178,217,59,0.2)' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(ytUrl)}`}
                  title="YouTube Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          )}

          <Button 
            fullWidth 
            onClick={handleAddVideo} 
            disabled={!getYoutubeId(ytUrl)}
            radius="md"
            style={{ background: "#b2d93b", color: "#052315", fontWeight: 800 }}
          >
            Add Video
          </Button>
        </Stack>
      </Modal>

      <RichTextEditor 
        editor={editor} 
        variant="filled"
        styles={{
          root: {
            backgroundColor: "rgba(253,253,253,0.05)",
            border: "1px solid rgba(178,217,59,0.2)",
            borderRadius: "16px",
            minHeight: "400px",
            position: "relative",
          },
          toolbar: {
            backgroundColor: "#0a3d24",
            borderBottom: "1px solid rgba(178,217,59,0.15)",
            padding: "8px",
            zIndex: 10,
          },
          content: {
            backgroundColor: "transparent",
            color: "#fdfdfd",
            padding: "20px",
            minHeight: "350px",
            '& .ProseMirror': {
              minHeight: "350px",
              outline: "none",
              paddingTop: "10px",
              '& div[data-youtube-video]': {
                margin: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'move',
                '& iframe': {
                  width: '100%',
                  aspectRatio: '16 / 9',
                  height: 'auto',
                  borderRadius: '16px',
                  border: '1px solid rgba(178,217,59,0.2)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                },
                '&.ProseMirror-selectednode iframe': {
                  outline: '4px solid #b2d93b',
                  outlineOffset: '2px',
                }
              }
            },
            '& p': { color: "rgba(253,253,253,0.8)" },
            '& h1, & h2, & h3, & h4, & h5, & h6': { color: "#fdfdfd" },
          },
          control: {
            backgroundColor: "transparent",
            border: "none",
            color: "rgba(253,253,253,0.6)",
            '&:hover': {
              backgroundColor: "rgba(178,217,59,0.1)",
              color: "#b2d93b",
            },
            '&[data-active="true"], &[data-active]': {
              backgroundColor: "rgba(178,217,59,0.2)",
              color: "#b2d93b",
            }
          }
        }}
      >
        <RichTextEditor.Toolbar sticky stickyOffset={0}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control
              onClick={open}
              aria-label="Insert YouTube video"
              title="Insert YouTube video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </Box>
  );
}

