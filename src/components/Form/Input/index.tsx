import React, { InputHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  type: string
  placeholder: string
  value?: string
  icon: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const index = ({
  id,
  type,
  label,
  placeholder,
  value,
  icon,
  onChange,
  ...props
}: Props) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <div className="input">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        <span className="icon">{icon}</span>
      </div>
    </InputContainer>
  )
}

export default index
