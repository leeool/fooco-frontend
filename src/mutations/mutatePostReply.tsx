import React from "react"
import { UseMutationOptions } from "react-query"
import { POST_REPLY, instance } from "src/api/apiCalls"

interface Props {
  parentId: string
  postId: string
  content: string
  userId: string
}

const mutatePostReply = (
  parentId: string
): UseMutationOptions<IReply, unknown, Props> => {
  return {
    mutationKey: ["postReply", parentId],
    mutationFn: async ({ content, parentId, postId, userId }: Props) => {
      if (content.length < 1)
        throw new Error("O conteúdo da resposta não pode ser vazio")
      const { url, data, options } = POST_REPLY(
        content,
        userId,
        parentId,
        postId
      )

      return instance.post(url, data, options).then((res) => res.data)
    },
  }
}

export default mutatePostReply
