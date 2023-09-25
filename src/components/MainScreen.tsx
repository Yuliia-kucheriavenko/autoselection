import React from 'react'
import { Button, Container, Heading, Text, Box, Modal, 
         ModalOverlay, ModalContent, ModalHeader, 
         ModalCloseButton, ModalFooter, useDisclosure  
       } from '@chakra-ui/react'
import mainImage from '../assets/mainImage.png'
import { ModalsBody } from '../components/ModalBody'

const MainScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

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
          Допомога в підборі <br /> та покупці уживаного авто
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
          <Text mb={8}>Підбір за 3-7 днів</Text>
          <Text mb={8}>
            Досягнемо знижки у продавця до 15% від вартості автомобіля
          </Text>
          <Text mb={70}>
            Технічна перевірка 112 параметрів; Професійний підбір автомобілів{' '}
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
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent zIndex={9999} bg="white">
          <ModalHeader>Замовити підбір</ModalHeader>
          <ModalCloseButton />
          <ModalsBody initialRef={initialRef} />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} >
              Замовити
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Container>
    </Box>
  )
}

export default MainScreen
