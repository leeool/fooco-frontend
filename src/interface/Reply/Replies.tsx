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
import { MarkdownParser } from "@components/MarkdownEditor"
import { ButtonSecondary } from "@components/Form"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Reply as ReplyIcon } from "@assets/index"

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
            <div>
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
