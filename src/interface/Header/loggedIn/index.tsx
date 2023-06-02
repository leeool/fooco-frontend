import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { ReactComponent as Home } from "@assets/icons/home.svg"
import { ReactComponent as Plus } from "@assets/icons/plus.svg"
import { ReactComponent as User } from "@assets/icons/user.svg"
import { Link } from "react-router-dom"
import Search from "../Search"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/DropdownMenuAPI"
import useUserStore from "src/stores/UseUserStore"
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "@components/Dialog"
import { Title } from "@components/Text/Title"
import { Button } from "@components/Form"
import { ConfirmLogout } from "./styles"
import { Paragraph } from "@components/Text/Paragraph"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import { FoquinhoIcon } from "@assets/index"
import { Container, Content, MenuTrigger } from "./Menu.styled"

const index = () => {
  const { userData } = useUserStore()
  const match = UseMatchWindowSize(600)

  return (
    <>
      <Link to="/app" className="logo">
        {match ? <FoquinhoIcon /> : <Logo />}
      </Link>
      <Search />
      {match ? (
        <Menu />
      ) : (
        <div className="buttons-logged">
          <Link to={"/app"}>
            <Home />
            Início
          </Link>
          <Link to={"app/publicar"}>
            <Plus />
            Publicar
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User />
              Perfil
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Link to={`/app/${userData?.username}`}>
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                </Link>
                <Link to={"/app/salvos"}>
                  <DropdownMenuItem>Salvos</DropdownMenuItem>
                </Link>
                <Link to={"/app/settings"}>
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                </Link>
                <LogoutDialog />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </>
  )
}

const LogoutDialog = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { logoutUser } = useUserStore()

  return (
    <DialogRoot>
      <DropdownMenuItem onClick={(e) => e.preventDefault()}>
        <DialogTrigger>Sair</DialogTrigger>
      </DropdownMenuItem>
      <DialogContent ref={ref}>
        <ConfirmLogout>
          <div>
            <Title size="md">Tem certeza que deseja sair?</Title>
            <Paragraph size="xl">Foquinho sentirá sua falta.</Paragraph>
          </div>
          <div className="buttons">
            <DialogClose asChild>
              <Button variant="solid">Ficar</Button>
            </DialogClose>
            <Button variant="outlined" onClick={logoutUser}>
              Sair
            </Button>
          </div>
        </ConfirmLogout>
      </DialogContent>
    </DialogRoot>
  )
}

const Menu = () => {
  const [open, setOpen] = React.useState(false)
  const { userData } = useUserStore()

  return (
    <Container>
      <MenuTrigger onClick={() => setOpen((prev) => !prev)}>Abrir</MenuTrigger>
      {open && (
        <Content>
          <Link to={"/app"}>Início</Link>
          <Link to={"/app/publicar"}>Publicar</Link>
          <Link to={`/app/${userData?.username}`}>Perfil</Link>
        </Content>
      )}
    </Container>
  )
}

export default React.memo(index)
