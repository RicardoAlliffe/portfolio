import { Center, Container, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function EmBreve() {
  return (
    <Container
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection={'column'}
      as={'button'}
    >
      <ChakraBox
        animate={{
          rotateY: [0, 180, 0]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="150px"
      >
        <Center
          boxShadow={'dark-lg'}
          borderRadius={'2xl'}
          w={{ base: '130px', md: '200px' }}
          h={{ base: '140px', md: '200px' }}
          bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
          border={'1px'}
          borderColor={'white'}
        >
          <Text
            textColor={'white'}
            fontSize={{ base: 'md', md: 'lg' }}
            fontFamily={'sans-serif'}
            fontWeight={'bold'}
          >
            Em Breve!
          </Text>
        </Center>
      </ChakraBox>
    </Container>
  )
}
