import { Flex, Button, Container, Text, Box } from '@chakra-ui/react'
import background from '../assets/bg_advertising.jpg'
export const Advertising = () => {
  return (
    <Box
      as="section"
      backgroundImage={background}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Container maxW="container.xl" flexWrap="nowrap" py={10}>
        <Flex justify="center" gap={{ base: 100, lg: 300 }} align="center">
          <Flex flexDirection="column" align={{ base: 'center', sm: 'start' }}>
            <Text fontSize={22} fontWeight={600} mb={6}>
              Бажаєте знайти
            </Text>
            <Text fontSize={32} fontWeight={500} mb={8}>
              Автівку вашої мрії?
            </Text>
            <Text fontSize={16} fontWeight={500} mb={8}>
              Напишіть нам в телеграм прямо зараз
            </Text>
            <Button
              w="208px"
              borderRadius={15}
              bg="white"
              color="black"
              // mb={10}
            >
              Написати
            </Button>
          </Flex>
          <Flex flexDirection="column" display={{ base: 'none', sm: 'flex' }}>
            <Text fontSize={22} fontWeight={600} mb={6}>
              Бажаєте замовити
            </Text>
            <Text fontSize={32} fontWeight={500} mb={8}>
              Разовий огляд?
            </Text>
            <Text fontSize={16} fontWeight={500} mb={8}>
              Напишіть нам в телеграм прямо зараз
            </Text>
            <Button
              w="208px"
              borderRadius={15}
              bg="black"
              color="white"
              // mb={10}
            >
              Написати
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
