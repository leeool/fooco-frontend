import React from "react"
import {
  ControllerFieldState,
  UseFormProps,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form"
import { InputContainer } from "./style"
import Error from "@components/Text/Error"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  type: string
  placeholder: string
  value?: string
  icon?: React.ReactNode
  props?: React.InputHTMLAttributes<HTMLInputElement>
  innerRef?: React.Ref<HTMLInputElement>
  fieldState?: ControllerFieldState
}

const index = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<Props>
>(
  (
    { id, label, placeholder, icon, innerRef, fieldState, ...props },
    forwardedRef
  ) => {
    return (
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <div className="input">
          <input
            id={id}
            placeholder={placeholder}
            ref={forwardedRef}
            {...props}
          />
          {icon && <span className="icon">{icon}</span>}
        </div>
        <Error className={`error ${fieldState?.error && "active"}`}>
          {fieldState && fieldState.error?.message}
        </Error>
      </InputContainer>
    )
  }
)

index.displayName = "Input"

export default index
