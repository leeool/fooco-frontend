import React from "react"
import { ButtonContainer } from "./style"

interface IButtonProps {
  children: React.ReactNode
  variant: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
}

const Button = ({ children, variant, onClick, icon }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {children}
      {icon}
    </ButtonContainer>
  )
}

export default Button
