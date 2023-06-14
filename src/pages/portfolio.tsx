import { VStack, Box, Heading, chakra } from '@chakra-ui/react'
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import Animation1 from './animation/animation1'
import AnimationText from './animation/textanimation'

export default function Portfolio() {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp
  })

  return (
    <VStack bg={'rgb(43,43,50)'} width={'100%'} height={'100%'}>
      <title>Portfólio | Ricardo Alliffe</title>
      <Box
        bgColor={'rgb(26, 32, 44)'}
        justifyContent={'space-between'}
        display={'flex'}
        position={'fixed'}
        width="100%"
        height={{ base: '8vh', md: '10vh' }}
        alignItems={'center'}
        pl={'3vh'}
        pr={'10vh'}
        shadow={'dark-lg'}
      >
        <Flex w={'30vh'}>
          <Heading
            fontFamily={'initial'}
            bgGradient="linear(to-l, #FFFFFF, #FF0080)"
            bgClip="text"
            fontSize={{ base: '3xl', md: '5xl' }}
          >
            Portfólio
          </Heading>
        </Flex>

        <Flex
          w={'60vh'}
          fontSize={'2xl'}
          justifyContent={'space-between'}
          fontFamily={'cursive'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Link href="#" textDecoration={'none'}>
            <Text
              as={'button'}
              bgGradient="linear(to-l, #FFFFFF, #FF0080)"
              bgClip="text"
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00)',
                bgClip: 'text'
              }}
            >
              Inicio
            </Text>
          </Link>
          <Link href="" textDecoration={'none'}>
            <Text
              as={'button'}
              bgGradient="linear(to-l, #FFFFFF, #FF0080)"
              bgClip="text"
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00)',
                bgClip: 'text'
              }}
            >
              Sobre Min
            </Text>
          </Link>
          <Link href="" textDecoration={'none'}>
            <Text
              as={'button'}
              bgGradient="linear(to-l, #FFFFFF, #FF0080)"
              bgClip="text"
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00)',
                bgClip: 'text'
              }}
            >
              Habilidades
            </Text>
          </Link>
          <Link href="" textDecoration={'none'}>
            <Text
              as={'button'}
              bgGradient="linear(to-l, #FFFFFF, #FF0080)"
              bgClip="text"
              _hover={{
                bgGradient: 'linear(to-l, #FFFFFF, #00FF00)',
                bgClip: 'text'
              }}
            >
              Projetos
            </Text>
          </Link>
        </Flex>
      </Box>

      <Flex
        maxW={{ base: '100%', md: '100vh' }}
        h={'100vh'}
        mt={{ base: '0vh', md: '0vh' }}
        justifyContent={'space-around'}
        align={'center'}
        direction={['column', 'column', 'column', 'row']}
        pt={{ base: '8vh', md: '10vh' }}
      >
        <Flex
          bgColor={''}
          minW={{ base: '90%', md: '45vh' }}
          maxW={{ base: '100%', md: '45vh' }}
          justify={'center'}
          h="40vh"
          w={'50vh'}
          borderRadius={'10px'}
          px={'1vh'}
        >
          <Animation1 />
        </Flex>
        <Flex
          minW={{ base: '90%', md: '45%' }}
          maxW={{ base: '100%', md: '45%' }}
          h="40vh"
          w={'50%'}
          borderRadius={'10px'}
          direction={['column', 'column']}
          pb={'10vh'}
        >
          <Text
            textColor={'white'}
            fontSize={'3xl'}
            fontFamily={'sans-serif'}
            fontWeight={'bold'}
            ml={'2vh'}
          >
            Olá, Eu Sou
          </Text>

          <AnimationText />
        </Flex>
      </Flex>
    </VStack>
  )
}
