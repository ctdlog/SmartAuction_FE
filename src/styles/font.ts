import tw, { TwStyle } from 'twin.macro'

import { Language } from '@/types/common/font'

export interface FontStyles {
  fontFamily: string
  fontSize: TwStyle
  [key: number]: TwStyle | string
}

export interface FontSizes {
  [key: string]: {
    [key in Language]: {
      [key: string]: TwStyle
    }
  }
}

export interface FontStylesConfig {
  size: string
  language: Language
  style: 'title' | 'subtitle' | 'text' | 'heading'
}

const fontFamilies: Record<Language, string> = {
  korean: 'Noto Sans KR, sans-serif',
  english: 'Poppins, sans-serif',
}

const fontSizes: FontSizes = {
  title: {
    korean: {
      '1': tw`font-bold text-sm`,
      '2': tw`font-bold text-base`,
      '3': tw`font-bold text-lg`,
      '4': tw`font-bold text-xl`,
    },
    english: {
      '1': tw`font-bold text-base`,
      '2': tw`font-bold text-lg`,
      '3': tw`font-bold text-xl`,
      '4': tw`font-bold text-2xl`,
    },
  },
  subtitle: {
    korean: {
      '1': tw`font-medium text-xs`,
      '2': tw`font-medium text-sm`,
      '3': tw`font-medium text-base`,
      '4': tw`font-medium text-lg`,
    },
    english: {
      '1': tw`font-medium text-sm`,
      '2': tw`font-medium text-base`,
      '3': tw`font-medium text-lg`,
      '4': tw`font-medium text-xl`,
    },
  },
  text: {
    korean: {
      '1': tw`text-xs`,
      '2': tw`text-sm`,
      '3': tw`text-base`,
      '4': tw`text-lg`,
    },
    english: {
      '1': tw`text-sm`,
      '2': tw`text-base`,
      '3': tw`text-lg`,
      '4': tw`text-xl`,
    },
  },
  heading: {
    korean: {
      '1': tw`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl`,
      '2': tw`font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl`,
      '3': tw`font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl`,
      '4': tw`font-bold text-base md:text-lg lg:text-xl xl:text-2xl`,
    },
    english: {
      '1': tw`font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl`,
      '2': tw`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl`,
      '3': tw`font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl`,
      '4': tw`font-bold text-base md:text-xl lg:text-2xl xl:text-3xl`,
    },
  },
}

const getFontStyles = ({ size, language, style }: FontStylesConfig): FontStyles => {
  const fontFamily = fontFamilies[language]
  const fontSize = fontSizes[style][language][size]
  return {
    fontFamily,
    fontSize,
  }
}

export { getFontStyles }
