import React from "react"
import { Outlet } from "react-router"
import { Container } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <Container>
      <div className="foquinho">
        <Foquinho />
      </div>
      <div className="outlet">
        <Link to={"/inicio"} className="logo">
          <Logo />
        </Link>
        <Outlet />
      </div>
    </Container>
  )
}

export default index
