import React from "react"
import { Viewer as BytemdViewer } from "@bytemd/react"
import { MarkdownStyle } from "./styles"
import { themeStore } from "src/stores/themeStore"
import highlight from "@bytemd/plugin-highlight-ssr"

interface ViewerProps {
  value: string
}

const byteMdPlugins = [highlight({ detect: true })]

const MarkdownParser = ({ value }: ViewerProps) => {
  const { selectedTheme } = themeStore()

  return (
    <MarkdownStyle selectedTheme={selectedTheme}>
      <BytemdViewer value={value} plugins={byteMdPlugins} />
    </MarkdownStyle>
  )
}

export default MarkdownParser
