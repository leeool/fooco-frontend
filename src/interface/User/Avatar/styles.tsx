import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import styled from "styled-components"

interface Props {
  size?: number
}

export const Image = styled(AvatarImage)<Props>`
  box-shadow: 0 0 0px 2px ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: 100%;
  height: ${({ size }) => size + "rem"};
  width: ${({ size }) => size + "rem"};

  @media (max-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`

export const Fallback = styled(AvatarFallback)<Props>`
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
    font-size: 1.4rem;
    width: 3rem;
    height: 3rem;
  }
`

export const Root = styled(Avatar)`
  display: flex;
  place-content: center;
  align-items: center;
`
