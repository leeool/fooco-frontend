import { AccordionHeader, AccordionItem, Root } from "@radix-ui/react-accordion"
import styled from "styled-components"

export const Item = styled(AccordionItem)`
  max-width: 100%;
  border-radius: 20px;
  overflow: hidden;
  transition: none;
  height: fit-content;

  &[data-state="closed"] {
    height: fit-content;
  }

  &:hover {
    filter: brightness(1.2);
  }
`

export const RootContainer = styled(Root)``

export const Header = styled(AccordionHeader)``

export const Container = styled.div`
  .trigger button {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    transition: none;
    padding: 0.8rem 1rem;
    font-family: "Rubik", sans-serif;
    width: 100%;
    text-align: start;
    color: #fff;
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    cursor: pointer;

    svg path {
      stroke: #fff;
    }

    svg {
      rotate: -90deg;
      transition: 300ms ease-in-out rotate;
      width: 1.5rem;
    }
  }

  .trigger button[data-state="open"] {
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
    background-color: #fff;
    opacity: 0.7;
    left: 1rem;
  }

  .content {
    overflow: hidden;
    position: relative;
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    width: auto;
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
    font-size: 1.2rem;
    color: #fff;
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
