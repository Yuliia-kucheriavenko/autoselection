import {Container, Heading, Image, Box, Flex, Text, Grid} from "@chakra-ui/react";
import {ALL_SERVICES} from "../constants/services.ts";
export const AllServices = () => {
  return (
    <Box as="section" flexDir="column" bg="#252525" py={10}>
      <Container maxW="container.xl">
        <Heading
          textTransform="uppercase"
          color="white"
          pl={5}
          mb={9}
          textAlign="center"
        >
          Всі послуги включають в себе
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)'}}
          gap={4}
          justifyItems="center"
        >
          {ALL_SERVICES.map(({icon, title}) => (
            <Flex
              flexDirection="column"
              // justify="space-berween"
              key={title}
              align="center"
              gap={4}
              maxW="333px"
            >
                <Image src={icon} alt="serviceIcon1" mb={4} />
              <Text
                color="white"
                textAlign="center"
                fontSize={16}
                fontWeight={400}
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
