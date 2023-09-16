import {Box, Container } from '@chakra-ui/react';
import AppHeaderLg from "./AppHeaderLg.tsx";
import AppHeaderSm from "./AppHeaderSm.tsx";

export const AppHeader = () => {
  return (
    <Container as="header" maxW="container.xl">
      <Box display={{base: 'none', lg: 'block'}}>
        <AppHeaderLg />
      </Box>
      <Box display={{base: 'block', lg: 'none'}}>
        <AppHeaderSm />
      </Box>
    </Container>
  )
}
