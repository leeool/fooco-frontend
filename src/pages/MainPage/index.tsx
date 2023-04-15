import { Title } from "@components/Text/Title"
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
import { ReactComponent as Lock } from "@assets/bar/lock.svg"
import { Paragraph } from "@components/Text/Paragraph"
import { Navigate, useNavigate } from "react-router-dom"
import useUserStore from "src/stores/UseUserStore"
import UseCreateUserStore from "src/stores/form/UseCreateUserStore"
import { motion } from "framer-motion"
import { animateLeft, animateRight } from "src/helpers/animations"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import Input from "@components/Form/Input"
import { Button } from "@components/Form"
import ReactLoading from "react-loading"
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "@components/AccordionAPI"
import duvidasData from "./duvidasData"

const MainPage = () => {
  const { setEmail } = UseCreateUserStore()
  const navigate = useNavigate()
  const { isLoggedIn, loading } = useUserStore()
  const match = UseMatchWindowSize(600)

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate("/entrar/criar")
  }

  React.useEffect(() => {
    document.title = `Fooco`
  }, [])

  if (loading)
    return (
      <ReactLoading
        type="spin"
        color="#E63A23"
        height={50}
        width={50}
        className="load-icon"
      />
    )
  if (isLoggedIn) return <Navigate to="/app" replace />
  return (
    <Container>
      <InicioContainer>
        <motion.div
          className="fazerParte"
          variants={animateLeft}
          initial="hidden"
          animate="visible"
          transition={{ ...animateLeft.visible.transition }}
        >
          <Title size="2xl">Faça parte dessa comunidade</Title>
          <Paragraph size="2xl">
            Entre em grupos, faça amizades e adquira pontos. Tudo isso enquanto
            ajuda outras pessoas e aprende coisas novas com estudantes de
            qualquer lugar do mundo.
          </Paragraph>
          {match ? (
            <div style={{ display: "grid", gap: "0.8rem" }}>
              <Input
                type="email"
                id="fazerparte"
                placeholder="seuemail@email.com"
                icon={<Letter />}
                onChange={handleEmail}
              />
              <Button variant="solid" onClick={handleClick}>
                Fazer Parte
              </Button>
            </div>
          ) : (
            <InputButton
              button={"Fazer Parte"}
              buttonIcon={<Seta />}
              id="fazerparte"
              placeholder="seuemail@email.com"
              icon={<Letter />}
              onChange={handleEmail}
              onClick={handleClick}
            />
          )}
        </motion.div>
        <motion.div
          variants={animateRight}
          initial="hidden"
          animate="visible"
          transition={{ ...animateRight.visible.transition }}
          className="icone"
        >
          <Foquinho />
        </motion.div>
      </InicioContainer>
      <BarContainer>
        <ul className="list">
          <motion.li variants={animateLeft} initial="hidden" animate="visible">
            <Globe />
            <p>Usuários do mundo todo</p>
          </motion.li>
          <motion.li variants={animateLeft} initial="hidden" animate="visible">
            <Lock />
            <p>Projeto open source</p>
          </motion.li>
          <motion.li variants={animateLeft} initial="hidden" animate="visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <p>Ganhe pontos e recompensas</p>
          </motion.li>
        </ul>
        <div className="slogan">
          <h3>
            <span>Juntos aprendemos mais.</span>
          </h3>
        </div>
      </BarContainer>
      <ComecarContainer>
        <div>
          <Title as="h2" size="xl">
            Por onde começar
          </Title>
          <Paragraph size="xl">
            Veja como você pode entrar de cabeça do jeito certo nessa jornada!
          </Paragraph>
        </div>
        <div className="list">
          <ul className="list-1">
            <motion.li
              variants={animateLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateLeft.visible.transition }}
              viewport={{ ...animateLeft.visible.viewport }}
            >
              <h3>Crie uma conta</h3>
              <p>Leva menos de 5 minutinhos!</p>
            </motion.li>
            <motion.li
              variants={animateLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateLeft.visible.transition }}
              viewport={{ ...animateLeft.visible.viewport }}
            >
              <h3>Personalize seu perfil</h3>
              <p>
                Na plataforma Fooco, você pode personalizar tudo do seu jeito.
              </p>
            </motion.li>
            <motion.li
              variants={animateLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateLeft.visible.transition }}
              viewport={{ ...animateLeft.visible.viewport }}
            >
              <h3>Faça novas amizades</h3>
              <p>Ou encontre suas amizades da escola.</p>
            </motion.li>
            <motion.li
              variants={animateLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateLeft.visible.transition }}
              viewport={{ ...animateLeft.visible.viewport }}
            >
              <h3>Ganhe pontos e prêmios</h3>
              <p>Mostre que você é um grande ancião da comunidade.</p>
            </motion.li>
          </ul>
          <ul className="list-2">
            <motion.li
              variants={animateRight}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateRight.visible.transition }}
              viewport={{ ...animateRight.visible.viewport }}
            >
              <h3>Respeito acima de tudo</h3>
              <p>Não seja um bobo! Contribua para um lugar prazeroso.</p>
            </motion.li>
            <motion.li
              variants={animateRight}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateRight.visible.transition }}
              viewport={{ ...animateRight.visible.viewport }}
            >
              <h3>Diga não ao bullying</h3>
              <p>É possível denunciar usuários mal-intencionados.</p>
            </motion.li>
            <motion.li
              variants={animateRight}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateRight.visible.transition }}
              viewport={{ ...animateRight.visible.viewport }}
            >
              <h3>Não compartilhe qualquer informação</h3>
              <p>Evite compartilhar dados pessoais com desconhecidos</p>
            </motion.li>
            <motion.li
              variants={animateRight}
              initial="hidden"
              whileInView="visible"
              transition={{ ...animateRight.visible.transition }}
              viewport={{ ...animateRight.visible.viewport }}
            >
              <h3>Interaja com a comunidade</h3>
              <p>
                Crie um ambiente confortável para compartilhar conhecimento.
              </p>
            </motion.li>
          </ul>
        </div>
      </ComecarContainer>
      <DuvidaContainer>
        <Title as="h2" size="xl">
          Alguma dúvida?
        </Title>
        <Paragraph size="xl">
          Não encontrou sua dúvida? Entre em contato com
          fooco.contato@hotmail.com
        </Paragraph>
        <AccordionRoot type="single" style={{ marginTop: "3rem" }}>
          {duvidasData.map(({ id, content, trigger }) => (
            <AccordionItem value={id} key={id}>
              <AccordionTrigger>{trigger}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </DuvidaContainer>
      <DecidiuContainer>
        <div>
          <Title as="h2" size="xl">
            E então, já se decidiu?
          </Title>
          <Paragraph size="xl">Se junte a nossa comunidade agora</Paragraph>
        </div>
        <div className="input">
          {match ? (
            <div style={{ display: "grid", gap: "0.8rem" }}>
              <Input
                type="email"
                id="fazerparte"
                placeholder="seuemail@email.com"
                icon={<Letter />}
                onChange={handleEmail}
              />
              <Button variant="solid" onClick={handleClick}>
                Fazer Parte
              </Button>
            </div>
          ) : (
            <InputButton
              button={"Fazer Parte"}
              buttonIcon={<Seta />}
              id="fazerparte"
              placeholder="seuemail@email.com"
              icon={<Letter />}
              onChange={handleEmail}
              onClick={handleClick}
            />
          )}
        </div>
      </DecidiuContainer>
    </Container>
  )
}

export default MainPage
