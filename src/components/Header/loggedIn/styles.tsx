import styled from "styled-components"

export const ConfirmLogout = styled.div`
  display: grid;
  gap: 2rem;

  & .buttons {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    text-align: center;
    & > * {
      width: 100%;
    }
  }
`
