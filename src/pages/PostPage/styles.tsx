import styled from "styled-components"

export const Container = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  margin: 0 auto;
  max-width: 60rem;

  @media (max-width: 600px) {
    gap: 0.8rem;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 2rem;

  a {
    display: inline;
    width: fit-content;
  }

  @media (max-width: 600px) {
    gap: 0.8rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 2rem;
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

  svg {
    width: 2rem !important;
    height: 2rem !important;
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
`

export const Interactions = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  gap: 1.5rem;
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
    stroke-width: 2px;

    &:hover {
      color: ${({ theme }) => theme.textColor.title};
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
  padding: 0.8rem;
  border-radius: 10px;

  button {
    place-self: start;
    height: fit-content;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 100%;
  justify-self: end;
  justify-content: end;

  span {
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
    font-size: 1rem;
    color: ${(props) => props.theme.textColor.title};
    padding: 0.2rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    transition: none;

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      color: ${({ theme }) => theme.backgroundColor.primary};
    }

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    justify-content: start;
  }
`
