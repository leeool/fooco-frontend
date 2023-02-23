import React from "react"
import { HeaderContainer } from "./styles"
import LoggedOut from "./loggedOut"
import { ReactComponent as Logo } from "@assets/logo.svg"
import Search from "./Search"
import Button from "@components/Form/Button"
import { Link } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"

const index = () => {
  const { isLoggedIn } = useUserStore()

  return (
    <HeaderContainer>
      {isLoggedIn ? <div>voce esta logado. parabens.</div> : <LoggedOut />}
    </HeaderContainer>
  )
}

export default index
