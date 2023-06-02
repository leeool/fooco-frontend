import { Link } from "react-router-dom"
import styled, { AnyStyledComponent } from "styled-components"

export const Container = styled.div`
  display: grid;
`

export const MenuTrigger = styled.button`
  cursor: pointer;
`

export const Content = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 0.5rem;

  & > * {
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
    padding: 0.5rem;
    height: fit-content;
    font-size: 1.25rem;
  }
`
