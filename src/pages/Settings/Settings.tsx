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
import ChangeAvatar from "@interface/User/ChangeAvatar/ChangeAvatar"

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

interface ISettings {
  email: string
  password: string
  avatar_url: File | null
}

type UpdateUser = { email: string; password: string; avatar_url: string }

const AccountSettings = () => {
  const { handleSubmit, control } = useForm<ISettings>()
  const { setToastMessage } = UseToastStore()
  const { userData } = useUserStore()
  const [avatar, setAvatar] = useState<string | null>(null)
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: UpdateUser) => {
      const { options, url } = USER_PUT({ ...data }, userData!.id)

      return instance(url, options).then((res) => res.data)
    },
    mutationKey: ["userUpdate", userData],
  })

  const handleForm = handleSubmit(async (data) => {
    const imageUrl = await handleUploadImage(data.avatar_url)

    const newData = {
      email: data.email,
      password: data.password,
      avatar_url: imageUrl || "",
    }

    Object.entries(newData).forEach(([key, value]) =>
      value === "" ? delete newData[key as keyof ISettings] : void 0
    )

    await mutateAsync(newData, {
      onSuccess: (data) => {
        setToastMessage("Sucesso!", "Dados da conta atualizados.")
      },
    })
  })

  const handleUploadImage = async (file: File | null) => {
    if (!file || !userData) return null

    const uploadedImageURL = await uploadImage(file, userData.id)

    return uploadedImageURL
  }

  if (!userData) return null
  return (
    <Content as={"form"} onSubmit={handleForm}>
      <Title size="lg">Alterar informações da conta</Title>
      <InputsGroup>
        <div style={{ width: "100%" }}>
          <Controller
            name="email"
            control={control}
            defaultValue={""}
            render={({ fieldState, field }) => (
              <Input
                label="Novo e-email"
                id="email"
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
                placeholder="*********"
                type="password"
                fieldState={fieldState}
                {...field}
              />
            )}
          />
        </div>
        <Controller
          name="avatar_url"
          control={control}
          defaultValue={null}
          render={({ field: { value, onChange } }) => (
            <ChangeAvatar
              src={avatar || userData.avatar_url}
              fallback={userData.username.slice(0, 2)}
              size={14}
              id="avatar"
              onChange={({ target }) => {
                const file = target.files?.[0]

                if (!file) return

                if (file.type.split("/")[0] !== "image") {
                  setToastMessage(
                    "Algo deu errado",
                    "Apenas imagens são aceitas!"
                  )
                  return
                }

                onChange(file)

                const reader = new FileReader()

                reader.onloadend = () => {
                  setAvatar(reader.result as string)
                }
                reader.readAsDataURL(file)
              }}
              className={"avatar"}
            />
          )}
        />
      </InputsGroup>
      <ButtonsGroup>
        <Button variant="outlined" type="button">
          Cancelar
        </Button>
        <Button variant="solid" disabled={isLoading}>
          {isLoading ? "Carregando..." : "Salvar"}
        </Button>
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
