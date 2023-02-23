import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import { themeStore } from "./stores/themeStore"
import GlobalStyle from "./styles/global"
import { RouterProvider } from "react-router"
import router from "./routes"
import useUserStore from "./stores/UseUserStore"

const App = () => {
  const selectedTheme = themeStore((state) => state.selectedTheme)
  const localTheme = themeStore((state) => state.localTheme)
  const { autoLogin } = useUserStore()

  React.useEffect(() => {
    localTheme()
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
