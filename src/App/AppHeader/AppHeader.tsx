import React from 'react'
import { Box, Button, Container, Flex, Link, 
         Text, Modal, ModalOverlay, ModalContent, ModalHeader, 
         ModalCloseButton, ModalFooter, useDisclosure 
} from '@chakra-ui/react'
import Logo from '../../components/Logo'
import { NavBar } from './NavBar'
import { ModalsBody } from '../../components/ModalBody'

export const AppHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const phoneNumber = "+38 063 454 55 99";

  const callPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <Box
      as="header"
      zIndex={1000}
      pos="fixed"
      top={0}
      h={20}
      w="100%"
      bg="white"
      mt={4}
    >
      <Container
        pos="relative"
        zIndex={1000}
        top={-10}
        maxW="container.xl"
        alignItems="center"
        justifyContent="space-between"
        py={10}
        px={{ base: 4, sm: 8 }}
        display="flex"
      >
        <Flex align="center" gap={{ base: 2, xl: 12 }}>
          <Logo />
          <Box display={{ base: 'none', xl: 'block' }}>
            <NavBar />
          </Box>
        </Flex>

        <Flex align="center" gap={10}>
          <Text
            fontWeight={500}
            cursor="pointer"
            display={{base: 'none', md: 'block'}}
          >
            <Link 
              onClick={callPhoneNumber} 
              _hover={{ textDecoration: "none", color: "#48B8CE", fontWeight: "600" }}
            >
              {phoneNumber}
            </Link>
          </Text>
        
      <Button
        px={{ base: 2, sm: 6 }}
        py={3}
        bg="turquoise.100"
        borderRadius={15}
        color="white"
        fontSize={12}
        fontWeight={500}
        textTransform="uppercase"
        onClick={onOpen}
        _hover={{ bgColor: "#FFD100", fontWeight: "600" }}
      >
        Замовити дзвінок
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent zIndex={9999} bg="white">
          <ModalHeader>Замовити зворотній дзвінок</ModalHeader>
          <ModalCloseButton />
          <ModalsBody initialRef={initialRef} />
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Замовити
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Flex>
      </Container>
    </Box>
  )
}
