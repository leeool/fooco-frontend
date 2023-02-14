import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  variant: string
}

export const ButtonContainer = styled.button<Props>`
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-weight: 600;

  ${variant({
    variants: {
      outlined: {
        backgroundColor: "#fff",
        border: "2px solid #E63A23",
        color: "#E63A23",
      },
      solid: {
        backgroundColor: "#E63A23",
        border: "2px solid #E63A23",
        color: "#fff",
      },
    },
  })};
`
