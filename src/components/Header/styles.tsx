import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
  padding: 0.8rem 0;
  transition: background-color 0.3s ease-in-out;

  .buttons {
    display: flex;
    gap: 2rem;
  }
`
