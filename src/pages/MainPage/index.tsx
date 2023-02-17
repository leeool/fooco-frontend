import { Title } from "@components/Title/style"
import Accordion from "@components/Accordion"
import React from "react"
import {
  BarContainer,
  ComecarContainer,
  Container,
  DuvidaContainer,
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
        <Title as="h2" size="subtitle">
          Por onde começar
        </Title>
        <Paragraph size="subtitle">
          Veja como você pode entrar de cabeça do jeito certo nessa jornada!
        </Paragraph>
        <ul className="list">
          <li>
            <h3>Crie uma conta</h3>
            <p>Leva menos de 5 minutinhos!</p>
          </li>
          <li>
            <h3>Personalize seu perfil</h3>
            <p>
              Na plataforma Fooco, você pode personalizar tudo do seu jeito.
            </p>
          </li>
          <li>
            <h3>Faça novas amizades</h3>
            <p>Ou encontre suas amizades da escola.</p>
          </li>
          <li>
            <h3>Ganhe pontos e prêmios</h3>
            <p>Mostre que você é um grande ancião da comunidade.</p>
          </li>
          <li>
            <h3>Respeito acima de tudo</h3>
            <p>Não seja um bobo! Contribua para um lugar prazeroso.</p>
          </li>
          <li>
            <h3>Diga não ao bullying</h3>
            <p>É possível denunciar usuários mal intencinados.</p>
          </li>
          <li>
            <h3>Não compartilhe qualquer informação</h3>
            <p>Evite compartilhar dados pessoais com desconhecidos</p>
          </li>
          <li>
            <h3>Interaja com a comunidade</h3>
            <p>Crie um ambiente confortável para compartilhar conhecimento.</p>
          </li>
        </ul>
      </ComecarContainer>
      <DuvidaContainer>
        <Title as="h2" size="subtitle">
          Alguma dúvida?
        </Title>
        <Paragraph size="subtitle">
          Não encontrou sua dúvida? Entre em contato com fooco.contato@gmail.com
        </Paragraph>
        <div className="items">
          <Accordion
            header={"O que é a plataforma Fooco?"}
            content={
              "A plataforma Fooco é um lugar no qual estudantes podem se juntar para disseminar conhecimento através do sistema de perguntas e respostas."
            }
          />
        </div>
      </DuvidaContainer>
    </Container>
  )
}

export default MainPage
