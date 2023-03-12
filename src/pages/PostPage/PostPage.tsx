import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"

const PostPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useQuery<IUserPosts | IError>("post", () =>
    instance(`/post/${id}`, { method: "GET" }).then((res) => res.data)
  )

  if (!data) return null
  if (isLoading) return <div>Loading...</div>
  if (data && "error" in data) return <div>Error...</div>
  return (
    <article>
      <h1>{data.title}</h1>
    </article>
  )
}

export default PostPage
