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

    a {
      width: fit-content;
    }
  }

  .buttons-logged {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${({ theme }) => theme.textColor.title};
    font-weight: 500;

    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 0.3rem;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  & .logo {
    max-width: 13rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    grid-template-rows: auto auto auto;

    .buttons {
      grid-column: 1 / -1;
      align-items: center;
      justify-content: center;
    }

    .buttons-logged {
      align-items: center;
    }

    & > a {
      svg {
        width: 100%;
      }
      display: block;
      grid-column: 1 / -1;
      width: 100%;
      justify-self: center;
    }

    .search {
      width: 100%;
      grid-column: 1 / -1;
      grid-row: 3;
    }
  }
`
