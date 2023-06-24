import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export default function Contato() {
  return (
    <Box color={'white'} w={'90%'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column-reverse', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize={{ base: 'sm', md: 'lg' }}>
          © 2023 Ricardo Álliffe, todos direitos reservados.
        </Text>
        <Stack direction={{ base: 'row', md: 'row-reverse' }} spacing={6}>
          <Link
            href={'https://www.linkedin.com/in/ricardo-alliffe-310553247/'}
            _hover={{
              color: '#00FF00'
            }}
          >
            <BsLinkedin size={'3vh'} />
          </Link>
          <Popover>
            <PopoverTrigger>
              <Link
                _hover={{
                  color: '#00FF00'
                }}
              >
                <BsWhatsapp size={'3vh'} />
                <PopoverContent
                  color="white"
                  bg="blue.800"
                  borderColor="blue.800"
                  shadow={'dark-lg'}
                  w={{ base: '30vh', md: '25vh' }}
                >
                  <PopoverArrow />
                  <PopoverCloseButton color={'black'} mt={'0.3vh'} />
                  <PopoverHeader fontSize={'1xl'}>Contatos!</PopoverHeader>
                  <PopoverBody>
                    Whatsapp:
                    <br /> 82 98103-1039 <br /> 82 98745-7265.
                    <br /> <br /> Email:
                    <br /> ricardoalliffe@gmail.com
                  </PopoverBody>
                </PopoverContent>
              </Link>
            </PopoverTrigger>
          </Popover>
          <Link
            href={'https://github.com/RicardoAlliffe'}
            _hover={{
              color: '#00FF00'
            }}
          >
            <BsGithub size={'3vh'} />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}
