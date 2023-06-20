import { Flex, Text, VStack } from '@chakra-ui/react'
import AnimationText from '../animation/textanimation'
import MenuNav from '../components/menu'
import AnimationImage from '../animation/animationImage'

export default function Inicio() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100%'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <MenuNav />
      <Flex
        maxW={{ base: '100%', md: '100vh' }}
        h={'100vh'}
        justifyContent={'space-around'}
        align={'center'}
        direction={['column', 'column', 'column', 'row']}
        pt={{ base: '8vh', md: '10vh' }}
      >
        <Flex
          minW={{ base: 'none', md: '45vh' }}
          maxW={{ base: '100%', md: '45vh' }}
          justify={'center'}
          h={{ base: 'fit-content', md: '40vh' }}
          w={'50vh'}
          borderRadius={'10px'}
          px={'1vh'}
        >
          <AnimationImage />
        </Flex>

        <Flex
          minW={{ base: '90%', md: '45%' }}
          maxW={{ base: '100%', md: '45%' }}
          h="40vh"
          w={'50%'}
          borderRadius={'10px'}
          direction={['column', 'column']}
          pb={'10vh'}
        >
          <AnimationText />
        </Flex>
      </Flex>
    </VStack>
  )
}
