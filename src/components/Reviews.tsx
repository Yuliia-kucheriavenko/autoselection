import {Box, Button, Container, Flex, Heading, Image} from "@chakra-ui/react";
import buttonLeft from '../assets/Buttons/buttonLeft.svg';
import buttonRight from '../assets/Buttons/buttonRigth.svg';

// @ts-ignore
function SquareButton({children}) {
  return (
    <Button
      bg="#F2F2F2"
      border="none"
      outline="none"
      padding="0"
      margin="0"
      _hover={{ bg: "#97E3F2" }}
    >
      {children}
    </Button>
  );
}
export const Reviews = () => {
  return (
    <Box  as="section"  py={10}>
      <Container maxW="container.xl">
        <Heading textTransform="uppercase" pl={5} mb={9} textAlign={{ base: "center", lg: "start", }}>
          Відгуки
        </Heading>
       <Flex gap={6} >
         <SquareButton >
           <Image src={buttonLeft} alt="Left Button" />
         </SquareButton>
         <SquareButton >
           <Image src={buttonRight} alt="Right Button" />
         </SquareButton>
       </Flex>
      </Container>
    </Box>
  );
};

