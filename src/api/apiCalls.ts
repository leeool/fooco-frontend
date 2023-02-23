import axios from "axios"

const ENDPOINT = "https://fooco-backend.cyclic.app"

export const instance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
})

// const USER_POST = async (username: string, email: string, password: string) => {
//   return instance.post("/user", {
//     username: username,
//     email: email,
//     password: password,
//   })
// }

const USER_LOGIN = async (
  email: string,
  password: string
): Promise<IUserLogin> => {
  return instance.post("/user/login", {
    email: email,
    password: password,
  })
}

export const USER_LOGIN2 = (email: string, password: string) => {
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

export const GET_USER = (token: string, id: string) => {
  return {
    url: ENDPOINT + `/user/${id}`,
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  }
}

export { USER_LOGIN }
