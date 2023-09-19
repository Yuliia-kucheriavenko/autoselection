import { Box, Container, Flex, Heading, Image, Text, Grid} from '@chakra-ui/react'
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

        <Flex mt={200}
              justifyContent="space-between"
              align={{base: "center", lg: "start"}}
              direction={{base: "column", lg: "row"}}
        >
          <Box pos="relative" top={-50} textTransform="uppercase">
            <Image src={check} mb={200} display={{base: "none", md: "block"}}
            />
            {categoryes.map((category) => (
              <>
              <Flex
                display={{base: "none", lg: "flex"}}
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
                <Box
                >
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

              <Flex
              display={{base: "flex", lg: "none"}}
              key={category.title}
              gap={2}
              onClick={() => setSelectedCategory(category.title)}
              _hover={{
                transform: 'scale(1.05)',
              }}
              transition="all .6s"
          >
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
              </>
            ))}
          </Box>

          <Box
          >
            <Flex
              pos="relative"
              // top={-32}
              px={4}
              pb={5}
              flexDirection="column"
              maxW={390}
              boxShadow="0px 0px 40px 0px rgba(0, 0, 0, 0.4)"
            >
              <Image w={360} h={204}
                     src={description.img}
                     display={{base: 'none', lg: 'block'}}
              />
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
        <Box>
          <Container maxW="container.lg">
          <Heading
            textTransform="uppercase"
            fontSize={24}
            mb={8}
            textAlign={{ base: "center", lg: "start",}}
          >
            Які проблемо ми зустрічаємо
          </Heading>
          <Grid
            templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)',}}
            gap={4}
          >
            {description.problems.map(({img, title, body}) => (
              <Flex
                key={title}
                flexDirection="row"
                justify="space-berween"
                align="space-berween"
                gap={10}
                mb={50}
                mr={110}
              >
                <Image src={img} alt="trouble" mb={4}
                       maxW="48px"
                       maxH="40px" />
                <Flex
                  flexDirection="column"
                  justify="space-berween"
                  key={title}
                  flexGrow={0}
                  gap={2}
                >
                  <Text
                    fontSize={16}
                    textTransform="uppercase"
                  >
                    {title}
                  </Text>
                  <Box bg="#48B8CE" h={1} w={20}>
                  </Box>
                  <Text
                    fontSize={16}
                    fontWeight={400}
                  >
                    {body}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}
