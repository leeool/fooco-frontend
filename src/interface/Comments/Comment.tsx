import React from "react"
import {
  Author,
  Content,
  Data,
  Details,
  Info,
  Interactions,
  Reply,
} from "./styles"
import { Avatar } from ".."
import { Link } from "react-router-dom"
import { MarkdownParser } from "@interface/MarkdownEditor"
import { ButtonSecondary } from "@components/Form"
import { ReplyIcon } from "@primer/octicons-react"
import CreateReply from "@interface/Replies/CreateReply/CreateReply"
import Replies from "@interface/Replies/Replies"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import useUserStore from "src/stores/UseUserStore"
import { motion } from "framer-motion"
import Feedback from "@interface/Feedback/Feedback"

interface Props {
  comment: IComment
}

const Comment = ({ comment }: Props) => {
  const [isReplying, setIsReplying] = React.useState(false)
  const { userData } = useUserStore()
  const [replies, setReplies] = React.useState<IReply[]>(comment.replies)

  return (
    <Reply
      key={comment.id}
      as={motion.div}
      initial={{
        opacity: 0,
        translateY: "-100%",
      }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Interactions>
        <Avatar
          src={comment.user.avatar_url}
          delayMs={500}
          fallback={comment.user.username.slice(0, 2)}
          size={3.5}
        />
        <Feedback content={comment} target="reply" />
      </Interactions>
      <div style={{ display: "grid" }}>
        <Info>
          <Author>
            criado por{" "}
            <Link to={`/floresta/${comment.user.username}`}>
              <span>@{comment.user.username}</span>
            </Link>
          </Author>
          <Data>
            publicado a{" "}
            <span>
              {formatDistanceToNow(new Date(comment.created_at), {
                locale: ptBR,
              })}
            </span>
          </Data>
        </Info>
        <Content>
          <MarkdownParser value={comment.content} />
        </Content>
        <Details style={{ border: "none", padding: "1rem 0", margin: 0 }}>
          <ButtonSecondary onClick={() => setIsReplying((prev) => !prev)}>
            <ReplyIcon />
            Responder
          </ButtonSecondary>
        </Details>
        {isReplying && (
          <CreateReply
            postId={comment.post_id}
            setIsReplying={setIsReplying}
            parentId={comment.id}
            userId={userData?.id}
            setData={setReplies}
          />
        )}
        <Replies replies={replies} />
      </div>
    </Reply>
  )
}

export default Comment
