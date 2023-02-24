import { GET_USER, instance, USER_LOGIN } from "src/api/apiCalls"
import { create } from "zustand"

interface IUser {
  isLoggedIn: boolean
  loginUser: (email: string, password: string) => Promise<void>
  autoLogin: () => Promise<void>
  userData: IUserData | null
  loading: boolean
  logoutUser: () => void
}

const useUserStore = create<IUser>((set, get) => ({
  isLoggedIn: false,
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
        set({ isLoggedIn: true })
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("id", response.data.user.id)
      }
    } catch (error) {
      console.error(error)
    } finally {
      set({ loading: false })
    }
  },
  autoLogin: async () => {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if (token && id) {
      set({ loading: true })
      try {
        const { url, options } = GET_USER(token, id)
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
    }
  },
  userData: null,
  loading: false,
  logoutUser: () => {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    set({ isLoggedIn: false, userData: null })
  },
}))

export default useUserStore
