import { Bookmark, Point, Reply, Send } from "@assets/index"
import { ButtonSecondary } from "@components/Form"
import React from "react"
import { Link } from "react-router-dom"
import {
  Author,
  Container,
  Content,
  PostInfo,
  PostTitle,
  Tags,
  AuthorAndTags,
  Interactions,
  Points,
} from "./styles"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  const removeSpecialChars = /[^A-Za-z0-9\s-]/g
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
        <AuthorAndTags>
          <Link to={`/app/${post.user.username}`}>
            <Author>por {post.user.username}</Author>
          </Link>
        </AuthorAndTags>
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
        <ButtonSecondary>
          <Bookmark />
          Salvar
        </ButtonSecondary>
      </Interactions>
    </Container>
  )
}

export default Post
