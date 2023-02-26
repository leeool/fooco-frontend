import styled from "styled-components"
import * as Toast from "@radix-ui/react-toast"

const viewportPadding = "1rem"

export const ViewPort = styled(Toast.Viewport)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding: ${viewportPadding};

  @media (max-width: 600px) {
    padding: 0;
    top: o;
    bottom: initial;
  }
`

export const Root = styled(Toast.Root)`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  display: grid;
  padding: 1rem 1rem;
  border-radius: 10px;
  gap: 0.3rem;
  column-gap: 1rem;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
  max-width: 400px;

  &[data-state="open"] {
    animation: slideIn 500ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: hide 100ms ease-in;
  }

  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe="end"] {
    animation: swipeOut 100ms ease-out;
  }

  @keyframes bounce-in-right {
    0% {
      -webkit-transform: translateX(600px);
      transform: translateX(600px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateX(68px);
      transform: translateX(68px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateX(32px);
      transform: translateX(32px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(calc(100% + ${viewportPadding}));
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes swipeOut {
    from {
      transform: translateX(var(--radix-toast-swipe-end-x));
    }
    to {
      transform: translateX(calc(100% + ${viewportPadding}));
    }
  }
`

export const Title = styled(Toast.Title)`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

export const Description = styled(Toast.Description)`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor.paragraph};

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
