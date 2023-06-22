import React from "react"
import { Container } from "./styles"
import { useQuery } from "react-query"
import { queryGetComments } from "src/mutations/queryGetComments"
import ReactLoading from "react-loading"
import { create } from "zustand"
import Comment from "./Comment"

interface Props {
  postId: string
  comments: IComment[]
}

interface IStore {
  replies: IReply[]
  setReplies: (replies: IReply[]) => void
  comments: IComment[]
  setComments: (comments: IComment[]) => void
}

export const usePostStore = create<IStore>((set) => ({
  replies: [],
  setReplies: (replies: IReply[]) => set({ replies }),
  comments: [],
  setComments: (comments: IComment[]) => set({ comments }),
}))

const Comments = ({ postId, comments }: Props) => {
  const { data, isLoading } = useQuery<IComment[]>(queryGetComments(postId))

  if (isLoading || !data)
    return (
      <ReactLoading
        type="spin"
        color="#E63A23"
        height={50}
        width={50}
        className="load-icon"
      />
    )
  return (
    <Container>
      {[...comments, ...data].map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </Container>
  )
}

export default Comments
