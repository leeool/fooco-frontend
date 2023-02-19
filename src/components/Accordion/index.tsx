import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { Container } from "./style"
import { ReactComponent as Seta } from "@assets/icons/seta-baixo.svg"

interface IPropsAccordion {
  items: {
    header: string
    content: React.ReactNode
  }[]
  className: string
}

interface TriggerProps {
  children: React.ReactNode
  className?: string
  props?: any
}

const index = ({ items, className }: IPropsAccordion) => {
  return (
    <Container>
      <Accordion.Root type="single" collapsible className={className}>
        {items.map(({ content, header }) => (
          <Accordion.Item value={header} className="item" key={header}>
            <AccordionTrigger className="trigger">{header}</AccordionTrigger>
            <Accordion.Content className="content">
              <div className="content-text">{content}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Container>
  )
}

const AccordionTrigger = ({ children, className, ...props }: TriggerProps) => (
  <Accordion.Header className={className}>
    <Accordion.Trigger {...props}>
      {children}
      <Seta />
    </Accordion.Trigger>
  </Accordion.Header>
)

export default index
