import React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Arrow, Content, Item, Trigger } from "./style"

interface Props {
  trigger: React.ReactNode
  item: React.ReactNode[]
  classTrigger?: string
}

const index = ({ trigger, item, classTrigger }: Props) => {
  return (
    <DropdownMenu.Root>
      <Trigger className={classTrigger}>{trigger}</Trigger>

      <DropdownMenu.Portal>
        <Content sideOffset={5}>
          {item.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
          {/* <DropdownMenu.Separator /> */}
          {/* 
          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>
          */}
          <Arrow />
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default index
