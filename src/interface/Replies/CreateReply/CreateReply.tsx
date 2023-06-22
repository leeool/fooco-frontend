import React from "react"
import { Buttons, Container } from "./CreateReply.styled"
import { Markdown } from "@interface/MarkdownEditor"
import { Button } from "@components/Form"
import { useMutation } from "react-query"
import mutatePostReply from "src/mutations/mutatePostReply"
import UseToastStore from "@components/Toast/UseToastStore"
import { AxiosError } from "axios"
import useUserStore from "src/stores/UseUserStore"
import { useNavigate } from "react-router"

interface Props {
  parentId: string
  postId: string
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
  userId: string | null | undefined
  setData: React.Dispatch<React.SetStateAction<IReply[]>>
}

const CreateReply = ({
  parentId,
  postId,
  setIsReplying,
  userId,
  setData,
}: Props) => {
  const [value, setValue] = React.useState("")
  const { mutate, isLoading } = useMutation(mutatePostReply(parentId))
  const { setToastMessage } = UseToastStore()
  const { isLoggedIn, userData } = useUserStore()
  const nav = useNavigate()

  const handleReply = async (e: React.FormEvent | KeyboardEvent) => {
    e.preventDefault()

    if (!isLoggedIn || !userData) return nav("/entrar")

    console.log(value)

    if (!userId) return
    mutate(
      { content: value, postId, parentId, userId },
      {
        onSuccess: (data) => {
          setToastMessage("Sucesso!", "Resposta enviada com sucesso", "success")
          setData((prev) => [data, ...prev])
          setIsReplying(false)
        },
        onError: (err) => {
          if (err instanceof AxiosError) {
            setToastMessage(
              "Algo deu errado",
              err.response?.data.error || "Erro desconhecido",
              "error"
            )
            console.log(err.response)
          }
        },
      }
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleReply(e)
    }
  }

  return (
    <Container onSubmit={handleReply} onKeyDown={handleKeyDown}>
      <Markdown value={value} onChange={(e) => setValue(e)} compact />
      <Buttons>
        <Button
          variant="outlined"
          onClick={() => setIsReplying(false)}
          type="button"
        >
          Cancelar
        </Button>
        <Button variant="solid" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Publicar"}
        </Button>
      </Buttons>
    </Container>
  )
}

export default CreateReply
