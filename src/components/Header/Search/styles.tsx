import styled from "styled-components"

export const SearchContainer = styled.input`
  max-width: 31rem;
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
    opacity: 1;
  }
`
