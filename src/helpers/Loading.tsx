import React from "react"

interface Props {
  loading: boolean
  children: JSX.Element
  fallback: JSX.Element
}

const Loading = ({ children, fallback, loading }: Props) => {
  if (loading) return fallback
  return <>{children}</>
}

export default Loading
