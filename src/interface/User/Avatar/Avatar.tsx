import { AvatarProps } from "@radix-ui/react-avatar"
import React from "react"
import { Fallback, Image, Root } from "./styles"

interface Props extends AvatarProps {
  src: string
  fallback: string
  delayMs: number
  props?: AvatarProps
  size?: number
}

const Index = ({ src, fallback, delayMs, size = 4, ...props }: Props) => {
  return (
    <Root {...props}>
      <Image src={src} size={size} />
      <Fallback delayMs={0} size={size}>
        {fallback}
      </Fallback>
    </Root>
  )
}

export default Index
