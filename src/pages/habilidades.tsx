import {
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
  Wrap,
  chakra,
  shouldForwardProp,
  Text
} from '@chakra-ui/react'
import Menu from '../components/menu'
import {
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact
} from 'react-icons/tb'
import { isValidMotionProp, motion } from 'framer-motion'

export default function Habilidades() {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100vh'}>
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
          pt={{ base: '15vh' }}
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

          <Wrap
            w={'90%'}
            h={'full'}
            mt={'5vh'}
            p={'5vh'}
            spacing={'5vh'}
            align={'center'}
            justify={'center'}
          >
            <Popover>
              <PopoverTrigger>
                <Flex
                  w={{ base: '150px', md: '150px' }}
                  h={{ base: '150px', md: '150px' }}
                  bg={'whiteAlpha.700'}
                  borderRadius={'2vh'}
                  bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
                  shadow={'dark-lg'}
                  color={'whiteAlpha.700'}
                  _hover={{
                    bgGradient:
                      'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                    color: 'black'
                  }}
                  cursor={'pointer'}
                >
                  <TbBrandJavascript size={'auto'} />

                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                    shadow={'dark-lg'}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                    <PopoverHeader fontSize={'1xl'}>JavaScript!</PopoverHeader>
                    <PopoverBody>
                      A linguagem de programação Javascript permite ao
                      desenvolvedor implementar diversos itens de alto nível de
                      complexidade em páginas web, como animações, mapas,
                      gráficos ou informações que se atualizam em intervalos de
                      tempo padrão.
                    </PopoverBody>
                  </PopoverContent>
                </Flex>
              </PopoverTrigger>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Flex
                  w={{ base: '150px', md: '150px' }}
                  h={{ base: '150px', md: '150px' }}
                  bg={'whiteAlpha.700'}
                  borderRadius={'2vh'}
                  bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
                  shadow={'dark-lg'}
                  color={'whiteAlpha.700'}
                  _hover={{
                    bgGradient:
                      'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                    color: 'black'
                  }}
                >
                  <TbBrandGithub size={'auto'} />
                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                    shadow={'dark-lg'}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                    <PopoverHeader fontSize={'1xl'}>GitHub!</PopoverHeader>
                    <PopoverBody>
                      O GitHub é uma plataforma para hospedagem e controle de
                      versão de código utilizando o sistema Git como base.
                      Também serve como uma comunidade para programadores do
                      mundo todo colaborarem em projetos pessoais e de
                      código-aberto.
                    </PopoverBody>
                  </PopoverContent>
                </Flex>
              </PopoverTrigger>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Flex
                  w={{ base: '150px', md: '150px' }}
                  h={{ base: '150px', md: '150px' }}
                  bg={'whiteAlpha.700'}
                  borderRadius={'2vh'}
                  bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
                  shadow={'dark-lg'}
                  color={'whiteAlpha.700'}
                  _hover={{
                    bgGradient:
                      'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                    color: 'black'
                  }}
                >
                  <TbBrandHtml5 size={'auto'} />
                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                    shadow={'dark-lg'}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                    <PopoverHeader fontSize={'1xl'}>HTML5!</PopoverHeader>
                    <PopoverBody>
                      HTML {' ('}Linguagem de Marcação de Hipertexto{') '} é o
                      componente base da web. Isso quer dizer que ele permite a
                      construção de websites e a inserção de novos conteúdos,
                      como imagens e vídeos, por meio dos hipertextos.
                    </PopoverBody>
                  </PopoverContent>
                </Flex>
              </PopoverTrigger>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Flex
                  w={{ base: '150px', md: '150px' }}
                  h={{ base: '150px', md: '150px' }}
                  bg={'whiteAlpha.700'}
                  borderRadius={'2vh'}
                  bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
                  shadow={'dark-lg'}
                  color={'whiteAlpha.700'}
                  _hover={{
                    bgGradient:
                      'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                    color: 'black'
                  }}
                >
                  <TbBrandReact size={'auto'} />
                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                    shadow={'dark-lg'}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                    <PopoverHeader fontSize={'1xl'}>React!</PopoverHeader>
                    <PopoverBody>
                      React é um framework JavaScript criado pelo Facebook
                      {' ('}atual Meta{') '} que é usado para criar interfaces
                      de usuário
                      {' ('}UI{') '} em aplicativos web. Ele é popular por ser
                      fácil de usar, altamente flexível e escalável.
                    </PopoverBody>
                  </PopoverContent>
                </Flex>
              </PopoverTrigger>
            </Popover>
          </Wrap>
        </Flex>
      </Flex>
    </VStack>
  )
}
