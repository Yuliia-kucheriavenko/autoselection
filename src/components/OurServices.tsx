import {
  Text,
  Card,
  Image,
  Stack,
  Heading,
  Button,
  Container,
  Box,
  Grid
} from '@chakra-ui/react'
import { SERVICES } from '../constants/services.ts'
export const OurServices = () => {
  return (
    <Box as="section" bg="#252525" py={10}>
      <Container maxW="container.lg">
        <Heading textTransform="uppercase" mb={9} color="white" textAlign={{ base: "center", lg: "start", }}>
          Наші послуги
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}}
          gap={8}
          justifyItems="center"
        >
          {SERVICES.map(({ img, title, body }) => (
            <Card
              key={title}
              w="285px"
              align="center"
              h={500}
              pos="relative"
              borderTopRadius={15}
            >
              <Image src={img} alt="service1" />
              <Stack gap={10} mt={6}>
                <Heading
                  textAlign="center"
                  fontSize={22}
                  fontWeight={500}
                >
                  {title}
                </Heading>
                <Text
                  textAlign="center"
                  maxW={230}
                  fontSize={16}
                  fontWeight={400}
                >
                  {body}
                </Text>
              </Stack>
              <Button
                w="208px"
                borderRadius={15}
                bg="yellow.300"
                pos="absolute"
                bottom={35}
              >
                Детальніше
              </Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
