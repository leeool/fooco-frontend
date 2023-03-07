import axios from "axios"

const ENDPOINT = "https://fooco-backend.onrender.com"

export const instance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

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

export const GET_USER = (id: string) => {
  return {
    url: ENDPOINT + `/user/${id}`,
    options: {
      method: "GET",
    },
  }
}

export const USER_PUT = (
  userData: Partial<IUserData & { password: string }>,
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
