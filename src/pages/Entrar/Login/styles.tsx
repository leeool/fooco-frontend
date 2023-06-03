import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  gap: 4rem;

  .form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  & p {
    color: ${({ theme }) => theme.textColor.details};
    justify-self: center;
    align-self: end;

    span {
      color: ${({ theme }) => theme.textColor.title};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
