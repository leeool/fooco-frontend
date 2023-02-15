import styled from "styled-components"

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

  .icone svg {
    animation: viravira 3s linear infinite alternate;
  }

  .icone {
    display: flex;
    justify-content: center;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor.paragraph};
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1rem;
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

export const ComecarContainer = styled.div``
