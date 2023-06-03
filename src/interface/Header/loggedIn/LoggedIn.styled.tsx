import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a,
  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${({ theme }) => theme.textColor.title};
    font-weight: 500;
    font-size: 1.2rem;
  }
`

export const ConfirmLogout = styled.div`
  display: grid;
  gap: 2rem;
  min-width: 20rem;

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
