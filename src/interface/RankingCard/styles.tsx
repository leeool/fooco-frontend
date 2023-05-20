import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 15px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  height: fit-content;
  padding: 1rem;
`

export const Points = styled.div`
  background-color: #fff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-self: start;
  color: ${({ theme }) => theme.textColor.title};
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  outline: 2px solid ${({ theme }) => theme.backgroundColor.secondary};

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
  margin-top: 5rem;
  margin-bottom: 1rem;
  position: absolute;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.backgroundColor.secondary};
  width: 100%;

  svg,
  path {
    stroke: currentColor;
    stroke-width: 2.5;
    width: 2rem;
  }
`
