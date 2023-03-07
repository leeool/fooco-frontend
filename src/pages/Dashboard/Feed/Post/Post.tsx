import React from "react"
import { Author, Container, Content, PostInfo, PostTitle } from "./styles"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  return (
    <Container key={post.id}>
      <PostInfo>
        <PostTitle>{post.title}</PostTitle>
        <Author>por {post.user.username}</Author>
      </PostInfo>
      <Content>{post.content}</Content>
    </Container>
  )
}

export default Post
