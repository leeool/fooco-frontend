import React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Content, Group, Item, ItemText, Label, Trigger } from "./Select.styles"
import { MiniSeta, Point } from "@assets/index"
import { ChevronDownIcon } from "@primer/octicons-react"

interface SelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode
  props?: SelectPrimitive.SelectProps
}

export const Select = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<SelectProps>
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <Trigger
        ref={forwardedRef}
        type="button"
        id="select"
        autoFocus={false}
        placeholder="Selecione uma opção"
        onFocus={(e) => e.preventDefault()}
      >
        <SelectPrimitive.Value placeholder="Selecione uma opção" />
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </Trigger>
      <SelectPrimitive.Portal style={{ zIndex: "200" }}>
        <Content align="start" arrowPadding={0} position="popper">
          <SelectPrimitive.ScrollUpButton></SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton></SelectPrimitive.ScrollDownButton>
          <SelectPrimitive.Arrow />
        </Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
})

Select.displayName = "Select"

interface SelectItemProps {
  children: React.ReactNode
  value: string
  props?: SelectPrimitive.SelectItemProps
}

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectItemProps>
>(({ children, value, ...props }, forwardedRef) => {
  return (
    <Item {...props} ref={forwardedRef} value={value}>
      <ItemText>{children}</ItemText>
    </Item>
  )
})

SelectItem.displayName = "SelectItem"

export const SelectLabel = Label

export const SelectGroup = Group
