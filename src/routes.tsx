import { createBrowserRouter } from "react-router-dom"
import MainPage from "./pages/MainPage"
import React from "react"
import Layout from "./Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
])

export default router
