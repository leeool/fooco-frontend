import { Bookmark, MiniSeta, Reply, Share } from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import formatDate from "src/helpers/formatDate"
import useUserStore from "src/stores/UseUserStore"
import {
  Author,
  Container,
  Content,
  Data,
  Details,
  Feedback,
  Info,
  Interactions,
  Tags,
  Title,
} from "./styles"

const PostPage = () => {
  const { id } = useParams()
  const { isLoggedIn } = useUserStore()
  const nav = useNavigate()
  const { data, isLoading, isFetching } = useQuery<IUserPosts | IError>(
    "post",
    () => instance(`/post/${id}`, { method: "GET" }).then((res) => res.data),
    { refetchOnWindowFocus: false }
  )

  const getDate = (date: string) => {
    const now = new Date()
    const prevDate = new Date(date)
    const diff = now.getDate() - prevDate.getDate()

    return diff
  }

  const handleFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!isLoggedIn) {
      nav("/entrar")
      return
    }

    const feedbackType = e.currentTarget.dataset.feedback
  }

  if (isLoading || isFetching) return <div>Loading...</div>
  if (data && "error" in data) return <div>{data.error}</div>
  if (!data) return null
  return (
    <Container>
      <Interactions>
        <Feedback>
          <button onClick={handleFeedback} data-feedback="like">
            <MiniSeta />
          </button>
          <span>{data.points}</span>
          <button onClick={handleFeedback} data-feedback="dislike">
            <MiniSeta style={{ rotate: "180deg" }} />
          </button>
        </Feedback>
        <button>
          <Share />
        </button>
        <button>
          <Bookmark />
        </button>
      </Interactions>
      <div>
        <Title>{data.title}</Title>
        <Info>
          <Author>
            criado por <span>{data.user.username}</span>
          </Author>
          <Data>
            publicado <span>{getDate(data.created_at)} dias atrás</span>
          </Data>
        </Info>
        <Content>{data.content}</Content>
      </div>
      <Details>
        <ButtonSecondary>
          <Reply />
          Responder
        </ButtonSecondary>
        <Tags>
          <span>TCC</span>
          <span>Dicas de Estudos</span>
          <span>Socialização</span>
        </Tags>
      </Details>
    </Container>
  )
}

export default PostPage
