interface IUserLogin {
  user: {
    username: string
    id: string
    email: string
    created_at: Date
    posts: IUserPosts[]
  }
  token: string
}

interface IUserData {
  username: string
  id: string
  email: string
  created_at: Date
  posts: IUserPosts[]
}

interface IUserPosts {
  id: string
  title: string
  content: string
  created_at: Date
}

interface IError {
  error: string
}
