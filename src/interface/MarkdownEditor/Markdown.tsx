import { Editor } from "@bytemd/react"
import React from "react"
import { Container } from "./styles"
import { themeStore } from "src/stores/themeStore"
import highlight from "@bytemd/plugin-highlight-ssr"
import pt_BR from "bytemd/locales/pt_BR.json"

interface Props {
  onChange: (e: string) => void
  value: string
  compact?: boolean
  onKeyDown?: (e: KeyboardEvent) => void
}

const byteMdPlugins = [highlight({ detect: true })]

const Markdown = ({ onChange, value, compact = false, onKeyDown }: Props) => {
  const editorRef = React.useRef<HTMLDivElement>(null)
  const { selectedTheme } = themeStore()

  React.useEffect(() => {
    if (!editorRef.current) return

    editorRef.current.addEventListener(
      "keydown",
      onKeyDown as EventListenerOrEventListenerObject
    )

    const ref: HTMLDivElement | null = editorRef.current
      .getElementsByClassName("bytemd-toolbar-right")[0]
      .querySelector("[bytemd-tippy-path='2']")
    if (ref) return ref.click()

    return () => {
      editorRef.current?.removeEventListener(
        "keydown",
        onKeyDown as EventListenerOrEventListenerObject
      )
    }
  }, [])

  return (
    <Container ref={editorRef} selectedTheme={selectedTheme} compact={compact}>
      <Editor
        value={value}
        onChange={onChange}
        mode={"split"}
        editorConfig={{
          spellcheck: true,
          autofocus: false,
        }}
        plugins={byteMdPlugins}
        locale={pt_BR}
      />
    </Container>
  )
}

export default Markdown
