import React from "react"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import ProfilePreview from "../ProfilePreview"
import { Container } from "./styles"

const Feed = () => {
  const match = UseMatchWindowSize(1000)

  return (
    <Container>
      <div>
        <h1>Posts</h1>
      </div>
      {match ? null : <ProfilePreview />}
    </Container>
  )
}

export default Feed
