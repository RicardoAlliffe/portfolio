import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Portfolio from './portfolio'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Portfolio />
    </ChakraProvider>
  )
}

export default App
