import React from "react"
import { ReactComponent as Logo } from "@assets/logo.svg"
import { ReactComponent as Home } from "@assets/icons/home.svg"
import { ReactComponent as Plus } from "@assets/icons/plus.svg"
import { ReactComponent as User } from "@assets/icons/user.svg"
import { Link } from "react-router-dom"
import Search from "../Search"

const index = () => {
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <div className="buttons-logged">
        <Link to={"/"}>
          <button>
            <Home />
            Início
          </button>
        </Link>
        <button>
          <Plus />
          Criar
        </button>
        <button>
          <User />
          Usuário
        </button>
      </div>
    </>
  )
}

export default index
