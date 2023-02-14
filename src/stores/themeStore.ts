import { create } from "zustand"

interface IThemeStore {
  selectedTheme: "light" | "dark"
  toggleSelectedTheme: () => void
}

export const themeStore = create<IThemeStore>((set, get) => ({
  selectedTheme: "light",
  toggleSelectedTheme: () => {
    set((state) => ({
      selectedTheme: state.selectedTheme === "light" ? "dark" : "light",
    }))
  },
}))
