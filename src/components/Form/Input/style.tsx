import styled from "styled-components"

export const InputContainer = styled.div`
  max-width: 100%;
  max-height: 100%;

  input:focus ~ span path {
    stroke: ${({ theme }) => theme.backgroundColor.secondary};
  }

  label {
    font-size: 1.25rem;

    @media (max-width: 700px) {
      font-size: 1rem;
      width: 5rem;
    }
  }

  .icon {
    display: flex;
    place-items: center;
    position: absolute;
    right: 0;
    padding: 0.4rem 0.8rem;
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    z-index: 10;
    border-radius: 0 20px 20px 0;
  }

  .input {
    margin-top: 0.3rem;
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: 20px;

    svg,
    path {
      stroke: ${({ theme }) => theme.backgroundColor.details};
      transition: stroke 300ms ease;
    }

    input {
      padding: 0.4rem 0.8rem;
      width: 100%;
      height: 2.5rem;
      border-radius: 20px;

      background-color: ${({ theme }) => theme.backgroundColor.tertiary};
      transition: background-color 0.3s ease-in-out;
      color: ${({ theme }) => theme.textColor.subtitle};

      &::placeholder {
        color: ${({ theme }) => theme.textColor.details};
        opacity: 1;
      }

      &:focus,
      &:hover {
        transition: 0.3s ease;
        background-color: ${({ theme }) =>
          theme.backgroundColor.alternativeState};
        outline: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
        box-shadow: 0 0 0 4px #f3503a40;
      }
    }
  }
`
