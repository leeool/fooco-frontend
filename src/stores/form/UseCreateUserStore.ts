import { create } from "zustand"

interface Props {
  email: string
  username: string
  password: string
  confirmPassword: string
  setEmail: (email: string) => void
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  setConfirmPassword: (confirmPassword: string) => void
}

const UseCreateUserStore = create<Props>((set) => ({
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  setEmail: (email: string) => set({ email: email }),
  setUsername: (username: string) => set({ username: username }),
  setPassword: (password: string) => set({ password }),
  setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
}))

export default UseCreateUserStore
