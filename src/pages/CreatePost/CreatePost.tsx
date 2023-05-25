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
import { instance, POST_POST } from "src/api/apiCalls"
import isError from "src/helpers/isError"
import UseToastStore from "@components/Toast/UseToastStore"
import { useMutation } from "react-query"

const CreatePost = () => {
  const [value, setValue] = React.useState("")
  const nav = useNavigate()
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<Post>({
    resolver: zodResolver(createPostSchema),
    mode: "all",
    shouldFocusError: true,
  })
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: Partial<IUserPosts> & { user_id: string }) => {
      const { options, url } = POST_POST(data)
      return instance(url, options).then((res) => res.data)
    },
    mutationKey: "createPost",
  })
  const { setToastMessage } = UseToastStore()

  const handleCreatePost = handleSubmit(async ({ tags, title }) => {
    const arrTags = tags?.split(/[,;\s]/g).filter((value) => Boolean(value))

    if (!isLoggedIn || !userData) return nav("/entrar")

    await mutateAsync(
      {
        title,
        content: value,
        user_id: userData.id,
        tags: arrTags || [],
      },
      {
        onSuccess(data) {
          console.log(data)
          nav(`/app/${userData.username}/${data.slug}`)
          setToastMessage("Sucesso", "Publicação criada com sucesso!")
        },
        onError(error) {
          if (isError(error) || error) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setToastMessage("Erro", "Não foi possível publicar")
            return
          }
        },
      }
    )
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
          <Button variant="solid" disabled={isLoading}>
            {isLoading ? "Carregando..." : "Publicar"}
          </Button>
        </Buttons>
      </AskForm>
    </Container>
  )
}

export default CreatePost
