import React from "react"
import Skeleton from "react-loading-skeleton"
import { GET_POSTS } from "src/api/apiCalls"
import SkeletonLoad from "src/helpers/Skeleton"
import UseFetch from "src/hooks/UseFetch"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import ProfilePreview from "../ProfilePreview"
import Post from "./Post/Post"
import { Container, PostContainer } from "./styles"

const Feed = () => {
  const match = UseMatchWindowSize(1000)
  const [posts, setPosts] = React.useState<IUserPosts[] | null>([])
  const { error, loading: loadingPosts, request } = UseFetch<IUserPosts[]>()

  React.useEffect(() => {
    const getPosts = async () => {
      const { options, url } = GET_POSTS()

      const response = await request(url, options)

      if (!error) {
        setPosts(response.data)
      }
    }

    getPosts()
  }, [])

  return (
    <Container>
      <PostContainer>
        {loadingPosts ? (
          <LoadingPosts />
        ) : (
          posts?.map((post) => <Post post={post} key={post.id} />).reverse()
        )}
      </PostContainer>
      {match ? null : <ProfilePreview />}
    </Container>
  )
}

const LoadingPosts = () => (
  <SkeletonLoad>
    <>
      <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
      <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
      <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
      <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
      <Skeleton width={"100%"} count={1} height={150} borderRadius={10} />
    </>
  </SkeletonLoad>
)

export default Feed
