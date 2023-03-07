import styled from "styled-components"

import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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

  &[data-state="open"] {
    animation: slideDownAndFade 0.3s ease;
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const RadioItem = styled(DropdownMenuRadioItem)`
  & > * {
    font-size: 1.3rem;
    display: flex;
    font-weight: 500;
    place-items: center;
    padding: 0.2rem 2rem;
    transition: none;
    cursor: pointer;
    gap: 0.6rem;
    color: ${({ theme }) => theme.backgroundColor.secondary};

    svg {
      display: flex;
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    * {
      color: #fff;
    }
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};

    * {
      color: #fff;
    }
  }
  border-radius: 5px;
  transition: none;
  overflow: hidden;
`

export const Item = styled(DropdownMenuItem)`
  font-size: 1.3rem;
  display: flex;
  font-weight: 500;
  place-items: center;
  padding: 0.2rem 1rem;
  transition: none;
  cursor: pointer;
  gap: 0.6rem;
  color: ${({ theme }) => theme.backgroundColor.secondary};
  font-family: "Roboto", sans-serif;
  width: 100%;

  svg {
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
  }

  button {
    width: 100%;
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.backgroundColor.alternativeState};
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    color: #fff;
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.backgroundColor.secondary};

    * {
      color: #fff;
    }
  }
  border-radius: 5px;
  transition: none;
  overflow: hidden;
`

export const Arrow = styled(DropdownMenuArrow)`
  fill: ${({ theme }) => theme.backgroundColor.secondary};
`

export const RadioGroup = styled(DropdownMenuRadioGroup)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const Group = styled(DropdownMenuGroup)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
