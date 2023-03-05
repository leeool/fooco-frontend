import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Content, DialogOverlay, Trigger } from "./styles"

interface ContentProps {
  children: React.ReactNode
}

interface TriggerProps {
  children: React.ReactNode
}

interface Props {
  children: React.ReactNode
}

export const DialogRoot = DialogPrimitive.Root

export const DialogContent = ({ children }: ContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <Content>{children}</Content>
    </DialogPrimitive.Portal>
  )
}

export const DialogTrigger = ({ children }: TriggerProps) => {
  return <Trigger>{children}</Trigger>
}

export const DialogClose = DialogPrimitive.Close
