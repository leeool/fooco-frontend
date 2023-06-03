import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-content {
    max-width: 80rem;
    min-height: 100vh;
    width: 100%;
    margin: 8rem auto;
    flex: 1;
    padding: 0 1rem;

    .load-icon {
      margin: 0 auto;
    }
  }

  @media (max-width: 1000px) {
    .main-content {
      margin-top: 6rem;
    }
  }
`
