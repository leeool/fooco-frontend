import { Title } from "@components/Title/style"
import React from "react"
import {
  BarContainer,
  ComecarContainer,
  Container,
  InicioContainer,
  Paragraph,
} from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho.svg"
import InputButton from "@components/Form/InputButton"
import { ReactComponent as Letter } from "@assets/letter.svg"
import { ReactComponent as Seta } from "@assets/seta-direita.svg"
import { ReactComponent as Globe } from "@assets/bar/globe.svg"
import { ReactComponent as Hat } from "@assets/bar/hat.svg"
import { ReactComponent as Lock } from "@assets/bar/lock.svg"

const MainPage = () => {
  return (
    <Container>
      <InicioContainer>
        <div className="fazerParte">
          <Title size="title">Faça parte dessa comunidade</Title>
          <Paragraph>
            Entre em grupos, faça amizades e adquira pontos. Tudo isso enquanto
            ajuda outras pessoas e aprende coisas novas com estudantes de
            qualquer lugar do mundo.
          </Paragraph>
          <InputButton
            button={"Fazer Parte"}
            buttonIcon={<Seta />}
            id="fazerparte"
            placeholder="seuemail@email.com"
            icon={<Letter />}
          />
        </div>
        <div className="icone">
          <Foquinho />
        </div>
      </InicioContainer>
      <BarContainer>
        <ul className="list">
          <li>
            <Globe />
            <p>Usuários do mundo todo</p>
          </li>
          <li>
            <Lock />
            <p>Projeto open source</p>
          </li>
          <li>
            <Hat />
            <p>Conhecimento ilimitado</p>
          </li>
        </ul>
        <div className="slogan">
          <h3>
            Desenvolvido por <span>estudantes</span>, para{" "}
            <span>estudantes</span>.
          </h3>
        </div>
      </BarContainer>
      <ComecarContainer>
        <Title size="subtitle">Por onde começar</Title>
      </ComecarContainer>
    </Container>
  )
}

export default MainPage
