import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Button } from "@components/Form"
import { Link } from "react-router-dom"
import ToggleThemeMenu from "@components/ToggleThemeMenu"
import { FoquinhoIcon } from "@assets/index"
import UseMatchWindowSize from "src/hooks/UseWindowSize"

const index = () => {
  const match = UseMatchWindowSize(600)

  return (
    <>
      <Link to="/" className="logo">
        {match ? <FoquinhoIcon /> : <Logo />}
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
