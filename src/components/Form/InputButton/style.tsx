import styled from "styled-components"

export const Container = styled.div`
  .wrapper {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    border-radius: 20px;

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
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;

    path {
      transition: stroke 300ms ease;
      stroke: ${({ theme }) => theme.backgroundColor.details};
    }

    input:focus ~ span path {
      stroke: ${({ theme }) => theme.backgroundColor.secondary};
    }

    input {
      padding: 0.4rem 0.8rem;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.backgroundColor.tertiary};
      color: ${({ theme }) => theme.textColor.subtitle};

      &::placeholder {
        color: ${({ theme }) => theme.textColor.details};
        opacity: 1;
      }

      &:focus {
        transition: none;
        background-color: ${({ theme }) =>
          theme.backgroundColor.alternativeState};
      }
    }
  }
`
