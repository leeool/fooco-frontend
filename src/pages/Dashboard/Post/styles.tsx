import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem 0;
`

export const Author = styled.span`
  color: ${(props) => props.theme.textColor.paragraph};
  font-size: 1rem;

  span {
    color: ${(props) => props.theme.textColor.title};

    &:hover {
      text-decoration: underline;
    }
  }

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

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const PostInfo = styled.div`
  display: grid;
  gap: 0.3rem;
`

export const Content = styled.p`
  color: ${(props) => props.theme.textColor.paragraph};
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 100%;

  span {
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
    font-size: 0.85rem;
    color: ${(props) => props.theme.textColor.title};
    padding: 0.1rem 0.4rem;
    border-radius: 5px;
    cursor: pointer;
    transition: none;

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      color: ${({ theme }) => theme.backgroundColor.primary};
    }

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
`

export const DateContainer = styled.span`
  color: ${(props) => props.theme.textColor.paragraph};

  span {
    color: ${(props) => props.theme.textColor.title};
  }
`

export const Interactions = styled.div`
  border-top: 2px solid ${({ theme }) => theme.backgroundColor.alternativeState};
  display: flex;
  gap: 0.6rem;
  padding: 1rem 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 2px;

    &[data-saved="true"] {
      fill: ${({ theme }) => theme.backgroundColor.secondary};
    }
  }

  button[data-loading="true"] {
    cursor: wait;
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  button {
    padding: 0.4rem 0;
  }
`

export const Points = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.textColor.title};
  font-weight: 500;
`
