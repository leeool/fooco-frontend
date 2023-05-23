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
  margin-bottom: 0.5rem;

  &::selection {
    background-color: #fff;
    color: ${({ theme }) => theme.textColor.title};
  }
`

export const Points = styled.div`
  background-color: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-self: end;
  color: ${({ theme }) => theme.textColor.title};
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  box-shadow: 0 0 0px 2px inset
    ${({ theme }) => theme.backgroundColor.secondary};

  svg {
    width: 1rem;
    height: 1rem;
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

export const Item = styled.div`
  display: flex;
  gap: 0.3rem;
  color: ${({ theme }) => theme.backgroundColor.secondary};
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;

  svg,
  path {
    stroke: currentColor;
    stroke-width: 2.5;
    width: 2rem;
  }
`

export const Rank = styled.div`
  overflow-y: auto;
  height: 20rem;
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem 0;

  > * {
    ${Link as AnyStyledComponent}:first-child {
      background-color: #ffd700aa;
      border-radius: 0.4rem;
    }
    ${Link as AnyStyledComponent}:nth-child(2) {
      background-color: #c0c0c0aa;
      border-radius: 0.4rem;
    }

    ${Link as AnyStyledComponent}:nth-child(3) {
      background-color: #cd7f32aa;
      border-radius: 0.4rem;
    }

    ${Link as AnyStyledComponent}:nth-child(n + 4) {
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
      border-radius: 0.4rem;
    }
  }
`
