import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import { themeStore } from "./stores/themeStore"
import GlobalStyle from "./styles/global"
import { RouterProvider } from "react-router"
import router from "./routes"
import Toast from "@components/Toast"
import useUserStore from "./stores/UseUserStore"
import UseToastStore from "@components/Toast/UseToastStore"

const App = () => {
  const { localTheme, selectedTheme } = themeStore()
  const { getUserWToken } = useUserStore()
  const { toastContent } = UseToastStore()

  React.useEffect(() => {
    localTheme()
  }, [selectedTheme])

  React.useEffect(() => {
    getUserWToken()
  }, [])

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Toast title={toastContent.title} description={toastContent.message} />
    </ThemeProvider>
  )
}

export default App
