import React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Arrow, Content, Item, RadioGroup, Trigger } from "./style"
import { themeStore } from "src/stores/themeStore"

interface Props {
  trigger: React.ReactNode
  item: React.ReactNode[]
  classTrigger?: string
  values: string[]
}

const index = ({ trigger, item, classTrigger, values }: Props) => {
  const { selectedTheme } = themeStore()

  return (
    <DropdownMenu.Root>
      <Trigger className={classTrigger}>{trigger}</Trigger>

      <DropdownMenu.Portal>
        <Content>
          <RadioGroup value={selectedTheme}>
            {item.map((item, index) => (
              <Item value={values[index]} key={index}>
                {item}
              </Item>
            ))}
          </RadioGroup>
          <Arrow />
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default index
