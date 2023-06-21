import { Edit } from "@assets/index"
import { DialogContent, DialogRoot, DialogTrigger } from "@components/Dialog"
import { Button, Input, TextArea } from "@components/Form"
import React from "react"
import useUserStore from "src/stores/UseUserStore"
import { EditContainer, FixedTitle, LoadingEdit } from "./styles"
import { Title } from "@components/Text/Title"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateUserSchema } from "src/schemas"
import { USER_PUT } from "src/api/apiCalls"
import ReactLoading from "react-loading"
import UseToastStore from "@components/Toast/UseToastStore"
import { useNavigate } from "react-router-dom"
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from "react-query"
import mutateProfileEdit from "src/mutations/mutateProfileEdit"

interface Props {
  refetch: (
    options?: RefetchOptions & RefetchQueryFilters
  ) => Promise<QueryObserverResult<IUserData | IError, unknown>>
}

const EditProfile = ({ refetch }: Props) => {
  const { userData, isLoggedIn } = useUserStore()
  const { control, handleSubmit } = useForm<UserUpdate>({
    resolver: zodResolver(updateUserSchema),
    mode: "all",
  })
  const [open, setOpen] = React.useState<boolean>(false)
  const { mutateAsync, isLoading } = useMutation(
    mutateProfileEdit(userData?.id)
  )
  const { setToastMessage } = UseToastStore()
  const nav = useNavigate()

  const handleUpdateUser = handleSubmit(async (data) => {
    if (!userData || !isLoggedIn) return

    const modifiedData: Partial<IUserData> = Object.entries(data)
      .filter(([key, value]) => userData[key as keyof IUserData] !== value)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

    if (!Object.keys(modifiedData).length) return setOpen(false)

    await mutateAsync(
      { modifiedData, userId: userData.id },
      {
        onSuccess: (data) => {
          nav(`/app/${data.username}`)
          setOpen(false)
          setToastMessage(
            "Sucesso!",
            "Dados atualizados com sucesso!",
            "success"
          )
          refetch()
        },
      }
    )

    return
  })

  if (!userData || !isLoggedIn) return null
  return (
    <DialogRoot onOpenChange={setOpen} open={open}>
      <DialogTrigger>
        <Edit />
      </DialogTrigger>
      <DialogContent>
        {isLoading && (
          <LoadingEdit>
            <ReactLoading
              type="spin"
              color="#E63A23"
              height={50}
              width={50}
              className="load-icon"
            />
          </LoadingEdit>
        )}

        <EditContainer onSubmit={handleUpdateUser} data-loading={isLoading}>
          <FixedTitle>
            <Title size="lg">Editar perfil</Title>
          </FixedTitle>
          <Controller
            control={control}
            name="username"
            defaultValue={userData.username}
            render={({ field, fieldState }) => (
              <Input
                id="username"
                placeholder={userData.username}
                type="text"
                label="Apelido"
                fieldState={fieldState}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="about"
            defaultValue={userData.about}
            render={({ field, fieldState }) => (
              <TextArea
                placeholder={"Descreva você"}
                {...field}
                id="sobre"
                label="Sobre"
                fieldState={fieldState}
              />
            )}
          />
          <Controller
            control={control}
            name="educational_place"
            defaultValue={userData.educational_place}
            render={({ field, fieldState }) => (
              <Input
                id="ensino"
                placeholder={userData.educational_place}
                type="text"
                label="Instituição de ensino"
                fieldState={fieldState}
                {...field}
              />
            )}
          />
          <div className="buttons">
            <Button
              variant="outlined"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="solid" type="submit" disabled={isLoading}>
              {isLoading ? "Carregando..." : "Salvar"}
            </Button>
          </div>
        </EditContainer>
      </DialogContent>
    </DialogRoot>
  )
}

export default EditProfile
