"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Group,
  Button,
  Select,
  Box,
  Paper,
  Accordion,
  Rating,
} from "@mantine/core";
import { IconShieldCheck } from "@tabler/icons-react";
import Link from "next/link";
import { categories } from "../../components/mockData";

interface SizeOption {
  size: string;
  price: number;
  pricePerUnit: number;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Find the product in our mock data
  let product;
  for (const category of categories) {
    product = category.products.find((p) => p.id === productId);
    if (product) break;
  }

  if (!product) {
    return (
      <Container size="md" py="xl">
        <Text>Product not found</Text>
      </Container>
    );
  }

  // Create size options based on the image example
  const sizeOptions: SizeOption[] = [
    { size: "3 oz", price: 1.99, pricePerUnit: 0.66 },
    { size: "5 oz", price: 4.49, pricePerUnit: 0.9 },
    { size: "8 oz", price: 6.79, pricePerUnit: 0.85 },
    { size: "18.5 oz", price: 9.99, pricePerUnit: 0.54 },
  ];

  const currentOption = sizeOptions.find(
    (opt) => opt.size === (selectedSize || "8 oz")
  );

  return (
    <Container size="xl" py="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Group>
              {product.rating && (
                <Group gap={4}>
                  <Rating value={product.rating.score} readOnly fractions={2} />
                  <Text size="sm" c="dimmed">
                    {product.rating.score} ({product.rating.count})
                  </Text>
                </Group>
              )}
            </Group>

            <Text size="xl" fw={600}>
              {product.name}
            </Text>

            <Text size="sm" c="dimmed">
              {currentOption?.size} • ${currentOption?.pricePerUnit}/oz
            </Text>

            <Link href="#" style={{ color: "inherit", textDecoration: "none" }}>
              <Text size="sm" c="blue" style={{ textDecoration: "underline" }}>
                Shop all {product.category}
              </Text>
            </Link>

            <Paper withBorder p="md" radius="md">
              <Stack gap="xs">
                {sizeOptions.map((option) => (
                  <Button
                    key={option.size}
                    variant={
                      selectedSize === option.size ? "filled" : "outline"
                    }
                    onClick={() => setSelectedSize(option.size)}
                    styles={{
                      root: {
                        backgroundColor:
                          selectedSize === option.size
                            ? "#228be6"
                            : "transparent",
                        border: "1px solid #228be6",
                        color:
                          selectedSize === option.size ? "white" : "#228be6",
                      },
                    }}
                  >
                    <Group justify="space-between" style={{ width: "100%" }}>
                      <Text>{option.size}</Text>
                      <Text>${option.price}</Text>
                    </Group>
                  </Button>
                ))}
              </Stack>
            </Paper>

            <Group>
              <Select
                value={quantity.toString()}
                onChange={(value) => setQuantity(Number(value))}
                data={Array.from({ length: 10 }, (_, i) => ({
                  value: (i + 1).toString(),
                  label: (i + 1).toString(),
                }))}
                style={{ width: 100 }}
              />
              <Button size="md" fullWidth>
                Add to cart
              </Button>
            </Group>

            <Group>
              <IconShieldCheck size={20} style={{ color: "#37B24D" }} />
              <Text size="sm" c="dimmed">
                100% satisfaction guarantee
              </Text>
            </Group>

            <Accordion variant="separated">
              <Accordion.Item value="details">
                <Accordion.Control>Details</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">{product.description}</Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="ingredients">
                <Accordion.Control>Ingredients</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">Product ingredients information...</Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="directions">
                <Accordion.Control>Directions</Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">Usage directions...</Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="returns">
                <Accordion.Control>
                  Free returns within 30 days
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">Return policy information...</Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
