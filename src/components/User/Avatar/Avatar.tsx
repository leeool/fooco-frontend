import React from "react"
import { Fallback, Image, Root } from "./styles"

interface Props {
  src: string
  fallback: string
  delayMs: number
}

const Index = ({ src, fallback, delayMs }: Props) => {
  return (
    <Root style={{ width: "100%", height: "100%", display: "flex" }}>
      <Image src={src} />
      <Fallback delayMs={delayMs}>{fallback}</Fallback>
    </Root>
  )
}

export default Index
