import { Button, Container, Heading, Text, Box } from '@chakra-ui/react'
import mainImage from '../assets/mainImage.png'

const MainScreen = () => {
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
        >
          Замовити підбір
        </Button>
      </Container>
    </Box>
  )
}

export default MainScreen
