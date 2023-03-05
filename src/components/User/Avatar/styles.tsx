import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import styled from "styled-components"

export const Image = styled(AvatarImage)`
  width: 100%;
`

export const Fallback = styled(AvatarFallback)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  place-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor.title};
  text-transform: uppercase;
`

export const Root = styled(Avatar)`
  display: flex;
  place-items: center;
  place-content: center;
  width: 100%;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.backgroundColor.detailsAlt};

  overflow: hidden;
`
