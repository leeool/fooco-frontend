import styled from "styled-components"

export const Container = styled.fieldset`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;

  &[data-invalid="true"] {
    * {
      color: #ffae00;
    }
  }
`
