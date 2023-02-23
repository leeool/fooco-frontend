import styled from "styled-components"

import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"

export const Trigger = styled(DropdownMenuTrigger)`
  cursor: pointer;
  display: flex;
  place-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.backgroundColor.secondary};

    &:hover {
      filter: brightness(1.5);
    }
  }

  &[data-state="open"] {
    svg {
      filter: brightness(1.5);
    }
  }
`

export const Content = styled(DropdownMenuContent)`
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 10px;
  overflow: hidden;
  padding: 0.5rem;
  display: grid;
  gap: 0.2rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
`

export const Item = styled(DropdownMenuItem)`
  & > * {
    font-size: 1.3rem;
    display: flex;
    border-radius: 5px;
    color: ${({ theme }) => theme.textColor.title};
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    font-weight: 500;
    place-items: center;
    padding: 0.2rem 2rem;
    transition: none;
    cursor: pointer;
    gap: 0.6rem;

    svg {
      display: flex;
      width: 1.8rem;
      height: 1.8rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.backgroundColor.secondary};
      transition: none;
      color: #fff;
    }
  }
`

export const Arrow = styled(DropdownMenuArrow)`
  fill: ${({ theme }) => theme.backgroundColor.secondary};
`
