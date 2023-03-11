import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 0;

  border-bottom: 2px solid
    ${({ theme }) => theme.backgroundColor.alternativeState};
`

export const Author = styled.span`
  color: ${(props) => props.theme.textColor.title};
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const PostTitle = styled.h4`
  color: ${(props) => props.theme.textColor.subtitle};
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`

export const PostInfo = styled.div`
  display: grid;
  gap: 0.3rem;
`

export const Content = styled.p`
  color: ${(props) => props.theme.textColor.paragraph};
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 100%;

  span {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    font-size: 0.8rem;
    color: #fff;
    padding: 0rem 0.3rem;
    border-radius: 5px;
    cursor: pointer;
    transition: none;
    border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.primary};
      color: ${({ theme }) => theme.backgroundColor.secondary};
      border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
    }
  }

  /* .add {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
    display: flex;
    place-items: center;
    place-content: center;
    padding: 0;

    svg {
      display: flex;
      place-items: center;
      stroke: #fff;
      stroke-width: 2;
      width: 1.2rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.primary};
      svg {
        stroke: ${({ theme }) => theme.backgroundColor.secondary};
      }
    }
  } */
`
