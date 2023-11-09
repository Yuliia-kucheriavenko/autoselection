import { extendTheme } from '@chakra-ui/react'
import sizes from './sizes'
import colors from './colors'
import breakpoints from './breakpoints'
import fonts from './fonts'

const theme = extendTheme({
  global: {
    body: {
      bg: 'white'
    }
  },
  sizes,
  colors,
  breakpoints,
  fonts,
})

export default theme
