import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  align-items: flex-start;
  border-radius: 20px;
  padding: 1rem 2rem;
  height: 12rem;

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
`
