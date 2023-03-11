import React, { ReactElement } from "react"
import { themeStore } from "src/stores/themeStore"
import theme from "src/styles/theme"
import { SkeletonTheme } from "react-loading-skeleton"

const SkeletonLoad = ({ children }: { children: ReactElement[] }) => {
  const { selectedTheme } = themeStore()

  return (
    <SkeletonTheme
      baseColor={theme[selectedTheme].backgroundColor.detailsAlt}
      highlightColor={theme[selectedTheme].backgroundColor.tertiary}
      borderRadius={theme[selectedTheme].borderRadius.lg}
      inline={false}
      duration={2}
    >
      {children}
    </SkeletonTheme>
  )
}

export default SkeletonLoad
