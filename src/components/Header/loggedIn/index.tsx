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
import Button from "@components/Form/Button"
import { ConfirmLogout } from "./styles"
import { Paragraph } from "@components/Text/Paragraph"

const index = () => {
  const { logoutUser } = useUserStore()

  return (
    <>
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <Search />
      <div className="buttons-logged">
        <Link to={"/"}>
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
            Usuário
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <Link to={"/perfil"}>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
              </Link>
              <Link to={"/"}>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
              </Link>
              <DialogRoot>
                <DropdownMenuItem onClick={(e) => e.preventDefault()}>
                  <DialogTrigger>Sair</DialogTrigger>
                </DropdownMenuItem>
                <DialogContent>
                  <ConfirmLogout>
                    <div>
                      <Title size="md">Tem certeza que deseja sair?</Title>
                      <Paragraph size="xl">
                        Foquinho sentirá sua falta.
                      </Paragraph>
                    </div>
                    <div className="buttons">
                      <DialogClose>
                        <Button variant="solid">Ficar</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button variant="outlined" onClick={logoutUser}>
                          Sair
                        </Button>
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
