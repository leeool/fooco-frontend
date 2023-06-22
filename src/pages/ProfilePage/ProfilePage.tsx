import { Title } from "@components/Text/Title"
import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { instance } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import {
  About,
  Buttons,
  Container,
  ProfileItem,
  UserEdit,
  UserInfo,
} from "./styles"
import { PostContainer } from "../Dashboard/Feed/styles"
import Post from "../Dashboard/Post/Post"
import { UserNotFound } from "../NotFound"
import ReactLoading from "react-loading"
import useUserStore from "src/stores/UseUserStore"
import { Avatar } from "@interface/User/Avatar"
import EditProfile from "./EditProfile"
import { ButtonSecondary } from "@components/Form"
import { Hat, Point } from "@assets/index"
import { Points } from "@interface/User/ProfilePreview/styles"
import getUserPoints from "src/helpers/getUserPoints"

const ProfilePage = () => {
  const { owner } = useParams()
  const [page, setPage] = React.useState<"posts" | "saved">("posts")
  const { userData } = useUserStore()
  const { data, isLoading, refetch } = useQuery<IUserData | IError>(
    ["owner", owner, page],
    () => instance(`/user/${owner}`, { method: "GET" }).then((res) => res.data)
  )

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            width: "100%",
            gridColumn: "1 / -1",
          }}
        >
          <Avatar
            src={data.avatar_url}
            delayMs={0}
            fallback={data.username.slice(0, 2)}
            size={6}
          />
          <Title
            size="lg"
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flex: "1",
            }}
          >
            @{data.username}
            <Points style={{ width: "fit-content", margin: "0" }}>
              <Point />
              {getUserPoints(data)}
            </Points>
          </Title>
          {userOwnProfile ? (
            <UserEdit>
              <EditProfile refetch={refetch} />
            </UserEdit>
          ) : null}
        </div>
        <div style={{ gridColumn: "1 / -1", display: "grid", gap: "1rem" }}>
          {data.about.length > 0 ? <About>{data.about}</About> : null}
          <ProfileItem>
            {data.educational_place && (
              <>
                <Hat />
                {data.educational_place}
              </>
            )}
          </ProfileItem>
        </div>
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
