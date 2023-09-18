import {Box, Button, Container, Flex, Heading, Image, Grid,} from "@chakra-ui/react";
import buttonLeft from '../assets/Buttons/buttonLeft.svg';
import buttonRight from '../assets/Buttons/buttonRigth.svg';
import {REVIEWS} from "../constants/reviews.ts";

export const Reviews = () => {
  return (
    <Box as="section" py={10}>
      <Container maxW="container.xl">
        <Heading textTransform="uppercase" pl={5} mb={9} textAlign={{ base: "center", lg: "start", }}>
          Відгуки
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}}
          gap={8}
          justifyItems="center"
          overflowX="hidden"
        >
          {REVIEWS.map((img,) => (
            <Image src={img} borderRadius={20} key={img}/>
          ))}
        </Grid>

       <Flex gap={6} justifyContent="center" mt={4} >
         <Button w="48px" h="48px" bgColor="#F2F2F2" >
           <Image src={buttonLeft} alt="Left Button" maxW="24px" />
         </Button>
         <Button w="48px" h="48px" bgColor="#F2F2F2">
           <Image src={buttonRight} alt="Right Button" maxW="24px" />
         </Button>
       </Flex>
      </Container>
    </Box>
  );
};

