import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
  padding: 0.8rem 2rem;
  transition: background-color 0.3s ease-in-out;

  .buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  & > svg {
    min-width: 4rem;
  }

  @media (max-width: 1100px) {
    padding: 0.8rem 1rem;
    gap: 1rem;

    .buttons {
      gap: 1rem;
    }
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: auto 1fr;

    .buttons {
      grid-column: 1 / -1;
      align-items: center;
      justify-content: center;
    }

    & > a {
      display: block;
      grid-column: 1 / -1;
      min-width: 6rem;
      width: 100%;
      justify-self: center;
    }
  }
`
