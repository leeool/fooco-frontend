import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import { themeStore } from "./stores/themeStore"
import GlobalStyle from "./styles/global"
import { RouterProvider } from "react-router"
import router from "./routes"
import useUserStore from "./stores/UseUserStore"

const App = () => {
  const { localTheme, selectedTheme } = themeStore()
  const { autoLogin } = useUserStore()

  React.useEffect(() => {
    localTheme()
  }, [selectedTheme])

  React.useEffect(() => {
    autoLogin()
  }, [])

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
