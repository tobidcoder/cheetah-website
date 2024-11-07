"use client";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from '@tiptap/extension-image'
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import "@mantine/tiptap/styles.css";
import { useState, useEffect } from "react";
import { Text } from "@mantine/core";

const initialContent = `
  <h2 style="text-align: center;">Welcome to Mantine rich text editor</h2>
  <p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. 
  <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p>
  <ul>
    <li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s></li>
    <li>Headings (h1-h6)</li>
    <li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li>
    <li>Ordered and bullet lists</li>
    <li>Text align</li>
    <li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li>
  </ul>
`;

export function BodyEditor({ body, setBody }:any) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      Superscript,
      // CodeBlockLowlight,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: body,
    onUpdate: ({ editor }) => {
      setBody(editor.getHTML()); // Update state on editor changes
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(body); // Set initial content
    }
  }, [editor]);

  return (
    <div>
      <Text mt="md">Body</Text>
      <RichTextEditor editor={editor} style={{ backgroundColor:'#fdfdfd', color: "#052315",minHeight: "200px" }} >
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
            {/* <RichTextEditor.CodeBlockLowlight /> */}
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
            <RichTextEditor.H5 />
            <RichTextEditor.H6 />
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
            {/* <RichTextEditor.Image /> */}
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
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>

      {/* Optional: Display or use the editor content */}
     
    </div>
  );
}
