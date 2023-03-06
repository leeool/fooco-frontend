import React, { forwardRef } from "react"
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

export const DialogContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <Content ref={ref}>{children}</Content>
    </DialogPrimitive.Portal>
  )
)

DialogContent.displayName = "DialogContent"

export const DialogTrigger = ({ children }: TriggerProps) => {
  return <Trigger>{children}</Trigger>
}

export const DialogClose = DialogPrimitive.Close
