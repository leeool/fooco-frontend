import { DialogContent, DialogRoot, DialogTrigger } from "@components/Dialog"
import { Avatar } from "@components/User/Avatar"
import React from "react"
import { useNavigate } from "react-router"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import CreatePost from "src/pages/CreatePost"
import useUserStore from "src/stores/UseUserStore"
import { AskContainer, AskButton } from "./styles"
import { Link } from "react-router-dom"

const Ask = () => {
  const { userData } = useUserStore()
  const match = UseMatchWindowSize(1000)
  const nav = useNavigate()

  if (!userData) return null
  return (
    <AskContainer>
      <Link to={`/app/${userData.username}`}>
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
      {/* {match ? (
      ) : (
        <DialogRoot>
          <DialogTrigger>
            <AskButton>Publicar como {userData.username}...</AskButton>
          </DialogTrigger>
          <DialogContent>
            <CreatePost />
          </DialogContent>
        </DialogRoot>
      )} */}
    </AskContainer>
  )
}

export default Ask
