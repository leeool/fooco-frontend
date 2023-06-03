import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Button } from "@components/Form"
import { Link } from "react-router-dom"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import { Buttons, Container } from "./LoggedOut.styled"

const index = () => {
  const match = UseMatchWindowSize(600)

  return (
    <Container>
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <Buttons>
        <Link to={"entrar"}>
          <Button variant="outlined">Entrar</Button>
        </Link>
        <Link to={"entrar/criar"}>
          <Button variant="solid">Criar Conta</Button>
        </Link>
      </Buttons>
    </Container>
  )
}

export default React.memo(index)
