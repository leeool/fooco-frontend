import React from "react"
import { Navigate, Outlet } from "react-router"
import { Container, SocialLogin } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { Link } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"
import { Button } from "@components/Form"
import { GithubIcon, GoogleIcon, MicrosoftIcon } from "@assets/index"
import { themeStore } from "src/stores/themeStore"
import useLoginSocialUser from "./loginSocials"

const index = () => {
  const { isLoggedIn } = useUserStore()
  const { selectedTheme } = themeStore()
  const { loginWithMicrosoft } = useLoginSocialUser()

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
        <SocialLogin>
          <Button variant="outlined" onClick={loginWithMicrosoft}>
            <MicrosoftIcon /> Entrar com Microsoft
          </Button>
        </SocialLogin>
      </div>
    </Container>
  )
}

export default index
