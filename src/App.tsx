import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import { themeStore } from "./stores/themeStore"
import GlobalStyle from "./styles/global"
import Layout from "./Layout"

const App = () => {
  const selectedTheme = themeStore((state) => state.selectedTheme)

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App
