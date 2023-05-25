import styled from "styled-components"

export const Container = styled.form`
  display: grid;
  gap: 1rem;
  width: 30rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`
