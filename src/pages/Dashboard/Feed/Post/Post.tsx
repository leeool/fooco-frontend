import React from "react"
import {
  Author,
  Container,
  Content,
  PostInfo,
  PostTitle,
  Tags,
  AuthorAndTags,
} from "./styles"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  return (
    <Container key={post.id}>
      <PostInfo>
        <PostTitle>{post.title}</PostTitle>
        <AuthorAndTags>
          <Author>por {post.user.username}</Author>
          <Tags>
            <span>TCC</span>
            <span>Dicas de Estudos</span>
            <span>Socialização</span>
          </Tags>
        </AuthorAndTags>
      </PostInfo>
      <Content>{post.content}</Content>
    </Container>
  )
}

export default Post
