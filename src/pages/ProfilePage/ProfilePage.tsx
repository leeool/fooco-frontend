import { Title } from "@components/Text/Title"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import { About, Container, UserEdit, UserInfo } from "./styles"
import { PostContainer } from "../Dashboard/Feed/styles"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"
import Post from "../Dashboard/Post/Post"
import { UserNotFound } from "../NotFound"
import ReactLoading from "react-loading"
import useUserStore from "src/stores/UseUserStore"
import { Avatar } from "@interface/User/Avatar"
import EditProfile from "./EditProfile"

const ProfilePage = () => {
  const { owner } = useParams()
  const { data, isLoading } = useQuery<IUserData | IError>(
    ["owner", owner],
    () => instance(`/user/${owner}`, { method: "GET" }).then((res) => res.data)
  )
  const { userData } = useUserStore()

  React.useEffect(() => {
    if (!data || "error" in data) return
    document.title = `${data.username} • Fooco`
  }, [data, owner])

  if (isLoading)
    return (
      <ReactLoading
        type="spin"
        color="#E63A23"
        height={50}
        width={50}
        className="load-icon"
      />
    )
  else if (!data) return <UserNotFound owner={owner!} />
  if (isError(data)) return <div>{data.error}</div>
  const userOwnProfile = data.id === userData?.id
  return (
    <Container>
      <UserInfo>
        <Avatar
          src={data.avatar_url}
          delayMs={0}
          fallback={data.username.slice(0, 2)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title size="lg">@{data.username}</Title>
          <UserEdit>{userOwnProfile ? <EditProfile /> : null}</UserEdit>
        </div>
        {data.about.length > 0 ? <About>{data.about}</About> : null}
      </UserInfo>

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
        <Title size="md">
          {data.username} ainda não fez nenhuma publicação /:
        </Title>
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
