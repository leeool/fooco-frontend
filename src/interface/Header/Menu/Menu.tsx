import React from "react"
import { Link } from "react-router-dom"
import { Container, Content, Trigger } from "./Menu.styled"

const Menu = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Container>
      <Trigger onClick={() => setOpen((prev) => !prev)}>Abrir</Trigger>
      {open && (
        <Content>
          <Link to={"/"}>Início</Link>
          <Link to={"/"}>Login</Link>
          <Link to={"/"}>Registrar</Link>
        </Content>
      )}
    </Container>
  )
}

export default Menu
