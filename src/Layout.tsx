import React from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"
import { MainContainer } from "./styles/container"

const Layout = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  )
}

export default Layout
