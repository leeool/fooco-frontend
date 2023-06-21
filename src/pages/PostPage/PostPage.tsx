import {
  Bookmark,
  Edit,
  Ellipsis,
  MiniSeta,
  Reply as ReplyIcon,
  Share,
  Trash,
} from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
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
import { MarkdownParser } from "src/interface/MarkdownEditor"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@components/DropdownMenuAPI"
import UseToastStore from "@components/Toast/UseToastStore"
import { Replies, CreateReply, Avatar } from "src/interface"
import Complaint from "@interface/Complaint/Complaint"
import { useSearchStore } from "@interface/Header/Search"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import mutateFeedbackPost from "src/mutations/mutateFeedbackPost"
import mutateDeletePost from "src/mutations/mutateDeletePost"

const PostPage = () => {
  const { owner, slug } = useParams()
  const { isLoggedIn, userData, savedPosts } = useUserStore()
  const { data, isLoading, isFetching } = useQuery<IUserPosts | IError>(
    ["post", owner, slug],
    () => instance.get(`/post/${owner}/${slug}`).then((res) => res.data)
  )
  const { setSearch } = useSearchStore()
  const { handleSavePost, loading: savePostLoading } = UseSavePost()
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()
  const [feedback, setFeedback] = React.useState<string | null>(null)
  const [isReplying, setIsReplying] = React.useState<boolean>(false)
  const [newReply, setNewReply] = React.useState<IReply[] | null>(null)
  const match = UseMatchWindowSize(600)
  const {
    mutateAsync: mutateFeedback,
    isLoading: loadingFeedback,
    data: dataFeedback,
  } = useMutation(mutateFeedbackPost())

  const handleFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (loadingFeedback) return

    if (!isLoggedIn) {
      nav("/entrar")
      return
    }

    const feedbackType = e.currentTarget.dataset.feedback as "like" | "dislike"

    if (!feedbackType || !userData || !data || "error" in data) return

    mutateFeedback(
      { feedbackType, userId: userData.id, postId: data.id },
      {
        onSuccess: () => {
          setFeedback((prev) => {
            if (prev === feedbackType) return null
            return feedbackType
          })
        },
      }
    )
  }

  const handleReplying = () => {
    if (!isLoggedIn) {
      nav("/entrar")
      return
    }

    setIsReplying((prev) => !prev)
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
    setNewReply(null)
    if (!data || "error" in data) return
    document.title = `${data.title} • ${data.user.username} • Fooco`
  }, [data, owner, slug])

  const handleCopyLink = () => {
    if (!data || isError(data)) return
    navigator.clipboard.writeText(
      `${window.location.origin}/app/${data.user.username}/${slug}`
    )

    setToastMessage(
      "Sucesso!",
      "Link copiado para a área de transferência",
      "success"
    )
  }

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
  if (!data || isError(data)) return <PostNotFound />
  return (
    <Container>
      <Interactions>
        {match ? null : (
          <Link to={`/app/${data.user.username}`}>
            <Avatar
              src={data.user.avatar_url}
              fallback={data.user.username.slice(0, 2)}
              delayMs={500}
              size={4}
            />
          </Link>
        )}
        <Feedback data-loading={loadingFeedback}>
          <ButtonSecondary
            onClick={handleFeedback}
            data-feedback="like"
            data-active={feedback === "like"}
            style={{ padding: "0" }}
          >
            <MiniSeta />
          </ButtonSecondary>
          <span>
            {dataFeedback !== undefined ? String(dataFeedback) : data.points}
          </span>
          <ButtonSecondary
            onClick={handleFeedback}
            data-feedback="dislike"
            data-active={feedback === "dislike"}
            style={{ padding: "0" }}
          >
            <MiniSeta style={{ rotate: "180deg" }} />
          </ButtonSecondary>
        </Feedback>
        <button onClick={handleCopyLink}>
          <Share />
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
      <Content>
        <Info>
          <Title>{data.title}</Title>
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
          <HandlePost post={data} />
        </Info>
        <MarkdownParser value={data.content} />
      </Content>
      <Details>
        <ButtonSecondary onClick={handleReplying}>
          <ReplyIcon />
          Responder
        </ButtonSecondary>
        <Tags>
          {data.tags.map((tag, index) => (
            <span key={tag + index} onClick={() => setSearch(tag)}>
              <Link to={"/app/procurar?q=" + tag}>{tag}</Link>
            </span>
          ))}
        </Tags>
      </Details>
      {isReplying ? (
        <CreateReply
          setNewReply={setNewReply}
          postId={data.id}
          setIsReplying={setIsReplying}
        />
      ) : null}
      <Replies replies={data.reply.concat(newReply ? [...newReply] : [])} />
    </Container>
  )
}

const HandlePost = ({ post }: { post: IUserPosts }) => {
  const { userData } = useUserStore()
  const nav = useNavigate()
  const { mutateAsync: deletePost, isLoading: loadingDeletePost } = useMutation(
    mutateDeletePost()
  )

  const handlePostDelete = async () => {
    if (!userData || loadingDeletePost) return

    deletePost(
      { postId: post.id, userId: userData.id },
      {
        onSuccess: () => {
          nav(`/app/${userData.username}`)
        },
      }
    )
  }

  if (!userData) return null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="info-btn">
        <ButtonSecondary style={{ padding: "0" }} as={"div"}>
          <Ellipsis />
        </ButtonSecondary>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userData.id === post.user.id && (
          <>
            <Link to={"editar"} state={post}>
              <DropdownMenuItem>
                <Edit />
                Editar
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handlePostDelete}>
              <Trash />
              Deletar
            </DropdownMenuItem>
          </>
        )}
        {userData.id !== post.user.id && (
          <DropdownMenuSub>
            <Complaint />
          </DropdownMenuSub>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default PostPage
