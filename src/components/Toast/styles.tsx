import styled from "styled-components"
import * as Toast from "@radix-ui/react-toast"

const viewportPadding = "1rem"

export const ViewPort = styled(Toast.Viewport)`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding: ${viewportPadding};

  @media (max-width: 768px) {
    inset: 0;
    top: 8%;
    left: unset;
    padding: 0 0.5rem;
  }
`

export const Root = styled(Toast.Root)`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 10px;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  width: 25rem;
  overflow: hidden;

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

  @media (max-width: 768px) {
    width: 100%;
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

export const Icon = styled.span`
  display: flex;
  background-color: #00b100;
  height: 100%;
  width: 100%;
  padding: 0.5rem 1rem;
  place-content: center;
  place-items: center;
  color: #fff;

  &[data-type="success"] {
    background-color: #4aa351;
  }

  &[data-type="warning"] {
    background-color: #f5c544;
    color: #212121;
  }

  &[data-type="error"] {
    background-color: #cc494d;
  }
`

export const Content = styled.div`
  padding: 0.5rem;
`
