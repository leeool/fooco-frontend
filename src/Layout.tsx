import React from "react"
import { Outlet, useLocation } from "react-router"
import Header from "./components/Header"
import { MainContainer } from "./styles/container"
import Footer from "./components/Footer"
import useUserStore from "./stores/UseUserStore"

const Layout = () => {
  const { autoLogin } = useUserStore()
  const loc = useLocation()

  React.useEffect(() => {
    autoLogin()
  }, [loc])

  return (
    <MainContainer>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </MainContainer>
  )
}

export default Layout
