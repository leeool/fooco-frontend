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
