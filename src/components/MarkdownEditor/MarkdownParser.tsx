import React from "react"
import { Viewer as BytemdViewer } from "@bytemd/react"
import { MarkdownStyle } from "./styles"
import { themeStore } from "src/stores/themeStore"

interface ViewerProps {
  value: string
}

const MarkdownParser = ({ value }: ViewerProps) => {
  const { selectedTheme } = themeStore()

  return (
    <MarkdownStyle selectedTheme={selectedTheme}>
      <BytemdViewer value={value} />
    </MarkdownStyle>
  )
}

export default MarkdownParser
