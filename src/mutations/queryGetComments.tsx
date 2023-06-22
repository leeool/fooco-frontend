import React from "react"
import { UseQueryOptions } from "react-query"
import { instance } from "src/api/apiCalls"

export const queryGetComments = (
  postId: string
): UseQueryOptions<IComment[], unknown> => {
  return {
    queryKey: ["getComments", postId],
    queryFn: async () => {
      return instance.get(`/reply/${postId}`).then((res) => res.data)
    },
  }
}

export const queryGetReplies = (
  parentId: string,
  postId: string
): UseQueryOptions<IReply[], unknown> => ({
  queryKey: ["getReplies", parentId],
  queryFn: async () => {
    return instance.get(`/reply/${postId}/${parentId}`).then((res) => res.data)
  },
})
