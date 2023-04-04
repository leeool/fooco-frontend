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
  savedPosts: string[]
  setSavedPosts: (savedPosts: string[]) => void
}

const useUserStore = create<IUser>((set, get) => ({
  isLoggedIn: false,
  setIsUserLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  loginUser: async (email: string, password: string) => {
    try {
      set({ loading: true })
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
    } finally {
      set({ loading: false })
    }
  },
  getUserWToken: async () => {
    const userIsloggedIn = get().isLoggedIn

    if (userIsloggedIn) return

    const token = localStorage.getItem("token")
    set({ loading: true })

    try {
      if (!token) throw new Error("No token provided")
      const { url: urlValidate, options: optValidate } = VALIDATE_TOKEN(token)
      const validate = await instance(urlValidate, optValidate)
      if (!validate) return

      const { url, options } = GET_USER(validate.data.username)

      const response = await instance<IUserData | { error: string }>(
        url,
        options
      )
      if (response.status >= 400 && "error" in response.data)
        throw new Error(response.data.error)
      else if (!("error" in response.data) && response.status < 400) {
        set({ isLoggedIn: true, userData: response.data })
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
    set({ isLoggedIn: false, userData: null, savedPosts: [] })
  },
  savedPosts: [],
  setSavedPosts: (savedPosts: string[]) => set({ savedPosts }),
}))

export default useUserStore
