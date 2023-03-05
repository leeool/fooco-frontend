import React from "react"
import { Navigate, Outlet } from "react-router"
import useUserStore from "src/stores/UseUserStore"
import { Container } from "./styles"

const index = () => {
  const { loading, isLoggedIn } = useUserStore()

  if (!isLoggedIn) return <Navigate to="/comecar" replace />
  if (loading) return <h1>Carregando...</h1>
  return (
    <>
      <Outlet />
    </>
  )
}

export default index
