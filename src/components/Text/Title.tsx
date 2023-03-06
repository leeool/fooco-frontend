import styled from "styled-components"
import { variant } from "styled-system"

interface TitleProps {
  size: "xl" | "2xl" | "lg" | "md"
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.textColor.title};
  font-weight: 600;
  line-height: 1.2;

  ${variant({
    prop: "size",
    variants: {
      "2xl": {
        fontSize: "4.25rem",
        "@media (max-width: 600px)": {
          fontSize: "3.375rem",
        },
      },
      xl: {
        fontSize: "3.375rem",
        "@media (max-width: 600px)": {
          fontSize: "2.5rem",
        },
      },
      lg: {
        fontSize: "2.5rem",
        "@media (max-width: 600px)": {
          fontSize: "1.6rem",
        },
      },
      md: {
        fontSize: "1.6rem",
        "@media (max-width: 600px)": {
          fontSize: "1.3rem",
        },
      },
    },
  })}
`
