import React from "react"
import { ButtonContainer } from "./style"

interface IButtonProps {
  children: React.ReactNode
  variant: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  loading?: boolean
}

const Button = ({
  children,
  variant,
  onClick,
  icon,
  loading,
}: IButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      data-loading={loading ? "true" : "false"}
    >
      {loading ? "Carregando..." : children}
      {icon}
    </ButtonContainer>
  )
}

export default Button
