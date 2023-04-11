import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main-content {
    max-width: 89rem;
    min-height: 100vh;
    width: 100%;
    margin: 14rem auto;
    flex: 1;

    .load-icon {
      margin: 0 auto;
    }
  }

  @media (max-width: 600px) {
    .main-content {
      margin-top: 4rem;
    }
  }
`
