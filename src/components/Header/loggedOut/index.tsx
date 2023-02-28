import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import Button from "@components/Form/Button"
import { Link } from "react-router-dom"
import ToggleThemeMenu from "@components/ToggleThemeMenu"

const index = () => {
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <div className="buttons">
        <ToggleThemeMenu />
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
