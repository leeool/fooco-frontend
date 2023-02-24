import styled from "styled-components"

export const Container = styled.div`
  .item {
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    max-width: 100%;
    border-radius: 20px;
    overflow: hidden;
    transition: none;

    &[data-state="closed"] {
      height: fit-content;
    }

    &[data-state="open"]:hover {
      .trigger button {
        background-color: ${({ theme }) =>
          theme.backgroundColor.alternativeState};
      }
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
    }
  }

  .trigger button {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 400;
    transition: none;
    padding: 0.8rem 1rem;
    font-family: "Rubik", sans-serif;
    width: 100%;
    text-align: start;
    color: ${({ theme }) => theme.textColor.subtitle};
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    cursor: pointer;

    svg path {
      stroke: ${({ theme }) => theme.textColor.details};
    }

    svg {
      rotate: -90deg;
      transition: 300ms ease-in-out rotate;
    }

    &[data-state="closed"]:hover {
      background-color: ${({ theme }) =>
        theme.backgroundColor.alternativeState};
    }
  }

  .trigger button[data-state="open"] {
    color: ${({ theme }) => theme.textColor.title};

    svg path {
      stroke: ${({ theme }) => theme.textColor.title};
    }

    svg {
      rotate: 0deg;
      transition: 300ms ease-in-out rotate;
    }
  }

  .content::before {
    content: "";
    display: inline-block;
    height: 2px;
    width: calc(100% - 2rem);
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColor.details};
    opacity: 0.5;
    left: 1rem;
  }

  .content {
    overflow: hidden;
    position: relative;
    font-family: "Roboto", sans-serif;
  }
  .content[data-state="open"] {
    animation: slideDown 300ms ease-out;
  }
  .content[data-state="closed"] {
    animation: slideUp 300ms ease-out;
  }

  .content-text {
    padding: 1rem;
    line-height: 1.5;
    font-size: 1rem;
    color: ${({ theme }) => theme.textColor.subtitle};
  }

  @media (max-width: 600px) {
    .trigger button {
      font-size: 1.2rem;
    }
    .content-text {
      font-size: 1rem;
    }
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
