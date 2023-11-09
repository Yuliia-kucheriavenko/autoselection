import {
  Text,
  Card,
  Image,
  Stack,
  Heading,
  Container,
  Box,
  Grid
} from '@chakra-ui/react'
import { SERVICES } from '../constants/services.ts'
export const OurServices = () => {
  return (
    <Box as="section" bg="#252525" py={10} id="ourServicesSection">
      <Container maxW="container.lg">
        <Heading 
          textTransform="uppercase" 
          mb={9} 
          color="white" 
          textAlign={{ base: "center", lg: "start", }}
        >
          Наші послуги
        </Heading>
        <Grid
          templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}}
          gap={6}
          justifyItems="center"
        >
          {SERVICES.map(({ img, title, body }) => (
            <Card
              key={title}
              w="265px"
              align="center"
              h={440}
              pos="relative"
              borderTopRadius={15}
            >
              <Image src={img} alt="service1" borderTopLeftRadius={15} borderTopRightRadius={15}/>
              <Stack gap={10} mt={6} px={5} >
                <Heading
                  textAlign="center"
                  fontSize={22}
                  fontWeight={500}
                >
                  {title}
                </Heading>
                <Text
                  textAlign="center"
                  fontSize={16}
                  fontWeight={400}
                >
                  {body}
                </Text>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
