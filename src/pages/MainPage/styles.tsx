import styled from "styled-components"
import { variant } from "styled-system"
import plusIcon from "@assets/plus-icon.svg"

interface IPropsParagraph {
  size?: "title" | "subtitle"
}

export const Container = styled.section`
  display: grid;
  align-items: center;
  row-gap: 4rem;
  justify-content: space-between;

  @keyframes viravira {
    0% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(7deg);
    }
  }
`

export const InicioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  p {
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }

  .icone svg {
    animation: viravira 10s linear infinite alternate;
  }

  .icone {
    display: flex;
    justify-content: center;
  }
`

export const Paragraph = styled.p<IPropsParagraph>`
  color: ${({ theme }) => theme.textColor.paragraph};
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  ${variant({
    prop: "size",
    variants: {
      title: {
        fontSize: "1.25rem",
      },
      subtitle: {
        fontSize: "1rem",
      },
    },
  })}
`

export const BarContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  color: #fff;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: 20px;
  padding: 2rem 0;
  justify-content: space-around;

  .list {
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
      display: grid;
      gap: 0.5rem;
      justify-items: center;
      max-width: 8.125rem;
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
  }

  .slogan {
    max-width: 30rem;
    text-align: center;
    line-height: 1.5;
  }

  .slogan span {
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.title};
    padding: 0 0.5rem;
    border-radius: 10px;
  }
`

export const ComecarContainer = styled.div`
  .list {
    position: relative;
    margin-top: 4rem;
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
    left: 40%;
    top: 0;
  }

  li {
    font-family: "Roboto", sans-serif;
    position: relative;
  }

  li::before {
    content: "";
    background: url(${plusIcon}) no-repeat center;
    background-size: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block;
    position: absolute;
    left: -1.8rem;
    top: 0;
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor.paragraph};
  }
`

export const DuvidaContainer = styled.div`
  .items {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
