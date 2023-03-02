import React from "react"
import { ControllerFieldState, FieldError } from "react-hook-form"
import { InputContainer } from "./style"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  type: string
  placeholder: string
  value?: string
  icon: React.ReactNode
  props?: React.InputHTMLAttributes<HTMLInputElement>
  innerRef?: React.Ref<HTMLInputElement>
  fieldState?: ControllerFieldState
}

const index = ({
  id,
  label,
  placeholder,
  icon,
  innerRef,
  fieldState,
  ...props
}: Props) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <div className="input">
        <input id={id} placeholder={placeholder} ref={innerRef} {...props} />
        <span className="icon">{icon}</span>
      </div>
      <p>{fieldState && fieldState.error?.message}</p>
    </InputContainer>
  )
}

export default index
