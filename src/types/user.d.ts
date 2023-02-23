interface IUserLogin {
  user: {
    username: string
    id: string
    email: string
  }
  token: string
}

interface IUserData {
  username: string
  id: string
  email: string
  created_at: string
  posts: IUserPosts[]
}

interface IUserPosts {
  id: string
  title: string
  content: string
  created_at: string
}
