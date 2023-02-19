import styled from "styled-components"
import { variant } from "styled-system"

interface IPropsParagraph {
  size?: "title" | "subtitle"
}

export const Paragraph = styled.p<IPropsParagraph>`
  color: ${({ theme }) => theme.textColor.paragraph};
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  ${variant({
    prop: "size",
    variants: {
      title: {
        fontSize: "1.3rem",
      },
      subtitle: {
        fontSize: "1.2rem",
      },
    },
  })}

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
