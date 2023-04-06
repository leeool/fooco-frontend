import { createBrowserRouter, Navigate } from "react-router-dom"
import React from "react"
import Layout from "./Layout"
import Login from "./pages/Entrar"
import ScrollPageToTop from "./helpers/ScrollPageToTop"
// import ProfilePage from "./pages/ProfilePage"
// import CreatePost from "./pages/CreatePost"
// import Entrar from "./pages/Entrar/Login"
// import Criar from "./pages/Entrar/Criar"
// import Dashboard from "./pages/Dashboard"
// import Feed from "./pages/Dashboard/Feed"
// import PostPage from "./pages/PostPage/PostPage"
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"))
const Terms = React.lazy(() => import("./pages/Terms"))
const MainPage = React.lazy(() => import("./pages/MainPage"))
const PostPage = React.lazy(() => import("./pages/PostPage/PostPage"))
const Feed = React.lazy(() => import("./pages/Dashboard/Feed"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Criar = React.lazy(() => import("./pages/Entrar/Criar"))
const Entrar = React.lazy(() => import("./pages/Entrar/Login"))
const CreatePost = React.lazy(() => import("./pages/CreatePost"))

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "app",
        element: (
          <React.Suspense>
            <Dashboard />
          </React.Suspense>
        ),
        children: [
          {
            path: "",
            index: true,
            element: (
              <React.Suspense>
                <Feed />
              </React.Suspense>
            ),
          },
          {
            path: ":owner",
            element: (
              <React.Suspense>
                <ScrollPageToTop>
                  <ProfilePage />
                </ScrollPageToTop>
              </React.Suspense>
            ),
          },
          {
            path: ":owner/:slug",
            element: (
              <React.Suspense>
                <ScrollPageToTop>
                  <PostPage />
                </ScrollPageToTop>
              </React.Suspense>
            ),
          },
          {
            path: "publicar",
            element: (
              <React.Suspense>
                <CreatePost />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "",
        index: true,
        element: (
          <React.Suspense>
            <MainPage />
          </React.Suspense>
        ),
      },
      {
        path: "termos-de-uso",
        element: (
          <React.Suspense>
            <Terms />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <React.Suspense>
            <Navigate to={"/app"} />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/entrar",
    element: <Login />,
    children: [
      {
        path: "",
        index: true,
        element: (
          <React.Suspense>
            <Entrar />
          </React.Suspense>
        ),
      },
      {
        path: "criar",
        element: (
          <React.Suspense>
            <Criar />
          </React.Suspense>
        ),
      },
    ],
  },
])

export default router
