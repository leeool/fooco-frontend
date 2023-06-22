import {
  Bookmark,
  Edit,
  Ellipsis,
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
import { CreateComment, Avatar } from "src/interface"
import Complaint from "@interface/Complaint/Complaint"
import { useSearchStore } from "@interface/Header/Search"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import mutateDeletePost from "src/mutations/mutateDeletePost"
import Comments from "@interface/Comments/Comments"
import Feedback from "@interface/Feedback/Feedback"

const PostPage = () => {
  const { owner, slug } = useParams()
  const { isLoggedIn, savedPosts } = useUserStore()
  const { data, isLoading, isFetching } = useQuery<IUserPosts | IError>(
    ["post", owner, slug],
    () => instance.get(`/post/${owner}/${slug}`).then((res) => res.data)
  )
  const { setSearch } = useSearchStore()
  const { handleSavePost, loading: savePostLoading } = UseSavePost()
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()
  const [isReplying, setIsReplying] = React.useState<boolean>(false)
  const [comments, setComments] = React.useState<IComment[] | []>([])
  const match = UseMatchWindowSize(600)

  const handleReplying = () => {
    if (!isLoggedIn) {
      nav("/entrar")
      return
    }

    setIsReplying((prev) => !prev)
  }

  React.useEffect(() => {
    setComments([])
    if (!data || "error" in data) return
    document.title = `${data.title} • ${data.user.username} • Fooco`
  }, [data, owner, slug])

  const handleCopyLink = () => {
    if (!data || isError(data)) return
    navigator.clipboard.writeText(
      `${window.location.origin}/floresta/${data.user.username}/${slug}`
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
          <Link to={`/floresta/${data.user.username}`}>
            <Avatar
              src={data.user.avatar_url}
              fallback={data.user.username.slice(0, 2)}
              delayMs={500}
              size={4}
            />
          </Link>
        )}
        <Feedback content={data} target="post" />
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
            <Link to={`/floresta/${data.user.username}`}>
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
              <Link to={"/floresta/procurar?q=" + tag}>{tag}</Link>
            </span>
          ))}
        </Tags>
      </Details>
      {isReplying ? (
        <CreateComment
          setComments={setComments}
          postId={data.id}
          setIsReplying={setIsReplying}
        />
      ) : null}
      <Comments postId={data.id} comments={comments} />
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
          nav(`/floresta/${userData.username}`)
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
