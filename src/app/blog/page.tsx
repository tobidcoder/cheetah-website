/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "@mantine/core";
import { BlogCard } from "./BlogCard";
import { CategoryTab } from "./CategoryTab";
import { Intro } from "./Intro";

function page() {
  return (
    <Container size="lg">
      <Intro />
      <CategoryTab />
    </Container>
  );
}
export default page;
