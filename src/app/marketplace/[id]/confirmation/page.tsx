"use client";

import { useParams } from "next/navigation";
import { Card, Text, Button, Stack, Group, List } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

const markets = {
  "1": { name: "Main Market", location: "Downtown" },
  "2": { name: "Farmers Market", location: "Green Valley" },
  "3": { name: "Artisan Market", location: "Arts District" },
};

export default function ConfirmationPage() {
  const params = useParams();
  const marketId = params.id as string;
  const market = markets[marketId as keyof typeof markets];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack align="center" gap="xl">
            <IconCircleCheck size={64} color="green" />
            <div className="text-center">
              <Text size="xl" fw={700} mb="xs">
                Order Confirmed!
              </Text>
              <Text color="dimmed">
                Thank you for your order from {market?.name}
              </Text>
            </div>

            <Stack gap="md" className="w-full">
              <Card withBorder>
                <Text fw={700} mb="md">
                  What's Next?
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>
                    You'll receive an email confirmation shortly
                  </List.Item>
                  <List.Item>
                    Your order will be prepared by the market
                  </List.Item>
                  <List.Item>
                    You'll be notified when your order is ready for pickup
                  </List.Item>
                  <List.Item>Estimated pickup time: 30-45 minutes</List.Item>
                </List>
              </Card>

              <Card withBorder>
                <Text fw={700} mb="md">
                  Order Details
                </Text>
                <Stack gap="xs">
                  <Text size="sm">Market: {market?.name}</Text>
                  <Text size="sm">Location: {market?.location}</Text>
                  <Text size="sm">
                    Order Number: #{Math.floor(Math.random() * 1000000)}
                  </Text>
                </Stack>
              </Card>

              <Group grow>
                <Link href={`/market/${marketId}`}>
                  <Button variant="light" fullWidth>
                    Back to Market
                  </Button>
                </Link>
                <Link href="/market">
                  <Button fullWidth>Browse Other Markets</Button>
                </Link>
              </Group>
            </Stack>
          </Stack>
        </Card>
      </div>
    </div>
  );
}
