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
import { USER_POST, instance } from "src/api/apiCalls"
import useUserStore from "src/stores/UseUserStore"
import UseToastStore from "@components/Toast/UseToastStore"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserSchema } from "src/schemas"
import { Arrow } from "@assets/index"
import { useMutation } from "react-query"
import { create } from "zustand"
import useUserLogin from "src/hooks/useUserLogin"
import useVerifyEmailExists from "src/hooks/useVerifyEmailExists"
import { AxiosError } from "axios"

interface IUserStageStore {
  stage: "username" | "email"
  setStage: (stage: "username" | "email") => void
  username: string
  setUsername: (username: string) => void
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
}

const useStageStore = create<IUserStageStore>((set) => ({
  stage: "email",
  setStage: (stage) => set({ stage }),
  username: "",
  setUsername: (username) => set({ username }),
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
}))

const animateLeft = {
  hidden: { x: "-2rem", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  transition: { type: "spring", duration: 1 },
}

interface IPostUser {
  username: string
  email: string
  password: string
}

const index = () => {
  const { stage } = useStageStore()

  const stages = {
    username: <UsernameStage />,
    email: <EmailStage />,
  }

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
      <AnimatePresence mode="popLayout">{stages[stage]}</AnimatePresence>

      <p>
        Já tem uma conta?{" "}
        <Link to={"/entrar"}>
          <span>Faça login</span>
        </Link>
      </p>
    </Container>
  )
}

const EmailStage = () => {
  const { setToastMessage } = UseToastStore()
  const { setStage, setEmail, setPassword, stage } = useStageStore()
  const { email, password } = UseCreateUserStore()
  const { mutateEmailExists, loadingEmailExists } = useVerifyEmailExists()
  const { loading: isSocialLoading } = useUserStore()

  const { handleSubmit, control, setError } = useForm<User>({
    resolver: zodResolver(createUserSchema.omit({ username: true })),
    mode: "all",
  })

  const handleCreateUser = handleSubmit(
    async ({ email, pass: { password }, acceptTerms }) => {
      if (!acceptTerms) {
        setError("acceptTerms", { type: "required" })
        setToastMessage("Algo deu errado", "Aceite os termos de uso!", "error")
        return
      }

      // verificar se email existe

      mutateEmailExists(email, {
        onSuccess: (data) => {
          if (data) {
            setError("email", { message: "Email já cadastrado!" })
            setToastMessage("Email já cadastrado", "Faça login", "warning")
            return
          } else {
            setEmail(email)
            setPassword(password)
            setStage("username")
            console.log(stage)
          }
        },
      })
    }
  )

  return (
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
        render={({ field: { onChange, value, ref, onBlur }, fieldState }) => (
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
        render={({ field: { onChange, value, ref, onBlur }, fieldState }) => (
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
        render={({ field: { onChange, value, ref, onBlur }, fieldState }) => (
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
        render={({ field: { onChange, ref, onBlur, value }, fieldState }) => (
          <Checkbox
            label={
              <>
                Eu aceito os <Link to={"/termos-de-uso"}>Termos de Uso</Link>
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
        disabled={loadingEmailExists || isSocialLoading}
      >
        {loadingEmailExists || isSocialLoading ? (
          "Carregando..."
        ) : (
          <>
            Avançar <Arrow />
          </>
        )}
      </Button>
    </motion.form>
  )
}

const UsernameStage = () => {
  const { setToastMessage } = UseToastStore()
  const { email, password } = useStageStore()
  const { validateUser } = useUserStore()
  const { mutateUserLogin, loadingUserLogin } = useUserLogin()
  const { handleSubmit: handleSubmitUser, control: controlUser } =
    useForm<User>({
      resolver: zodResolver(createUserSchema.pick({ username: true })),
      mode: "all",
    })
  const nav = useNavigate()
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (data: IPostUser) => {
      const { url, options } = USER_POST(
        data.username,
        data.email,
        data.password
      )

      return instance.post(url, options.data).then((res) => res.data)
    },
  })

  const handleUpdateUser = handleSubmitUser(async ({ username }) => {
    await mutateAsync(
      {
        username,
        email,
        password,
      },
      {
        onSuccess: async () => {
          setToastMessage(
            `Bem-vindo(a) ${username}!`,
            "Usuário criado com sucesso",
            "success"
          )
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            setToastMessage(
              "Algo deu errado",
              error.response?.data.message || "Erro ao criar usuário",
              "error"
            )
          }
        },
      }
    )

    await mutateUserLogin(
      { email, password },
      {
        onSuccess: async () => {
          await validateUser()
          nav("/app")
        },
      }
    )
  })

  return (
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
        render={({ field: { onChange, value, ref, onBlur }, fieldState }) => (
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
        disabled={loadingUserLogin || isLoading}
        type="submit"
      >
        {loadingUserLogin || isLoading ? "Carregando..." : "Avançar"}
      </Button>
    </motion.form>
  )
}

export default index
