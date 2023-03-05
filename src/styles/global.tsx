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
    transition: background-color 200ms ease-in;
    text-decoration: none;

    &::placeholder {
      opacity: 1;
    }

    &::selection {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      color: #fff;
    }

  }

  a {
    color: ${({ theme }) => theme.textColor.title};
    font-size: inherit;
    width: 100%;  
  }

  body{
    font-family: "Rubik", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.base};
    margin: 1rem;

    @media(max-width: 600px){
      margin: 0.5rem
    }
  };
  

  button {
    all: unset;
    box-sizing: border-box;
  }

  * {
  scrollbar-width: auto;
  scrollbar-color:  ${({ theme }) => theme.backgroundColor.secondary}  ${({
  theme,
}) => theme.backgroundColor.tertiary};
}

*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
  border: 5px solid ${({ theme }) => theme.backgroundColor.secondary};
}

*::-webkit-scrollbar-button {
  display: none;
}
`
