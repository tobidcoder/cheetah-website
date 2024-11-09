// import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import {
  Text,
  Title,
  Container,
  Box,
} from "@mantine/core";
import classes from "@/styles/Feedback.module.css";
import introClasses from "@/styles/Introduction.module.css";
import { IconStar } from "@tabler/icons-react";




export function Feedback() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${"48em"})`);
  

  return (
    <Container mb={"lg"} size={"md"} className={classes.inner}>
      <Box>
        <Title my='xl' fz={60} order={1} ta={'center'}>What Our Customers Say</Title>
        <Text my='xl' className='text-secondary' ta={'center'}><IconStar/> <IconStar/><IconStar/><IconStar/><IconStar/></Text>
        <Text fs='italic' fz='lg' my='xl' ta={'center'}>&ldquo;Switching to an integrated inventory and POS system transformed our operations. 
          We enjoy real-time data, streamlined transactions, and improved customer satisfaction. 
          Highly recommend for any retail business!&rdquo; </Text>
          <Text ta={'center'} fs='bold'>- Bassay Victoria, Khadash Shawarma & Smoothie</Text>
      </Box>
     
      <Title fw={"bold"} ta={'center'} pt={64} className={classes.title}>
         Learn how real businesses reach their goals with Cheetah.
      </Title>
    </Container>
  );
}
