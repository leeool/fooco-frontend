import React from "react"
import { useLocation, useNavigate } from "react-router"
import { USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import useUserStore from "src/stores/UseUserStore"
import isError from "./isError"

const UseSavePost = () => {
  const { userData, isLoggedIn, savedPosts, setSavedPosts } = useUserStore()
  const nav = useNavigate()
  const { request } = UseFetch()
  const loc = useLocation()

  const handleSavePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const postId = e.currentTarget.dataset.id

    if (!postId || !userData || !isLoggedIn) {
      nav("/entrar")
      return
    }

    if (savedPosts.includes(postId)) {
      const removePost = savedPosts.filter((id) => id !== postId)
      setSavedPosts(removePost)

      const { options, url } = USER_PUT(
        { saved_posts: removePost },
        userData.id
      )

      await request(url, options)
    } else {
      const savePost = savedPosts.concat(postId)
      setSavedPosts(savePost)

      const { options, url } = USER_PUT({ saved_posts: savePost }, userData.id)
      await request(url, options)
    }
  }

  React.useEffect(() => {
    if (!userData || isError(userData)) return

    setSavedPosts([...new Set([...savedPosts, ...userData.saved_posts])])
  }, [userData, isLoggedIn, loc])

  return { handleSavePost }
}

export default UseSavePost
