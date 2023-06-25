import { isValidMotionProp, motion } from 'framer-motion'
import { Box, Flex, Link, chakra, Text } from '@chakra-ui/react'
import LogoAnimation from '../animation/logoanimation'
import MenuMobile from '../componentsmobile/mobilemenu'

export default function MenuNav() {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp
  })

  return (
    <Box
      bgColor={'rgb(26, 32, 44)'}
      justifyContent={'space-between'}
      display={'flex'}
      position={'fixed'}
      width="100%"
      height={{ base: '8vh', md: '10vh' }}
      alignItems={'center'}
      pl={'3vh'}
      pr={{ base: '3vh', md: '10vh' }}
      shadow={'dark-lg'}
      zIndex={'10'}
    >
      <Flex
        w={{ base: '16vh', md: '30vh' }}
        h={'100%'}
        ml={{ base: '-4', md: 'none' }}
      >
        <LogoAnimation />
      </Flex>
      <Flex
        w={'60vh'}
        fontSize={'2xl'}
        justifyContent={'space-between'}
        fontFamily={'initial'}
        display={{ base: 'none', md: 'flex' }}
      >
        <Link href="./portfolio" textDecoration={'none'}>
          <Text
            as={'button'}
            textColor={'white'}
            _hover={{
              textColor: 'whiteAlpha.600'
            }}
          >
            Inicio
          </Text>
        </Link>
        <Link href="./sobremim" textDecoration={'none'}>
          <Text
            as={'button'}
            textColor={'white'}
            _hover={{
              textColor: 'whiteAlpha.600'
            }}
          >
            Sobre mim
          </Text>
        </Link>
        <Link href="./habilidades" textDecoration={'none'}>
          <Text
            as={'button'}
            textColor={'white'}
            _hover={{
              textColor: 'whiteAlpha.600'
            }}
          >
            Habilidades
          </Text>
        </Link>
        <Link href="./projetos" textDecoration={'none'}>
          <Text
            as={'button'}
            textColor={'white'}
            _hover={{
              textColor: 'whiteAlpha.600'
            }}
          >
            Projetos
          </Text>
        </Link>
      </Flex>

      <Flex
        display={{ base: 'flex', md: 'none' }}
        w={'auto'}
        borderRadius={'5px'}
      >
        <MenuMobile />
      </Flex>
    </Box>
  )
}
