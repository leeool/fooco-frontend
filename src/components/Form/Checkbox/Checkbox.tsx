import React from "react"
import { ControllerFieldState } from "react-hook-form"
import { Container } from "./styles"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode
  id: string
  fieldState: ControllerFieldState
  innerRef: React.Ref<HTMLInputElement>
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const Checkbox = ({ label, id, fieldState, innerRef, ...props }: Props) => {
  return (
    <Container data-invalid={fieldState?.error ? "true" : "false"}>
      <input type="checkbox" id={id} {...props} ref={innerRef} />
      <label htmlFor={id}>{label}</label>
    </Container>
  )
}

export default Checkbox
