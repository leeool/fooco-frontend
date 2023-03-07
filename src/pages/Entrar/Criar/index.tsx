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
import { USER_POST, USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import { ReactComponent as Foquinho } from "@assets/foquinho2.svg"
import useUserStore from "src/stores/UseUserStore"
import UseToastStore from "@components/Toast/UseToastStore"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserSchema } from "src/schemas"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring", duration: 1 },
}

const index = () => {
  const { email, password } = UseCreateUserStore()
  const { request, loading } = UseFetch<IUserData>()
  const [page, setPage] = React.useState<number>(1)
  const [userId, setUserId] = React.useState<string | null>(null)

  const { loginUser, loading: loginLoading, getUserWToken } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<User>({
    resolver: zodResolver(createUserSchema.omit({ username: true })),
    mode: "all",
  })

  const { handleSubmit: handleSubmitUser, control: controlUser } =
    useForm<User>({
      resolver: zodResolver(createUserSchema.pick({ username: true })),
      mode: "all",
    })

  const handleCreateUser = handleSubmit(
    async ({ email, pass: { password } }) => {
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

      setPage(2)
      return
    }
  )

  const handleUpdateUser = handleSubmitUser(async ({ username }) => {
    if (!userId) return

    const { options: optionsUpdateUser, url: urlUpdateUser } = USER_PUT(
      { username },
      userId
    )

    const { error: updateUserError, response: updateUserResponse } =
      await request(urlUpdateUser, optionsUpdateUser)

    if (updateUserError) return

    if (updateUserResponse && updateUserResponse.status < 300) {
      await getUserWToken()
      setToastMessage(`Bem-vindo(a) ${username}!`, "Usuário criado com sucesso")
      navigate("/")
    }
  })
  return (
    <Container
      as={motion.div}
      variants={animateLeft}
      initial="hidden"
      animate="visible"
      transition={animateLeft.transition}
    >
      <Title size="xl">Faça parte da comunidade</Title>
      <AnimatePresence mode="popLayout">
        {page === 1 ? (
          <motion.form
            variants={animateLeft}
            key={"1"}
            initial={"initial"}
            transition={animateLeft.transition}
            className="form"
            onSubmit={handleCreateUser}
          >
            <Controller
              control={control}
              name="email"
              defaultValue={email}
              render={({
                field: { onChange, value, ref, onBlur },
                fieldState,
              }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  icon={<Letter />}
                  label={"Email"}
                  value={value}
                  onChange={onChange}
                  innerRef={ref}
                  fieldState={fieldState}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              control={control}
              name="pass.password"
              defaultValue={password}
              render={({
                field: { onChange, value, ref, onBlur },
                fieldState,
              }) => (
                <>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="******"
                    icon={<Lock />}
                    label={"Senha secreta"}
                    value={value}
                    onChange={onChange}
                    innerRef={ref}
                    fieldState={fieldState}
                    onBlur={onBlur}
                  />
                </>
              )}
            />

            <Controller
              control={control}
              name="pass.confirmPassword"
              defaultValue=""
              render={({
                field: { onChange, value, ref, onBlur },
                fieldState,
              }) => (
                <Input
                  id="confirma"
                  type="password"
                  placeholder="******"
                  icon={<Lock />}
                  label={"Confirme sua senha"}
                  value={value}
                  onChange={onChange}
                  innerRef={ref}
                  fieldState={fieldState}
                  onBlur={onBlur}
                />
              )}
            />

            <Button
              variant="solid"
              icon={<Foquinho />}
              disabled={loading || loginLoading}
              loading={loading || loginLoading}
            >
              Avançar
            </Button>
          </motion.form>
        ) : (
          <motion.form
            variants={animateLeft}
            key={"2"}
            initial={"initial"}
            transition={animateLeft.transition}
            className="form"
            onSubmit={handleUpdateUser}
          >
            <Controller
              control={controlUser}
              name="username"
              defaultValue=""
              render={({
                field: { onChange, value, ref, onBlur },
                fieldState,
              }) => (
                <Input
                  id="username"
                  type="text"
                  placeholder={email.split("@")[0]}
                  icon={<Letter />}
                  label={"Crie seu apelido"}
                  value={value}
                  onChange={onChange}
                  innerRef={ref}
                  fieldState={fieldState}
                  onBlur={onBlur}
                />
              )}
            />

            <Button
              variant="solid"
              icon={<Foquinho />}
              disabled={loading || loginLoading}
            >
              Criar Conta
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

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
