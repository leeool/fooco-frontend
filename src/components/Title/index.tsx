import React from "react"
import { Title } from "./style"

interface Props {
  children: React.ReactNode
}

const index = ({ children }: Props) => {
  return <Title>{children}</Title>
}

export default index
