import React from "react"
import { HeaderContainer } from "./styles"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { ReactComponent as Moon } from "@assets/icons/moon.svg"
import { ReactComponent as Sun } from "@assets/icons/sun.svg"
import Button from "@components/Form/Button"
import { Link } from "react-router-dom"
import DropdownMenu from "@components/DropdownMenu"
import { themeStore } from "src/stores/themeStore"

const index = () => {
  const { toggleSelectedTheme, selectedTheme } = themeStore()

  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <DropdownMenu
        classTrigger="dropdown-menu"
        trigger={<>{selectedTheme === "light" ? <Sun /> : <Moon />}</>}
        item={[
          <span key={"1"} onClick={() => toggleSelectedTheme("dark")}>
            <Moon />
            Escuro
          </span>,
          <span key={"2"} onClick={() => toggleSelectedTheme("light")}>
            <Sun />
            Claro
          </span>,
        ]}
      />
      <div className="buttons">
        <Link to={"entrar"}>
          <Button variant="outlined">Entrar</Button>
        </Link>
        <Link to={"entrar/criar"}>
          <Button variant="solid">Criar Conta</Button>
        </Link>
      </div>
    </>
  )
}

export default index
