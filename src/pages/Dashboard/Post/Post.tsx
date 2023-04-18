import { Bookmark, Point, Reply, Send } from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { Link } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"
import {
  Author,
  Container,
  Content,
  PostInfo,
  PostTitle,
  Tags,
  Details,
  Interactions,
  Points,
  DateContainer,
} from "./styles"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import UseSavePost from "src/helpers/SavePost"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  const removeSpecialChars = /[^A-Za-z0-9\s-]/g
  const { savedPosts } = useUserStore()
  const { handleSavePost, loading } = UseSavePost()
  const slug = post.title
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replaceAll(removeSpecialChars, "")
    .toLowerCase()

  return (
    <Container key={post.id}>
      <PostInfo>
        <Link to={`/app/${post.user.username}/${slug}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <Details>
          <Link to={`/app/${post.user.username}`} reloadDocument>
            <Author>
              por <span>@{post.user.username}</span>
            </Author>
          </Link>
          <DateContainer>
            publicado a{" "}
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                locale: ptBR,
              })}
            </span>
          </DateContainer>
        </Details>
      </PostInfo>
      <Link to={`/app/${post.user.username}/${slug}`}>
        <Content>{post.content}</Content>
      </Link>
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
        <ButtonSecondary>
          <Reply />
          Responder
        </ButtonSecondary>
        <ButtonSecondary>
          <Send />
          Enviar
        </ButtonSecondary>
        <ButtonSecondary
          onClick={handleSavePost}
          data-id={post.id}
          data-loading={loading}
        >
          <Bookmark data-saved={savedPosts.includes(post.id)} />
          {savedPosts.includes(post.id) ? "Remover" : "Salvar"}
        </ButtonSecondary>
      </Interactions>
    </Container>
  )
}

export default Post
