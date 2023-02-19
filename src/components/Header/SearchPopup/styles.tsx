import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const DialogTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
  padding: 0.3rem;
  background-color: transparent;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  display: flex;
  padding: 0.5rem;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.textColor.title};
    left: 0;
    bottom: 0;
  }

  &:hover,
  &[data-state="open"] {
    background-color: ${({ theme }) => theme.backgroundColor.primary};
  }

  svg,
  path {
    stroke: ${({ theme }) => theme.backgroundColor.secondary};
    width: 1.8rem;
    height: 1.8rem;
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  position: fixed;
  inset: 0;
  width: calc(100% - 5rem);
  height: fit-content;
  border-radius: 20px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation: contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`
