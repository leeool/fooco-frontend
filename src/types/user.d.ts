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
  about: string
  avatar_url: string
  banner_url: string
  liked_posts: string[]
  disliked_posts: string[]
  educational_place: string
  educational_place_url: string
  tags: string[]
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
