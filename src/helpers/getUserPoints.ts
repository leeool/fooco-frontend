const getUserPoints = (user: IUserData): number => {
  const postPoints = user.posts.reduce((acc, post) => acc + post.points, 0)
  const commentPoints = user.reply.reduce(
    (acc, comment) => acc + comment.points,
    0
  )

  return postPoints + commentPoints
}

export default getUserPoints
