import React from "react"
import { HeaderContainer } from "./styles"
import { ReactComponent as Logo } from "@assets/logo.svg"
import Search from "./Search"
import Button from "@components/Form/Button"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <HeaderContainer>
      <Logo />
      <span className="search">
        <Search />
      </span>
      <div className="buttons">
        <Link to={"entrar"}>
          <Button variant="outlined">Entrar</Button>
        </Link>
        <Link to={"entrar/criar"}>
          <Button variant="solid">Criar Conta</Button>
        </Link>
      </div>
    </HeaderContainer>
  )
}

export default index
