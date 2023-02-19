import styled from "styled-components"

export const Container = styled.div`
  width: 31rem;

  @media (max-width: 1100px) {
    width: fit-content;
    justify-self: start;
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

    &::placeholder {
      color: ${({ theme }) => theme.textColor.details};
    }
  }
`
