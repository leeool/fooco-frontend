import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { Container } from "./style"

interface IPropsAccordion {
  header: React.ReactNode
  content: React.ReactNode
}

interface Props {
  children: React.ReactNode
  className?: string
  props?: any
}

const index = ({ header, content }: IPropsAccordion) => {
  return (
    <Container>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="1" className="item">
          <AccordionTrigger className="trigger">{header}</AccordionTrigger>
          <Accordion.Content className="content">{content}</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  )
}

const AccordionTrigger = ({ children, className, ...props }: Props) => (
  <Accordion.Header className={className}>
    <Accordion.Trigger {...props}>{children}</Accordion.Trigger>
  </Accordion.Header>
)

export default index
