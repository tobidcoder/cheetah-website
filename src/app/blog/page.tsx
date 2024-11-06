import { Container } from "@mantine/core";
import { BlogCard } from "./BlogCard";
import { CategoryTab } from "./CategoryTab";

function page() {
  return (
  <Container size='lg'>
    <CategoryTab/>
  </Container>
  );
}
export default page;
