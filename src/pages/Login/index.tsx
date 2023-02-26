import React from "react"
import { Navigate, Outlet } from "react-router"
import { Container } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Link } from "react-router-dom"
import Toast from "@components/Toast"
import UseToastStore from "@components/Toast/UseToastStore"
import useUserStore from "src/stores/UseUserStore"

const index = () => {
  const { toastContent } = UseToastStore()
  const { isLoggedIn, loading } = useUserStore()

  if (loading) return <div>Carregando...</div>
  if (isLoggedIn) return <Navigate to="/" replace />
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
        <Toast title={toastContent.title} description={toastContent.message} />
      </span>
    </Container>
  )
}

export default index
