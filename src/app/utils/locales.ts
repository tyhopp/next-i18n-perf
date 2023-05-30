import 'server-only';

const locales: Record<string, () => {}> = {
  en: () => import('../locales/en.json').then((module) => module.default),
};
 
export const getLocale = async (locale: string): Promise<Record<string, string>> => locales[locale]();