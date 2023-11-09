import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Grid,
} from '@chakra-ui/react'

interface Props {
  REVIEWS: string[];
  buttonLeft: string;
  buttonRight: string;
}

export const Reviews: React.FC<Props> = ({ REVIEWS, buttonLeft, buttonRight }) => {
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
    <Box as="section" py={10} flexDir="column" id="reviewsSection">
      <Container maxW="container.lg">
        <Heading
          textTransform="uppercase"
          mb={9}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          Відгуки
        </Heading>
        <Box 
        >
          <Grid
            display={{base: "grid", md: "none"}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
                gap={8}
                justifyItems="center"
                overflowX="hidden"
          >
            {REVIEWS.map((img, index) => (
                <Image
                key={img}
                src={img}
                w="270px"
                h="440px"
                display={
                  index >= currentIndex && index < currentIndex + 1
                    ? 'block'
                    : 'none'
                }
              />              
            ))}
          </Grid>
          <Grid
            display={{base: "none", md: "grid", lg: "none"}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}}
                gap={8}
                justifyItems="center"
                overflowX="hidden"
          >
            {REVIEWS.map((img, index) => (
                <Image
                key={img}
                src={img}
                w="286px"
                h="430px"
                display={
                  index >= currentIndex && index < currentIndex + 3
                    ? 'block'
                    : 'none'
                }
              />              
            ))}
          </Grid>
          <Grid
            display={{base: "none", lg: "grid"}}
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
                gap={8}
                justifyItems="center"
                overflowX="hidden"
          >
            {REVIEWS.map((img, index) => (
                <Image
                key={img}
                src={img}
                w="286px"
                h="430px"
                display={
                  index >= currentIndex && index < currentIndex + 4
                    ? 'block'
                    : 'none'
                }
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
      </Container>
    </Box>
  )
}
