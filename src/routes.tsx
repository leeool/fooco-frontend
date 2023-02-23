import { createBrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import React from "react"
import Layout from "./Layout"
import Entrar from "./pages/Login/Entrar"
import Criar from "./pages/Login/Criar"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "inicio",
        element: <MainPage />,
      },
      {
        path: "*",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/entrar",
    element: <Login />,
    children: [
      {
        path: "",
        element: <Entrar />,
      },
      {
        path: "criar",
        element: <Criar />,
      },
    ],
  },
])

export default router
