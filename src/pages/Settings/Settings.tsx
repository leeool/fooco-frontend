import { Button, ButtonSecondary, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import React, { ReactElement } from "react"
import { useForm } from "react-hook-form"
import { Navigate } from "react-router"
import { themeStore } from "src/stores/themeStore"
import useUserStore from "src/stores/UseUserStore"
import {
  ButtonsGroup,
  Container,
  Content,
  Item,
  SideContainer,
  SideNav,
} from "./Settings.styles"

interface IPages {
  account: ReactElement
  theme: ReactElement
}

const Settings = () => {
  const { isLoggedIn } = useUserStore()
  const [page, setPage] = React.useState<"account" | "theme">("account")

  const pages: IPages = {
    account: <AccountSettings />,
    theme: <ThemeSettings />,
  }

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    setPage(e.target.dataset.page as "account" | "theme")
  }

  if (!isLoggedIn) return <Navigate to={"/entrar"} />
  return (
    <Container>
      <SideContainer>
        <Title size="md">Configurações</Title>
        <SideNav>
          <Item onClick={handlePage} data-page="account">
            Conta
          </Item>
          <Item onClick={handlePage} data-page="theme">
            Tema
          </Item>
        </SideNav>
      </SideContainer>
      {pages[page]}
    </Container>
  )
}

const AccountSettings = () => {
  const { register, handleSubmit } = useForm()

  const handleForm = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Content as={"form"} onSubmit={handleForm}>
      <Title size="lg">Alterar informações</Title>
      <Input
        label="Novo e-email"
        {...register("email")}
        id="email"
        defaultValue=""
        placeholder="novoemail@exemplo.com"
        type="email"
      />
      <Input
        label="Nova senha"
        {...register("password")}
        id="password"
        defaultValue=""
        placeholder="*********"
        type="password"
      />
      <ButtonsGroup>
        <Button variant="outlined">Cancelar</Button>
        <Button variant="solid">Salvar</Button>
      </ButtonsGroup>
    </Content>
  )
}

const ThemeSettings = () => {
  const { toggleSelectedTheme, selectedTheme } = themeStore()

  return (
    <Content>
      <Title size="lg">Alterar Tema</Title>
      <ButtonSecondary
        onClick={() =>
          toggleSelectedTheme(selectedTheme === "light" ? "dark" : "light")
        }
      >
        Alterar tema
      </ButtonSecondary>
    </Content>
  )
}

export default Settings
