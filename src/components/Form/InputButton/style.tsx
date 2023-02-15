import styled from "styled-components"

export const Container = styled.div`
  .wrapper {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 3rem;

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      text-transform: uppercase;
      min-width: 12rem;
    }
  }

  .icon {
    position: absolute;
    right: 0;
    padding: 0.4rem 0.8rem;
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

    svg,
    path {
      stroke: ${({ theme }) => theme.backgroundColor.details};
    }

    input {
      padding: 0.4rem 0.8rem;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.backgroundColor.tertiary};
      transition: background-color 0.3s ease-in-out;
      color: ${({ theme }) => theme.textColor.subtitle};

      &::placeholder {
        color: ${({ theme }) => theme.textColor.details};
        opacity: 1;
      }
    }
  }
`
