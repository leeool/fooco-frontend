import React, { ButtonHTMLAttributes } from "react"
import { ButtonContainer } from "./style"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: "outlined" | "solid" | "transparent"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  loading?: boolean
  props?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({
  children,
  variant,
  onClick,
  icon,
  loading,
  ...props
}: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} {...props}>
      {loading ? "Carregando..." : children}
      {icon}
    </ButtonContainer>
  )
}

export default Button
