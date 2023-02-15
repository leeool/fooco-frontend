import styled from "styled-components"

export const SearchContainer = styled.input`
  width: 31rem;
  height: 2.5rem;
  border: none;
  outline: none;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  color: ${({ theme }) => theme.textColor.details};
  transition: background-color 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.textColor.details};
    opacity: 1;
  }
`
