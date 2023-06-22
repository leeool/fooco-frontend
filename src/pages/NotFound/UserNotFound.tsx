import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"
import { Title } from "@components/Text/Title"
import { Paragraph } from "@components/Text/Paragraph"

interface Props {
  owner: string
}

const NotFound = ({ owner }: Props) => {
  return (
    <Container>
      <Title size="2xl">Ops! Página não encontrada</Title>
      <Paragraph size="2xl">Erro 404 | O usuário {owner} não existe</Paragraph>
      <Link to={"/floresta"}>Retornar à página inicial</Link>
    </Container>
  )
}

export default NotFound
