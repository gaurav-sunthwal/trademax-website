'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Extend the theme to set the default color mode as dark
const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Set the default color mode to 'dark'
    useSystemColorMode: false, // Don't use the system preference for color mode
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}