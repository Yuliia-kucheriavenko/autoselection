import { Link, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <Link onClick={scrollToTop}>
      <Image 
        src={logo} 
        display='block'
        w="155px"
        h="75px"
      />
    </Link>
  )
}
export default Logo
