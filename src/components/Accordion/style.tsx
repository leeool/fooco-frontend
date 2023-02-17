import styled from "styled-components"

export const Container = styled.div`
  .item {
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    max-width: 100%;
    border-radius: 20px;
    overflow: hidden;
  }

  .trigger button {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    transition: none;
    padding: 1rem;
    width: 100%;
    text-align: start;
    cursor: pointer;
  }

  .trigger button[data-state="open"] {
    color: ${({ theme }) => theme.textColor.title};
  }

  .content {
    padding: 1rem;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
  }
  .content[data-state="open"] {
    animation: slideDown 300ms ease-out;
  }
  .content[data-state="closed"] {
    animation: slideUp 300ms ease-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`
