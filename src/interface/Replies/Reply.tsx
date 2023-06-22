import React from "react"
import {
  Author,
  Content,
  Data,
  Info,
  Interactions,
  Reply as ReplyContainer,
} from "./Replies.styled"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { MarkdownParser } from "@interface/MarkdownEditor"
import Feedback from "@interface/Feedback/Feedback"

interface Props {
  reply: IReply
}

const Reply = ({ reply }: Props) => {
  return (
    <ReplyContainer
      as={motion.div}
      initial={{
        opacity: 0,
        translateY: "-100%",
      }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Interactions>
        <Feedback content={reply} target="reply" />
      </Interactions>
      <div style={{ display: "grid" }}>
        <Info>
          <Author>
            criado por{" "}
            <Link to={`/floresta/${reply.user.username}`}>
              <span>@{reply.user.username}</span>
            </Link>
          </Author>
          <Data>
            publicado a{" "}
            <span>
              {formatDistanceToNow(new Date(reply.created_at), {
                locale: ptBR,
              })}
            </span>
          </Data>
        </Info>
        <Content>
          <MarkdownParser value={reply.content} />
        </Content>
      </div>
    </ReplyContainer>
  )
}

export default Reply
