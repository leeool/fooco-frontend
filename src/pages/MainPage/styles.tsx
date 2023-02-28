import styled from "styled-components"
import plusIcon from "@assets/icons/plus-icon.svg"

export const Container = styled.main`
  display: grid;
  align-items: center;
  row-gap: 6rem;
  justify-content: space-between;

  @keyframes sobeedesce {
    from {
      transform: translateY(1rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`

export const InicioContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  p {
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }

  .icone svg {
    width: 100%;
    height: 100%;
  }

  .icone {
    display: flex;
    justify-content: center;
  }

  .fazerParte {
    align-self: center;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;

    .icone {
      display: none;
    }
  }
`

export const BarContainer = styled.section`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: 20px;
  padding: 2rem 1rem;
  justify-content: space-around;
  box-shadow: 100px 0px 0px 0px
      ${({ theme }) => theme.backgroundColor.secondary},
    -100px 0px 0px 0px ${({ theme }) => theme.backgroundColor.secondary};

  @media (max-width: 1100px) {
    flex-direction: column;
    row-gap: 3rem;
    box-shadow: none;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-around;
    max-width: 31rem;

    li {
      flex: 1;
      display: grid;
      gap: 0.5rem;
      justify-items: center;
      max-width: 8rem;
      text-align: center;
    }

    svg {
      height: 3rem;
      width: 3rem;
    }
  }

  .slogan h3,
  span {
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  .slogan {
    max-width: 30rem;
    text-align: center;
    line-height: 1.5;
  }

  .slogan span {
    background-color: #fff;
    color: ${({ theme }) => theme.textColor.title};
    padding: 0 0.5rem;
    border-radius: 10px;
  }

  *::selection {
    background-color: #efefef;
    color: ${({ theme }) => theme.textColor.title};
  }
`

export const ComecarContainer = styled.section`
  .list {
    position: relative;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    justify-content: center;
  }

  .list::before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    position: absolute;
    left: 50%;
    top: 0;
  }

  .list li {
    font-family: "Rubik", sans-serif;
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.5rem;
    margin-bottom: 1rem;

    h3 {
      font-weight: 400;
      font-size: 1.25rem;
      grid-column: 2 / 3;
      line-height: 1.5;
      color: ${({ theme }) => theme.textColor.subtitle};
    }

    p {
      font-size: 1rem;
      grid-column: 2 / 3;
      color: ${({ theme }) => theme.textColor.details};
    }
  }

  .list li::before {
    content: "";
    background: url(${plusIcon}) no-repeat center;
    background-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block;
    align-self: center;
  }

  .list-1 {
    justify-self: start;
  }

  .list-2 {
    justify-self: end;
  }

  @media (max-width: 600px) {
    .list {
      grid-template-columns: 1fr;
      justify-content: start;
      gap: 0;
    }

    .list::before {
      display: none;
    }

    .list-2 {
      justify-self: start;
    }
  }
`

export const DuvidaContainer = styled.section`
  .duvidas {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 1rem;
  }
  @media (max-width: 1000px) {
    .duvidas {
      grid-template-columns: 1fr;
    }
  }
`

export const DecidiuContainer = styled.section`
  display: grid;
  justify-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  gap: 1.5rem;

  & .input {
    width: 60%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`
