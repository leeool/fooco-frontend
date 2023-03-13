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

const index = () => {
  const { logoutUser, userData } = useUserStore()
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <Link to="/app" className="logo">
        <Logo />
      </Link>
      <Search />
      <div className="buttons-logged">
        <Link to={"/app"}>
          <button>
            <Home />
            Início
          </button>
        </Link>
        <button>
          <Plus />
          Criar
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User />
            {userData?.username}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <Link to={"/app/perfil"}>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
              </Link>
              <Link to={"/app"}>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
              </Link>
              <DialogRoot>
                <DropdownMenuItem onClick={(e) => e.preventDefault()}>
                  <DialogTrigger>Sair</DialogTrigger>
                </DropdownMenuItem>
                <DialogContent ref={ref}>
                  <ConfirmLogout>
                    <div>
                      <Title size="md">Tem certeza que deseja sair?</Title>
                      <Paragraph size="xl">
                        Foquinho sentirá sua falta.
                      </Paragraph>
                    </div>
                    <div className="buttons">
                      <Button variant="outlined" onClick={logoutUser}>
                        Sair
                      </Button>
                      <DialogClose asChild>
                        <Button variant="solid">Ficar</Button>
                      </DialogClose>
                    </div>
                  </ConfirmLogout>
                </DialogContent>
              </DialogRoot>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default index
