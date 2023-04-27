import React from "react"
import { Container, TextAreaInput } from "./styles"
import { ControllerFieldState } from "react-hook-form"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label?: string
  props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
  fieldState?: ControllerFieldState
}

const TextArea = ({ id, label, fieldState, ...props }: Props) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <TextAreaInput id={id} {...props} data-invalid={fieldState?.error}>
        TextArea
      </TextAreaInput>
    </Container>
  )
}

export default TextArea
