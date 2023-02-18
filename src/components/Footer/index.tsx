import React from "react"
import { FooterContainer } from "./style"
import { ReactComponent as Logo } from "@assets/logo2.svg"

const index = () => {
  return (
    <FooterContainer>
      <Logo />
      <div className="footer-content">
        <div>
          <h4>Contato</h4>
          <p>fooco.contato@hotmail.com</p>
        </div>
        <div>
          <h4>Termos</h4>
          <p>Termos de Uso</p>
        </div>
        <div>
          <h4>Projetos</h4>
          <p>Front-End</p>
          <p>Back-End</p>
          <p>Figma</p>
        </div>
        <div>
          <h4>Sobre Nós</h4>
          <p>Equipe Animalia</p>
        </div>
      </div>
    </FooterContainer>
  )
}

export default index
