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
  created_at: string
  about: string
  avatar_url: string
  banner_url: string
  educational_place: string
  educational_place_url: string
  posts: IUserPosts[]
  saved_posts: string[]
}

interface IUserPosts {
  id: string
  title: string
  content: string
  created_at: string
  user: IUserData
  points: number
  slug: string
  tags: string[]
  users_liked: string[]
  users_disliked: string[]
  reply: IReply[]
}

interface IError {
  error: string
}

interface IReply {
  id: string
  post_id: string
  content: string
  created_at: string
  user: IUserData
  points: number
  users_liked: string[]
  users_disliked: string[]
}
