import { create } from "zustand"

interface Props {
  openToast: boolean
  setToastOpen: () => void
  toastContent: { title: string; message: string }
  setToastMessage: (title: string, message: string) => void
}

const UseToastStore = create<Props>((set, get) => ({
  openToast: false,
  setToastOpen: () => set((state) => ({ openToast: !state.openToast })),
  toastContent: { title: "", message: "" },
  setToastMessage: (title: string, message: string) => {
    const setOpen = get().setToastOpen
    setOpen()
    set(() => ({ toastContent: { title, message } }))
  },
}))

export default UseToastStore
