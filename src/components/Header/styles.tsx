import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
  padding: 0.8rem 0;

  .buttons {
    display: flex;
    gap: 2rem;
  }
`
