const getUserPoints = (user: IUserData): number => {
  const allPoints = user.posts.reduce((acc, post) => acc + post.points, 0)

  return allPoints
}

export default getUserPoints
