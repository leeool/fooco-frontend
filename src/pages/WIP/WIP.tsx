import React from "react"
import { Container } from "./WIP.styled"
import { Title } from "@components/Text/Title"
import { Paragraph } from "@components/Text/Paragraph"
import { Logo } from "@assets/index"

const WIP = () => {
  return (
    <Container>
      <span className="logo">
        <Logo />
      </span>
      <Title size="lg"> &#128679; Trabalho em progresso! &#128679;</Title>
      <Paragraph size="xl">Foquinho está trabalhando.</Paragraph>
    </Container>
  )
}

export default WIP
