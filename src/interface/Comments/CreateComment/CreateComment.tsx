import { Button } from "@components/Form"
import { Markdown } from "src/interface/MarkdownEditor"
import UseToastStore from "@components/Toast/UseToastStore"
import React from "react"
import { useNavigate } from "react-router"
import useUserStore from "src/stores/UseUserStore"
import { Buttons, Container } from "./styles"
import { POST_COMMENT, instance } from "src/api/apiCalls"
import { useMutation } from "react-query"
import { AxiosError } from "axios"

interface Props {
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
  setComments: React.Dispatch<React.SetStateAction<IComment[] | []>>
}

const CreateComment = ({ postId, setIsReplying, setComments }: Props) => {
  const { userData, isLoggedIn } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()
  const [value, setValue] = React.useState("")
  const { mutate, isLoading } = useMutation({
    mutationKey: ["reply", postId],
    mutationFn: async () => {
      if (!userData) {
        setToastMessage(
          "Erro!",
          "Você precisa estar logado para fazer isso",
          "error"
        )
        return Promise.reject("Você precisa estar logado para fazer isso")
      }
      const { options, url } = POST_COMMENT(value, userData.id, postId)

      return instance
        .post(url, options.data, { headers: options.headers })
        .then((res) => res.data)
    },
    onSuccess: (data) => {
      setValue("")
      setIsReplying(false)
      setToastMessage("Sucesso!", "Resposta publicada com sucesso!", "success")
      setComments((prev) => [data, ...prev])
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setToastMessage("Algo deu errado", err.response?.data.error, "error")
      }
    },
  })

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoggedIn || !userData) return nav("/entrar")

    if (value.length < 5) return

    mutate()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleReply(e)
    }
  }

  return (
    <Container onSubmit={handleReply} onKeyDown={handleKeyDown}>
      <Markdown value={value} onChange={(e) => setValue(e)} />
      <Buttons>
        <Button variant="outlined" onClick={() => setIsReplying(false)}>
          Cancelar
        </Button>
        <Button variant="solid" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Publicar"}
        </Button>
      </Buttons>
    </Container>
  )
}

export default CreateComment
