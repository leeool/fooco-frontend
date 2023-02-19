import styled from "styled-components"
import { variant } from "styled-system"

interface TitleProps {
  size?: "title" | "subtitle"
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.textColor.title};
  font-weight: 600;
  font-size: 4.25rem;
  line-height: 1.2;

  ${variant({
    prop: "size",
    variants: {
      title: {
        fontSize: "4.25rem",
      },
      subtitle: {
        fontSize: "3.375rem",
      },
    },
  })}

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`
