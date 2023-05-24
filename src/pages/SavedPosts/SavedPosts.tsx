import React from "react"
import { Container } from "./SavedPosts.styles"
import { Title } from "@components/Text/Title"
import { useQuery } from "react-query"
import { instance } from "src/api/apiCalls"
import Post from "../Dashboard/Post/Post"
import useUserStore from "src/stores/UseUserStore"
import ReactLoading from "react-loading"
import isError from "src/helpers/isError"

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
  if (!data || isError(data))
    return <Title size="xl">Nenhuma publicação salva</Title>
  return (
    <Container>
      <Title size="xl">Publicações Salvas</Title>
      {data?.savedPosts.length !== 0 &&
        data.savedPosts.map((post) => <Post key={post.id} post={post} />)}
    </Container>
  )
}

export default SavedPosts
