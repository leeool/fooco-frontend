import { createBrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Login from "./pages/Entrar"
import React from "react"
import Layout from "./Layout"
import Entrar from "./pages/Entrar/Login"
import Criar from "./pages/Entrar/Criar"
import Dashboard from "./pages/Dashboard"
import Feed from "./pages/Dashboard/Feed"

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
            element: <Feed />,
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
