import { Title } from "@components/Text/Title"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import { About, Buttons, Container, UserEdit, UserInfo } from "./styles"
import { PostContainer } from "../Dashboard/Feed/styles"
import Post from "../Dashboard/Post/Post"
import { UserNotFound } from "../NotFound"
import ReactLoading from "react-loading"
import useUserStore from "src/stores/UseUserStore"
import { Avatar } from "@interface/User/Avatar"
import EditProfile from "./EditProfile"
import { ButtonSecondary } from "@components/Form"

const ProfilePage = () => {
  const { owner } = useParams()
  const [page, setPage] = React.useState<"posts" | "saved">("posts")
  const { data, isLoading } = useQuery<IUserData | IError>(
    ["owner", owner, page],
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
          size={6}
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
      <Buttons>
        <ButtonSecondary
          onClick={() => setPage("posts")}
          data-active={page === "posts"}
        >
          Publicações
        </ButtonSecondary>
        <ButtonSecondary
          onClick={() => setPage("saved")}
          data-active={page === "saved"}
        >
          Salvos
        </ButtonSecondary>
        <span></span>
      </Buttons>
      {page === "posts" ? (
        <UserPosts data={data.posts} />
      ) : (
        <UserPosts data={data.savedPosts} />
      )}
    </Container>
  )
}

const UserPosts = ({ data: posts }: { data: IUserPosts[] }) => {
  return posts.length > 0 ? (
    <PostContainer>
      {posts?.map((post) => <Post post={post} key={post.id} />).reverse()}
    </PostContainer>
  ) : (
    <Title size="md">Ainda não há nada aqui /:</Title>
  )
}

export default ProfilePage
