import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@components/Dialog"
import { ButtonSecondary, TextArea } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { ButtonGroup, Container } from "./Complaint.styles"
import { Select, SelectItem } from "@components/Form/Select/Select"
import { DropdownMenuItem } from "@components/DropdownMenuAPI"

interface Props {
  type: string | undefined
  comment: string | undefined
}

const Complaint = () => {
  const [{ comment, type }, setComplaint] = React.useState<Props>({
    type: undefined,
    comment: "",
  })
  const [open, setOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!type) return null
    console.log({ comment, type })
  }

  return (
    <DialogRoot onOpenChange={setOpen} open={open}>
      <DropdownMenuItem onClick={(e) => e.preventDefault()}>
        <DialogTrigger>Denunciar</DialogTrigger>
      </DropdownMenuItem>
      <DialogContent>
        <Container onSubmit={handleSubmit}>
          <Title size="md">Denunciar publicação</Title>
          <div>
            <label htmlFor="select">Motivo</label>
            <Select
              onValueChange={(e) => setComplaint((p) => ({ ...p, type: e }))}
              value={type}
              required
            >
              <SelectItem value="Conteúdo ofensivo">
                Conteúdo ofensivo
              </SelectItem>
              <SelectItem value="Assédio">Assédio</SelectItem>
              <SelectItem value="Spam">Spam</SelectItem>
              <SelectItem value="Desinformação">Desinformação</SelectItem>
              <SelectItem value="Fraude ou golpe">Fraude ou golpe</SelectItem>
              <SelectItem value="Outro">Outro</SelectItem>
            </Select>
          </div>
          <div>
            <label htmlFor="coment">Comentário (opcional)</label>
            <TextArea
              id="coment"
              value={comment}
              placeholder="Comentários"
              onChange={(e) =>
                setComplaint((p) => ({ ...p, comment: e.target.value }))
              }
            />
          </div>
          <ButtonGroup>
            <ButtonSecondary type="button" onClick={() => setOpen(false)}>
              Cancelar
            </ButtonSecondary>
            <ButtonSecondary type="submit">Enviar</ButtonSecondary>
          </ButtonGroup>
        </Container>
      </DialogContent>
    </DialogRoot>
  )
}

export default Complaint
