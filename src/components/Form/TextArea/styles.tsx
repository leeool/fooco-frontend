import styled from "styled-components"

export const TextAreaInput = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 10px;
  padding: 1rem;
  resize: vertical;
  outline: 1px solid ${({ theme }) => theme.backgroundColor.details};
  height: 6rem;
  width: 100%;
  margin-top: 0.3rem;
  font-family: "Rubik", sans-serif;
  transition: none;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 4px #f3503a40;

    outline: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  }

  &::placeholder {
    opacity: 0.4;
  }

  &[data-invalid="true"] {
    background-color: #ffae0044;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;

  label {
    font-size: 1.2rem;

    @media (max-width: 700px) {
      font-size: 1rem;
      width: 5rem;
    }
  }
`
