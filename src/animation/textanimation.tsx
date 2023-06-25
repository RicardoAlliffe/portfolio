import { Container, Heading, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function AnimationText() {
  return (
    <Container
      h="90%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection={'column'}
    >
      <ChakraBox
        animate={{
          scale: [0, 1]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="left"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Text
          bg="#FFFFFF"
          bgClip="text"
          fontSize={'3xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Olá, Eu Sou
        </Text>
      </ChakraBox>

      <ChakraBox
        animate={{
          scale: [0, 1]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="left"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Text
          color={'white'}
          fontSize={'4xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Ricardo Alliffe.
        </Text>
      </ChakraBox>
      <ChakraBox
        animate={{
          scale: [0, 1]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="left"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Text
          mt={{ base: '10vh', md: '0vh' }}
          textColor={'whiteAlpha.800'}
          fontSize={'1xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Desenvolvedor Front-End Jr, Sou um apaixonado por tecnologia. decidi
          trilhar o caminho da programação. Trabalhei com projetos envolvendo
          gestão de curriculos na area voltada a Recursos Humanos.
        </Text>
      </ChakraBox>
    </Container>
  )
}
