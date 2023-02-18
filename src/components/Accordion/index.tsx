import React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { Container } from "./style"
import { ReactComponent as Seta } from "@assets/seta-baixo.svg"

interface IPropsAccordion {
  header: string
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
        <Accordion.Item value={header} className="item">
          <AccordionTrigger className="trigger">{header}</AccordionTrigger>
          <Accordion.Content className="content">
            <div className="content-text">{content}</div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  )
}

const AccordionTrigger = ({ children, className, ...props }: Props) => (
  <Accordion.Header className={className}>
    <Accordion.Trigger {...props}>
      {children}
      <Seta />
    </Accordion.Trigger>
  </Accordion.Header>
)

export default index
