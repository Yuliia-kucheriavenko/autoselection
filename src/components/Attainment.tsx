import {Flex, Text, Grid, Box, Container} from '@chakra-ui/react';
import {ATTAINMENT} from "../constants";
export const Attainment = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="container.lg">
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
          gap={4}
          justifyItems="center"
        >
          {ATTAINMENT.map(({ number, title }) => (
            <Flex
              flexDirection="column"
              justify="center"
              key={number}
              align="center"
              mb={4}
            >
              <Flex >
                <Text
                  color="black.300"
                  fontSize={{ base: 32, md: 64 }}
                  fontWeight={600}
                  _hover={{fontWeight: "800"}}
                >
                  {number}
                </Text>
                <Text
                  color="yellow.300"
                  fontSize={{ base: 32, md: 64 }}
                  fontWeight={600}
                  pl={2}
                  _hover={{fontWeight: "800"}}
                >
                  +
                </Text>
              </Flex>
              <Text
                color="black.300"
                fontSize={16}
                fontWeight={500}
                textAlign="center"
              >
                {title}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
