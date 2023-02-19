import { create } from "zustand"

interface IThemeStore {
  selectedTheme: "light" | "dark"
  toggleSelectedTheme: () => void
  localTheme: () => void
}

export const themeStore = create<IThemeStore>((set, get) => ({
  selectedTheme: "light",
  toggleSelectedTheme: () => {
    set((state) => ({
      selectedTheme: state.selectedTheme === "light" ? "dark" : "light",
    }))
    const theme = get().selectedTheme
    localStorage.setItem("theme", theme)
  },
  localTheme: () => {
    const theme = localStorage.getItem("theme")

    if (theme) {
      set(() => ({
        selectedTheme: theme === "light" ? "light" : "dark",
      }))
    } else {
      set(() => ({
        selectedTheme: "light",
      }))
    }
  },
}))
