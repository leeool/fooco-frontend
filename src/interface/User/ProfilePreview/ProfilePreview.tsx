import React from "react"
import { Avatar } from "@interface/User/Avatar"
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
import { Link } from "react-router-dom"

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
        <Link to={`/app/${userData.username}`} className="user-info">
          <Avatar
            src={userData.avatar_url}
            fallback={userData.username.slice(0, 2)}
            delayMs={500}
            size={5}
          />
          <Username title={userData.username}>@{userData.username}</Username>

          <Points>
            <Point />
            {getUserPoints(userData)}
          </Points>
        </Link>
      </UserData>
      <Separator />
      <About>
        {userData.about.length > 0 ? (
          <Description>{userData.about}</Description>
        ) : null}

        <Item>
          {userData.educational_place && (
            <>
              <Hat />
              <span>{userData.educational_place}</span>
            </>
          )}
        </Item>
      </About>
    </Container>
  )
}

export default ProfilePreview
