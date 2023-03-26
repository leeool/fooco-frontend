import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1200px) {
    gap: 2rem;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: flex-start;
`

export const AskContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 15px;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};

  .avatar > * {
    font-size: 1.4rem;
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 600px) {
    .avatar > * {
      font-size: 1rem;
      width: 3rem;
      height: 3rem;
    }
    gap: 0.4rem;
    padding: 0.8rem;
  }
`

export const AskButton = styled.div`
  font-size: 1.2rem;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  border-radius: 25px;
  padding: 0.5rem 1rem;
  align-self: center;
  color: ${({ theme }) => theme.textColor.details};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const FeedContainer = styled.div`
  display: grid;
  gap: 5rem;
`
