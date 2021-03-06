type GoogleFontsType = { name: string; styles: string[] }

type VerticalRhythmType = {
  rhythm: (value: number) => string
  scale: (value: number) => Object
  adjustFontSizeTo: (value?: number | string) => Object
}

type OptionsType = {
  title: string
  baseFontSize?: string
  baseLineHeight?: number
  scaleRatio?: number
  googleFonts?: GoogleFontsType[]
  headerFontFamily?: string[]
  bodyFontFamily?: string[]
  headerColor?: string
  bodyColor?: string
  headerWeight?: number | string
  bodyWeight?: number | string
  boldWeight?: number | string
  blockMarginBottom?: number
  includeNormalize?: boolean
  overrideStyles?: (
    verticalRhythm: VerticalRhythmType, // TODO Create flow type for compass-vertical-rhythm and import here.
    options: OptionsType,
    styles: any
  ) => Object
  overrideThemeStyles?: (
    verticalRhythm: VerticalRhythmType, // TODO Create flow type for compass-vertical-rhythm and import here.
    options: OptionsType,
    styles: any
  ) => Object
  plugins?: any[]
}

declare module 'typography' {
  class Typography {
    constructor(options?: OptionsType)
    rhythm: (value: number) => string
    scale: (value: number) => Object
    adjustFontSizeTo: (value?: number | string) => Object
    injectStyles: () => void
  }
  export = Typography
}

declare module 'typography-theme-wordpress-2016'
