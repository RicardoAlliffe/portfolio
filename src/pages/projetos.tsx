import { Center, Flex, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import Menu from '../components/menu'
import EmBreve from '../animation/embreve'

export default function Projetos() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'fit-content'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Menu />
      <Flex
        w={'100%'}
        h={'100vh'}
        bg={'rgb(43,43,50)'}
        align={'center'}
        justifyContent={{ base: 'normal', md: 'center' }}
        display={'flex'}
        direction={'column'}
        padding={'2vh'}
        mt={{ base: '15vh', md: '0' }}
      >
        <Heading
          bgGradient="linear(to-l, #FFFFFF, #00FF00)"
          bgClip="text"
          fontSize={'3xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Projetos
        </Heading>
        <Flex
          w={'100%'}
          h={'25vh'}
          mt={{ base: '15vh', md: '10vh' }}
          p={'2vh'}
          justifyContent={'center'}
          align={'center'}
        >
          <Wrap spacing="20px">
            <WrapItem>
              <Center
                boxShadow={'dark-lg'}
                borderRadius={'2xl'}
                w={{ base: '150px', md: '250px' }}
                h="150px"
                bgGradient="linear(to-l, #FFFFFF, #00FF00)"
              >
                <EmBreve />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center
                boxShadow={'dark-lg'}
                borderRadius={'2xl'}
                w={{ base: '150px', md: '250px' }}
                h="150px"
                bgGradient="linear(to-l, #FFFFFF, #00FF00)"
              >
                <EmBreve />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center
                boxShadow={'dark-lg'}
                borderRadius={'2xl'}
                w={{ base: '150px', md: '250px' }}
                h="150px"
                bgGradient="linear(to-l, #FFFFFF, #00FF00)"
              >
                <EmBreve />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center
                boxShadow={'dark-lg'}
                borderRadius={'2xl'}
                w={{ base: '150px', md: '250px' }}
                h="150px"
                bgGradient="linear(to-l, #FFFFFF, #00FF00)"
              >
                <EmBreve />
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </VStack>
  )
}
