import React from "react"
import { Viewer as BytemdViewer } from "@bytemd/react"

interface ViewerProps {
  value: string
}

const Viewer = ({ value }: ViewerProps) => {
  return <BytemdViewer value={value} />
}

export default Viewer
