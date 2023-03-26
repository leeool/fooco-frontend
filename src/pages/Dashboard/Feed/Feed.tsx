import React from "react"
import Skeleton from "react-loading-skeleton"
import { instance } from "src/api/apiCalls"
import SkeletonLoad from "src/helpers/Skeleton"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import ProfilePreview from "../ProfilePreview"
import Post from "../Post/Post"
import {
  Ask,
  AskContainer,
  Container,
  FeedContainer,
  PostContainer,
} from "./styles"
import { useQuery } from "react-query"
import isError from "src/helpers/isError"
import { Avatar } from "@components/User/Avatar"
import useUserStore from "src/stores/UseUserStore"
import { useNavigate } from "react-router"

const Feed = () => {
  const match = UseMatchWindowSize(1000)
  const { userData } = useUserStore()
  const navigate = useNavigate()

  const { data, isLoading } = useQuery<IUserPosts[] | IError>("posts", () =>
    instance("/post").then((res) => res.data)
  )

  if (isError(data)) {
    return <h1>{data.error}</h1>
  }
  return (
    <Container>
      <FeedContainer>
        {userData && (
          <AskContainer>
            <Avatar
              src=""
              fallback={userData.username.slice(0, 2)}
              delayMs={0}
              className="avatar"
            />
            <Ask onClick={() => navigate("perguntar")}>Perguntar...</Ask>
          </AskContainer>
        )}
        <PostContainer>
          {isLoading ? (
            <LoadingPosts />
          ) : (
            data?.map((post) => <Post post={post} key={post.id} />).reverse()
          )}
        </PostContainer>
      </FeedContainer>
      {match ? null : <ProfilePreview />}
    </Container>
  )
}

const LoadingPosts = () => (
  <SkeletonLoad>
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
  </SkeletonLoad>
)

export default Feed
