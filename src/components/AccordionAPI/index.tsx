import React from "react"
import { Item, RootContainer, Header, Trigger, Content } from "./style"
import { ReactComponent as Seta } from "@assets/icons/seta-baixo.svg"

export const AccordionRoot = RootContainer

export const AccordionItem = Item

export const AccordionContent = Content

export const AccordionTrigger = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <Header>
    <Trigger>
      {children}
      <Seta />
    </Trigger>
  </Header>
)
