import { Flex, Link } from '@chakra-ui/react'
import { NAV_LINKS } from '../../constants'

export const NavBar = () => {
  return (
    <Flex align="center" gap={7}>
      {NAV_LINKS.map(({ title, link }) => (
        <Link key={link} fontSize={14} fontWeight={500}>
          {`${title}`}
        </Link>
      ))}
    </Flex>
  )
}
