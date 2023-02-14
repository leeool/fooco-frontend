import React from "react"
import { HeaderContainer } from "./styles"
import { ReactComponent as Logo } from "@assets/logo.svg"
import Search from "./Search"
import Button from "@components/Form/Button"

const index = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Search />
      <div className="buttons">
        <Button variant="outlined">Entrar</Button>
        <Button variant="solid">Criar Conta</Button>
      </div>
    </HeaderContainer>
  )
}

export default index
