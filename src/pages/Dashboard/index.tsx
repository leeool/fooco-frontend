import React from "react"
import { Navigate, Outlet } from "react-router"
import useUserStore from "src/stores/UseUserStore"

const index = () => {
  const { isLoggedIn } = useUserStore()

  if (!isLoggedIn) return <Navigate to="/comecar" replace />
  return (
    <>
      <Outlet />
    </>
  )
}

export default index
