import { AvatarProps } from "@radix-ui/react-avatar"
import React from "react"
import { Fallback, Image, Root } from "./styles"

interface Props extends AvatarProps {
  src: string
  fallback: string
  delayMs: number
  props?: AvatarProps
}

const Index = ({ src, fallback, delayMs, ...props }: Props) => {
  return (
    <Root style={{ width: "100%", height: "100%", display: "flex" }} {...props}>
      <Image src={src} />
      <Fallback delayMs={delayMs}>{fallback}</Fallback>
    </Root>
  )
}

export default Index
