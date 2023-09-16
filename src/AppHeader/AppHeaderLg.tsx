import { Box, Flex, Link } from '@chakra-ui/react';
import Logo from '../components/Logo';
import { NavBar } from './NavBar';

const AppHeaderLg = () => {
  return (
    <Flex align="center" py={6} px={2.5}>
      <Logo />

      <Box flexGrow={1} maxW={700} ml={{base: 6, xl: 10}}>
        <NavBar />
      </Box>

      <Flex
        ml={{base: 10, xl: 20}}
        flexGrow={1}
        align="center"
        maxW={500}
        justify="space-between"
      >
        <Flex align="start" gap={5}>
          <Link href="+38 063 454 55 99">
            +38 063 454 55 99
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppHeaderLg;
