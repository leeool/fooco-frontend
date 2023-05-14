import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  align-items: flex-start;
  padding: 1rem 2rem;
  min-height: 12rem;
  gap: 2rem;

  a {
    color: inherit;
    width: fit-content;
  }

  *::selection {
    background-color: #efefef;
    color: ${({ theme }) => theme.textColor.title};
  }

  .footer-content {
    color: #fff;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    line-height: 1.5;

    h4 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1100px) {
    .footer-content {
      display: flex;
      max-width: 40rem;
      flex-wrap: wrap;
      justify-content: start;
      justify-self: end;
      gap: 2rem;

      & > * {
        flex: 1;
      }
    }
    align-items: center;

    svg {
      max-width: 100%;
      min-width: 8rem;
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;

    .footer-content {
      h4 {
        font-size: 1rem;
      }

      p,
      a {
        font-size: 0.8rem;
      }
    }

    svg {
      width: 10rem;
    }
  }
`
