import React from "react"
import { Navigate, Outlet } from "react-router"
import useUserStore from "src/stores/UseUserStore"
import { Container } from "./style"

const index = () => {
  const { loading, isLoggedIn } = useUserStore()

  if (!isLoggedIn) return <Navigate to="/comecar" replace />
  if (loading) return <h1>Carregando...</h1>
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default index
