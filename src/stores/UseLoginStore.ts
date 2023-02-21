import { create } from "zustand"

interface Props {
  email: string
  password: string
  confirmPassword: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setConfirmPassword: (confirmPassword: string) => void
}

const UseLoginStore = create<Props>((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  setEmail: (email: string) => set({ email: email }),
  setPassword: (password: string) => set({ password: password }),
  setConfirmPassword: (confirmPassword: string) =>
    set({ confirmPassword: confirmPassword }),
}))

export default UseLoginStore
