import UseToastStore from "@components/Toast/UseToastStore"
import { AxiosError } from "axios"
import React from "react"
import { UseMutationOptions, useMutation } from "react-query"
import { FEEDBACK_POST, instance } from "src/api/apiCalls"

interface IData {
  userId: string
  postId: string
  feedbackType: "like" | "dislike"
  target: "post" | "reply"
}

const mutateFeedbackPost = (): UseMutationOptions<number, unknown, IData> => {
  const { setToastMessage } = UseToastStore()

  return {
    mutationKey: "feedbackPost",
    mutationFn: async ({ feedbackType, userId, postId, target }: IData) => {
      const { options, url, data } = FEEDBACK_POST(
        feedbackType,
        userId,
        postId,
        target
      )

      return instance.put(url, data, options).then((res) => res.data)
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setToastMessage("Algo deu errado", err.response?.data.error, "error")
      }
    },
  }
}

export default mutateFeedbackPost
