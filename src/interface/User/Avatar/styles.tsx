import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import styled from "styled-components"

interface Props {
  size?: number
}

export const Image = styled(AvatarImage)<Props>`
  outline: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: 100%;
  height: ${({ size }) => size + "rem"};
  width: ${({ size }) => size + "rem"};
  align-self: start;
  object-fit: cover;

  @media (max-width: 600px) {
    width: ${({ size }) => (size ? size / 1.5 + "rem" : size)};
    height: ${({ size }) => (size ? size / 1.5 + "rem" : size)};
  }
`

export const Fallback = styled(AvatarFallback)<Props>`
  outline: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  display: flex;
  place-content: center;
  align-items: center;
  font-size: ${({ size }) => (size ? size / 2.5 + "rem" : 2)};
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  user-select: none;
  border-radius: 100%;
  height: ${({ size }) => size + "rem"};
  width: ${({ size }) => size + "rem"};

  @media (max-width: 600px) {
    font-size: ${({ size }) => (size ? size / 4 + "rem" : 2)};
    width: ${({ size }) => (size ? size / 1.5 + "rem" : size)};
    height: ${({ size }) => (size ? size / 1.5 + "rem" : size)};
  }
`

export const Root = styled(Avatar)`
  display: flex;
  place-content: center;
  align-items: start;
  align-self: start;
`
