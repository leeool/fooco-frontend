// import "dotenv/config"
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
import { QueryClient, QueryClientProvider } from "react-query"
import WIP from "./pages/WIP/WIP"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

const App = () => {
  const { localTheme, selectedTheme } = themeStore()
  const { validateUser } = useUserStore()
  const { toastContent } = UseToastStore()

  React.useEffect(() => {
    localTheme()
  }, [selectedTheme])

  React.useEffect(() => {
    validateUser()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme[selectedTheme]}>
        <GlobalStyle />
        {import.meta.env.VITE_DEV === "true" ? (
          <WIP />
        ) : (
          <RouterProvider router={router} />
        )}

        <Toast title={toastContent.title} description={toastContent.message} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
