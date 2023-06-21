import UseToastStore from "@components/Toast/UseToastStore"
import { AxiosError } from "axios"
import React from "react"
import { UseMutationOptions, useMutation } from "react-query"
import { FEEDBACK_POST, instance } from "src/api/apiCalls"

interface IData {
  userId: string
  postId: string
  feedbackType: "like" | "dislike"
}

const mutateFeedbackPost = (): UseMutationOptions<number, unknown, IData> => {
  const { setToastMessage } = UseToastStore()

  return {
    mutationKey: "feedbackPost",
    mutationFn: async ({ feedbackType, userId, postId }: IData) => {
      const { options, url } = FEEDBACK_POST(feedbackType, userId, postId)

      return instance
        .post(url, options.data, { headers: options.headers })
        .then((res) => res.data)
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setToastMessage("Algo deu errado", err.response?.data.error, "error")
      }
    },
  }
}

export default mutateFeedbackPost
