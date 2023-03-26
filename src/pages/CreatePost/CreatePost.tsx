import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { AskForm, Buttons, Container, TextArea } from "./styles"

const CreatePost = () => {
  return (
    <Container>
      <Title size="xl" className="title">
        Publicar
      </Title>
      <AskForm>
        <Input
          placeholder="Descreva em poucas palavras a sua publicação"
          type="text"
          id="title"
          label="Título da publicação"
        />
        <TextArea name="content" placeholder="conteudo" rows={10}></TextArea>
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
