"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  Text,
  TextInput,
  Grid,
  Image,
  Group,
  Stack,
  Container,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { SearchInput } from "./components/SearchInput";

interface Market {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

const markets: Market[] = [
  {
    id: "1",
    name: "Itedo Market",
    location: "Itedo Community, Lekki",
    image: "/images/itedo-market.png",
    description: "A unique market with a wide variety of products",
  },
  {
    id: "2",
    name: "Farmers Market",
    location: "Green Valley",
    image: "/images/itedo-market.png",
    description: "Fresh produce and local goods",
  },
  {
    id: "3",
    name: "Artisan Market",
    location: "Arts District",
    image: "/images/itedo-market.png",
    description: "Handcrafted items and unique finds",
  },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMarkets = markets.filter(
    (market) =>
      market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container size="xl" pb={"xl"} >
      <Stack gap="xl">
        <Container >
          <Text size="xl" fw={700} mb="md">
            Local Markets
          </Text>
          <SearchInput
            placeholder="Search markets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <TextInput
            placeholder="Search markets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}
        </Container>

        <Grid justify="center">
          {filteredMarkets.map((market) => (
            <Grid.Col key={market.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <Link
                href={`/marketplace/${market.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card shadow="sm" padding="lg" radius="lg" withBorder>
                  <Card.Section>
                    <Image src={market.image} height={160} alt={market.name} />
                  </Card.Section>

                  <Group mt="md" mb="xs">
                    <Text fw={500}>{market.name}</Text>
                  </Group>

                  <Text size="sm" color="dimmed">
                    {market.location}
                  </Text>

                  <Text size="sm" mt="xs">
                    {market.description}
                  </Text>
                </Card>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
