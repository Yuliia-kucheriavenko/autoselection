import {Box, Container, Flex, Heading, Image, Text, Grid} from "@chakra-ui/react";
import {PLUSES} from "../constants/stages.ts";

export const WhatIGet = () => {
  return (
  <Box as="section"  bg="#252525" pt={10} pb={20} >
    <Container maxW="container.lg">
      <Heading
        textTransform="uppercase"
        color="white"
        whiteSpace="nowrap"
        pl={5}
        mb={9}
        fontSize={24}
        textAlign="center"
      >
        Ви отримуєте
      </Heading>
      <Grid
        templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
        gap={4}
        justifyItems="center"
      >
        {PLUSES.map(({img, title}) => (
          <Flex
            key={title}
            direction="column"
            align="center"
            gap={6}
          >
            <Image src={img} alt="plus" borderRadius={20} />
            <Text
              fontSize={16}
              fontWeight={400}
              color="white"
              maxW="252px"
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

