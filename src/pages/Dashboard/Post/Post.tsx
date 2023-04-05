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
import { USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Props {
  post: IUserPosts
}

const Post = ({ post }: Props) => {
  const { userData, setSavedPosts, savedPosts, isLoggedIn } = useUserStore()
  const removeSpecialChars = /[^A-Za-z0-9\s-]/g
  const { request } = UseFetch()
  const slug = post.title
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replaceAll(removeSpecialChars, "")
    .toLowerCase()

  const handleSave = React.useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      const postId = e.currentTarget.dataset.id
      if (!userData || !isLoggedIn || !postId) return
      let saved_posts

      if (savedPosts.includes(postId)) {
        const removePost = savedPosts.filter((id) => id !== postId)
        saved_posts = removePost
        setSavedPosts(removePost)
        console.log("removeu")
        console.log(removePost)
      } else {
        const savePost = savedPosts.concat(postId)
        saved_posts = savePost
        setSavedPosts(savePost)
        console.log("salvou")
        console.log(savePost)
      }

      const { options, url } = USER_PUT({ saved_posts }, userData.id)

      await request(url, options)
    },
    []
  )

  return (
    <Container key={post.id}>
      <PostInfo>
        <Link to={`/app/${post.user.username}/${slug}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <Details>
          <Link to={`/app/${post.user.username}`}>
            <Author>
              por <span>{post.user.username}</span>
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
        <ButtonSecondary onClick={handleSave} data-id={post.id}>
          <Bookmark data-saved={savedPosts.includes(post.id)} />
          {savedPosts.includes(post.id) ? "Remover" : "Salvar"}
        </ButtonSecondary>
      </Interactions>
    </Container>
  )
}

export default Post
