import en from '~/locales/en'
import ru from '~/locales/ru'
import id from '~/locales/id'

export type Locale = keyof typeof translations

export let translations = {
  en,
  ru,
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
  {
    /* spell-checker:disable-next-line */
    originName: 'Русский',
    flag: 'ru',
    code: 'ru',
  },
]

export let defaultLocale: Locale = 'en'
