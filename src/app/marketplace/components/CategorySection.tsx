import {
  Text,
  Group,
  Box,
  ScrollArea,
  Button,
  SimpleGrid,
  Stack,
  Title,
  Flex,
  rem,
//   createStyles,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useRef } from "react";
// import { createStyles } from "@mantine/core";

import { useMantineTheme } from "@mantine/core";





interface CategorySectionProps {
  title: string;
  viewAllLink?: string;
  viewAllCount?: number;
  children: React.ReactNode;
  scrollable?: boolean;
}

export function CategorySection({
  title,
  viewAllLink,
  viewAllCount,
  children,
  scrollable = true,
}: CategorySectionProps) {
  const theme = useMantineTheme();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollAreaRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scrollLeft = () => {
    if (!scrollAreaRef.current) return;
    scrollAreaRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollAreaRef.current) return;
    scrollAreaRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <Stack mb="xl">
      <Flex justify="space-between" align="center">
        <Title order={2} fw={600}>
          {title}
        </Title>
        {viewAllLink && (
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              View all {viewAllCount && `(${viewAllCount}+)`}
            </Text>
            <Group gap={8}>
              <Button
                variant="subtle"
                color="gray"
                p={0}
                // classNames={classes.navigationButton}
                onClick={scrollLeft}
                disabled={!showLeftArrow}
                style={{
                  opacity: showLeftArrow ? 1 : 0.5,
                  width: rem(32),
                  height: rem(32),
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.gray[6],
                  border: `1px solid ${theme.colors.gray[3]}`,
                  backgroundColor: theme.white,
                  boxShadow: theme.shadows.sm,
                  transition: "background-color 200ms ease",
                  "&:hover": {
                    backgroundColor: theme.colors.gray[0],
                  },
                }}
              >
                <IconChevronLeft size={16} />
              </Button>
              <Button
                variant="subtle"
                color="gray"
                p={0}
                // className={classes.navigationButton}
                onClick={scrollRight}
                disabled={!showRightArrow}
                style={{
                  opacity: showRightArrow ? 1 : 0.5,
                  width: rem(32),
                  height: rem(32),
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.gray[6],
                  border: `1px solid ${theme.colors.gray[3]}`,
                  backgroundColor: theme.white,
                  boxShadow: theme.shadows.sm,
                  transition: "background-color 200ms ease",
                  "&:hover": {
                    backgroundColor: theme.colors.gray[0],
                  },
                }}
              >
                <IconChevronRight size={16} />
              </Button>
            </Group>
          </Group>
        )}
      </Flex>

      {scrollable ? (
        <Box style={{ position: "relative" }}>
          <Box
            ref={scrollAreaRef}
            onScroll={handleScroll}
            // className={classes.scrollArea}
            w="100%"
            style={{
              overflow: "hidden",
              display: "flex",
              gap: "1rem",
              overflowX: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Opera
              },
            }}
          >
            {children}
          </Box>
        </Box>
      ) : (
        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 5 }}>
          {children}
        </SimpleGrid>
      )}
    </Stack>
  );
}
