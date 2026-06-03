import en from '~/locales/en'
import id from '~/locales/id'

export type Locale = keyof typeof translations

export let translations = {
  en,
  id, 
}

export let locales: {
  originName: string
  flag: string
  code: Locale
}[] = [
  {
    originName: 'Indonesia',
    flag: 'id',
    code: 'id',
  },
  {
    originName: 'English',
    flag: 'us',
    code: 'en',
  },
]

export let defaultLocale: Locale = 'en'
