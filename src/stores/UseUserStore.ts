import { GET_USER, instance } from "src/api/apiCalls"
import { create } from "zustand"

interface IUser {
  isLoggedIn: boolean
  autoLogin: () => Promise<void>
  userData: IUserData | null
  loading: boolean
  logoutUser: () => void
}

const useUserStore = create<IUser>((set, get) => ({
  isLoggedIn: false,
  autoLogin: async () => {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    if (token && id) {
      set({ loading: true })
      try {
        const { url, options } = GET_USER(token, id)
        const response = await instance(url, options)
        if (response.status >= 300) throw new Error(response.data.error)
        set({ isLoggedIn: true, userData: response.data })
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
