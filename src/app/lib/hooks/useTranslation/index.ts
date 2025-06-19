import { useTranslation as useI18nTranslation } from 'react-i18next'
import type { i18n as I18nType } from 'i18next'
import '../../utils/locales'

type CustomTranslationProps = {
   namespace?: string
}

type TranslationReturn = {
   t: (key: string) => string
   i18n: I18nType
}

export const useTranslation = ({
   namespace,
}: CustomTranslationProps = {}): TranslationReturn => {
   const { t, i18n } = useI18nTranslation()

   return {
      t: (key: string): string => t(`${namespace}.${key}`),
      i18n,
   }
}
