import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Grid,
  Center,
} from '@chakra-ui/react'
import buttonLeft from '../assets/Buttons/buttonLeft.svg'
import buttonRight from '../assets/Buttons/buttonRigth.svg'
import { REVIEWS } from '../constants/reviews.ts'
import {
  Carousel,
  CarouselItem,
  CarouselItems,
  useCarousel,
} from 'chakra-framer-carousel'

function Toolbar() {
  const { onNext, onPrevious } = useCarousel()
  return (
    <Flex gap={6} justifyContent="center" mt={4}>
      <Button w="48px" h="48px" bgColor="#F2F2F2" onClick={onNext}>
        <Image src={buttonLeft} alt="Left Button" maxW="24px" />
      </Button>
      <Button w="48px" h="48px" bgColor="#F2F2F2" onClick={onPrevious}>
        <Image src={buttonRight} alt="Right Button" maxW="24px" />
      </Button>
    </Flex>
  )
}

export const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
      );
    }
      return (
    <Box as="section" py={10} flexDir="column">
      <Container maxW="container.lg">
        <Heading
          textTransform="uppercase"
          mb={9}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          Відгуки
        </Heading>
        <Box display={{base: "block", md: "none"}}>
          <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                }}
                gap={8}
                justifyItems="center"
                overflowX="hidden"
          >
            {REVIEWS.map((img, index) => (
              <Image
                key={img}
                src={img}
                borderRadius={20}
                display={index === currentIndex ? 'block' : 'none'}
              />
            ))}
          </Grid>
          <Flex gap={6} justifyContent="center" mt={4}>
            <Button w="48px" h="48px" bgColor="#F2F2F2" onClick={handlePrev}>
              <Image src={buttonLeft} alt="Left Button" maxW="24px" />
            </Button>
            <Button w="48px" h="48px" bgColor="#F2F2F2" onClick={handleNext}>
              <Image src={buttonRight} alt="Right Button" maxW="24px" />
            </Button>
          </Flex>
        </Box>

        <Center display={{base: "none", md: "flex"}} flexDir="column" w="100%" alignItems="center">
          <Carousel>
            <CarouselItems>
              {REVIEWS.map((image, index) => {
                return (
                  <CarouselItem index={index} key={image}>
                    <Image src={image} />
                  </CarouselItem>
                )
              })}
            </CarouselItems>
            <Toolbar />
          </Carousel>
        </Center>
      </Container>
    </Box>
  )
}
