import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import check from '../assets/check.png'
import first from '../assets/problemCategory/category/first.png'
import firstHover from '../assets/problemCategory/category/firstHover.png'
import second from '../assets/problemCategory/category/second.png'
import secondHover from '../assets/problemCategory/category/secondHover.png'
import fourth from '../assets/problemCategory/category/fourth.png'
import fourthHover from '../assets/problemCategory/category/fourthHover.png'
import fifth from '../assets/problemCategory/category/fifth.png'
import fifthHover from '../assets/problemCategory/category/fifthHover.png'
import { useMemo, useState } from 'react'
import { descriptionByCategory } from '../constants/checkProblems'

const categoryes = [
  {
    title: 'кузов',
    right: 111,
    top: -20,
    baseImg: first,
    hoverImg: firstHover,
  },
  {
    title: 'електрика',
    right: 33,
    top: 1.5,
    baseImg: second,
    hoverImg: secondHover,
  },
  {
    title: 'двигун/кпп',
    right: -15,
    top: 73,
    baseImg: first,
    hoverImg: firstHover,
  },
  {
    title: 'гальмівна система',
    right: -134,
    top: 215,
    baseImg: fourth,
    hoverImg: fourthHover,
  },
  {
    title: 'підвіска та ходова частина',
    right: -115,
    top: 280,
    baseImg: fifth,
    hoverImg: fifthHover,
  },
]

export const ChecksProblems = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryes[0].title)

  const description = useMemo(
    () => descriptionByCategory.get(selectedCategory),
    [selectedCategory],
  )
  return (
    <Box py={20} as="section">
      <Container maxW="container.xl">
        <Heading
          textTransform="uppercase"
          mb={9}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          Що ми перевіряємо і з якими <br /> проблемами стикаємось?
        </Heading>

        <Flex mt={200} justifyContent="space-between" align="start">
          <Box pos="relative" textTransform="uppercase">
            <Image src={check} />

            {categoryes.map((category) => (
              <Flex
                key={category.title}
                pos="absolute"
                right={category.right}
                top={category.top}
                cursor="pointer"
                role="group"
                gap={2}
                onClick={() => setSelectedCategory(category.title)}
                _hover={{
                  transform: 'scale(1.05)',
                }}
                transition="all .6s"
              >
                <Box>
                  <Image
                    src={category.baseImg}
                    display={
                      selectedCategory === category.title ? 'none' : 'block'
                    }
                    _groupHover={{ visibility: 'hidden', display: 'none' }}
                  />
                  <Image
                    transition="all .2s"
                    src={category.hoverImg}
                    display={
                      selectedCategory === category.title ? 'block' : 'none'
                    }
                    _groupHover={{ visibility: 'visible', display: 'block' }}
                  />
                </Box>
                <Text
                  maxW={180}
                  fontWeight={600}
                  pt={0.5}
                  color={
                    category.title === selectedCategory
                      ? 'turquoise.100'
                      : category.title
                  }
                  _groupHover={{ color: 'turquoise.100' }}
                >
                  {category.title}
                </Text>
              </Flex>
            ))}
          </Box>

          <Box h={500}>
            <Flex
              pos="relative"
              top={-32}
              px={4}
              pb={5}
              flexDirection="column"
              maxW={390}
              boxShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.4)"
            >
              <Image w={360} h={204} src={description.img} />
              <Text
                fontSize={24}
                fontWeight={600}
                textTransform="uppercase"
                mb={2}
              >
                {description.title}
              </Text>
              <Text fontSize={14} fontWeight={500}>
                {description.description}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
