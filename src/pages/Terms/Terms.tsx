import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "@components/AccordionAPI"
import { Title } from "@components/Text/Title"
import termsData from "./data"
import React from "react"
import { Container } from "./styles"
import { Paragraph } from "@components/Text/Paragraph"

const Terms = () => {
  return (
    <Container>
      <div>
        <Title size="xl">Termos de uso</Title>
        <Paragraph size="xl">
          A sua privacidade é importante para nós. É política da Animalia
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site Fooco, e outros sites que possuímos e
          operamos.
        </Paragraph>
      </div>
      <div>
        <AccordionRoot type="single" collapsible>
          {termsData.map((term) => (
            <AccordionItem value={String(term.id)} key={term.id}>
              <AccordionTrigger>
                {term.id}. {term.title}
              </AccordionTrigger>
              <AccordionContent>{term.content}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </Container>
  )
}

export default Terms
