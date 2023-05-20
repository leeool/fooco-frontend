import React from "react"
import { Avatar } from "@interface/User/Avatar"
import { Hat, Point } from "@assets/index"
import useUserStore from "src/stores/UseUserStore"
import { Container, Separator, Item, Points } from "./styles"
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
        <Paragraph size="lg">Acompanhe o ranking global de pontos!</Paragraph>
        <Separator />
        <SkeletonLoad>
          <Skeleton width={"100%"} height={"100%"} />
        </SkeletonLoad>
      </Container>
    )
  return (
    <Container>
      <Title size="md">Ranking</Title>
      <Paragraph size="lg">Acompanhe o ranking global de pontos!</Paragraph>
      <Separator />
      <div style={{ display: "grid", gap: "1rem" }}>
        {data?.map((user) => user.posts.map((post) => post.points))}
      </div>
    </Container>
  )
}

export default RankingCard
