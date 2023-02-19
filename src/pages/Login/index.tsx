import React from "react"
import { Outlet } from "react-router"
import { Container } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"

const index = () => {
  return (
    <Container>
      <div className="foquinho">
        <Foquinho />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </Container>
  )
}

export default index
