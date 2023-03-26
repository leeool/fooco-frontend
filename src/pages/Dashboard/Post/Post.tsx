import { Bookmark, Point, Reply, Share } from "@assets/index"
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
  const removeThreatRegex = /[/.]/g
  const removeAccentRegex = /[\u0300-\u036f]/g
  const titleParam = post.title
    .split(" ")
    .join("-")
    .replace(removeThreatRegex, "")
    .normalize("NFD")
    .replace(removeAccentRegex, "")

  return (
    <Container key={post.id}>
      <PostInfo>
        <Link to={`pergunta/${post.id}/${titleParam}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <AuthorAndTags>
          <Author>por {post.user.username}</Author>
          <Tags>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </Tags>
        </AuthorAndTags>
      </PostInfo>
      <Link to={`pergunta/${post.id}`}>
        <Content>{post.content}</Content>
      </Link>
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
          <Share />
          Compartilhar
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
