import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  variant: "outlined" | "solid" | "transparent"
}

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 0.4rem 1rem;
  /* min-height: 2.4rem; */
  height: 100%;
  border-radius: 20px;
  font-weight: 700;
  align-items: center;
  gap: 0.4rem;
  /* max-height: 100%; */
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  width: 100%;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
`

export const Button = styled(ButtonContainer)<Props>`
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.backgroundColor.primary};

  &:disabled {
    cursor: wait;
    filter: opacity(0.5) grayscale(0.2);

    svg {
      animation: spin 2s linear infinite;
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
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
      transparent: {
        backgroundColor: "transparent",
        border: "transparent",
        transition: "none",
        color: "#E63A23",
        "&:hover": {
          color: "#ff6450",
          backgroundColor: "transparent",
          borderColor: "transparent",
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

export const ButtonSecondary = styled(ButtonContainer)`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 10px;
  color: ${({ theme }) => theme.textColor.title};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.4rem 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    color: ${({ theme }) => theme.backgroundColor.tertiary};

    path {
      stroke: ${({ theme }) => theme.backgroundColor.tertiary};
    }
  }
`
