import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Rubik", sans-serif;
    outline: none;
    border: none;
    transition: background-color .3s ease-in-out;

  }

  body{
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: #212121;
    margin: 1rem;
  };
  
`
