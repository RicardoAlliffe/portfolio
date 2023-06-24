import {
  Flex,
  Heading,
  VStack,
  chakra,
  shouldForwardProp,
  Text
} from '@chakra-ui/react'
import Menu from '../components/menu'
import { isValidMotionProp, motion } from 'framer-motion'
import WrapHabilidades from '../components/wraphabilidades'
import Contatofoother from '../components/contatofoother'

export default function Habilidades() {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  return (
    <VStack
      bg={'rgb(43,43,50)'}
      width={'100%'}
      h={{ base: '100%', md: '100vh' }}
    >
      <title>Portfólio | Ricardo Alliffe</title>
      <Menu />
      <Flex
        w={'100%'}
        h={{ base: 'fit-content', md: '100vh' }}
        bg={'rgb(43,43,50)'}
        justifyContent={'center'}
        align={'center'}
        display={'flex'}
      >
        <Flex
          w={'100%'}
          h={'fit-content'}
          direction={'column'}
          justifyContent={'center'}
          align={'center'}
          display={'flex'}
          pt={{ base: '10vh' }}
          pb={{ base: '0vh' }}
        >
          <ChakraBox
            animate={{
              scale: [0, 1]
            }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: 'none'
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100px"
          >
            <Flex direction={'column'} align={'center'}>
              <Heading
                bgGradient="linear(to-l, #FFFFFF, #00FF00)"
                bgClip="text"
                fontSize={{ base: '4xl', md: '4xl' }}
                fontFamily={'sans-serif'}
                fontWeight={'bold'}
              >
                Habilidades
              </Heading>
              <Text color={'white'} fontSize={{ base: '3xs', md: '2xl' }}>
                Clique Em alguma Habilidade abaixo para saber mais.
              </Text>
            </Flex>
          </ChakraBox>

          <WrapHabilidades />
        </Flex>
      </Flex>
      <Contatofoother />
    </VStack>
  )
}
