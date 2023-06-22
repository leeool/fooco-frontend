import styled from "styled-components"
import * as SelectPrimitive from "@radix-ui/react-select"

export const Trigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 0.2rem;
  width: 100%;
  max-width: calc(100%);
  outline: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  min-width: 20rem;
  user-select: none;
  color: ${({ theme }) => theme.textColor.base};
  height: 2.5rem;

  svg {
    fill: ${({ theme }) => theme.backgroundColor.details};
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px #f3503a40;
    outline-color: ${({ theme }) => theme.backgroundColor.secondary};
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  }
`

export const Value = styled(SelectPrimitive.Value)``

export const Label = styled(SelectPrimitive.Label)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor.details};
  padding: 0.2rem 1rem;
`

export const Content = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 0.2rem;
  width: var(--radix-select-trigger-width);
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35);
  display: grid;
  user-select: none;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};

  &[data-state="open"] {
    animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-0.5rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Item = styled(SelectPrimitive.Item)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor.base};
  cursor: pointer;
  /* background-color: ${({ theme }) =>
    theme.backgroundColor.alternativeState}; */
  transition: none;
  user-select: none;

  &:not(:last-child) {
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  }
`

export const ItemText = styled(SelectPrimitive.ItemText)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Group = styled(SelectPrimitive.Group)`
  display: flex;
  flex-direction: column;
`
