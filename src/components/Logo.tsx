import { Link, Image } from '@chakra-ui/react';
import logo from '../assets/logo.jpg';


const Logo = () => {
  return (
    // @ts-ignore
    <Link to="/">
      <Image src={logo} w={{base: 20, xl: 'auto'}} />
    </Link>
  );
};
export default Logo;
