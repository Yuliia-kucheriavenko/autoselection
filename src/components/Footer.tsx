import {Box, Container, Flex, Image, Link, Text,} from '@chakra-ui/react';
import Logo from '../components/Logo.tsx';
import { NavBar } from '../App/AppHeader/NavBar.tsx';
import telegram from '../assets/telegram.svg';
import viber from '../assets/viber.svg';
import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
export const Footer = () => {
  return (
    <Box
      as="footer"
      h={20}
      w="100%"
      bg="white"
    >
      <Container
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
        <Flex align="end" gap={2} flexDirection="column">
          <Flex gap={2}>
            <Link href="/">
              <Image src={telegram} alt="Telegram" w="24px" />
            </Link>
            <Link href="/">
              <Image src={viber} alt="Viber" w="24px" />
            </Link>
            <Link href="/">
              <Image src={whatsapp} alt="Whatsapp" w="24px" />
            </Link>
            <Link href="/">
              <Image src={instagram} alt="Instagram" w="24px" />
            </Link>
          </Flex>
          <Link
            href="+38 063 454 55 99"
          >
            <Text
              fontWeight={600}
            >
              +38 063 454 55 99
            </Text>
          </Link>
          <Link
            href="crosstim77@gmail.com"
          >
            crosstim77@gmail.com
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

