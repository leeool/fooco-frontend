import { create } from "zustand"

interface Props {
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

const UseLoginStore = create<Props>((set, get) => ({
  email: "",
  password: "",
  setEmail: (email: string) => set({ email: email }),
  setPassword: (password: string) => set({ password: password }),
}))

export default UseLoginStore
