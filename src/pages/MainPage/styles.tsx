import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  svg {
    animation: viravira 3s linear infinite alternate;
  }

  @keyframes viravira {
    0% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(7deg);
    }
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
`
