import React from "react"
import { useSearchParams } from "react-router-dom"
import { Container } from "./Search.styles"
import { useQuery } from "react-query"
import { GET_POSTS, instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import { Title } from "@components/Text/Title"
import Post from "../Dashboard/Post/Post"
import ReactLoading from "react-loading"

const Search = () => {
  const [search] = useSearchParams()
  const { data, isLoading } = useQuery<IUserPosts[]>({
    queryKey: ["search", search.get("q")],
    queryFn: async () => {
      const { url, options } = GET_POSTS()
      return instance(
        `${url}?q=${search.get("q")?.trim().split(" ").join("+")}`,
        options
      ).then((res) => res.data)
    },
  })

  React.useEffect(() => {
    console.log(data)
  }, [search.get("q"), data])

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
  if (!data || isError(data) || data.length === 0)
    return <Title size="xl">Nenhum resultado para: {search.get("q")}</Title>
  return (
    <Container>
      <Title size="xl">Pesquisa: {search.get("q")}</Title>
      <div>
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}

export default Search
