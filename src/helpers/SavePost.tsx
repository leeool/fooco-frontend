import React from "react"
import { useLocation, useNavigate } from "react-router"
import { USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import useUserStore from "src/stores/UseUserStore"
import isError from "./isError"

const UseSavePost = () => {
  const { userData, isLoggedIn, savedPosts, setSavedPosts } = useUserStore()
  const nav = useNavigate()
  const { request, loading } = UseFetch()
  const { hash } = useLocation()

  const handleSavePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const postId = e.currentTarget.dataset.id

    if (loading) return

    if (!postId || !userData || !isLoggedIn) {
      nav("/entrar")
      return
    }

    if (savedPosts.includes(postId)) {
      const removePost = savedPosts.filter((id) => id !== postId)
      setSavedPosts(removePost)

      const { options, url } = USER_PUT(
        { savedPostsId: removePost },
        userData.id
      )

      await request(url, options)
    } else {
      const savePost = savedPosts.concat(postId)
      setSavedPosts(savePost)

      const { options, url } = USER_PUT({ savedPostsId: savePost }, userData.id)
      await request(url, options)
    }
  }

  React.useEffect(() => {
    if (!userData || isError(userData)) return

    console.log("savedPosts", savedPosts)

    const postsId = userData?.savedPosts?.map((post) => post.id) || []

    setSavedPosts([...new Set([...postsId, ...(savedPosts || [])])])
  }, [userData, isLoggedIn, hash])

  return { handleSavePost, loading }
}

export default UseSavePost
