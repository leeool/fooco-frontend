import React from "react"
import { Container } from "./styles"
import { Title } from "@components/Text/Title"
import { Paragraph } from "@components/Text/Paragraph"
import { Link } from "react-router-dom"

const PostNotFound = () => {
  return (
    <Container>
      <Title size="2xl">Ops! Página não encontrada</Title>
      <Paragraph size="2xl">Erro 404 | Post não encontrado</Paragraph>
      <Link to={"/app"}>Voltar à página inicial</Link>
    </Container>
  )
}

export default PostNotFound
