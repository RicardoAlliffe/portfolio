import { Container, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function EmBreve() {
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
          scaleX: [0, 1, 0],
          motionDistance: [0, 1]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Text
          bgGradient="linear(to-l, #FF0080, #000000)"
          bgClip="text"
          fontSize={{ base: 'md', md: 'lg' }}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Em Breve!
        </Text>
      </ChakraBox>
    </Container>
  )
}
