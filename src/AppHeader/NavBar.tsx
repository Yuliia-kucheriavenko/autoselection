import { Flex, Link, } from "@chakra-ui/react"
import { NAV_LINKS } from '../constants/index';

// const MainNavLink = chakra(Link, {
//   baseStyle: {
//     fontSize: 13,
//     transition: 'all 0.2s',
//     fontWeight: 500,
//     letterSpacing: '.35px',
//     color: 'grey.100',
//
//     _hover: {
//       fontWeight: 800,
//     }
//   }
// })

export const NavBar = () => {
  return (
    <Flex align="center" justify="space-between" gap={1}>
      {NAV_LINKS.map(({title, link}) => (
        <Link key={link}>
          {`${title}`}
        </Link>
      ))}
    </Flex>
  )
}
