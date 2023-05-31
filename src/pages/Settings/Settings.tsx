import { Button, ButtonSecondary, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import { Avatar } from "@interface/index"
import React, { ReactElement, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { Navigate } from "react-router"
import { USER_PUT } from "src/api/apiCalls"
import { uploadImage } from "src/helpers/handleImages"
import { themeStore } from "src/stores/themeStore"
import useUserStore from "src/stores/UseUserStore"
import {
  ButtonsGroup,
  Container,
  Content,
  InputsGroup,
  Item,
  SideContainer,
  SideNav,
} from "./Settings.styles"
import { instance } from "src/api/apiCalls"
import { UserData } from "@interface/User/ProfilePreview/styles"
import UseToastStore from "@components/Toast/UseToastStore"

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

type UpdateUser = { email: string; password: string; avatar_url: string }

const AccountSettings = () => {
  const { handleSubmit, control } = useForm()
  const { setToastMessage } = UseToastStore()
  const { userData } = useUserStore()
  const { mutateAsync } = useMutation({
    mutationFn: async (data: UpdateUser) => {
      const { options, url } = USER_PUT({ ...data }, userData!.id)

      return instance(url, options).then((res) => res.data)
    },
    mutationKey: ["userUpdate", userData],
  })

  const handleForm = handleSubmit(async (data) => {
    console.log(data)

    const imageUrl = await handleUploadImage(data.avatarImage)

    await mutateAsync(
      {
        email: data.email,
        password: data.password,
        avatar_url: imageUrl || "",
      },
      {
        onSuccess: (data) => {
          console.log(data)
          alert("Sucesso.")
        },
      }
    )
  })

  const handleUploadImage = async (file: File) => {
    if (!file || !userData) return null

    console.log(file.type)

    if (file.type.split("/")[0] !== "image") {
      setToastMessage("Algo deu errado", "Apenas imagens são aceitas!")
      return
    }

    const uploadedImageURL = await uploadImage(file, userData.username)

    return uploadedImageURL
  }

  if (!userData) return null
  return (
    <Content as={"form"} onSubmit={handleForm}>
      <Title size="lg">Alterar informações da conta</Title>
      <InputsGroup>
        <Controller
          name="email"
          control={control}
          defaultValue={userData.email}
          render={({ fieldState, field }) => (
            <Input
              label="Novo e-email"
              id="email"
              defaultValue=""
              placeholder="novoemail@exemplo.com"
              type="email"
              fieldState={fieldState}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ fieldState, field }) => (
            <Input
              label="Nova senha"
              id="password"
              defaultValue=""
              placeholder="*********"
              type="password"
              fieldState={fieldState}
              {...field}
            />
          )}
        />
        <Controller
          name="avatarImage"
          control={control}
          defaultValue={null}
          render={({ field: { value, onChange, ...field }, fieldState }) => (
            <Input
              type="file"
              accept="image/*"
              label="Foto de avatar"
              id="avatar"
              value={value?.fileName}
              placeholder=""
              onChange={({ target }) => {
                if (!target.files || !target.files[0]) return
                onChange(target.files[0])
              }}
              fieldState={fieldState}
              {...field}
            />
          )}
        />
      </InputsGroup>
      <Avatar
        src={userData.avatar_url}
        delayMs={0}
        fallback={userData.username.slice(0, 2)}
        style={{ gridColumn: "2 / 3" }}
        size={13}
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
