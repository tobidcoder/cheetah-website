"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  Text,
  TextInput,
  Grid,
  Image,
  Group,
  Stack,
  Button,
  ActionIcon,
  Badge,
  Container,
  Box,
  ScrollArea,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSearch,
  IconShoppingCart,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { SearchInput } from "../components/SearchInput";
import { CategorySection } from "../components/CategorySection";
import { ProductItem } from "../components/ProductItem";
import { categories } from "../components/mockData";

// Define styles

interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const items: Record<string, Item[]> = {
  "1": [
    {
      id: "1-1",
      name: "Fresh Tomatoes",
      price: 2.99,
      image: "/items/tomatoes.jpg",
      description: "Fresh, locally grown tomatoes",
      category: "Produce",
    },
    {
      id: "1-2",
      name: "Organic Bread",
      price: 4.99,
      image: "/items/bread.jpg",
      description: "Freshly baked organic bread",
      category: "Bakery",
    },
  ],
  "2": [
    {
      id: "2-1",
      name: "Organic Apples",
      price: 1.99,
      image: "/items/apples.jpg",
      description: "Fresh organic apples",
      category: "Produce",
    },
    {
      id: "2-2",
      name: "Local Honey",
      price: 8.99,
      image: "/items/honey.jpg",
      description: "Pure local honey",
      category: "Pantry",
    },
  ],
  "3": [
    {
      id: "3-1",
      name: "Handmade Pottery",
      price: 24.99,
      image: "/items/pottery.jpg",
      description: "Beautiful handmade pottery",
      category: "Artisan",
    },
    {
      id: "3-2",
      name: "Wool Scarf",
      price: 19.99,
      image: "/items/scarf.jpg",
      description: "Hand-knitted wool scarf",
      category: "Artisan",
    },
  ],
};

const markets = {
  "1": { name: "Itedo Market", location: "Itedo Community, Lekki" },
  "2": { name: "Farmers Market", location: "Green Valley" },
  "3": { name: "Artisan Market", location: "Arts District" },
};

export default function MarketDetailsPage() {
  const theme = useMantineTheme();

  const params = useParams();
  const marketId = params.id as string;
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});

  const marketItems = items[marketId] || [];
  const market = markets[marketId as keyof typeof markets];

  const filteredItems = marketItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      products: category.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.products.length > 0);

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    let item;

    // First check market items
    item = marketItems.find((i) => i.id === itemId);

    // Then check category products if not found
    if (!item) {
      for (const category of categories) {
        const found = category.products.find(
          (product) => product.id === itemId
        );
        if (found) {
          item = found;
          break;
        }
      }
    }

    return total + (item?.price || 0) * quantity;
  }, 0);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <Container
      size="xl"
      pb="xl"
      style={{ marginBottom: totalItems > 0 ? 80 : 0 }}
    >
      <Stack gap="xl">
        <Container>
          <Text size="xl" fw={700} mb="xs">
            {market?.name}
          </Text>
          <Text size="sm" color="dimmed" mb="md">
            {market?.location}
          </Text>
          <SearchInput
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Container>

        {filteredCategories.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            viewAllLink={`/marketplace/${marketId}/category/${category.id}`}
            viewAllCount={category.count}
          >
            {category.products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                width={200}
                onAdd={addToCart}
              />
            ))}
          </CategorySection>
        ))}

        {filteredCategories.length === 0 &&
          searchQuery !== "" &&
          filteredItems.length > 0 && (
            <CategorySection
              title="Search Results"
              viewAllLink=""
              viewAllCount={filteredItems.length}
            >
              {filteredItems.map((item) => (
                <ProductItem
                  key={item.id}
                  product={item}
                  width={200}
                  onAdd={addToCart}
                />
              ))}
            </CategorySection>
          )}

        {filteredCategories.length === 0 &&
          searchQuery !== "" &&
          filteredItems.length === 0 && (
            <Text ta="center" fz="lg" fw={500} mt="xl">
              No items found matching &apos;{searchQuery}&apos;
            </Text>
          )}

        {totalItems > 0 && (
          <Paper
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              color: theme.black,
              backgroundColor: theme.white,
              borderTop: `1px solid ${theme.colors.gray[3]}`,
              padding: theme.spacing.md,
              boxShadow: theme.shadows.md,
              zIndex: 1000,
            }}
          >
            <Group>
              <Group
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: theme.spacing.xs,
                }}
              >
                <IconShoppingCart size={20} />
                <Text fw={500}>{totalItems} items</Text>
              </Group>
              <Group>
                <Text fw={700}>Total: ${cartTotal.toFixed(2)}</Text>
                <Button
                  component={Link}
                  href={`/marketplace/${marketId}/checkout`}
                  radius="md"
                  size="sm"
                >
                  Checkout
                </Button>
              </Group>
            </Group>
          </Paper>
        )}
      </Stack>
    </Container>
  );
}
