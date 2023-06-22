import { Container, Heading, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { Text } from '@chakra-ui/react'

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function SobremimAnimation() {
  return (
    <Container
      h="60vh"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      flexDirection={'column'}
    >
      <ChakraBox
        animate={{
          translateX: ['-100%', '0%']
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100px"
      >
        <Heading
          bgGradient="linear(to-l, #FFFFFF, #00FF00)"
          bgClip="text"
          fontSize={'4xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Sobre mim
        </Heading>
      </ChakraBox>

      <ChakraBox
        animate={{
          translateX: ['-100%', '0%']
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: 'none',
          repeatType: 'loop'
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="300px"
      >
        <Text
          color={'rgb(255,255,255, 0.8)'}
          align={'center'}
          fontSize={{ base: 'none', md: '2xl' }}
        >
          Desenvolvedor Front-end com experiência em React.js, Next.js,
          JavaScript, TypeScript, Styled Components, Material UI e consumo de
          APIs REST. Apaixonado pelo desenvolvimento de componentes
          reutilizáveis. Também possuo experiência em projetos de
          desenvolvimento utilizando o figma. Bacharel em Ciencias da Computação
          e cursando Especialização em Front-End na Plataforma Origamid.
        </Text>
      </ChakraBox>
    </Container>
  )
}
