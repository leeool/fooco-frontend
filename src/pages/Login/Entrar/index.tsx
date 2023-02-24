import React from "react"
import { Title } from "@components/Text/Title"
import { Container } from "./styles"
import Input from "@components/Form/Input"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Lock } from "@assets/icons/lock.svg"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import Button from "@components/Form/Button"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import UseLoginStore from "src/stores/form/UseLoginStore"
import useUserStore from "src/stores/UseUserStore"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" },
}

const index = () => {
  const { email, password, setEmail, setPassword } = UseLoginStore()
  const useNav = useNavigate()
  const { loginUser, loading } = useUserStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email && password) {
      await loginUser(email, password)
      useNav("/")
    }
  }

  return (
    <Container
      as={motion.div}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      <Title size="xl">Bem vindo de volta!</Title>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          id="email"
          type="text"
          placeholder="exemplo@email.com"
          icon={<Letter />}
          label={"Email ou Apelido"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="senha"
          type="password"
          placeholder="******"
          icon={<Lock />}
          label={"Senha secreta"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="solid" icon={<Foquinho />} loading={loading}>
          Entrar
        </Button>
      </form>

      <p>
        Ainda não tem uma conta?{" "}
        <Link to={"criar"}>
          <span>Crie agora</span>
        </Link>
      </p>
    </Container>
  )
}

export default index
