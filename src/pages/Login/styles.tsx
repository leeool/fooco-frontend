import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: calc(100vh - 2rem);
  position: relative;

  .foquinho {
    display: grid;
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    border-radius: 20px;
    position: relative;
    place-items: center;
    padding: 0 1rem;

    svg {
      height: 100%;
      max-width: 100%;
      grid-area: 1 / -1;
    }
  }

  .outlet {
    align-self: center;
    padding: 3.125rem;

    .logo svg {
      position: absolute;
      top: 0;
      width: 10rem;
    }
  }

  @media (max-width: 900px) {
    .outlet {
      padding: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    .foquinho {
      display: none;
    }

    .outlet {
      padding: 1rem;

      h1 {
        text-align: center;
      }
    }
  }
`
