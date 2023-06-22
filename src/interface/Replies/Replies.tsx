import React from "react"
import Reply from "./Reply"
import { Container } from "./Replies.styled"

interface Props {
  replies: IReply[]
}

const Replies = ({ replies }: Props) => {
  return (
    <Container>
      {replies.map((reply) => (
        <Reply key={reply.id} reply={reply} />
      ))}
    </Container>
  )
}

export default Replies
