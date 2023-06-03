import styled from "styled-components"

export const MenuContainer = styled.div`
  display: grid;
`

export const MenuTrigger = styled.button`
  display: flex;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  border-radius: 0.5rem;
  padding: 0.1rem;

  svg {
    width: 2rem;
    height: 2rem;
    stroke: ${({ theme }) => theme.textColor.title};
    stroke-width: 2;
  }

  &[data-state="open"] {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    svg {
      stroke: #fff;
    }
  }
`

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100cqh;
  background-color: transparent;
  z-index: 1;
`

export const Content = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  max-height: 0;
  transition: max-height 0.3s ease;
  z-index: 10;
  justify-items: center;
  overflow: hidden;

  &[data-state="open"] {
    padding: 0.5rem;
    max-height: 20rem;
  }
`

export const MenuItem = styled.span`
  background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  padding: 0.5rem;
  height: fit-content;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor.base};
  cursor: pointer;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.textColor.title};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: none;
  height: 2.5rem;

  a {
    display: block;
    color: inherit;
    width: 100%;
  }

  svg {
    width: 1.5rem;
    height: 100%;
    stroke-width: 2;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    color: #fff;
  }
`
