import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: auto 500px auto;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 20px;
  padding: 0.8rem 2rem;
  transition: background-color 0.3s ease-in-out;

  .buttons {
    display: flex;
    gap: 2rem;
  }
`
