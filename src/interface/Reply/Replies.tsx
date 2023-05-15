import React from "react"
import {
  Author,
  Content,
  Data,
  Details,
  Feedback,
  Info,
  Interactions,
  Reply,
  Container,
} from "./styles"
import { MiniSeta } from "@assets/index"
import { Link } from "react-router-dom"
import { MarkdownParser } from "src/interface/MarkdownEditor"
import { ButtonSecondary } from "@components/Form"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Reply as ReplyIcon } from "@assets/index"
import { Avatar } from ".."

interface Props {
  replies: IReply[]
}

const Replies = ({ replies }: Props) => {
  return (
    <Container>
      {replies
        .map((reply) => (
          <Reply key={reply.id}>
            <Interactions>
              <Avatar
                src={reply.user.avatar_url}
                delayMs={500}
                fallback={reply.user.username.slice(0, 2)}
              />
              <Feedback>
                <button>
                  <MiniSeta />
                </button>
                <span>0</span>
                <button>
                  <MiniSeta style={{ rotate: "180deg" }} />
                </button>
              </Feedback>
            </Interactions>
            <div style={{ display: "grid" }}>
              <Info>
                <Author>
                  criado por{" "}
                  <Link to={`/app/${reply.user.username}`}>
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
              <Details style={{ border: "none", padding: "1rem 0", margin: 0 }}>
                <ButtonSecondary>
                  <ReplyIcon />
                  Responder
                </ButtonSecondary>
              </Details>
            </div>
          </Reply>
        ))
        .reverse()}
    </Container>
  )
}

export default Replies
