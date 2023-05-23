import React from "react"
import { Avatar } from "@interface/User/Avatar"
import {
  Container,
  Separator,
  Item,
  Points,
  Rank,
  Username,
  Header,
} from "./styles"
import getUserPoints from "src/helpers/getUserPoints"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import { Title } from "@components/Text/Title"
import { Paragraph } from "@components/Text/Paragraph"
import { useQuery } from "react-query"
import { instance } from "src/api/apiCalls"

const RankingCard = () => {
  const { isLoading, data } = useQuery<IUserData[]>("points", {
    queryFn: () => instance("/user").then((res) => res.data),
  })

  if (isLoading)
    return (
      <Container>
        <Title size="md">Ranking</Title>
        <Paragraph size="lg">Acompanhe o ranking global de pontos</Paragraph>
        <Separator />
        <SkeletonLoad>
          <Skeleton width={"100%"} height={"10rem"} borderRadius={"0.4rem"} />
        </SkeletonLoad>
      </Container>
    )
  return (
    <Container>
      <Header>
        <Title size="md">Ranking</Title>
        <Paragraph size="lg">Acompanhe o ranking global de pontos</Paragraph>
        <Separator />
      </Header>

      <Rank>
        {data
          ?.filter((user) => user.posts.length > 0)
          .sort(
            (a, b) =>
              b.posts.reduce((acc, { points }) => acc + points, 0) -
              a.posts.reduce((acc, { points }) => acc + points, 0)
          )
          .slice(0, 10)
          .map((user) => (
            <Link to={`${user.username}`} key={user.id}>
              <Item>
                <Avatar
                  src={user.avatar_url}
                  fallback={"a"}
                  delayMs={0}
                  size={2.5}
                />
                <Username>{user.username}</Username>
                <Points>{getUserPoints(user)}</Points>
              </Item>
            </Link>
          ))}
      </Rank>
    </Container>
  )
}

export default RankingCard
