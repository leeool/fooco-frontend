import React from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"
import { MainContainer } from "./styles/container"

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}

export default Layout
