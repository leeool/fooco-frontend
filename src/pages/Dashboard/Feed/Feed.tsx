import React from "react"
import Skeleton from "react-loading-skeleton"
import { instance } from "src/api/apiCalls"
import SkeletonLoad from "src/helpers/Skeleton"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import ProfilePreview from "@interface/User/ProfilePreview"
import Post from "../Post/Post"
import { Container, FeedContainer, PostContainer, SideColumn } from "./styles"
import { useQuery } from "react-query"
import isError from "src/helpers/isError"
import Ask from "./Ask"
import { RankingCard } from "@interface/index"

const Feed = () => {
  const match = UseMatchWindowSize(1000)

  const { data, isLoading } = useQuery<IUserPosts[] | IError>("posts", () =>
    instance("/post").then((res) => res.data)
  )

  React.useEffect(() => {
    document.title = "Fooco • Feed"
  }, [])

  if (isError(data)) {
    return <h1>{data.error}</h1>
  }
  return (
    <Container>
      <FeedContainer>
        <Ask />
        <PostContainer>
          {isLoading ? (
            <LoadingPosts />
          ) : (
            data?.map((post) => <Post post={post} key={post.id} />)
          )}
        </PostContainer>
      </FeedContainer>
      {match ? null : (
        <SideColumn>
          {match ? null : <ProfilePreview />}
          {match ? null : <RankingCard />}
        </SideColumn>
      )}
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
