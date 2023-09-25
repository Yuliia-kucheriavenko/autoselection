import {Box, Container, Flex, Heading, Image, Text, Grid} from "@chakra-ui/react";
import {PREFERENCES} from "../constants/preferences.ts";

export const WhyWe = () => {
  return (
    <Box as="section" bg="#252525" py={10} id="whyweSection">
      <Container maxW="container.lg">
        <Heading
          textTransform="uppercase"
          mb={9}
          color="white"
          textAlign={{ base: "center", lg: "start", }}
        >
          Чому ми?
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}
          gap={4}
          justifyItems={{base: "center", lg: "start"}}
        >
          {PREFERENCES.map(({img, title, body}) => (
            <Flex
              bg="#FFFFFF"
              key={title}
              w={310}
              h={240}
              borderRadius={20}
              flexDirection="column"
            >
              <Image src={img} alt="preference" m={6} maxW="48px" maxH="48px" />
              <Text
                fontSize={16}
                px={6}
              >
                <Text
                  fontWeight={500}
                  textTransform="uppercase"
                >
                  {title}
                </Text>
                <Text
                  fontWeight={400}
                  py={4}
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
