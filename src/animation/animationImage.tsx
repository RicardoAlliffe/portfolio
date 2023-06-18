import { Container, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function AnimationImage() {
  return (
    <Container
      h="100%"
      w={'100%'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={{ base: '1vh', md: 'none' }}
    >
      <ChakraBox
        animate={{
          scale: [0, 1.2, 1.2, 1.1],
          rotate: [0, 360, 360, 0],
          borderRadius: ['5%', '10%', '10%', '5%']
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
        alignItems="center"
        width={{ base: '90%', md: '450px' }}
        height={{ base: '250px', md: '350px' }}
      ></ChakraBox>
    </Container>
  )
}
