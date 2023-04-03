import React from "react"
import { Navigate, Outlet } from "react-router"
import { Container } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Link } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"

const index = () => {
  const { isLoggedIn } = useUserStore()

  React.useEffect(() => {
    document.title = `Faça login • Fooco`
  }, [])

  if (isLoggedIn) return <Navigate to="/" replace />
  return (
    <Container>
      <div className="foquinho">
        <Foquinho />
      </div>
      <div className="outlet">
        <Link to={"/"} className="logo">
          <Logo />
        </Link>
        <Outlet />
      </div>
    </Container>
  )
}

export default index
