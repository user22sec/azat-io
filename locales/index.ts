import id from '~/locales/id'
import en from '~/locales/en'

export type Locale = keyof typeof translations

export let translations = {
  id,
  en,
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
    /* spell-checker:disable-next-line */
    originName: 'Inggris',
    flag: 'us',
    code: 'en',
  },
]

export let defaultLocale: Locale = 'id'
