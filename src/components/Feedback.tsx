import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  // useMantineTheme,
  rem,
  Container,
  Grid,
  GridCol,
  Box,
} from "@mantine/core";
import classes from "@/styles/Feedback.module.css";
import introClasses from "@/styles/Introduction.module.css";
import { IconStar } from "@tabler/icons-react";

interface CardProps {
  image: string;
  title: string;
  category: string;
}


export function Feedback() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${"48em"})`);
  

  return (
    <Container size={"sm"}>
      <Box>
        <Title my='xl' order={1} ta={'center'}>What Our Customers Say</Title>
        <Text my='xl' className='text-secondary' ta={'center'}><IconStar/> <IconStar/><IconStar/><IconStar/><IconStar/></Text>
        <Text fs='italic' fz='lg' my='xl' ta={'center'}>&ldquo;Switching to an integrated inventory and POS system transformed our operations. 
          We enjoy real-time data, streamlined transactions, and improved customer satisfaction. 
          Highly recommend for any retail business!&rdquo; </Text>
          <Text ta={'center'} fs='bold'>- Sarah Thompson, Fresh Market Grocers</Text>
      </Box>
    </Container>
  );
}
