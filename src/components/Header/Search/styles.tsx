import styled from "styled-components"

export const Container = styled.div`
  max-width: 31rem;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    width: 1.5rem;
    right: 0.5rem;
    top: 0.5rem;
    stroke: ${({ theme }) => theme.textColor.title};
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: none;
    outline: none;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.subtitle};
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0 0 0 0px #f3503a40;

    &::placeholder {
      color: ${({ theme }) => theme.textColor.details};
    }

    &:hover,
    &:focus {
      transition: 0.3s ease;
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
      outline: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
      box-shadow: 0 0 0 3px #f3503a40;
    }
  }
`
