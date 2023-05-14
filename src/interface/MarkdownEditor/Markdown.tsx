import { Editor } from "@bytemd/react"
import React from "react"
import { Container } from "./styles"
import { themeStore } from "src/stores/themeStore"
import highlight from "@bytemd/plugin-highlight-ssr"

interface Props {
  onChange: (e: string) => void
  value: string
}

const byteMdPlugins = [highlight({ detect: true })]

const Markdown = ({ onChange, value }: Props) => {
  const editorRef = React.useRef<HTMLDivElement>(null)
  const { selectedTheme } = themeStore()

  React.useEffect(() => {
    if (editorRef.current) {
      const ref: HTMLDivElement | null = editorRef.current
        .getElementsByClassName("bytemd-toolbar-right")[0]
        .querySelector("[bytemd-tippy-path='2']")
      if (ref) return ref.click()
    }
  }, [])

  return (
    <Container ref={editorRef} selectedTheme={selectedTheme}>
      <Editor
        value={value}
        onChange={onChange}
        mode={"split"}
        editorConfig={{
          autofocus: true,
        }}
        plugins={byteMdPlugins}
      />
    </Container>
  )
}

export default Markdown
