import { Button, Input } from "@components/Form"
import React from "react"
import { AskForm, Buttons, Container } from "./styles"
import { Markdown } from "@components/MarkdownEditor"
import useUserStore from "src/stores/UseUserStore"
import { useNavigate } from "react-router"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPostSchema } from "src/schemas"
import { PUT_POST } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import isError from "src/helpers/isError"

const UpdatePost = ({ post }: { post: IUserPosts }) => {
  const [value, setValue] = React.useState(post?.content || "")
  const nav = useNavigate()
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<Post>({
    resolver: zodResolver(createPostSchema),
    mode: "all",
    shouldFocusError: true,
  })
  const { request, loading } = UseFetch<IUserPosts>()

  const handleUpdatePost = handleSubmit(async ({ tags, title }) => {
    if (!isLoggedIn || !userData || !post) return

    if (
      post.content === value &&
      post.title === title &&
      post.tags.join(" ") === tags
    )
      return

    const { options, url } = PUT_POST(
      { title, content: value, tags: tags?.trim().split(/[,;\s]/g) },
      post.id,
      userData.id
    )

    const { data, error } = await request(url, options)

    if (isError(data) || error || !data) {
      console.log({ error, data })
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document.location.reload()
  })

  if (!post) return null
  return (
    <Container>
      <AskForm onSubmit={handleUpdatePost}>
        <Controller
          name="title"
          control={control}
          defaultValue={post.title}
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
          defaultValue={post.tags.join(" ")}
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
          <Button variant="outlined" onClick={() => nav("/app")}>
            Cancelar
          </Button>
          <Button variant="solid" disabled={loading}>
            {loading ? "Carregando..." : "Editar"}
          </Button>
        </Buttons>
      </AskForm>
    </Container>
  )
}

export default UpdatePost
