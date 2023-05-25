import { ButtonSecondary } from "@components/Form"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  position: relative;
  gap: 3rem;
`

export const SideContainer = styled.div`
  display: grid;
  gap: 1rem;
  top: 0rem;
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

export const Content = styled.div``
