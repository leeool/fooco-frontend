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
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <div>feed</div>,
          },
          {
            path: "perfil",
            element: <div>Perfil</div>,
          },
        ],
      },
      {
        path: "comecar",
        element: <MainPage />,
      },
      {
        path: "*",
        element: <Dashboard />,
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
