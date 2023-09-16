import {Box, Container, Flex, Heading, Image, Text, Grid} from "@chakra-ui/react";
import {PROBLEMS} from "../constants/problems.ts";

export const Problems = () => {
  return (
    <Box as="section" py={10} >
      <Container maxW="container.xl">
        <Heading textTransform="uppercase" fontSize={24} mb={8} textAlign={{ base: "center", lg: "start", }}>
          Які проблемо ми зустрічаємо
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)',}}
          gap={4}
          justifyItems="center"
        >
          {PROBLEMS.map(({img, title, body}) => (
            <Flex
              key={title}
              flexDirection="row"
              justify="space-berween"
              align="space-berween"
              gap={10}
              mb={50}
              mr={110}
            >
              <Image src={img} alt="trouble" mb={4} maxW="48px" maxH="48px" />
              <Flex
                flexDirection="column"
                justify="space-berween"
                key={title}
                flexGrow={0}
                gap={2}
              >
                <Text
                  fontSize={16}
                  textTransform="uppercase"
                >
                  {title}
                </Text>
                <Box bg="#48B8CE" h={1} w={20}>
                </Box>
                <Text
                  fontSize={16}
                  fontWeight={400}
                >
                  {body}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

