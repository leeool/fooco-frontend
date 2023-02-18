import styled from "styled-components"

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;

  .icon {
    position: absolute;
    right: 0;
    padding: 0.4rem 0.8rem;
  }

  .input {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;

    svg,
    path {
      stroke: ${({ theme }) => theme.backgroundColor.details};
    }

    input {
      padding: 0.4rem 0.8rem;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.backgroundColor.primary};
      transition: background-color 0.3s ease-in-out;
      color: ${({ theme }) => theme.textColor.subtitle};

      &::placeholder {
        color: ${({ theme }) => theme.textColor.details};
        opacity: 1;
      }
    }
  }
`
