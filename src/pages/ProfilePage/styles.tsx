import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  gap: 5rem;

  @media (max-width: 600px) {
    gap: 2rem;
  }
`

export const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 6rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  align-content: center;
  padding: 1rem 2rem;
  border-radius: 15px;

  @media (max-width: 600px) {
    gap: 1rem;
    padding: 1rem;
    grid-template-columns: 4rem 1fr;
    grid-template-rows: 4rem;
  }
`

export const UserEdit = styled.div`
  width: 3rem;
  cursor: pointer;
  border-radius: 50%;
  transition: none;
  padding: 0.5rem;

  svg {
    color: ${({ theme }) => theme.backgroundColor.secondary};
    stroke-width: 2px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};

    svg {
      color: ${({ theme }) => theme.backgroundColor.primary};
    }
  }

  @media (max-width: 600px) {
    width: 2.5rem;
  }
`

export const About = styled.p`
  grid-column: 1 / -1;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor.paragraph};
`

export const EditContainer = styled.form`
  display: grid;
  gap: 2rem;

  .buttons {
    display: flex;
    justify-self: flex-end;
    gap: 1rem;
  }
`
