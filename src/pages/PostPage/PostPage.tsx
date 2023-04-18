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
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import UseSavePost from "src/helpers/SavePost"
import { PostNotFound } from "../NotFound"

const PostPage = () => {
  const { owner, slug } = useParams()
  const { isLoggedIn, userData, savedPosts } = useUserStore()
  const { handleSavePost, loading: savePostLoading } = UseSavePost()
  const nav = useNavigate()
  const { data, isLoading, isFetching } = useQuery<IUserPosts | IError>(
    "post",
    () =>
      instance(`/post/${owner}/${slug}`, { method: "GET" }).then(
        (res) => res.data
      ),
    { refetchOnWindowFocus: false }
  )
  const { request, data: feedbackData, loading } = UseFetch<string | null>()
  const [feedback, setFeedback] = React.useState<string | null>(null)

  const handleFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (loading) return

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

  React.useEffect(() => {
    window.onbeforeunload = () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  }, [])

  React.useEffect(() => {
    if (!data || "error" in data) return
    document.title = `${data.title} • ${data.user.username} • Fooco`
  }, [data, owner, slug])

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
  if (!data) return <PostNotFound />
  return (
    <Container>
      <Interactions>
        <Feedback data-loading={loading}>
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
        <button
          data-saved={savedPosts.includes(data.id)}
          onClick={handleSavePost}
          data-id={data.id}
          data-loading={savePostLoading}
        >
          <Bookmark />
        </button>
      </Interactions>
      <div>
        <Title>{data.title}</Title>
        <Info>
          <Author>
            criado por{" "}
            <Link to={`/app/${data.user.username}`}>
              <span>@{data.user.username}</span>
            </Link>
          </Author>

          <Data>
            publicado a{" "}
            <span>
              {formatDistanceToNow(new Date(data.created_at), {
                locale: ptBR,
              })}
            </span>
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
