import React from "react"
import ProfilePreview from "../ProfilePreview"
import { Container } from "./styles"

const Feed = () => {
  return (
    <Container>
      <div>
        <h1>Posts</h1>
      </div>
      <ProfilePreview />
    </Container>
  )
}

export default Feed
