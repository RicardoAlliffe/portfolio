import { Flex, Heading, VStack } from '@chakra-ui/react'
import Menu from '../components/menu'

export default function Habilidades() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100%'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Menu />
      <Flex
        w={'100%'}
        h={'100vh'}
        bg={'rgb(43,43,50)'}
        justifyContent={'center'}
        align={'center'}
        display={'flex'}
        direction={'column'}
        padding={'5vh'}
      >
        <Heading
          bgGradient="linear(to-l, #FFFFFF, #00FF00)"
          bgClip="text"
          fontSize={'3xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Habilidades
        </Heading>
      </Flex>
    </VStack>
  )
}
