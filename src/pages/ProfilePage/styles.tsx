import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    gap: 2rem;
  }
`

export const UserInfo = styled.div`
  display: grid;
  gap: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  align-content: center;
  padding: 1rem 2rem;
  border-radius: 15px;

  @media (max-width: 600px) {
    gap: 1rem;
    padding: 1rem;
    grid-template-columns: auto 1fr;
  }
`

export const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor.paragraph};

  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      stroke: ${({ theme }) => theme.textColor.title};
    }
  }
`

export const UserEdit = styled.div`
  cursor: pointer;
  border-radius: 0.6rem;
  transition: none;
  padding: 0.3rem;
  display: flex;
  place-items: center;
  justify-content: center;
  width: min-content;
  justify-self: flex-end;

  button {
    justify-content: center;
    width: min-content;
  }

  background-color: ${({ theme }) => theme.backgroundColor.alternativeState};

  svg {
    color: ${({ theme }) => theme.backgroundColor.secondary};
    stroke-width: 2px;
    width: 2rem;
    height: 2rem;
    justify-self: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};

    svg {
      color: ${({ theme }) => theme.backgroundColor.primary};
    }
  }

  @media (max-width: 600px) {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export const About = styled.p`
  grid-column: 1 / -1;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textColor.paragraph};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`

export const EditContainer = styled.form`
  display: grid;
  gap: 2rem;
  max-width: 40rem;
  width: 100cqw;
  padding: 0 0.5rem;

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

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  justify-self: start;
  align-items: center;
  gap: 1rem;
  justify-items: start;
  width: 100%;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`
