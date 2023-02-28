import React from "react"
import { HeaderContainer } from "./styles"
import LoggedOut from "./loggedOut"
import useUserStore from "src/stores/UseUserStore"
import LoggedIn from "./loggedIn"

const index = () => {
  const { isLoggedIn } = useUserStore()

  return (
    <HeaderContainer>
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </HeaderContainer>
  )
}

export default index
