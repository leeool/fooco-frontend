import { Title } from "@components/Title/style"
import React from "react"
import { BarContainer, Container, Paragraph } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho.svg"
import InputButton from "@components/Form/InputButton"
import { ReactComponent as Letter } from "@assets/letter.svg"
import { ReactComponent as Seta } from "@assets/seta-direita.svg"

const MainPage = () => {
  return (
    <Container>
      <div className="fazerParte">
        <Title>Faça parte dessa comunidade</Title>
        <Paragraph>
          Entre em grupos, faça amizades e adquira pontos. Tudo isso enquanto
          ajuda outras pessoas e aprende coisas novas com estudantes de qualquer
          lugar do mundo.
        </Paragraph>
        <InputButton
          button={"Fazer Parte"}
          buttonIcon={<Seta />}
          id="fazerparte"
          placeholder="seuemail@email.com"
          icon={<Letter />}
        />
      </div>
      <div>
        <Foquinho />
      </div>
      <BarContainer></BarContainer>
    </Container>
  )
}

export default MainPage
