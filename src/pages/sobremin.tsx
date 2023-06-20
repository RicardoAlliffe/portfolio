import { Flex, Heading, VStack, Text } from '@chakra-ui/react'
import Menu from '../components/menu'
import SobreminAnimation from '../animation/sobremin'

export default function Sobremin() {
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
        <SobreminAnimation />
      </Flex>
    </VStack>
  )
}
