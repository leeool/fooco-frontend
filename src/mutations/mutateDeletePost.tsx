import UseToastStore from "@components/Toast/UseToastStore"
import React from "react"
import { MutationOptions } from "react-query"
import { DELETE_POST, instance } from "src/api/apiCalls"

interface PropsData {
  postId: string
  userId: string
}

const mutateDeletePost = (): MutationOptions<null, unknown, PropsData> => {
  const { setToastMessage } = UseToastStore()

  return {
    mutationKey: "deletePost",
    mutationFn: ({ postId, userId }: PropsData) => {
      const {
        url,
        options: { data, headers, method },
      } = DELETE_POST(postId, userId)

      return instance(url, { data, headers, method }).then((res) => res.data)
    },
    onSuccess: () => {
      setToastMessage("Sucesso", "Publicação deletada com sucesso!", "success")
    },
  }
}

export default mutateDeletePost
