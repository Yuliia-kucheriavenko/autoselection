import React from "react";
import {
  Button,
  Container,
  Heading,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import mainImage from "../assets/mainImage.png";
import { ModalsBody } from "../components/ModalBody";
import CallRequestModal from "./CallRequestModal";

const MainScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box
      as="section"
      backgroundImage={mainImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Container maxW="container.lg" pt={160} pb={75}>
        <Heading
          fontSize={48}
          fontWeight={600}
          mb={10}
          textTransform="uppercase"
          color="white"
        >
          Допомога у підборі <br /> та купівлі вживаного авто
        </Heading>

        <Text
          lineHeight="20px"
          fontSize={16}
          fontWeight={400}
          textTransform="uppercase"
          color="white"
        >
          <Text mb={8}>
            Бажаєш купити уживаний автомобіль? <br /> Але боїшся, що 90%
            автомобілів з пробігом мають <br /> приховані дефекти або завищену
            ціну?
          </Text>
          <Text mb={8}>Підбір у найкоротші терміни</Text>
          <Text mb={8}>Досягнемо знижки у продавця</Text>
          <Text mb={70}>
            Технічна перевірка 105 параметрів; Професійний підбір автомобілів{" "}
            <br />з юридичною та технічною гарантією.
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
          zIndex={0}
          pos="relative"
          onClick={onOpen}
          _hover={{ bgColor: "#48B8CE", fontWeight: "600", color: "white" }}
        >
          Замовити підбір
        </Button>
        <CallRequestModal isOpen={isOpen} onClose={onClose} />
      </Container>
    </Box>
  );
};

export default MainScreen;
