import {Box, Container, Flex, Heading, Image, Text, Grid} from "@chakra-ui/react";
import {SALONS_PROBLEMS} from "../constants/problems.ts";

export const ProblemsInSalons = () => {
  return (
    <Box as="section" bg="#252525" py={10}>
      <Container maxW="container.lg">
        <Heading
          textTransform="uppercase"
          mb={9}
          color="white"
          maxW={803}
          textAlign={{ base: "center", lg: "start", }}
        >
          Що роблять з автомобілями <br /> для перепродажу
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}
          gap={4}
          justifyItems={{base: "center", lg: "start"}}
        >
          {SALONS_PROBLEMS.map(({img, title, body}) => (
            <Flex gap={8}  maxW={550} mt={4} align="start">
              <Image src={img} alt="Problem in salons" />
                <Text
                  color="white"
                >
                  <Text
                    fontSize={17}
                    fontWeight={600}
                    textTransform="uppercase"
                    pb={2}
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize={16}
                    fontWeight={400}
                  >
                    {body}
                  </Text>
                </Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

