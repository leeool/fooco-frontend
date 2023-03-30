import { Title } from "@components/Text/Title"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import { Container } from "./styles"
import { PostContainer } from "../Dashboard/Feed/styles"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"
import Post from "../Dashboard/Post/Post"

const ProfilePage = () => {
  const { owner } = useParams()
  const { data, isLoading } = useQuery<IUserData | IError>("owner", () =>
    instance(`/user/${owner}`, { method: "GET" }).then((res) => res.data)
  )

  if (isLoading) return <div>Carregando...</div>
  else if (!data) return <div>Usuário não encontrado</div>
  if (isError(data)) return <div>{data.error}</div>
  return (
    <Container>
      <Title size="xl">{data.username}</Title>

      {data.posts.length > 0 ? (
        <PostContainer>
          {isLoading ? (
            <LoadingPosts />
          ) : (
            data.posts
              ?.map((post) => <Post post={post} key={post.id} />)
              .reverse()
          )}
        </PostContainer>
      ) : (
        <div>{data.username} ainda não fez nenhuma publicação /:</div>
      )}
    </Container>
  )
}

export default ProfilePage

const LoadingPosts = () => (
  <SkeletonLoad>
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
  </SkeletonLoad>
)
