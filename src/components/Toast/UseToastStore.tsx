import { create } from "zustand"

interface Props {
  openToast: boolean
  setToastOpen: () => void
  toastMessage: string
  setToastMessage: (message: string) => void
}

const UseToastStore = create<Props>((set) => ({
  openToast: false,
  setToastOpen: () => set((state) => ({ openToast: !state.openToast })),
  toastMessage: "",
  setToastMessage: (message: string) => set(() => ({ toastMessage: message })),
}))

export default UseToastStore
