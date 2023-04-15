import React from "react"
import { Title } from "@components/Text/Title"
import { Container } from "./styles"
import Input from "@components/Form/Input"
import { ReactComponent as Letter } from "@assets/icons/letter.svg"
import { ReactComponent as Lock } from "@assets/icons/lock.svg"
import { Button, Checkbox } from "@components/Form"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import UseCreateUserStore from "src/stores/form/UseCreateUserStore"
import { USER_POST, USER_PUT } from "src/api/apiCalls"
import UseFetch from "src/hooks/UseFetch"
import useUserStore from "src/stores/UseUserStore"
import UseToastStore from "@components/Toast/UseToastStore"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserSchema } from "src/schemas"
import isError from "src/helpers/isError"

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring", duration: 1 },
}

const index = () => {
  const { email, password } = UseCreateUserStore()
  const { request, loading } = UseFetch<IUserData>()
  const [page, setPage] = React.useState<number>(1)

  const { loginUser, loading: loginLoading, validateUser } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const navigate = useNavigate()
  const [userID, setUserID] = React.useState<string | null>(null)

  const { handleSubmit, control, setError, getValues } = useForm<User>({
    resolver: zodResolver(createUserSchema.omit({ username: true })),
    mode: "all",
  })

  const { handleSubmit: handleSubmitUser, control: controlUser } =
    useForm<User>({
      resolver: zodResolver(createUserSchema.pick({ username: true })),
      mode: "all",
    })

  const handleCreateUser = handleSubmit(
    async ({ email, pass: { password }, acceptTerms }) => {
      const userProv =
        email.split("@")[0].slice(0, 10) + Math.floor(Math.random() * 100)

      if (!acceptTerms) {
        setError("acceptTerms", { type: "required" })
        return setToastMessage("Algo deu errado", "Aceite os termos de uso!")
      }

      // criar conta
      const { url, options } = USER_POST(userProv, email, password)

      const { data, error } = await request(url, options)

      if (isError(data)) {
        setToastMessage("Algo deu errado", data.error)
        return
      } else if (error || !data) {
        setToastMessage("Algo deu errado", "Tente novamente mais tarde")
        return
      }

      await loginUser(email, password)
      setUserID(data.id)
      setPage(2)
    }
  )

  const handleUpdateUser = handleSubmitUser(async ({ username }) => {
    if (!userID) return

    // atualizar conta
    const { url, options } = USER_PUT({ username }, userID)

    const { data, error } = await request(url, options)

    if (isError(data)) {
      setError("username", { type: "validate", message: data.error })
      setToastMessage("Algo deu errado", data.error)
      return
    } else if (error || !data) {
      setToastMessage("Algo deu errado", "Tente novamente mais tarde")
      return
    }

    // login
    await validateUser()

    setToastMessage(`Bem-vindo(a) ${username}!`, "Usuário criado com sucesso")
    navigate("/app")
  })

  React.useEffect(() => {
    document.title = `Crie uma conta • Fooco`
  }, [])

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
            <Controller
              control={control}
              name="acceptTerms"
              defaultValue={false}
              rules={{ required: true }}
              render={({
                field: { onChange, ref, onBlur, value },
                fieldState,
              }) => (
                <Checkbox
                  label={
                    <>
                      Eu aceito os{" "}
                      <Link to={"/termos-de-uso"}>Termos de Uso</Link>
                    </>
                  }
                  id="termos"
                  value={"termos"}
                  innerRef={ref}
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={value}
                  fieldState={fieldState}
                />
              )}
            />
            <Button
              variant="solid"
              type="submit"
              disabled={loading || loginLoading}
            >
              {loading || loginLoading ? "Carregando..." : "Avançar"}
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
                  placeholder={getValues("email").split("@")[0]}
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
              disabled={loading || loginLoading}
              type="submit"
            >
              {loading || loginLoading ? "Carregando..." : "Avançar"}
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
