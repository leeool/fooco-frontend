import React from "react"
import { HeaderContainer } from "./styles"
import { ReactComponent as Logo } from "@assets/logo.svg"
import Search from "./Search"
import Button from "@components/Form/Button"
import Input from "@components/Form/Input"
import { ReactComponent as Lupa } from "@assets/icons/lupa.svg"
import { themeStore } from "src/stores/themeStore"

const index = () => {
  const toggleTheme = themeStore((state) => state.toggleSelectedTheme)

  return (
    <HeaderContainer>
      <Logo />
      {/* <Search /> */}
      <Input
        id="search"
        placeholder="Pesquisar..."
        type="search"
        icon={<Lupa />}
      />
      <div className="buttons">
        <Button variant="outlined" onClick={toggleTheme}>
          Entrar
        </Button>
        <Button variant="solid">Criar Conta</Button>
      </div>
    </HeaderContainer>
  )
}

export default index
