import React from "react"
import { ButtonContainer } from "./style"

interface IButtonProps {
  children: React.ReactNode
  variant: string
}

const Button = ({ children, variant }: IButtonProps) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}

export default Button
