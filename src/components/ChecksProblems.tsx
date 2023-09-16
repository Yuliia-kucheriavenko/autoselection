import { Box, Container, Heading } from '@chakra-ui/react'

export const ChecksProblems = () => {
  return (
    <Box py={20} as="section">
      <Container maxW="container.xl">
        <Heading textTransform="uppercase" maxW={587}  mb={9} textAlign={{ base: "center", lg: "start", }}>
          Що ми перевіряємо і з якими проблемами стикаємось?
        </Heading>
      </Container>
    </Box>
  )
}
