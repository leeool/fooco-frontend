import React from "react"
import { Container } from "./SavedPosts.styles"
import { Title } from "@components/Text/Title"
import { useQuery } from "react-query"
import { instance } from "src/api/apiCalls"
import Post from "../Dashboard/Post/Post"
import useUserStore from "src/stores/UseUserStore"

const SavedPosts = () => {
  const { userData } = useUserStore()
  const { data, isLoading } = useQuery<Pick<IUserData, "savedPosts">, IError>({
    queryFn: async () => {
      return instance.get(`/user/${userData?.username}`).then((res) => res.data)
    },
    queryKey: ["savedPosts", userData, userData?.username],
    select: (data) => {
      return { savedPosts: data.savedPosts }
    },
    staleTime: 50,
  })

  if (isLoading) return <div>loading...</div>
  if (!data) return <div>error</div>
  return (
    <Container>
      <Title size="xl">Posts Salvos</Title>
      {data?.savedPosts.length === 0 ? (
        <div>Você não salvou nenhum post ainda</div>
      ) : (
        data.savedPosts.map((post) => <Post key={post.id} post={post} />)
      )}
    </Container>
  )
}

export default SavedPosts
