import { Avatar } from "@components/User/Avatar"
import { Hat, Plus } from "@assets/index"
import React from "react"
import useUserStore from "src/stores/UseUserStore"
import {
  About,
  Banner,
  Container,
  Description,
  UserData,
  Username,
  Separator,
  Item,
  Tags,
} from "./styles"

const ProfilePreview = () => {
  const { userData, loading } = useUserStore()

  if (loading || !userData) return <div>carregando.....</div>
  return (
    <Container>
      <UserData>
        <Banner src="https://placekitten.com/800/500" />
        <div className="user-info">
          <Avatar
            src=""
            fallback={userData.username.slice(0, 2)}
            delayMs={500}
          />
          <Username>@{userData?.username}</Username>
        </div>
      </UserData>
      <Separator />
      <About>
        <Description>
          Aluno de Informática na ETEC Adolpho Berezin. Minha paixão é a
          programação. Curto músicas para relaxar.
        </Description>
        <Item>
          <Hat />
          <span>ETEC Adolpho Berezin</span>
        </Item>
        <Tags>
          <span>Programação</span>
          <span>Música</span>
          <span>Desenvolvedor</span>
          <span>Front-End</span>
          <span>Back-End</span>
          <span>UX/UI</span>
          <span className="add">
            <Plus />
          </span>
        </Tags>
      </About>
    </Container>
  )
}

export default ProfilePreview
