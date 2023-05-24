import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Content, DialogOverlay, Trigger } from "./styles"

interface TriggerProps {
  children: React.ReactNode
}

interface Props extends DialogPrimitive.DialogProps {
  children: React.ReactNode
  props?: DialogPrimitive.DialogProps
}

export const DialogRoot = DialogPrimitive.Root

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Props>
>(({ children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <Content ref={ref} {...props}>
      {children}
    </Content>
  </DialogPrimitive.Portal>
))

DialogContent.displayName = "DialogContent"

export const DialogTrigger = ({ children }: TriggerProps) => {
  return <Trigger>{children}</Trigger>
}

export const DialogClose = DialogPrimitive.Close
