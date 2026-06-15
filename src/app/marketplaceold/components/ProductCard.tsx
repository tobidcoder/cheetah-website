import {
  Card,
  Text,
  Image,
  Group,
  Stack,
  Button,
  ActionIcon,
  Badge,
  Box,
} from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  badgeText?: string;
  badgeColor?: string;
  quantity?: number;
  onAdd: (id: string) => void;
  onRemove?: (id: string) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function ProductCard({
  id,
  name,
  price,
  image,
  description,
  category,
  badgeText,
  badgeColor = "blue",
  quantity = 0,
  onAdd,
  onRemove,
  size = "md",
}: ProductCardProps) {
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder h="100%">
      <Card.Section pos="relative">
        <Image src={image} height={size === "sm" ? 140 : 160} alt={name} />
        {badgeText && (
          <Badge
            color={badgeColor}
            variant="filled"
            pos="absolute"
            top={8}
            right={8}
            radius="sm"
            size="sm"
          >
            {badgeText}
          </Badge>
        )}
        {category && (
          <Badge
            color="gray"
            variant="light"
            pos="absolute"
            bottom={8}
            left={8}
            radius="sm"
            size="sm"
          >
            {category}
          </Badge>
        )}
        <ActionIcon
          variant="filled"
          color="green"
          size="md"
          radius="xl"
          pos="absolute"
          right={8}
          bottom={-16}
          onClick={() => onAdd(id)}
        >
          <IconPlus size={16} />
        </ActionIcon>
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Text fw={700} lineClamp={1}>
          ${price.toFixed(2)}
        </Text>
        <Text fw={500} size="sm" lineClamp={1}>
          {name}
        </Text>
        {description && (
          <Text size="xs" color="dimmed" lineClamp={2}>
            {description}
          </Text>
        )}
      </Stack>

      {quantity > 0 && onRemove && (
        <Group mt="md" justify="flex-end">
          <ActionIcon variant="light" color="red" onClick={() => onRemove(id)}>
            <IconMinus size={16} />
          </ActionIcon>
          <Text>{quantity}</Text>
          <ActionIcon variant="light" color="green" onClick={() => onAdd(id)}>
            <IconPlus size={16} />
          </ActionIcon>
        </Group>
      )}
    </Card>
  );
}
