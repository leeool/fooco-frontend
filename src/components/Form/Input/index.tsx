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
}

const index = ({
  id,
  type,
  label,
  placeholder,
  value,
  icon,
  onChange,
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
        />
        <span className="icon">{icon}</span>
      </div>
    </InputContainer>
  )
}

export default index
