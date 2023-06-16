import { create } from "zustand"

interface Props {
  open: boolean
  setOpen: () => void
  toastContent: { title: string; message: string }
  setToastMessage: (
    title: string,
    message: string,
    type: "success" | "warning" | "error"
  ) => void
  type: "success" | "warning" | "error"
}

const UseToastStore = create<Props>((set, get) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
  toastContent: { title: "", message: "" },
  type: "error",
  setToastMessage: (
    title: string,
    message: string,
    type: "success" | "warning" | "error"
  ) => {
    const setOpen = get().setOpen
    setOpen()
    set(() => ({ toastContent: { title, message, type } }))
  },
}))

export default UseToastStore
