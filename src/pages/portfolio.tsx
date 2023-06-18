import { VStack } from '@chakra-ui/react'
import React from 'react'
import Inicio from './inicio'

export default function Portfolio() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100%'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Inicio />
    </VStack>
  )
}
