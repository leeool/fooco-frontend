import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-self: center;
  text-align: center;
  gap: 0.3rem;
  align-self: center;

  svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 5;
  }

  span {
    color: ${({ theme }) => theme.textColor.title};
  }

  button[data-active="true"] svg {
    color: ${({ theme }) => theme.textColor.title};
  }

  &[data-loading="true"] {
    button svg {
      cursor: wait;
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 1rem;
    }
  }
`
