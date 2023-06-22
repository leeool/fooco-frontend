import { Avatar } from "@interface/User/Avatar"
import React from "react"
import { useNavigate } from "react-router"
import useUserStore from "src/stores/UseUserStore"
import { AskContainer, AskButton } from "./styles"
import { Link } from "react-router-dom"

const Ask = () => {
  const { userData } = useUserStore()
  const nav = useNavigate()

  if (!userData) return null
  return (
    <AskContainer>
      <Link to={`/floresta/${userData.username}`}>
        <Avatar
          src={userData.avatar_url}
          fallback={userData.username.slice(0, 2)}
          delayMs={0}
          className="avatar"
        />
      </Link>
      <AskButton onClick={() => nav("publicar")}>
        Publicar como {userData.username}...
      </AskButton>
    </AskContainer>
  )
}

export default Ask
