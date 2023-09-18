import { Link, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link to="/">
      <Image src={logo} w={{ xl: 'auto' }} />
    </Link>
  )
}
export default Logo
