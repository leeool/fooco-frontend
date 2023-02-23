import { create } from "zustand"

interface Props {
  openToast: boolean
  setToastOpen: () => void
  message: string
  setMessage: (message: string) => void
}

const UseToastStore = create<Props>((set) => ({
  openToast: false,
  setToastOpen: () => set((state) => ({ openToast: !state.openToast })),
  message: "",
  setMessage: (message: string) => set(() => ({ message })),
}))

export default UseToastStore
