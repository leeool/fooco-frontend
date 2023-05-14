import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { AskForm, Buttons, Container } from "./styles"
import { Markdown } from "src/interface/MarkdownEditor"
import useUserStore from "src/stores/UseUserStore"
import { useNavigate } from "react-router"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPostSchema } from "src/schemas"
import { POST_POST } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import isError from "src/helpers/isError"
import UseToastStore from "@components/Toast/UseToastStore"

const CreatePost = () => {
  const [value, setValue] = React.useState("")
  const nav = useNavigate()
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<Post>({
    resolver: zodResolver(createPostSchema),
    mode: "all",
    shouldFocusError: true,
  })
  const { request, loading } = UseFetch<IUserPosts>()
  const { setToastMessage } = UseToastStore()

  const handleCreatePost = handleSubmit(async ({ tags, title }) => {
    console.log({ tags, title, value })

    const arrTags = tags?.split(/[,;\s]/g).filter((value) => Boolean(value))

    if (!isLoggedIn || !userData) return nav("/entrar")

    const { options, url } = POST_POST(title, value, userData.id, arrTags)

    const { data, error } = await request(url, options)

    if (isError(data) || error || !data) {
      console.log({ error, data })
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    nav(`/app/${userData.username}/${data.slug}`)
    setToastMessage("Sucesso", "Publicação criada com sucesso!")
  })

  return (
    <Container>
      <Title size="xl" className="title">
        Publicar
      </Title>
      <AskForm onSubmit={handleCreatePost}>
        <Controller
          name="title"
          control={control}
          defaultValue={""}
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
          defaultValue={""}
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
            {loading ? "Carregando..." : "Publicar"}
          </Button>
        </Buttons>
      </AskForm>
    </Container>
  )
}

export default CreatePost
