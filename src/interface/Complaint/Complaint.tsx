import { DialogRoot, DialogTrigger, DialogContent } from "@components/Dialog"
import { ButtonSecondary } from "@components/Form"
import { Title } from "@components/Text/Title"
import React from "react"
import { Container } from "./Complaint.styles"

const Complaint = () => {
  return (
    <DialogRoot>
      <DialogTrigger>Denunciar</DialogTrigger>
      <DialogContent>
        <Title size="md">Denunciar publicação</Title>
        <label htmlFor="tipo"></label>
        <select name="" id="tipo">
          <option value="">Conteúdo ofensivo</option>
          <option value="">Assédio</option>
          <option value="">Spam</option>
          <option value="">Desinformação</option>
          <option value="">Fraude ou golpe</option>
          <option value="">Outro</option>
        </select>
      </DialogContent>
    </DialogRoot>
  )
}

export default Complaint
