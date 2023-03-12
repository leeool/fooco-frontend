import React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  Arrow,
  Content,
  Group,
  RadioItem,
  RadioGroup,
  Trigger,
  Item,
} from "./style"

interface Props {
  children: React.ReactNode
}

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuItem = Item
export const DropdownMenuGroup = Group
export const DropdownMenuTrigger = Trigger
export const DropdownMenuContent = ({ children }: Props) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <Content>
        {children}
        <Arrow />
      </Content>
    </DropdownMenuPrimitive.Portal>
  )
}
export const DropdownMenuRadioGroup = RadioGroup
export const DropdownMenuRadioItem = RadioItem
