import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

export default function MenuMobile() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="none"
        textColor={'white'}
        size={'lg'}
      />
      <MenuList
        minW={'container.xl'}
        borderRadius={'none'}
        boxShadow={'dark-lg'}
      >
        <Link href="./portfolio">
          <MenuItem fontWeight={600} fontSize={'lg'}>
            Inicio
          </MenuItem>
        </Link>

        <Link href="./sobremin">
          <MenuItem fontWeight={600} fontSize={'lg'}>
            Sobre Min
          </MenuItem>
        </Link>

        <Link href="./habilidades">
          <MenuItem fontWeight={600} fontSize={'lg'}>
            Habilidades
          </MenuItem>
        </Link>
        <Link href="./projetos">
          <MenuItem fontWeight={600} fontSize={'lg'}>
            Projetos
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
