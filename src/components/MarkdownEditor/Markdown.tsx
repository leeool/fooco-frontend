import { Editor } from "@bytemd/react"
import React from "react"
import { Container, MarkdownStyle } from "./styles"

interface Props {
  onChange: (e: string) => void
  value: string
}

const Markdown = ({ onChange, value }: Props) => {
  const editorRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (editorRef.current) {
      const ref: HTMLDivElement | null = editorRef.current
        .getElementsByClassName("bytemd-toolbar-right")[0]
        .querySelector("[bytemd-tippy-path='2']")
      if (ref) return ref.click()
    }
  }, [])

  return (
    <Container ref={editorRef}>
      <MarkdownStyle>
        <Editor value={value} onChange={onChange} mode={"split"} />
      </MarkdownStyle>
    </Container>
  )
}

export default Markdown
