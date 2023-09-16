import {Flex, Link} from '@chakra-ui/react';
import Logo from "../components/Logo.tsx";

const AppHeaderSm = () => {
  return (
    <Flex align="center" py={6} px={2.5} justify="space-between">
      <Logo />

      <Flex>
        <Link href="+38 063 454 55 99">
          +38 063 454 55 99
        </Link>
      </Flex>
    </Flex>
  );
};

export default AppHeaderSm;
