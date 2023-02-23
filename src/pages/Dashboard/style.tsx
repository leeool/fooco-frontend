import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: #fff;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  gap: 1rem;
  width: 30rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 20px;

  h1 {
    font-size: 2rem;
  }
`
