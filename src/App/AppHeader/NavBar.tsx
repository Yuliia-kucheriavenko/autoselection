import React from 'react';
import { Flex, Link } from '@chakra-ui/react'
import { NAV_LINKS } from '../../constants'

export const NavBar: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <Flex align="center" gap={7}>
      {NAV_LINKS.map(({ title, id }) => (
        <Link 
          key={id}
          fontSize={16} 
          fontWeight={500} 
          _hover={{ textDecoration: "none", color: "#48B8CE", fontWeight: "600" }}
          onClick={() => scrollToSection(id)}
        >
          {`${title}`}
        </Link>
      ))}
    </Flex>
  )
}
