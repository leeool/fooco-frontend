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
  overflow: hidden;
  border-radius: 20px;

  &:focus-within {
    span path {
      stroke: ${({ theme }) => theme.backgroundColor.secondary};
    }
    outline: 1.5px solid ${({ theme }) => theme.backgroundColor.secondary};
  }

  .icon {
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    height: 100%;
    padding: 0 1.2rem;
    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    stroke: ${({ theme }) => theme.textColor.details};
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: none;
    outline: none;
    padding: 0.5rem 0.8rem;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.subtitle};
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0 0 0 0px #f3503a40;

    &::placeholder {
      color: ${({ theme }) => theme.textColor.details};
    }

    &:focus,
    &:hover {
      transition: 0.3s ease;
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
      box-shadow: 0 0 0 4px #f3503a40;
    }
  }
`
