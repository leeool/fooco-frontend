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
  gap: 1rem;
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
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textColor.paragraph};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const EditContainer = styled.form`
  display: grid;
  gap: 2rem;

  &[data-loading="true"]::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  .buttons {
    display: flex;
    justify-self: flex-end;
    gap: 1rem;
  }
`

export const FixedTitle = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  width: 100%;
`

export const LoadingEdit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: 100;
`
