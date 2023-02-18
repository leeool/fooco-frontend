import React from "react"
import { InputContainer } from "./style"

interface Props {
  id: string
  label?: string
  type: string
  placeholder: string
  value?: string
  icon: React.ReactNode
}

const index = ({ id, type, label, placeholder, value, icon }: Props) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <div className="input">
        <input type={type} id={id} placeholder={placeholder} value={value} />
        <span className="icon">{icon}</span>
      </div>
    </InputContainer>
  )
}

export default index
