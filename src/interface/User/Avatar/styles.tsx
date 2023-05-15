import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import styled from "styled-components"

export const Image = styled(AvatarImage)`
  border: 2px solid ${({ theme }) => theme.backgroundColor.secondary};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 3rem;
  min-width: 3rem;
`

export const Fallback = styled(AvatarFallback)`
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
  width: 5rem;
  height: 5rem;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    width: 3rem;
    height: 3rem;
  }
`

export const Root = styled(Avatar)`
  display: flex;
  place-items: center;
  place-content: center;
  place-self: center;
`
