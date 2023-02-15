import React from "react"
import Button from "../Button"
import { Container } from "./style"

interface Props {
  label?: string
  placeholder?: string
  id: string
  icon: React.ReactNode
  button: React.ReactNode
  buttonIcon?: React.ReactNode
}

const index = ({ label, placeholder, id, icon, button, buttonIcon }: Props) => {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="wrapper">
        <div className="inputContainer">
          <input type="text" id={id} placeholder={placeholder} />
          <span className="icon">{icon}</span>
        </div>
        <Button variant="solid" icon={buttonIcon}>
          {button}
        </Button>
      </div>
    </Container>
  )
}

export default index
