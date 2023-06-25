import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Wrap,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'

import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript
} from 'react-icons/tb'

import { SiStyledcomponents } from 'react-icons/si'
import { isValidMotionProp, motion } from 'framer-motion'

export default function WrapHabilidades() {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: prop =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  })
  return (
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
    >
      <Wrap
        w={{ base: '90%', md: '70%' }}
        h={'full'}
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandJavascript size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>JavaScript!</PopoverHeader>
                <PopoverBody>
                  A linguagem de programação Javascript permite ao desenvolvedor
                  implementar diversos itens de alto nível de complexidade em
                  páginas web, como animações, mapas, gráficos ou informações
                  que se atualizam em intervalos de tempo padrão.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandTypescript size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>TypeScript!</PopoverHeader>
                <PopoverBody>
                  TypeScript é uma linguagem de programação de código aberto
                  desenvolvida pela Microsoft que é uma extensão do JavaScript.
                  Ela adiciona recursos avançados ao JavaScript, como a tipagem
                  estática e interfaces, tornando mais fácil detectar e prevenir
                  erros durante a fase de desenvolvimento.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandHtml5 size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>HTML5!</PopoverHeader>
                <PopoverBody>
                  HTML {' ('}Linguagem de Marcação de Hipertexto{') '} é o
                  componente base da web. Isso quer dizer que ele permite a
                  construção de websites e a inserção de novos conteúdos, como
                  imagens e vídeos, por meio dos hipertextos.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandCss3 size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>CSS3!</PopoverHeader>
                <PopoverBody>
                  É usada para personalização visual de um site. Ou seja, elas
                  servem para otimizar o conteúdo das páginas e permitir uma
                  apresentação mais amigável para o usuário. Por essa razão, o
                  CSS complementa o HTML, que tem como função apenas a
                  estruturação e marcação dos principais componentes das
                  páginas.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandReact size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>React!</PopoverHeader>
                <PopoverBody>
                  React é um framework JavaScript criado pelo Facebook
                  {' ('}atual Meta{') '} que é usado para criar interfaces de
                  usuário
                  {' ('}UI{') '} em aplicativos web. Ele é popular por ser fácil
                  de usar, altamente flexível e escalável.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandFigma size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>FIGMA!</PopoverHeader>
                <PopoverBody>
                  Figma é um editor online de design gráfico focado na criação
                  de interfaces gráficas e experiência de usuário com ênfase
                  colaborativa. A ferramenta permite que uma equipe de designers
                  tenha acesso simultâneo e trabalhe em cima de um mesmo projeto
                  ao mesmo tempo, facilitando a vida de times com profissionais
                  em trabalho remoto em diversas localidades diferentes.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              border={'2px'}
              borderColor={'white'}
            >
              <TbBrandGithub size={'auto'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                shadow={'dark-lg'}
                border={'1px'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>GitHub!</PopoverHeader>
                <PopoverBody>
                  O GitHub é uma plataforma para hospedagem e controle de versão
                  de código utilizando o sistema Git como base. Também serve
                  como uma comunidade para programadores do mundo todo
                  colaborarem em projetos pessoais e de código-aberto.
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
              borderRadius={'2vh'}
              bgGradient="linear(to-r, #FF0080 , rgb(43,43,50) , #FFFFFF)"
              shadow={'dark-lg'}
              color={'whiteAlpha.900'}
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00 , rgb(43,43,50))',
                color: 'black',
                borderColor: 'green'
              }}
              cursor={'pointer'}
              px={'1vh'}
              border={'2px'}
              borderColor={'white'}
            >
              <SiStyledcomponents size={'full'} />
              <PopoverContent
                color="white"
                bg="blue.800"
                borderColor="blue.800"
                border={'1px'}
                shadow={'dark-lg'}
              >
                <PopoverArrow />
                <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                <PopoverHeader fontSize={'1xl'}>
                  Styled Components!
                </PopoverHeader>
                <PopoverBody>
                  Styled-components é uma biblioteca para React e React Native
                  que permite que você use estilos ao nível de componente na sua
                  aplicação. Eles são escritos em uma mistura de JavaScript com
                  CSS.
                </PopoverBody>
              </PopoverContent>
            </Flex>
          </PopoverTrigger>
        </Popover>
      </Wrap>
    </ChakraBox>
  )
}
