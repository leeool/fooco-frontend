import React from "react"
import { Button } from "../Button"
import { Container } from "./style"

interface Props {
  label?: string
  placeholder: string
  id: string
  icon: React.ReactNode
  button: React.ReactNode
  buttonIcon?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const index = ({
  label,
  placeholder,
  id,
  icon,
  button,
  buttonIcon,
  onChange,
  onClick,
}: Props) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <form className="wrapper">
        <div className="inputContainer">
          <input type="text" placeholder={placeholder} onChange={onChange} />
          <span className="icon">{icon}</span>
        </div>
        <Button variant="solid" onClick={onClick}>
          {button}
        </Button>
      </form>
    </Container>
  )
}

export default index
