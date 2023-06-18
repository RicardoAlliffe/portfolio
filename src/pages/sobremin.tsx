import { Flex, Heading, VStack, Text } from '@chakra-ui/react'
import Menu from '../components/menu'

export default function Sobremin() {
  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100%'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Menu />
      <Flex
        w={'100%'}
        h={'100vh'}
        bg={'rgb(43,43,50)'}
        justifyContent={'center'}
        align={'center'}
        display={'flex'}
        direction={'column'}
        padding={'5vh'}
      >
        <Heading
          bgGradient="linear(to-l, #FFFFFF, #00FF00)"
          bgClip="text"
          fontSize={'4xl'}
          fontFamily={'sans-serif'}
          fontWeight={'bold'}
        >
          Sobre Min
        </Heading>
        <Flex w={{ base: '100%', md: '50%' }} mt={'5vh'}>
          <Text
            color={'rgb(255,255,255, 0.8)'}
            align={'center'}
            fontSize={{ base: 'none', md: '2xl' }}
          >
            Desenvolvedor Front-end com experiência em React.js, Next.js,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possuo experiência em projetos de
            desenvolvimento utilizando o figma. Bacharel em Ciencias da
            Computação e cursando Especialização em Front-End na Plataforma
            Origamid.
          </Text>
        </Flex>
      </Flex>
    </VStack>
  )
}
