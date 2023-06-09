import { VStack, Box, Wrap, useColorModeValue, Heading } from '@chakra-ui/react'
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export default function Portfolio() {
  return (
    <VStack width={'100%'} height={'100%'} bgColor={'rgb(247,250,252)'}>
      <Box
        justifyContent={'space-between'}
        px={'20px'}
        display={'flex'}
        position={'absolute'}
        width="100%"
        bg="rgb(63,206,252)"
        height={{ base: '8vh', md: '8vh' }}
        alignItems={'center'}
      >
        <Flex>
          <Heading>Portfolio</Heading>
        </Flex>
      </Box>

      {/* barra de Separação */}
      <Flex pt={'10vh'}></Flex>

      <Flex
        bgColor={'red'}
        minW={{ base: '90%', md: '50%' }}
        maxW={{ base: '100%', md: '70%' }}
        justify={'center'}
        minH="100vh"
        borderRadius={'10px'}
        px={'1vh'}
        direction={['column', 'column', 'column', 'row']}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Wrap spacing="13px" justify={'center'}>
          <Flex>
            <Text> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
          </Flex>
        </Wrap>
      </Flex>
    </VStack>
  )
}
