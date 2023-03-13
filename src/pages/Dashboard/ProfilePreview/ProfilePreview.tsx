import React from "react"
import { Avatar } from "@components/User/Avatar"
import { Hat, Point } from "@assets/index"
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
  Points,
} from "./styles"
import getUserPoints from "src/helpers/getUserPoints"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"

const ProfilePreview = () => {
  const { userData, loading, isLoggedIn } = useUserStore()

  if (loading)
    return (
      <Container>
        <SkeletonLoad>
          <UserData>
            <div className="user-info">
              <Skeleton width={"6em"} count={1} height={"6rem"} circle />
              <Skeleton
                width={"100%"}
                count={1}
                height={30}
                borderRadius={"10px"}
              />
              <Skeleton
                width={"100%"}
                count={1}
                height={30}
                borderRadius={"10px"}
              />
            </div>
          </UserData>
          <Separator />
          <About>
            <Skeleton
              width={"100%"}
              count={3}
              height={15}
              borderRadius={"5px"}
            />
            <Item>
              <Hat />
              <Skeleton
                width={200}
                count={1}
                height={15}
                borderRadius={"5px"}
              />
            </Item>
          </About>
        </SkeletonLoad>
      </Container>
    )
  if (!isLoggedIn || !userData) return null
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
          <Username>@{userData.username}</Username>
          <Points>
            <Point />
            {getUserPoints(userData)}
          </Points>
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
      </About>
    </Container>
  )
}

export default ProfilePreview
