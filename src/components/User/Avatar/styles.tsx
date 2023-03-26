import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import styled from "styled-components"

export const Image = styled(AvatarImage)`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
`

export const Fallback = styled(AvatarFallback)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  display: flex;
  place-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  user-select: none;
  border-radius: 50%;

  /* padding: 0.8rem; */
`

export const Root = styled(Avatar)`
  display: flex;
  place-items: center;
  place-content: center;
  place-self: center;
  width: 100%;
  height: 100%;

  overflow: hidden;
`
