import axios from "axios"

const ENDPOINT = import.meta.env.VITE_ENDPOINT

export const instance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

export const GET_USERS = () => {
  return {
    url: ENDPOINT + "/user",
    options: {
      method: "GET",
    },
  }
}

export const USER_LOGIN = (email: string, password: string) => {
  return {
    url: ENDPOINT + "/user/login",
    options: {
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    },
  }
}

export const USER_POST = (
  username: string,
  email: string,
  password: string
) => {
  return {
    url: ENDPOINT + "/user",
    options: {
      method: "POST",
      data: {
        username: username,
        email: email,
        password: password,
      },
    },
  }
}

export const GET_USER = (username: string) => {
  return {
    url: ENDPOINT + `/user/${username}`,
    options: {
      method: "GET",
    },
  }
}

export const USER_PUT = (
  userData: Partial<IUserData & { password: string; savedPostsId: string[] }>,
  id: string
) => {
  return {
    url: ENDPOINT + "/user/" + id,
    options: {
      method: "PUT",
      data: {
        ...userData,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const VALIDATE_TOKEN = (token: string) => {
  return {
    url: ENDPOINT + "/token",
    options: {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  }
}

export const GET_POSTS = () => {
  return {
    url: ENDPOINT + "/post",
    options: {
      method: "GET",
    },
  }
}

export const GET_POST = (id: string) => {
  return {
    url: ENDPOINT + `/post/${id}`,
    options: {
      method: "GET",
    },
  }
}

export const FEEDBACK_POST = (
  type: string,
  userID: string,
  postID: string,
  target: "post" | "reply"
) => {
  return {
    url: ENDPOINT + `/${target}/feedback/${postID}?type=${type}`,
    data: {
      user_id: userID,
    },
    options: {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const POST_POST = ({
  title,
  content,
  user_id,
  tags,
  group_id,
}: Partial<IUserPosts> & { user_id: string; group_id: string }) => {
  return {
    url: ENDPOINT + "/post",
    options: {
      method: "POST",
      data: {
        title,
        content,
        user_id,
        tags,
        group_id,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const DELETE_POST = (postID: string, userID: string) => {
  return {
    url: ENDPOINT + `/post/${postID}`,
    options: {
      method: "DELETE",
      data: {
        user_id: userID,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const PUT_POST = (
  post: Partial<IUserPosts>,
  postID: string,
  userID: string
) => {
  return {
    url: ENDPOINT + `/post/${postID}`,
    options: {
      method: "PUT",
      data: {
        ...post,
        user_id: userID,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const POST_COMMENT = (
  content: string,
  user_id: string,
  post_id: string
) => {
  return {
    url: ENDPOINT + `/reply/${post_id}`,
    options: {
      method: "POST",
      data: {
        content,
        user_id,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}

export const POST_REPLY = (
  content: string,
  user_id: string,
  parent_id: string,
  post_id: string
) => {
  return {
    url: ENDPOINT + `/reply/${post_id}/${parent_id}`,
    data: {
      content,
      user_id,
    },
    options: {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  }
}
