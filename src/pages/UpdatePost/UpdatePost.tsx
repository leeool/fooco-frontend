import { Button, Input } from "@components/Form"
import React from "react"
import { AskForm, Buttons, Container } from "./styles"
import { Markdown } from "src/interface/MarkdownEditor"
import useUserStore from "src/stores/UseUserStore"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPostSchema } from "src/schemas"
import { PUT_POST, instance } from "src/api/apiCalls"
import { useMutation, useQuery } from "react-query"
import { Navigate, useLocation, useNavigate, useParams } from "react-router"
import UseToastStore from "@components/Toast/UseToastStore"
import ReactLoading from "react-loading"

interface PostUpdate {
  post: Pick<IUserPosts, "content" | "tags" | "title">
  userId: string
  postId: string
}

const UpdatePost = () => {
  const { state } = useLocation()
  const { setToastMessage } = UseToastStore()
  const { slug, owner } = useParams()
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<Post>({
    resolver: zodResolver(createPostSchema),
    mode: "all",
    shouldFocusError: true,
  })
  const nav = useNavigate()
  const [value, setValue] = React.useState("")
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async ({ post, postId, userId }: PostUpdate) => {
      const { options, url } = PUT_POST(post, postId, userId)

      return instance
        .put(url, options.data, { headers: options.headers })
        .then((res) => res.data)
    },
    mutationKey: ["updatePost", owner, slug],
    onSuccess: () => {
      nav(-1)
      setToastMessage(
        "Sucesso",
        "Publicação atualizada com sucesso!",
        "success"
      )
    },
  })
  const { data: post, isLoading: loadingPost } = useQuery<IUserPosts>({
    queryKey: ["post", owner, slug],
    queryFn: () => {
      if (state) return state

      return instance.get(`/post/${owner}/${slug}`).then((res) => res.data)
    },
    onSuccess: (data) => {
      if (!data) return
      setValue(data.content)
    },
  })

  const handleUpdatePost = handleSubmit(async ({ tags, title }) => {
    if (!isLoggedIn || !userData || !post) return

    if (
      post.content === value &&
      post.title === title &&
      post.tags.join(" ") === tags
    )
      return

    await mutateAsync({
      post: {
        title,
        content: value,
        tags: tags?.trim().split(/[,;\s]/g) || [],
      },
      postId: post.id,
      userId: userData.id,
    })
  })

  if (loadingPost)
    return (
      <ReactLoading
        type="spin"
        color="#E63A23"
        height={50}
        width={50}
        className="load-icon"
      />
    )
  if ((!post && !state) || !userData) return <Navigate to={`/floresta`} />
  if (userData.id !== (post || state).user.id)
    return (
      <Navigate
        to={`/floresta/${(post || state).user.username}/${
          (post || state).slug
        }`}
      />
    )
  return (
    <Container>
      <AskForm onSubmit={handleUpdatePost}>
        <Controller
          name="title"
          control={control}
          defaultValue={post?.title}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Descreva sua publicação"
              type="text"
              id="title"
              label="Título da publicação"
              fieldState={fieldState}
              {...field}
            />
          )}
        />

        <Markdown value={value} onChange={(e) => setValue(e)} />
        <Controller
          control={control}
          name="tags"
          defaultValue={(post || state).tags.join(" ")}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Palavras-chave da sua publicação"
              type="text"
              id="tags"
              label="Tags"
              fieldState={fieldState}
              {...field}
            />
          )}
        />
        <Buttons>
          <Button variant="outlined" onClick={() => nav(-1)} type="button">
            Cancelar
          </Button>
          <Button variant="solid" disabled={isLoading}>
            {isLoading ? "Carregando..." : "Editar"}
          </Button>
        </Buttons>
      </AskForm>
    </Container>
  )
}

export default UpdatePost
