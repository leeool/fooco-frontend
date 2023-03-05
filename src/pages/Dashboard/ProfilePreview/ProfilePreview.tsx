import React from "react"
import useUserStore from "src/stores/UseUserStore"
import {
  About,
  Avatar,
  Banner,
  Container,
  Description,
  UserData,
  Username,
  Separator,
} from "./styles"

const ProfilePreview = () => {
  const { userData, loading } = useUserStore()

  if (loading) return <div>carregando.....</div>
  return (
    <Container>
      <UserData>
        <Banner src="https://placekitten.com/800/500" />
        <div className="user-info">
          <Avatar src="https://placekitten.com/300/300" />
          <Username>@{userData?.username}</Username>
        </div>
      </UserData>
      <Separator />
      <About>
        <Description>
          Aluno de Informática na ETEC Adolpho Berezin. Minha paixão é a
          programação. Curto músicas para relaxar.
        </Description>
      </About>
    </Container>
  )
}

export default ProfilePreview
