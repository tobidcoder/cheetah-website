import {
  Title,
  Text,
  Container,
  Grid,
  GridCol,
  Card,
  Image,
} from "@mantine/core";

import classes from "@/styles/Introduction.module.css";

export function Features() {
  const features = [
    {
      title: "Data-Driven Decision-Making",
      description: "Leverage data to drive informed business decisions.",
      image: "/images/data.png",
      span: 7,
    },
    {
      title: "Sales Pipeline Tracking",
      description: "Monitor and optimize your sales pipeline.",
      image: "/images/sales.png",
      span: 5,
    },
    {
      title: "Manage Customers",
      description: "Centralize customer information and interactions.",
      image: "/images/customers.png",
      span: 4,
    },
    {
      title: "Track Order History",
      description: "Gain insights into your order history and trends.",
      image: "/images/order.png",
      span: 4,
    },
    {
      title: "Predictive Analytics",
      description: "Leverage data to predict future performance and trends.",
      image: "/images/analytics.png",
      span: 4,
    },
  ];
  return (
    <Container my={85} className={classes.wrapper} size={"xl"}>
      <Container mb={"lg"} size={"md"} className={classes.inner}>
        <Title fw={"bold"} className={classes.title}>
        Optimize your operations.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" className={classes.description}>
          Manage and streamline operations across multiple locations, sales channels, and employees to improve efficiency and your bottom line.
          </Text>
        </Container>
      </Container>

      <Grid mb={60}>
        {features.map((feature, i) => (
          <GridCol mb='xl' pb={0} span={{ base: 12, md: 6, lg: feature.span }} key={i}>
            <Card pb={0} pe={0} radius={15} bg={"#fafafa"}>
              <Text fz={"h2"} fw={"bold"}>
                {feature.title}
              </Text>
              <Text fz={"sm"}>{feature.description}</Text>
              <Image
                mt={"lg"}
                // maw={"250"}
                mah={"350"}
                className={classes.image}
                src={feature.image}
                alt="Cheetah"
              />
            </Card>
          </GridCol>
        ))}
      </Grid>

      <Container mb={"lg"} size={"md"} className={classes.inner}>
        <Title fw={"bold"} className={classes.title}>
          Tailored POS Solutions for Your Unique Store
        </Title>


        <Container p={0} size={600}>
          <Text size="xl" ta='center' className={classes.description}>
          It&apos;s free to get started with Cheetah Point of Sale. There are no setup fees or monthly fees. 
          </Text>
          </Container>
          </Container>
          <Image
        className={classes.image}
        src={"/images/pos.png"}
        alt="Cheetah POS"
      />
    </Container>
  );
}
