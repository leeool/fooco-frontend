import styled from "styled-components"

export const Container = styled.div`
  .wrapper {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-radius: 20px;

    &:focus-within,
    &:hover {
      transition: 0.3s ease;
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
      outline: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
      box-shadow: 0 0 0 4px #f3503a40;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      text-transform: uppercase;
      min-width: fit-content;
    }
  }

  .icon {
    position: absolute;
    right: 0;
    padding: 0.4rem 0.8rem;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .inputContainer {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;

    path {
      transition: stroke 300ms ease;
      stroke: ${({ theme }) => theme.backgroundColor.details};
    }

    input:focus ~ span path {
      stroke: ${({ theme }) => theme.backgroundColor.secondary};
    }

    input {
      border-radius: 20px 0 0 20px;
      padding: 0.4rem 0.8rem;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.backgroundColor.tertiary};
      color: ${({ theme }) => theme.textColor.subtitle};

      &::placeholder {
        color: ${({ theme }) => theme.textColor.details};
        opacity: 1;
      }
    }
  }
`
