import { Edit } from "@assets/index"
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "@components/Dialog"
import { Button, Input } from "@components/Form"
import React from "react"
import useUserStore from "src/stores/UseUserStore"
import { EditContainer } from "./styles"
import { Title } from "@components/Text/Title"

const EditProfile = () => {
  const { userData, isLoggedIn } = useUserStore()

  if (!userData || !isLoggedIn) return null
  return (
    <DialogRoot>
      <DialogTrigger>
        <Edit />
      </DialogTrigger>
      <DialogContent>
        <EditContainer>
          <Title size="lg">Editar perfil</Title>
          <Input
            id="username"
            placeholder={userData.username}
            type="text"
            label="Apelido"
          />
          <Input
            id="sobre"
            placeholder={"Descreva você"}
            type="text"
            label="Sobre"
          />
          <Input
            id="ensino"
            placeholder={userData.educational_place}
            type="text"
            label="Instituição de ensino"
          />
          <div className="buttons">
            <DialogClose>
              <Button variant="outlined">Cancelar</Button>
            </DialogClose>
            <Button variant="solid">Confirmar</Button>
          </div>
        </EditContainer>
      </DialogContent>
    </DialogRoot>
  )
}

export default EditProfile
