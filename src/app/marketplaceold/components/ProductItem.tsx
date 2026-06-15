import {
  Box,
  Card,
  Group,
  Text,
  Image,
  ActionIcon,
  Rating,
  Badge,
  Stack,
  rem,
  useMantineTheme,
  Button,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Product } from "./mockData";
import { useState } from "react";
import { useRouter } from "next/navigation";



interface ProductItemProps {
  product: Product;
  width?: number | string;
  onAdd: (id: string) => void;
}

export function ProductItem({ product, width = 180, onAdd }: ProductItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useMantineTheme();
  const router = useRouter();

  const { id, name, price, image, description, weight, size, rating } =
    product;

  return (
    <Box w={width} style={{ flex: "0 0 auto" }}>
      <Card

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/marketplace/product/${id}`)}
        padding="xs"
        radius="md"
        withBorder
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 200ms ease, box-shadow 200ms ease",

          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.shadows.md,
          },
        }}
      >
        <Card.Section
          style={{
            position: "relative",
            borderTopRightRadius: theme.radius.md,
            borderTopLeftRadius: theme.radius.md,
            overflow: "hidden",
          }}
        >
          <Image src={image || "/placeholder.jpg"} height={140} alt={name} />
          {/* {badges && badges.length > 0 && (
            <Badge
              color={badges[0].color}
              variant="light"
              style={{
                position: "absolute",
                top: theme.spacing.xs,
                right: theme.spacing.xs,
                pointerEvents: "none",
              }}
            >
              {badges[0].text}
            </Badge>
          )} */}
          <Button
            style={{
              position: "absolute",
              top: theme.spacing.xs,
              right: theme.spacing.xs,
              // pointerEvents: "none",
            }}
            variant="filled"
            color="green"
            radius="xl"
            size="md"
            onClick={(e) => {
              e.stopPropagation();
              onAdd(id);
            }}
          >
            <IconPlus size={16} /> {isHovered ? " Add to cart" : " Add"}
          </Button>
          {/* <ActionIcon
            variant="filled"
            color="green"
            radius="xl"
            size="md"
            onClick={() => onAdd(id)}
            style={{
              position: "absolute",
              right: theme.spacing.xs,
              bottom: -theme.spacing.md,
              boxShadow: theme.shadows.sm,
              zIndex: 2,

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <IconPlus size={16} />
          </ActionIcon> */}
        </Card.Section>

        <Stack
          gap={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            paddingTop: theme.spacing.md,
          }}
        >
          <Text
            style={{
              fontSize: rem(18),
              fontWeight: 700,
              color: theme.black,
            }}
          >
            ₦{price.toFixed(2)}
          </Text>

          <Text
            lineClamp={2}
            style={{
              fontSize: rem(14),
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            {name}
          </Text>

          {(weight || size) && (
            <Text
              style={{
                fontSize: rem(12),
                color: theme.colors.gray[6],
              }}
            >
              {weight || size}
            </Text>
          )}

          {rating && (
            <Group
              style={{
                display: "flex",
                alignItems: "center",
                gap: theme.spacing.xs,
              }}
            >
              <Rating value={rating.score} fractions={2} readOnly size="xs" />
              <Text fz="xs" c="dimmed">
                ({rating.count})
              </Text>
            </Group>
          )}
        </Stack>
      </Card>
    </Box>
  );
}
