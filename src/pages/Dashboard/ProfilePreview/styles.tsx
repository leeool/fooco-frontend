import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 15px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
`

export const Username = styled.div`
  font-size: 1.4rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: #fff;
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  &::selection {
    background-color: #fff;
    color: ${({ theme }) => theme.textColor.title};
  }
`

export const UserData = styled.div`
  display: grid;

  .user-info {
    display: grid;
    grid-template-columns: 6rem 1fr;
    grid-template-rows: 6rem;
    grid-area: 1 / -1;
    translate: 0 3rem;
    gap: 0.8rem;
    align-items: end;
    padding: 0 1rem;
  }
`

export const Banner = styled.img`
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  width: 100%;
  height: 8rem;
  grid-area: 1 / -1;
`

export const Separator = styled.span`
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
  margin-top: 3rem;
  margin-bottom: 1rem;
`

export const About = styled.div`
  padding: 1rem;
  display: grid;
  gap: 1rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.textColor.paragraph};
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.backgroundColor.secondary};

  svg,
  path {
    stroke: currentColor;
    stroke-width: 2.5;
    width: 2rem;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    color: #fff;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: none;
    border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};

    &:hover {
      background-color: #fff;
      color: ${({ theme }) => theme.backgroundColor.secondary};
      border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
    }
  }

  .add {
    background-color: #fff;
    color: ${({ theme }) => theme.backgroundColor.secondary};
    border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};

    svg {
      display: flex;
      place-items: center;
      stroke: ${({ theme }) => theme.backgroundColor.secondary};
      stroke-width: 2;
      width: 1.2rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      svg {
        stroke: #fff;
      }
    }
  }
`
