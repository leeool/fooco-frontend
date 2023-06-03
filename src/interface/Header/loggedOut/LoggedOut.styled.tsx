import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .logo svg {
    max-width: fit-content;
    min-width: 4rem;
    width: 100%;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  width: 100%;

  a {
    display: block;
    width: max-content;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`
