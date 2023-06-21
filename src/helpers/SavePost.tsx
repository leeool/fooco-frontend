import React from "react"
import { useLocation, useNavigate } from "react-router"
import { USER_PUT } from "src/api/apiCalls"
import useUserStore from "src/stores/UseUserStore"
import isError from "./isError"
import { useMutation } from "react-query"
import mutateProfileEdit from "src/mutations/mutateProfileEdit"

const UseSavePost = () => {
  const { userData, isLoggedIn, savedPosts, setSavedPosts } = useUserStore()
  const nav = useNavigate()
  const { hash } = useLocation()
  const { mutate, isLoading } = useMutation(mutateProfileEdit(userData?.id))

  const handleSavePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const postId = e.currentTarget.dataset.id

    if (isLoading) return

    if (!postId || !userData || !isLoggedIn) {
      nav("/entrar")
      return
    }

    if (savedPosts.includes(postId)) {
      const removePost = savedPosts.filter((id) => id !== postId)
      setSavedPosts(removePost)

      mutate({
        modifiedData: { savedPostsId: removePost },
        userId: userData.id,
      })
    } else {
      const savePost = savedPosts.concat(postId)
      setSavedPosts(savePost)

      mutate({
        modifiedData: { savedPostsId: savePost },
        userId: userData.id,
      })
    }
  }

  React.useEffect(() => {
    if (!userData || isError(userData)) return

    const postsId = userData.savedPosts?.map((post) => post.id) || []

    setSavedPosts([...new Set([...postsId, ...(savedPosts || [])])])
  }, [userData, hash])

  return { handleSavePost, loading: isLoading }
}

export default UseSavePost
