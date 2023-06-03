import React from "react"
import { HeaderContainer } from "./Header.styled"
import LoggedOut from "./loggedOut"
import useUserStore from "src/stores/UseUserStore"
import LoggedIn from "./loggedIn"
import "react-loading-skeleton/dist/skeleton.css"

const index = () => {
  const { isLoggedIn } = useUserStore()

  return (
    <HeaderContainer>
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </HeaderContainer>
  )
}

export default index
