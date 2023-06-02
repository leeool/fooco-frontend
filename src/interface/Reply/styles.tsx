import styled from "styled-components"

export const Container = styled.div`
  grid-column: 1 / -1;
  display: grid;
  gap: 2rem;
`

export const Reply = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  /* border-bottom: 2px solid ${({ theme }) =>
    theme.backgroundColor.detailsAlt}; */
  gap: 1rem;
  padding: 1rem 0;
  max-width: 100%;

  @media (max-width: 600px) {
    gap: 0.8rem;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    display: inline;
    width: fit-content;
  }

  @media (max-width: 600px) {
    gap: 0.8rem;
  }

  .info-btn {
    justify-self: flex-end;
  }
`

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: "Rubik", sans-serif;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Author = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor.details};

  span {
    &:hover {
      text-decoration: underline;
    }
    font-size: inherit;
    color: ${({ theme }) => theme.textColor.title};
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const Data = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor.details};

  span {
    font-size: inherit;
    color: ${({ theme }) => theme.textColor.title};
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  gap: 0.3rem;
  align-self: start;

  svg {
    width: 2rem;
    height: 2rem;
    stroke-width: 5;
  }

  span {
    color: ${({ theme }) => theme.textColor.title};
  }

  button[data-active="true"] svg {
    color: ${({ theme }) => theme.textColor.title};
  }

  &[data-loading="true"] {
    button svg {
      cursor: wait;
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 1rem;
    }
  }
`

export const Interactions = styled.div`
  display: grid;
  grid-template-columns: 3.5rem;
  grid-template-rows: 3.5rem auto;
  justify-items: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  button[data-saved="true"] svg {
    fill: ${({ theme }) => theme.backgroundColor.secondary};
    color: ${({ theme }) => theme.backgroundColor.secondary};
  }

  button[data-loading="true"] svg {
    cursor: wait;
    opacity: 0.5;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    color: ${({ theme }) => theme.backgroundColor.detailsAlt};
    cursor: pointer;
    stroke-width: 2;

    &:hover {
      color: ${({ theme }) => theme.textColor.title};
    }
  }

  @media (max-width: 600px) {
    svg {
      width: 1.3rem;
    }
  }
`

export const Details = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  /* padding: 0.8rem; */
  border-radius: 10px;
  /* margin-bottom: 3rem; */
  align-self: end;

  button {
    place-self: start;
    height: fit-content;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
