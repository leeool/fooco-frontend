import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-size: 1rem;
    outline: none;
    border: none;
    transition: background-color 300ms ease-in;

    &::placeholder {
      opacity: 1;
    }

    &::selection {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      color: #fff;
    }

  }

  body{
    font-family: "Rubik", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.base};
    margin: 1rem;
  };
  
`
