import React from "react"
import { Outlet } from "react-router"
import { Container } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Link } from "react-router-dom"
import Toast from "@components/Toast"
import UseToastStore from "@components/Toast/UseToastStore"

const index = () => {
  const { toastMessage } = UseToastStore()

  return (
    <Container>
      <div className="foquinho">
        <Foquinho />
      </div>
      <div className="outlet">
        <Link to={"/comecar"} className="logo">
          <Logo />
        </Link>
        <Outlet />
      </div>
      <span className="toast">
        <Toast
          title={"Foquinho está com problemas ):"}
          description={toastMessage}
        />
      </span>
    </Container>
  )
}

export default index
