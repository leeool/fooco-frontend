import React from "react"
import { ReactComponent as Moon } from "@assets/icons/moon.svg"
import { ReactComponent as Sun } from "@assets/icons/sun.svg"
import DropdownMenu from "@components/DropdownMenu"
import { themeStore } from "src/stores/themeStore"

const index = () => {
  const { toggleSelectedTheme, selectedTheme } = themeStore()

  return (
    <DropdownMenu
      classTrigger="dropdown-menu"
      trigger={<>{selectedTheme === "light" ? <Sun /> : <Moon />}</>}
      item={[
        <span key={"1"} onClick={() => toggleSelectedTheme("dark")}>
          <Moon />
          Escuro
        </span>,
        <span key={"2"} onClick={() => toggleSelectedTheme("light")}>
          <Sun />
          Claro
        </span>,
      ]}
    />
  )
}

export default index
