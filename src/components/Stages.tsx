import {Box, Container, Flex, Heading, Image, Text, Grid} from "@chakra-ui/react";
import stage from '../assets/Stages/stages.svg';
import {STAGES} from "../constants/stages.ts";

export const Stages = () => {
  return (
    <Box as="section" bg="#252525" py={10} id="buyCarSection">
      <Container maxW="container.lg">
        <Heading textTransform="uppercase" mb={9} color="white" maxW={843} textAlign={{ base: "center", lg: "start", }}>
          Купити автомобіль тепер не складніше, ніж замовити піцу
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
          gap={4}
          justifyItems="center"
        >
          {STAGES.map(({img, progress, title}) => (
            <Flex
              key={title}
              direction="column"
              align="center"
              gap={4}
            >
              <Image
                src={img}
                alt="stage"
              />
              <Image src={progress} alt="progress" />
              <Text
                fontSize={16}
                fontWeight={500}
                color="white"
                textAlign="center"
                maxW={250}
              >
                {title}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Flex
          align="center"
          justifyContent="center"
          display={{base: 'none', lg: 'flex'}}
          mt={5}
        >
          <Image src={stage} w={1194} />
        </Flex>
      </Container>
    </Box>
  );
};

