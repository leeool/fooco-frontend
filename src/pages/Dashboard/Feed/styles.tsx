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
`

export const PostContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: flex-start;
`
