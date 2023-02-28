import {
  GET_USER,
  instance,
  USER_LOGIN,
  VALIDATE_TOKEN,
} from "src/api/apiCalls"
import { create } from "zustand"

interface IUser {
  isLoggedIn: boolean
  setIsUserLoggedIn: (isLoggedIn: boolean) => void
  loginUser: (email: string, password: string) => Promise<void>
  getUserWToken: () => Promise<void>
  userData: IUserData | null
  loading: boolean
  logoutUser: () => void
}

const useUserStore = create<IUser>((set, get) => ({
  isLoggedIn: false,
  setIsUserLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  loginUser: async (email: string, password: string) => {
    try {
      const { url, options } = USER_LOGIN(email, password)
      const response = await instance<IUserLogin | { error: string }>(
        url,
        options
      )
      if (response.status >= 300 && "error" in response.data) {
        throw new Error(response.data.error)
      } else if (!("error" in response.data) && response.status < 400) {
        localStorage.setItem("token", response.data.token)
      }
    } catch (error) {
      const logoutUser = get().logoutUser
      logoutUser()
      if (error instanceof Error) {
        console.error(error)
      }
    }
  },
  getUserWToken: async () => {
    const token = localStorage.getItem("token")

    if (!token) return

    try {
      set({ loading: true })
      const { url: urlValidate, options: optValidate } = VALIDATE_TOKEN(token)
      const validate = await instance(urlValidate, optValidate)
      if (!validate) return

      const { url, options } = GET_USER(validate.data.id)

      const response = await instance<IUserLogin | { error: string }>(
        url,
        options
      )
      if (response.status >= 400 && "error" in response.data)
        throw new Error(response.data.error)
      else if (!("error" in response.data) && response.status < 400) {
        set({ isLoggedIn: true })
      }
    } catch (error) {
      console.error(error)
      const logoutUser = get().logoutUser
      logoutUser()
    } finally {
      set({ loading: false })
    }
  },
  userData: null,
  loading: false,
  logoutUser: () => {
    localStorage.removeItem("token")
    set({ isLoggedIn: false, userData: null })
  },
}))

export default useUserStore
