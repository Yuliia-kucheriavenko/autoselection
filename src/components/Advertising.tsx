import {Flex, Button, Container, Text} from "@chakra-ui/react";
import background from '../assets/bg_advertising.jpg';
import {POSTER} from "../constants";
export const Advertising = () => {
  return (
   <Container
     as="section"
     backgroundImage={background}
     h="300px"
     mt={20}
     maxW="container.xl"
     flexWrap="nowrap">
     <Flex justify="space-between">
       {POSTER.map(({desire, title, action, button, buttonFont}) => (
         <Flex
           flexDirection="column"
           key={title}
           ml="152px"
           mr="252px"
         >
           <Text
             fontSize={22}
             fontWeight={600}
             mt={10}
             mb={6}
           >
             {desire}
           </Text>
           <Text
             fontSize={32}
             fontWeight={500}
             mb={8}
           >
             {title}
           </Text>
           <Text
             fontSize={16}
             fontWeight={500}
             mb={8}
           >
             {action}
           </Text>
           <Button
             w="208px"
             borderRadius={15}
             bg={button}
             color={buttonFont}
             // mb={10}
           >
             Написати
           </Button>
         </Flex>
       ))}
     </Flex>

   </Container>
  );
};


