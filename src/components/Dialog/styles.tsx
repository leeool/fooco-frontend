import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  place-items: center;
  gap: 0.3rem;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  width: 100%;
  font-size: inherit;
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 100;

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  position: fixed;
  inset: 0;
  z-index: 101;
  /* min-width: 60rem; */
  width: fit-content;
  max-width: 80rem;
  padding: 1rem 2rem;
  height: fit-content;
  max-height: 40rem;
  overflow-y: auto;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation: contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 600px) {
    padding: 0.8rem 1rem;
  }

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

export const Close = styled(Dialog.Close)``
