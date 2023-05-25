import { ButtonSecondary } from "@components/Form"
import { Title } from "@components/Text/Title"
import React, { ReactElement } from "react"
import { themeStore } from "src/stores/themeStore"
import {
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
  const [page, setPage] = React.useState<"account" | "theme">("account")

  const pages: IPages = {
    account: <AccountSettings />,
    theme: <ThemeSettings />,
  }

  const handlePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    setPage(e.target.dataset.page as "account" | "theme")
  }

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
      <Content>{pages[page]}</Content>
    </Container>
  )
}

const AccountSettings = () => {
  return <div>Alterar informações da conta</div>
}

const ThemeSettings = () => {
  const { toggleSelectedTheme, selectedTheme } = themeStore()

  return (
    <div>
      <Title size="lg">Alterar Tema</Title>
      <ButtonSecondary
        onClick={() =>
          toggleSelectedTheme(selectedTheme === "light" ? "dark" : "light")
        }
      >
        Alterar tema
      </ButtonSecondary>
    </div>
  )
}

export default Settings
