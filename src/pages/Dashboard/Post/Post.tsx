import { Bookmark, Point, Reply, Send } from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"
import {
  Container,
  PostInfo,
  PostTitle,
  Tags,
  Details,
  Interactions,
  Points,
  Item,
} from "./styles"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import UseSavePost from "src/helpers/SavePost"
import UseToastStore from "@components/Toast/UseToastStore"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  const removeSpecialChars = /[^A-Za-z0-9\s-]/g
  const nav = useNavigate()
  const { savedPosts } = useUserStore()
  const { handleSavePost, loading } = UseSavePost()
  const { setToastMessage } = UseToastStore()
  const slug = post.title
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replaceAll(removeSpecialChars, "")
    .toLowerCase()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/app/${post.user.username}/${slug}`
    )

    setToastMessage("Sucesso!", "Link copiado para a área de transferência")
  }

  return (
    <Container key={post.id}>
      <PostInfo>
        <Link to={`/app/${post.user.username}/${slug}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <Details>
          <Link to={`/app/${post.user.username}`}>
            <Item>
              por <span>@{post.user.username}</span>
            </Item>
          </Link>
          <Item>
            publicado a{" "}
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                locale: ptBR,
              })}
            </span>
          </Item>
          <Item>
            <span>
              {post?.reply.length}{" "}
              {post?.reply.length === 1 ? "resposta" : "respostas"}{" "}
            </span>
          </Item>
        </Details>
      </PostInfo>
      <Tags>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Interactions>
        <Points>
          <Point />
          {post.points}
        </Points>
        <ButtonSecondary
          onClick={() => nav(`/app/${post.user.username}/${post.slug}`)}
        >
          <Reply />
          Responder
        </ButtonSecondary>
        <ButtonSecondary onClick={handleCopyLink}>
          <Send />
          Enviar
        </ButtonSecondary>
        <ButtonSecondary
          onClick={handleSavePost}
          data-id={post.id}
          data-loading={loading}
          disabled={loading}
        >
          <Bookmark data-saved={savedPosts.includes(post.id)} />
          {savedPosts.includes(post.id) ? "Remover" : "Salvar"}
        </ButtonSecondary>
      </Interactions>
    </Container>
  )
}

export default Post
