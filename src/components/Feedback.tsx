// import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import {
  Text,
  Title,
  Container,
  Box,
  Avatar,
  Group,
} from "@mantine/core";
import classes from "@/styles/Feedback.module.css";
import introClasses from "@/styles/Introduction.module.css";
import { IconStar, IconStarFilled } from "@tabler/icons-react";




export function Feedback() {
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${"48em"})`);
  

  return (
    <Container my={130} size={"md"} className={classes.inner}>
      <Box>
        <Title my='xl' order={1} ta={'center'} className={classes.title}>What Our Customers Say</Title>
        <Text my='xl' className='text-secondary' ta={'center'}><IconStarFilled/> <IconStarFilled/><IconStarFilled/><IconStarFilled/><IconStarFilled/></Text>
        <Container size='sm'>
        <Text fs='italic' fz='xl' my='xl' ta={'center'}>&ldquo;Switching to an integrated inventory and POS system transformed our operations. 
          We enjoy real-time data, streamlined transactions, and improved customer satisfaction. 
          Highly recommend for any retail business!&rdquo; </Text>
          <Group style={{disply:'flex', justifyContent:'center'}} justify='center' wrap="nowrap" gap="xs">
              <Group className={classes.user}  gap="xs" wrap="nowrap">
                <Avatar
                  size={60}
                  src={'/images/victoria.png'}
                />
                <Box>

                <Text fw='bold' size="md">Bassay Victoria</Text>
                <Text size="md">Khadash Shawarma & Smoothie</Text>
                </Box>
              </Group>
              <Avatar
                  size={60}
                  src={'/images/khadash.png'}
                />
          </Group>
          {/* <Text ta={'center'} fs='bold'> </Text> */}

        </Container>
      </Box>
     
      <Title fw={"bold"} ta={'center'} pt={64} className={classes.title}>
         Learn how real businesses reach their goals with Cheetah.
      </Title>
    </Container>
  );
}
