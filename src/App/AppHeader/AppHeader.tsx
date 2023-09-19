import { Box, Button, Container, Flex, Link } from '@chakra-ui/react'
import Logo from '../../components/Logo'
import { NavBar } from './NavBar'

export const AppHeader = () => {
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
        py={6}
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
          <Link
            display={{ base: 'none', sm: 'block' }}
            href="+38 063 454 55 99"
            fontWeight={500}
          >
            +38 063 454 55 99
          </Link>
          <Button
            px={{ base: 2, sm: 6 }}
            py={3}
            bg="turquoise.100"
            borderRadius={15}
            color="white"
            fontSize={12}
            fontWeight={500}
            textTransform="uppercase"
          >
            Замовити дзвінок
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
