import { Button } from "@components/Form"
import { Markdown } from "src/interface/MarkdownEditor"
import UseToastStore from "@components/Toast/UseToastStore"
import React from "react"
import { useNavigate } from "react-router"
import isError from "src/helpers/isError"
import UseFetch from "src/hooks/UseFetch"
import useUserStore from "src/stores/UseUserStore"
import { Buttons, Container } from "./styles"
import { POST_REPLY } from "src/api/apiCalls"

interface Props {
  setNewReply: React.Dispatch<React.SetStateAction<IReply[] | null>>
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
}

const CreateReply = ({ setNewReply, postId, setIsReplying }: Props) => {
  const { request, loading } = UseFetch<IReply>()
  const { userData, isLoggedIn } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()
  const [value, setValue] = React.useState("")

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoggedIn || !userData) return nav("/entrar")

    if (value.length < 5) return

    const { options, url } = POST_REPLY(value, userData.id, postId)

    const { data, error } = await request(url, options)

    if (isError(data) || error || !data) {
      console.log({ error, data })
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    setValue("")
    setIsReplying(false)
    setNewReply((prev) => (prev ? [...prev, data] : [data]))
    setToastMessage("Sucesso", "Publicação criada com sucesso!")
  }

  return (
    <Container>
      <Markdown value={value} onChange={(e) => setValue(e)} />
      <Buttons>
        <Button variant="outlined" onClick={() => setIsReplying(false)}>
          Cancelar
        </Button>
        <Button variant="solid" onClick={handleReply} data-loading={loading}>
          {loading ? "Carregando..." : "Publicar"}
        </Button>
      </Buttons>
    </Container>
  )
}

export default CreateReply
