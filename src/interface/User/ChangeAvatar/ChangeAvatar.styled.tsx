import { ButtonSecondary } from "@components/Form"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  /* align-items: end; */
  height: min-content;
  position: relative;
  align-content: center;
  width: fit-content;

  /* 
  ${ButtonSecondary} {
    position: absolute;
    justify-self: center;
    width: 50%;
    bottom: -0.5rem;
  } */

  &:hover {
    p {
      opacity: 1;
    }

    span {
      filter: brightness(0.7);
    }
  }

  span {
    display: block;
    position: relative;
    grid-area: 1 / -1;
  }

  p {
    grid-area: 1 / -1;
    place-self: center;
    opacity: 0;
    z-index: 10;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
  }

  p:hover {
    opacity: 1;
  }

  input.img {
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: #f00a;
    z-index: 11;
    border-radius: 100%;
    cursor: pointer;
    /* visibility: hidden; */
    opacity: 0;
  }

  input.btn {
    position: absolute;
    background-color: #ff0a;
  }
`
