import styled from "styled-components"
import * as SelectPrimitive from "@radix-ui/react-select"

export const Trigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 1rem;
  width: 100%;
  max-width: calc(100%);
  border: 1px solid ${({ theme }) => theme.backgroundColor.details};
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};

  svg {
    rotate: 180deg;
    width: 1.2rem;
    height: 1.2rem;
    fill: ${({ theme }) => theme.backgroundColor.details};
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px #f3503a40;
    border: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  }
`

export const Value = styled(SelectPrimitive.Value)``

export const Content = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 0.2rem;
  width: var(--radix-select-trigger-width);
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35);
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
`

export const Item = styled(SelectPrimitive.Item)`
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor.title};
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  border-radius: 0.2rem;
  transition: none;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    color: #fff;
  }
`
