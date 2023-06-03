import styled from "styled-components"

export const Container = styled.div`
  max-width: 31rem;
  width: 100%;
  flex: 1 0 10rem;

  @media (max-width: 850px) {
    max-width: 100%;
    flex: 0;
  }
`

export const SearchContainer = styled.form`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  outline: 1px solid ${({ theme }) => theme.backgroundColor.details};

  &:focus-within,
  &:hover {
    span path {
      stroke: ${({ theme }) => theme.backgroundColor.secondary};
    }
    outline: 1.5px solid ${({ theme }) => theme.backgroundColor.secondary};
    transition: 0.3s ease;
    outline-color: ${({ theme }) => theme.backgroundColor.secondary};
    box-shadow: 0 0 0 4px #f3503a40;

    input {
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
    }
  }

  .icon {
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    height: 100%;
    padding: 0 1.2rem;
    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    stroke: ${({ theme }) => theme.textColor.details};
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: none;
    padding: 0.5rem 0.8rem;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    color: ${({ theme }) => theme.textColor.subtitle};
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0 0 0 0px #f3503a40;

    &::placeholder {
      color: ${({ theme }) => theme.textColor.details};
    }
  }
`
