import React from "react"
import * as Toast from "@radix-ui/react-toast"
import UseToastStore from "./UseToastStore"
import { Content, Description, Icon, Root, Title, ViewPort } from "./styles"
import {
  AlertFillIcon,
  AlertIcon,
  CheckIcon,
  CircleSlashIcon,
  StopIcon,
} from "@primer/octicons-react"

interface Props {
  title: React.ReactNode
  description: React.ReactNode
}

const index = () => {
  const { open, setOpen, toastContent, type } = UseToastStore()

  const icons = {
    success: <CheckIcon size={24} />,
    warning: <AlertFillIcon size={24} />,
    error: <StopIcon size={24} />,
  }

  return (
    <Toast.Provider swipeDirection="right" duration={3000}>
      <Root open={open} onOpenChange={setOpen}>
        <Icon data-type={type}>{icons[type]}</Icon>
        <Content>
          <Title>{toastContent.title}</Title>
          <Description>{toastContent.message}</Description>
        </Content>
      </Root>

      <ViewPort />
    </Toast.Provider>
  )
}

export default index
