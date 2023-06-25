import { Flex, Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import Menu from '../components/menu'
import EmBreve from '../animation/embreve'
import Contatofoother from '../components/contatofoother'

export default function Projetos() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100vh'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Menu />
      <Flex
        w={'100%'}
        h={'100vh'}
        bg={'rgb(43,43,50)'}
        align={'center'}
        justifyContent={{ base: 'space-between', md: 'center' }}
        display={'flex'}
        direction={'column'}
        padding={'2vh'}
        mt={{ base: '10vh', md: '0' }}
      >
        <Heading
          textColor={'white'}
          fontSize={'4xl'}
          fontFamily={'initial'}
          fontWeight={'bold'}
        >
          Projetos
        </Heading>
        <Flex
          w={'100%'}
          h={{ base: '80%', md: '25vh' }}
          mt={{ base: '0vh', md: '10vh' }}
          justifyContent={'center'}
        >
          <Wrap spacing={{ base: '10px', md: '20px' }} justify={'center'}>
            <WrapItem>
              <EmBreve />
            </WrapItem>
            <WrapItem>
              <EmBreve />
            </WrapItem>
            <WrapItem>
              <EmBreve />
            </WrapItem>
            <WrapItem>
              <EmBreve />
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
      <Contatofoother />
    </VStack>
  )
}
