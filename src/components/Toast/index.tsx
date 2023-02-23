import React from "react"
import * as Toast from "@radix-ui/react-toast"
import UseToastStore from "./UseToastStore"
import { Description, Root, Title, ViewPort } from "./styles"
import { ReactComponent as Foquinho } from "@assets/foquinho.svg"

interface Props {
  title: React.ReactNode
  description: React.ReactNode
}

const index = ({ title, description }: Props) => {
  const { openToast: open, setToastOpen: setOpen } = UseToastStore()

  return (
    <Toast.Provider swipeDirection="right">
      <Root open={open} onOpenChange={setOpen} duration={3000}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Root>

      <ViewPort />
    </Toast.Provider>
  )
}

export default index
