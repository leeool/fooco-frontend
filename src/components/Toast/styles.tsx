import styled from "styled-components"
import * as Toast from "@radix-ui/react-toast"

const viewportPadding = "1rem"

export const ViewPort = styled(Toast.Viewport)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
  padding: ${viewportPadding};

  @media (max-width: 600px) {
    padding: 0;
  }
`

export const Root = styled(Toast.Root)`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  padding: 1rem 1rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.3rem;
  column-gap: 1rem;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  max-width: 400px;

  svg {
    grid-row: 1 / 4;
    grid-column: 2;
    width: 5rem;
    height: 4rem;
    transform: scaleX(-1);
  }

  &[data-state="open"] {
    animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
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
  grid-column: 1;
`

export const Description = styled(Toast.Description)`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor.paragraph};
  grid-column: 1;
`
