import { Bookmark, MiniSeta, Reply, Send } from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"
import { FEEDBACK_POST, instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import UseFetch from "src/hooks/UseFetch"
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
import ReactLoading from "react-loading"

const PostPage = () => {
  const { owner, slug } = useParams()
  const { isLoggedIn, userData } = useUserStore()
  const nav = useNavigate()
  const { data, isLoading, isFetching } = useQuery<IUserPosts | IError>(
    "post",
    () =>
      instance(`/post/${owner}/${slug}`, { method: "GET" }).then(
        (res) => res.data
      ),
    { refetchOnWindowFocus: false }
  )
  const { request, data: feedbackData } = UseFetch<string | null>()
  const [feedback, setFeedback] = React.useState<string | null>(null)

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

    if (!feedbackType || !userData || !data || "error" in data) return

    setFeedback((prev) => (prev === feedbackType ? null : feedbackType))

    const { options, url } = FEEDBACK_POST(feedbackType, userData.id, data.id)

    request(url, options)
  }

  React.useEffect(() => {
    setFeedback(null)
    if (!data || "error" in data || !userData) return

    const userLikedPost = data.users_liked.includes(userData.id)
    const userDislikedPost = data.users_disliked.includes(userData.id)

    if (userLikedPost) return setFeedback("like")
    else if (userDislikedPost) return setFeedback("dislike")
  }, [data, userData, owner, slug])

  if (isLoading || isFetching)
    return (
      <ReactLoading
        type="spin"
        color="#E63A23"
        height={50}
        width={50}
        className="load-icon"
      />
    )
  if (isError(data)) return <div>{data.error}</div>
  if (!data) return null
  return (
    <Container>
      <Interactions>
        <Feedback>
          <button
            onClick={handleFeedback}
            data-feedback="like"
            data-active={feedback === "like"}
          >
            <MiniSeta />
          </button>
          <span>
            {feedbackData !== null ? String(feedbackData) : data.points}
          </span>
          <button
            onClick={handleFeedback}
            data-feedback="dislike"
            data-active={feedback === "dislike"}
          >
            <MiniSeta style={{ rotate: "180deg" }} />
          </button>
        </Feedback>
        <button>
          <Send />
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
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
      </Details>
    </Container>
  )
}

export default PostPage
