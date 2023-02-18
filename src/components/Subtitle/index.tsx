import React from "react"
import { Paragraph } from "./style"

interface Props {
  size?: "title" | "subtitle"
  children: React.ReactNode
}

const index = ({ children, size }: Props) => {
  return <Paragraph size={size}>{children}</Paragraph>
}

export default index
