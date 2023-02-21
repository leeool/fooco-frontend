import React from "react"
import { Title } from "@components/Text/Title"
import { Container } from "./styles"
import Input from "@components/Form/Input"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Lock } from "@assets/icons/lock.svg"
import Button from "@components/Form/Button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import UseLoginStore from "src/stores/UseLoginStore"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" },
}

const index = () => {
  return (
    <Container
      as={motion.div}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      <Title size="xl">Faça parte da comunidade</Title>
      <form className="form">
        <Input
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          icon={<Letter />}
          label={"Email"}
          value={UseLoginStore.getState().email}
          onChange={(e) => UseLoginStore.getState().setEmail(e.target.value)}
        />
        <Input
          id="senha"
          type="password"
          placeholder="******"
          icon={<Lock />}
          label={"Senha secreta"}
        />
        <Input
          id="confirma"
          type="password"
          placeholder="******"
          icon={<Lock />}
          label={"Confirme sua senha"}
        />
        <Button variant="solid">Criar Conta</Button>
      </form>

      <p>
        Já tem uma conta?{" "}
        <Link to={"/entrar"}>
          <span>Faça login</span>
        </Link>
      </p>
    </Container>
  )
}

export default index
