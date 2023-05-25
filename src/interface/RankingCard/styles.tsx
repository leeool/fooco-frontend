import { Link } from "react-router-dom"
import styled, { AnyStyledComponent } from "styled-components"

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 15px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  height: fit-content;
  padding: 1rem;
`

export const Header = styled.div`
  margin-bottom: 1rem;
`

export const Username = styled.div`
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: #fff;
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: 5px;

  &::selection {
    background-color: #fff;
    color: ${({ theme }) => theme.textColor.title};
  }
`

export const Points = styled.div`
  background-color: #fff;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  place-items: center;
  justify-self: end !important;
  color: ${({ theme }) => theme.textColor.title};
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  font-size: 1.1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  box-shadow: 0 0 0px 2px inset
    ${({ theme }) => theme.backgroundColor.secondary};

  svg {
    width: 1rem;
  }
`

export const Separator = styled.span`
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
  position: absolute;
  top: 20%;
  left: 0;
`

export const Position = styled.span`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 600;
`

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  gap: 0.5rem;
  /* justify-content: start; */
  color: ${({ theme }) => theme.backgroundColor.secondary};
  width: 100%;
  align-items: end;
  padding: 0.5rem;
  border-radius: 0.5rem;
  /* justify-content: start; */
`

export const Rank = styled.div`
  overflow-y: auto;
  height: 16rem;
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem 0;
  scrollbar-width: thin;

  .owner {
    background-color: #4ef73877 !important;
  }

  > * {
    ${Link as AnyStyledComponent}:first-child {
      background-color: #ffd70077;
      border-radius: 0.4rem;
    }
    ${Link as AnyStyledComponent}:nth-child(2) {
      background-color: #c0c0c077;
      border-radius: 0.4rem;
    }

    ${Link as AnyStyledComponent}:nth-child(3) {
      background-color: #cd7f3277;
      border-radius: 0.4rem;
    }

    ${Link as AnyStyledComponent}:nth-child(n  + 4) {
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
      border-radius: 0.4rem;
    }
  }
`
