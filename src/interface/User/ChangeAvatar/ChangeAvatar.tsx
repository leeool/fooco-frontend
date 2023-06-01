import { Button, ButtonSecondary } from "@components/Form"
import React, { HTMLAttributes } from "react"
import { Avatar } from "../Avatar"
import { Container } from "./ChangeAvatar.styled"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  src: string
  fallback: string
  styles?: React.CSSProperties
  size: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  props?: React.InputHTMLAttributes<HTMLInputElement>
}

const ChangeAvatar = ({
  fallback,
  src,
  styles,
  size,
  onChange,
  props,
}: Props) => {
  return (
    <Container>
      <input
        type="file"
        className="img"
        accept="image/*"
        {...props}
        onChange={onChange}
      />
      <Avatar
        delayMs={0}
        src={src}
        fallback={fallback}
        style={styles}
        size={size}
      />
      <p>Alterar Avatar</p>
      {/* <input type="file" className="btn" /> */}
      {/* <ButtonSecondary>Alterar</ButtonSecondary> */}
    </Container>
  )
}

export default ChangeAvatar
