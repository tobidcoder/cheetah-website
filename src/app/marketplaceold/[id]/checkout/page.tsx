"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  Text,
  TextInput,
  Grid,
  Group,
  Stack,
  Button,
  Textarea,
  Divider,
} from "@mantine/core";
import Link from "next/link";

interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const items: Record<string, Item[]> = {
  "1": [
    {
      id: "1-1",
      name: "Fresh Tomatoes",
      price: 2.99,
      image: "/items/tomatoes.jpg",
      description: "Fresh, locally grown tomatoes",
    },
    {
      id: "1-2",
      name: "Organic Bread",
      price: 4.99,
      image: "/items/bread.jpg",
      description: "Freshly baked organic bread",
    },
  ],
  "2": [
    {
      id: "2-1",
      name: "Organic Apples",
      price: 1.99,
      image: "/items/apples.jpg",
      description: "Fresh organic apples",
    },
    {
      id: "2-2",
      name: "Local Honey",
      price: 8.99,
      image: "/items/honey.jpg",
      description: "Pure local honey",
    },
  ],
  "3": [
    {
      id: "3-1",
      name: "Handmade Pottery",
      price: 24.99,
      image: "/items/pottery.jpg",
      description: "Beautiful handmade pottery",
    },
    {
      id: "3-2",
      name: "Wool Scarf",
      price: 19.99,
      image: "/items/scarf.jpg",
      description: "Hand-knitted wool scarf",
    },
  ],
};

const markets = {
  "1": { name: "Main Market", location: "Downtown" },
  "2": { name: "Farmers Market", location: "Green Valley" },
  "3": { name: "Artisan Market", location: "Arts District" },
};

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const marketId = params.id as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    specialInstructions: "",
  });

  // In a real app, this would come from a cart context or state management
  const [cart] = useState<Record<string, number>>({
    "1-1": 2,
    "1-2": 1,
  });

  const marketItems = items[marketId] || [];
  const market = markets[marketId as keyof typeof markets];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the order to your backend
    console.log("Order submitted:", { formData, cart });
    router.push(`/market/${marketId}/confirmation`);
  };

  const cartItems = Object.entries(cart).map(([itemId, quantity]) => {
    const item = marketItems.find((i) => i.id === itemId);
    return { ...item, quantity };
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + (item?.price || 0) * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Stack gap="xl">
            <div>
              <Text size="xl" fw={700} mb="md">
                Checkout
              </Text>
              <form onSubmit={handleSubmit}>
                <Stack gap="md">
                  <TextInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <TextInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    label="Delivery Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    label="Special Instructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                  />
                  <Button type="submit" fullWidth>
                    Place Order
                  </Button>
                </Stack>
              </form>
            </div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={700} mb="md">
              Order Summary
            </Text>
            <Stack gap="md">
              {cartItems.map((item) => (
                <Group key={item?.id}>
                  <div>
                    <Text fw={500}>{item?.name}</Text>
                    <Text size="sm" color="dimmed">
                      Qty: {item?.quantity}
                    </Text>
                  </div>
                  <Text fw={500}>
                    ${((item?.price || 0) * item?.quantity).toFixed(2)}
                  </Text>
                </Group>
              ))}
              <Divider />
              <Group>
                <Text>Subtotal</Text>
                <Text>${subtotal.toFixed(2)}</Text>
              </Group>
              <Group>
                <Text>Tax (10%)</Text>
                <Text>${tax.toFixed(2)}</Text>
              </Group>
              <Group>
                <Text fw={700}>Total</Text>
                <Text fw={700}>${total.toFixed(2)}</Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
