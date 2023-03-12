import React from "react"
import { ReactComponent as Moon } from "@assets/icons/moon.svg"
import { ReactComponent as Sun } from "@assets/icons/sun.svg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
} from "@components/DropdownMenuAPI"
import { themeStore } from "src/stores/themeStore"

const index = () => {
  const { toggleSelectedTheme, selectedTheme } = themeStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {selectedTheme === "light" ? <Sun /> : <Moon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={selectedTheme}>
          <DropdownMenuRadioItem
            onClick={() => toggleSelectedTheme("light")}
            value="light"
          >
            <Sun />
            Claro
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={() => toggleSelectedTheme("dark")}
            value="dark"
          >
            <Moon />
            Escuro
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default index
