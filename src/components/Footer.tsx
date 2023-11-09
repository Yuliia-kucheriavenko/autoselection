import {useState} from 'react';
import {Box, Container, Flex, Image, Link, Text, } from '@chakra-ui/react';
import Logo from '../components/Logo.tsx';
import { NavBar } from '../App/AppHeader/NavBar.tsx';
import telegram from '../assets/telegram.svg';
import viber from '../assets/viber.svg';
import whatsapp from '../assets/whatsapp.svg';
import instagram from '../assets/instagram.svg';
import telegramHover from '../assets/telegreamHover.svg';
import viberHover from '../assets/viberHover.svg';
import whatsappHover from '../assets/whatsappHover.svg';
import instagramHover from '../assets/instagramHover.svg';

export const Footer = () => {
  const phoneNumber = "+38 063 454 55 99";
  const telegramLink = "https://t.me/Artem_autopodborr";

  const callPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  
  const [telegramHovered, setTelegramHovered] = useState(false);
  const [viberHovered, setViberHovered] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [instagramHovered, setInstagramHovered] = useState(false);


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
            <Link 
              href={telegramLink} 
              isExternal 
              onMouseEnter={() => setTelegramHovered(true)}
              onMouseLeave={() => setTelegramHovered(false)}
            >
              <Image 
                src={telegramHovered ? telegramHover : telegram}
                alt="Telegram" 
                w="24px" 
              />
            </Link>
            <Link 
              href={`tel:${phoneNumber}`}
              target="_blank"
              onMouseEnter={() => setViberHovered(true)}
              onMouseLeave={() => setViberHovered(false)}
              >
              <Image 
                src={viberHovered ? viberHover : viber}
                alt="Viber"
                w="24px" 
              />
            </Link>
            <Link 
              href={`tel:${phoneNumber}`}
              target="_blank"
              onMouseEnter={() => setWhatsappHovered(true)}
              onMouseLeave={() => setWhatsappHovered(false)}
            >
              <Image 
                src={whatsappHovered ? whatsappHover : whatsapp} 
                alt="Whatsapp" 
                w="24px" 

              />
            </Link>
            
            <Link 
              href="https://instagram.com/artem_autopodbor?igshid=MzRlODBiNWFlZA==" 
              target="_blank"
              onMouseEnter={() => setInstagramHovered(true)}
              onMouseLeave={() => setInstagramHovered(false)}
            >
              <Image 
                src={instagramHovered ? instagramHover : instagram} 
                alt="Instagram" 
                w="24px" 
              />
            </Link>
          </Flex>
          <Text
            fontWeight={500}
            cursor="pointer"
          >
            <Link 
              onClick={callPhoneNumber} 
              _hover={{ textDecoration: "none", color: "#48B8CE", fontWeight: "600" }}
            >
              {phoneNumber}
            </Link>
          </Text>
          <Link 
            display={{base: 'none', md: 'block'}}
            href="mailto:crosstim77@gmail.com"
            _hover={{ textDecoration: "none", color: "#48B8CE", fontWeight: "600" }}
          >
            crosstim77@gmail.com
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
