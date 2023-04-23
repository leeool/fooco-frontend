import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  /* min-width: 50rem; */
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    min-width: 0;
  }

  .title {
    margin-bottom: 3rem;
  }
`

export const AskForm = styled.form`
  display: grid;
  gap: 2rem;
`

export const Buttons = styled.div`
  display: flex;
  justify-self: flex-end;
  gap: 1rem;
`

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 10px;
  padding: 1rem;
  resize: none;

  &::placeholder {
    opacity: 0.4;
  }
`
