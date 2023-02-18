import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  variant: string
}

export const ButtonContainer = styled.button<Props>`
  display: flex;
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  align-items: center;
  gap: 0.8rem;
  height: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};

  ${variant({
    variants: {
      outlined: {
        border: "2px solid #E63A23",
        color: "#E63A23",
        "&:hover": {
          color: "#ff6450",
          borderColor: "#ff6450",
        },
      },
      solid: {
        backgroundColor: "#E63A23",
        border: "2px solid #E63A23",
        transition: "none",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#ff6450",
          borderColor: "#ff6450",
        },
      },
    },
  })};
`
