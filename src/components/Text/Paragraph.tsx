import styled from "styled-components"
import { variant } from "styled-system"

interface IPropsParagraph {
  size: "xl" | "2xl" | "lg"
}

export const Paragraph = styled.p<IPropsParagraph>`
  color: ${({ theme }) => theme.textColor.paragraph};
  line-height: 1.5;

  ${variant({
    prop: "size",
    variants: {
      "2xl": {
        fontSize: "1.4rem",
        "@media (max-width: 600px)": {
          fontSize: "1.3rem",
        },
      },
      xl: {
        fontSize: "1.2rem",
        "@media (max-width: 600px)": {
          fontSize: "1rem",
        },
      },
      lg: {
        fontSize: "1rem",
      },
    },
  })}
`
