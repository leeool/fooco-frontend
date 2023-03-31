import React from "react"
import { FooterContainer } from "./style"
import { ReactComponent as Logo } from "@assets/logo2.svg"
import { Link } from "react-router-dom"

const index = () => {
  return (
    <FooterContainer>
      <Link to={"/"}>
        <Logo />
      </Link>

      <div className="footer-content">
        <div>
          <h4>Contato</h4>
          <a
            href="mailto:fooco.contato@hotmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            fooco.contato@hotmail.com
          </a>
        </div>
        <div>
          <h4>Ajuda</h4>
          <Link to={"/termos-de-uso"}>
            <p>Termos de Uso</p>
          </Link>
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
