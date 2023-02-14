import { DefaultTheme } from "styled-components"

interface IBackgroundColor {
  primary: string
  secondary: string
  tertiary: string
}

interface ITextColor {
  title: string
  paragraph: string
  subtitle: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: IBackgroundColor
    textColor: ITextColor
  }
}
