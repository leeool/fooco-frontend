import React from "react"

const UseMatchWindowSize = (value: number) => {
  const getWindowSize = () => {
    const { matches } = window.matchMedia(`(max-width:${value}px)`)

    return matches
  }

  const [match, setMatch] = React.useState<boolean>(getWindowSize())

  React.useEffect(() => {
    const handleResize = () => {
      setMatch(getWindowSize())
    }

    window.addEventListener("resize", handleResize)
  }, [])

  return match
}

export default UseMatchWindowSize
