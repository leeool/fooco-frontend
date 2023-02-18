import { Title } from "@components/Title/style"
import Accordion from "@components/Accordion"
import React from "react"
import {
  BarContainer,
  ComecarContainer,
  Container,
  DecidiuContainer,
  DuvidaContainer,
  InicioContainer,
} from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho.svg"
import InputButton from "@components/Form/InputButton"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Seta } from "@assets/icons/seta-direita.svg"
import { ReactComponent as Globe } from "@assets/bar/globe.svg"
import { ReactComponent as Hat } from "@assets/bar/hat.svg"
import { ReactComponent as Lock } from "@assets/bar/lock.svg"
import Subtitle from "@components/Subtitle"

const MainPage = () => {
  return (
    <Container>
      <InicioContainer>
        <div className="fazerParte">
          <Title size="title">Faça parte dessa comunidade</Title>
          <Subtitle size="title">
            Entre em grupos, faça amizades e adquira pontos. Tudo isso enquanto
            ajuda outras pessoas e aprende coisas novas com estudantes de
            qualquer lugar do mundo.
          </Subtitle>
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
        <div>
          <Title as="h2" size="subtitle">
            Por onde começar
          </Title>
          <Subtitle size="subtitle">
            Veja como você pode entrar de cabeça do jeito certo nessa jornada!
          </Subtitle>
        </div>
        <ul className="list">
          <div className="list-1">
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
          </div>
          <div className="list-2">
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
              <p>
                Crie um ambiente confortável para compartilhar conhecimento.
              </p>
            </li>
          </div>
        </ul>
      </ComecarContainer>
      <DuvidaContainer>
        <Title as="h2" size="subtitle">
          Alguma dúvida?
        </Title>
        <Subtitle size="subtitle">
          Não encontrou sua dúvida? Entre em contato com
          fooco.contato@hotmail.com
        </Subtitle>
        <div className="items">
          <Accordion
            header={"O que é a plataforma Fooco?"}
            content={
              "A plataforma Fooco é um lugar no qual estudantes podem se juntar para disseminar conhecimento através do sistema de perguntas e respostas."
            }
          />
          <Accordion
            header={"O que é um projeto Open Source?"}
            content={
              "A plataforma Fooco é um lugar no qual estudantes podem se juntar para disseminar conhecimento através do sistema de perguntas e respostas."
            }
          />
        </div>
      </DuvidaContainer>
      <DecidiuContainer>
        <div>
          <Title as="h2" size="subtitle">
            Eai, já se decidiu?
          </Title>
          <Subtitle size="subtitle">Se junte a nossa comunidade agora</Subtitle>
        </div>
        <InputButton
          button={"Fazer Parte"}
          buttonIcon={<Seta />}
          id="fazerparte"
          placeholder="seuemail@email.com"
          icon={<Letter />}
        />
      </DecidiuContainer>
    </Container>
  )
}

export default MainPage
