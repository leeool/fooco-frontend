import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { AskForm, Buttons, Container, InputWrapper } from "./styles"
import { Markdown } from "src/interface/MarkdownEditor"
import useUserStore from "src/stores/UseUserStore"
import { useNavigate } from "react-router"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createPostSchema } from "src/schemas"
import { instance, POST_POST } from "src/api/apiCalls"
import UseToastStore from "@components/Toast/UseToastStore"
import { useMutation } from "react-query"
import { AxiosError } from "axios"
import GrupoSelect from "@interface/GrupoSelect/GrupoSelect"

const CreatePost = () => {
  const [value, setValue] = React.useState("")
  const nav = useNavigate()
  const [groupId, setGroupId] = React.useState<string>(
    "da9c3de7-8036-40bf-a3e3-499a556d287f"
  )
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<Post>({
    resolver: zodResolver(createPostSchema),
    mode: "all",
    shouldFocusError: true,
  })
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (
      data: Partial<IUserPosts> & { user_id: string; group_id: string }
    ) => {
      const { options, url } = POST_POST(data)
      return instance(url, options).then((res) => res.data)
    },
    mutationKey: "createPost",
  })
  const { setToastMessage } = UseToastStore()

  const handleCreatePost = handleSubmit(async ({ tags, title }) => {
    const arrTags = tags?.split(/[,;\s]/g).filter((value) => Boolean(value))

    if (!isLoggedIn || !userData) return nav("/entrar")

    console.log({
      title,
      content: value,
      user_id: userData.id,
      tags: arrTags || [],
      group_id: groupId,
    })

    await mutateAsync(
      {
        title,
        content: value,
        user_id: userData.id,
        tags: arrTags || [],
        group_id: groupId,
      },
      {
        onSuccess(data) {
          console.log(data)
          nav(`/floresta/${userData.username}/${data.slug}`, {
            state: { newPost: true },
            replace: true,
          })
          setToastMessage(
            "Sucesso",
            "Publicação criada com sucesso!",
            "success"
          )
        },
        onError(error) {
          if (error instanceof AxiosError) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            const errorMessage =
              (error.response?.data.error as string) ||
              "Não foi possível criar a publicação"
            setToastMessage("Erro", errorMessage, "error")
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
        <InputWrapper>
          <label>Floresta</label>
          <GrupoSelect setGroupId={setGroupId} />
        </InputWrapper>

        <Controller
          control={control}
          name="tags"
          defaultValue={""}
          render={({ field, fieldState }) => (
            <Input
              placeholder="Palavras-chave da sua publicação"
              type="text"
              id="group"
              label="Tags"
              fieldState={fieldState}
              {...field}
            />
          )}
        />
        <Buttons>
          <Button variant="outlined" onClick={() => nav("/floresta")}>
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
