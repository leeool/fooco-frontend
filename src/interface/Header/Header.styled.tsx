import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 14;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  padding: 0.5rem 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`
