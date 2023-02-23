import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  variant: string
}

export const ButtonContainer = styled.button<Props>`
  display: flex;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  padding: 0rem 1rem;
  min-height: 2.4rem;
  height: 100%;
  border-radius: 20px;
  font-weight: 700;
  align-items: center;
  gap: 0.4rem;
  max-height: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};

  svg {
    width: 2rem;
    height: 2rem;
  }

  &[data-loading="true"] {
    cursor: wait;
    filter: opacity(0.6);

    svg {
      animation: spin 2s linear infinite;
    }
  }

  ${variant({
    variants: {
      outlined: {
        border: "2px solid #E63A23",
        color: "#E63A23",
        backgroundColor: "transparent",
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

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
