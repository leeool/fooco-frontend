import { ButtonSecondary } from "@components/Form"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 3rem;
  position: relative;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const SideContainer = styled.div`
  display: grid;
  gap: 1rem;
  top: 5rem;
  position: sticky;
  height: fit-content;
  /* top: 1rem; */
`

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled(ButtonSecondary)`
  justify-content: start;
`

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
`

export const ButtonsGroup = styled.div`
  justify-self: end;
  display: flex;
  gap: 1rem;
  grid-column: 1 / -1;
`

export const InputsGroup = styled.div`
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
