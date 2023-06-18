import { Container, Heading, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function LogoAnimation() {
  return (
    <Container
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection={'column'}
    >
      <ChakraBox
        animate={{
          scale: [0.8, 1, 0.8]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="left"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Heading
          fontFamily={'initial'}
          bgGradient="linear(to-l, #FFFFFF, #FF0080)"
          bgClip="text"
          fontSize={{ base: '3xl', md: '5xl' }}
        >
          Portfólio
        </Heading>
      </ChakraBox>
    </Container>
  )
}
