import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Root,
} from "@radix-ui/react-accordion"
import styled from "styled-components"

export const Item = styled(AccordionItem)`
  max-width: 100%;
  overflow: hidden;
  transition: none;
  margin-bottom: 2rem;
`

export const Content = styled(AccordionContent)`
  overflow: hidden;
  position: relative;
  font-family: "Roboto", sans-serif;
  width: auto;
  margin-top: 0.8rem;
  line-height: 1.5;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor.paragraph};

  &[data-state="open"] {
    animation: slideDown 300ms ease-out;
  }
  &[data-state="closed"] {
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

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const RootContainer = styled(Root)``

export const Header = styled(AccordionHeader)``

export const Trigger = styled(AccordionTrigger)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  transition: none;
  padding: 0.8rem 0rem;
  font-family: "Rubik", sans-serif;
  width: 100%;
  text-align: start;
  color: ${({ theme }) => theme.textColor.subtitle};
  cursor: pointer;
  position: relative;

  svg path {
    stroke: ${({ theme }) => theme.textColor.paragraph};
  }

  svg {
    rotate: -90deg;
    transition: 300ms ease-in-out rotate;
    width: 1.5rem;
  }

  &[data-state="open"] {
    color: ${({ theme }) => theme.textColor.title};

    svg {
      rotate: 0deg;
      transition: 300ms ease-in-out rotate;
      path {
        stroke: ${({ theme }) => theme.textColor.title};
      }
    }
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.textColor.details};
    opacity: 0.3;
    left: 0rem;
    bottom: 0;
  }
`
