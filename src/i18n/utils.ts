import { ui, defaultLang, type UIKey } from './config';

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;

  // Only explicit language prefixes return that language
  if (pathname.startsWith('/zh-cn/') || pathname === '/zh-cn') return 'zh-cn';
  if (pathname.startsWith('/zh-tw/') || pathname === '/zh-tw') return 'zh-tw';
  if (pathname.startsWith('/ja/') || pathname === '/ja') return 'ja';

  // All other paths default to English (including /en/ for compatibility)
  return 'en';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getStaticPaths() {
  return Object.keys(ui).map(lang => ({
    params: { lang },
  }));
}

export function translatePath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getLocalizedPath(
  currentPath: string,
  currentLang: string,
  targetLang: string
): string {
  // Remove all language prefixes to get base path
  let basePath = currentPath.replace(/^\/(en|zh-cn|zh-tw|ja)(\/|$)/, '/').replace(/\/+/g, '/');

  if (basePath === '' || basePath === '//') basePath = '/';

  // English has no prefix
  if (targetLang === 'en') {
    return basePath;
  }

  // Other languages add prefix
  return `/${targetLang}${basePath === '/' ? '' : basePath}`;
}

export function getSubjectTranslationKey(subjectId: string): UIKey {
  return `subject.${subjectId}` as UIKey;
}

export function getDifficultyTranslationKey(difficulty: string): UIKey {
  return `difficulty.${difficulty}` as UIKey;
}

export function getTagTranslationKey(tag: string): UIKey {
  return `tag.${tag}` as UIKey;
}

export function translateTag(tag: string, lang: keyof typeof ui): string {
  const tagKey = getTagTranslationKey(tag);
  return ui[lang][tagKey] || ui[defaultLang][tagKey] || tag;
}
