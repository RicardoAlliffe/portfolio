import { Container, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function Animation1() {
  return (
    <Container
      h="100%"
      w={'100%'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ChakraBox
        animate={{
          scale: [0, 1.2, 1.2, 1.1],
          rotate: [0, 360, 360, 0],
          borderRadius: ['5%', '20%', '20%', '5%']
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        bgImg={'./img/ricardo.jpg'}
        shadow={'dark-lg'}
        bgSize={'100%'}
        bgRepeat={'no-repeat'}
        display="flex"
        alignItems="normal"
        width="450px"
        height="350px"
      ></ChakraBox>
    </Container>
  )
}
