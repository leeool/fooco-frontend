import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { AskForm, Buttons, Container, TextArea } from "./styles"
import { Markdown, Viewer } from "@components/MarkdownEditor"

const CreatePost = () => {
  const [value, setValue] = React.useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <Container>
      <Title size="xl" className="title">
        Publicar
      </Title>
      <AskForm onSubmit={handleSubmit}>
        <Input
          placeholder="Descreva em poucas palavras a sua publicação"
          type="text"
          id="title"
          label="Título da publicação"
        />
        <Markdown value={value} onChange={(e) => setValue(e)} />
        <Input
          placeholder="Palavras-chave da sua publicação"
          type="text"
          id="tags"
          label="Tags"
        />
        <Buttons>
          <Button variant="outlined">Cancelar</Button>
          <Button variant="solid">Publicar</Button>
        </Buttons>
      </AskForm>
    </Container>
  )
}

export default CreatePost
