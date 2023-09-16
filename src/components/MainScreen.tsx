import {Button, Container, Flex, Heading, Text, Box } from "@chakra-ui/react";
import mainImage from '../assets/mainImage.jpg';

const MainScreen = () => {
  return (
   <Container
     maxW="container.lg"
     py={5}
     backgroundImage={mainImage}
   >
     <Box px={100} py={100}>
     <Heading mb={10} textTransform="uppercase" color="white">
       Допомога в підборі та покупці уживаного авто
     </Heading>

     <Flex align="start" gap={12} flexWrap="wrap" justifyContent="space-between">
       <Text
         fontSize={16}
         fontWeight={400}
         textTransform="uppercase"
         color="white"
       >
         <Text mb={8}>
           Бажаєш купити уживаний автомобіль?
           Але боїшся, що 90% автомобілів з пробігом мають приховані дефекти або завищену ціну?
         </Text>
         <Text mb={8}>
           Підбір за 3-7 днів
         </Text>
         <Text mb={8}>
           Досягнемо знижки у продавця до 15% від вартості автомобіля
         </Text>
         <Text>
           Технічна перевірка 112 параметрів;
           Професійний підбір автомобілів з юридичною та технічною гарантією.
         </Text>
       </Text>
       <Button
         fontSize="16"
         fontWeight={500}
         bg="yellow.300"
         textTransform="uppercase"
         borderRadius={15}
         color="black.300"
         px={46}
         py={6}
       >
         Замовити підбір
       </Button>
     </Flex>
     </Box>
   </Container>
  );
};

export default MainScreen;
