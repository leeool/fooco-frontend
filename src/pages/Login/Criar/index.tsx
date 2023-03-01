import React from "react"
import { Title } from "@components/Text/Title"
import { Container } from "./styles"
import Input from "@components/Form/Input"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Lock } from "@assets/icons/lock.svg"
import Button from "@components/Form/Button"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import UseCreateUserStore from "src/stores/form/UseCreateUserStore"
import Error from "@components/Text/Error"
import { USER_POST, USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import useUserStore from "src/stores/UseUserStore"
import UseToastStore from "@components/Toast/UseToastStore"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring" },
}

const index = () => {
  const {
    email,
    username,
    password,
    confirmPassword,
    setConfirmPassword,
    setEmail,
    setUsername,
    setPassword,
  } = UseCreateUserStore()
  const { loginUser, setIsUserLoggedIn, loading: loginLoading } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const { error, request, loading } = UseFetch<IUserData>()
  const navigate = useNavigate()
  const [page, setPage] = React.useState<number>(1)
  const [userId, setUserId] = React.useState<string | null>(null)

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setToastMessage(
        "Verifique a senha",
        "As senhas devem ser iguais. Tente novamente."
      )
    }

    const userProv = email.split("@")[0] + Math.floor(Math.random() * 100)

    const { url: urlCreateUser, options: optionsCreateUser } = USER_POST(
      userProv,
      email,
      password
    )
    const { data: createUserData, error: createUserError } = await request(
      urlCreateUser,
      optionsCreateUser
    )

    if (createUserError || !createUserData) return

    setUserId(createUserData.id)
    await loginUser(email, password)

    return setPage(2)
  }

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!userId) return
    console.log("TESTE")

    const { options: optionsUpdateUser, url: urlUpdateUser } = USER_PUT(
      { username },
      userId
    )

    const {
      data: updateUserData,
      error: updateUserError,
      response: updateUserResponse,
    } = await request(urlUpdateUser, optionsUpdateUser)

    if (updateUserError) return

    if (
      updateUserResponse &&
      updateUserResponse.status < 300 &&
      updateUserData
    ) {
      setIsUserLoggedIn(true)
      setToastMessage(`Bem-vindo(a) ${username}!`, "Usuário criado com sucesso")
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
      <AnimatePresence mode="popLayout">
        {page === 1 ? (
          <motion.form
            variants={animateLeft}
            key={"1"}
            initial={{ x: "-2rem", opacity: 0 }}
            animate={
              page === 1 ? { x: "0", opacity: 1 } : { x: "-2rem", opacity: 0 }
            }
            exit={"hidden"}
            transition={{ type: "spring", duration: 0.5 }}
            className="form"
            onSubmit={handleCreateUser}
          >
            <Input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              icon={<Letter />}
              label={"Email"}
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
              Avançar
            </Button>
          </motion.form>
        ) : (
          <motion.form
            variants={animateLeft}
            key={"2"}
            initial={{ x: "-2rem", opacity: 0 }}
            animate={
              page === 2 ? { x: "0", opacity: 1 } : { x: "-2rem", opacity: 0 }
            }
            exit={"hidden"}
            transition={{ type: "spring" }}
            className="form"
            onSubmit={handleUpdateUser}
          >
            <Input
              id="username"
              type="text"
              placeholder={email.split("@")[0]}
              icon={<Letter />}
              label={"Crie seu apelido"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Button
              variant="solid"
              icon={<Foquinho />}
              loading={loading || loginLoading}
            >
              Criar Conta
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      <Error>{error}</Error>

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
