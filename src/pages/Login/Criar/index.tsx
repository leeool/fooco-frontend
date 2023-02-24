import React from "react"
import { Title } from "@components/Text/Title"
import { Container } from "./styles"
import Input from "@components/Form/Input"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Lock } from "@assets/icons/lock.svg"
import Button from "@components/Form/Button"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import UseCreateUserStore from "src/stores/form/UseCreateUserStore"
import Error from "@components/Text/Error"
import { USER_POST } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import useUserStore from "src/stores/UseUserStore"
import UseLoginStore from "src/stores/form/UseLoginStore"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" },
}

const index = () => {
  const {
    email,
    password,
    confirmPassword,
    setConfirmPassword,
    setEmail,
    setPassword,
  } = UseCreateUserStore()
  const { loginUser } = useUserStore()
  const { email: prevEmail } = UseLoginStore()

  const { error, request, loading } = UseFetch<Partial<IUserData>>()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais")
      return
    }

    const username = email.split("@")[0]

    const { url, options } = USER_POST(username, email, password)
    const { response, data } = await request(url, options)

    if (response && response.status < 300 && data) {
      loginUser(email, password)
      navigate("/")
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
      <Title size="xl">Faça parte da comunidade</Title>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          icon={<Letter />}
          label={"Email"}
          value={email || prevEmail}
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
          required
        />
        <Input
          id="confirma"
          type="password"
          placeholder="******"
          icon={<Lock />}
          label={"Confirme sua senha"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button variant="solid" icon={<Foquinho />} loading={loading}>
          Criar Conta
        </Button>
        <Error>{error}</Error>
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
