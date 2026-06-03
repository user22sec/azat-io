import en from '~/locales/en'
import ru from '~/locales/id'

export type Locale = keyof typeof translations

export let translations = {
  en,
  ru,
}

export let locales: {
  originName: string
  flag: string
  code: Locale
}[] = [
  {
    originName: 'English',
    flag: 'us',
    code: 'en',
  },
  {
    /* spell-checker:disable-next-line */
    originName: 'Indonesia',
    flag: 'id',
    code: 'id',
  },
]

export let defaultLocale: Locale = 'en'
