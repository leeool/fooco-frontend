import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { ReactComponent as Home } from "@assets/icons/home.svg"
import { ReactComponent as Plus } from "@assets/icons/plus.svg"
import { ReactComponent as User } from "@assets/icons/user.svg"
import { Link, useLocation } from "react-router-dom"
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
import { Buttons, ConfirmLogout, Container } from "./LoggedIn.styled"
import { Paragraph } from "@components/Text/Paragraph"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import { Bars, DoorOut } from "@assets/index"
import {
  Background,
  MenuContainer,
  Content,
  MenuItem,
  MenuTrigger,
} from "./Menu.styled"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"

const index = () => {
  const { userData, loading } = useUserStore()
  const match = UseMatchWindowSize(600)

  if (loading && !match) return <DesktopLoading />
  else if (loading && match) return <MobileLoading />
  return (
    <Container>
      <Link to="/app" className="logo">
        <Logo />
      </Link>
      {match ? (
        <Menu />
      ) : (
        <Buttons>
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
        </Buttons>
      )}
    </Container>
  )
}

const Menu = () => {
  const [open, setOpen] = React.useState(false)
  const { userData, logoutUser } = useUserStore()
  const { pathname, search } = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e)
    if (e.target instanceof HTMLDivElement && open === true) {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    setOpen(false)
  }, [pathname, search])

  return (
    <MenuContainer>
      <MenuTrigger
        onClick={() => setOpen((prev) => !prev)}
        data-state={open ? "open" : "closed"}
      >
        <Bars />
      </MenuTrigger>
      <Content onClick={handleClick} data-state={open ? "open" : "closed"}>
        <Background />
        <Search />
        <Link to={"/app"}>
          <MenuItem>Início</MenuItem>
        </Link>
        <Link to={"/app/publicar"}>
          <MenuItem>Publicar</MenuItem>
        </Link>
        <Link to={`/app/${userData?.username}`}>
          <MenuItem>Perfil</MenuItem>
        </Link>
        <Link to={`/app/settings`}>
          <MenuItem>Configurações</MenuItem>
        </Link>
        <MenuItem onClick={logoutUser}>Sair</MenuItem>
      </Content>
    </MenuContainer>
  )
}
const LogoutDialog = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { logoutUser } = useUserStore()

  return (
    <DialogRoot>
      <DropdownMenuItem onClick={(e) => e.preventDefault()}>
        <DialogTrigger>
          <DoorOut />
          Sair
        </DialogTrigger>
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

const DesktopLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SkeletonLoad>
        <Skeleton
          count={1}
          height={51}
          borderRadius={10}
          containerClassName="loading"
          width={200}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Skeleton
            count={1}
            height={40}
            containerClassName="loading"
            width={100}
          />
          <Skeleton
            count={1}
            height={40}
            containerClassName="loading"
            width={100}
          />
          <Skeleton
            count={1}
            height={40}
            containerClassName="loading"
            width={120}
          />
        </div>
      </SkeletonLoad>
    </div>
  )
}

const MobileLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SkeletonLoad>
        <Skeleton
          count={1}
          height={51}
          borderRadius={10}
          containerClassName="logo"
          width={150}
        />
        <Skeleton
          count={1}
          height={40}
          width={40}
          borderRadius={8}
          containerClassName="loading"
        />
      </SkeletonLoad>
    </div>
  )
}

export default React.memo(index)
