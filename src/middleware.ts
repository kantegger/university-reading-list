import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { request, redirect } = context;
  const url = new URL(request.url);

  // Only handle root path
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || '';
    let preferredLang = 'en'; // default to English

    // Parse Accept-Language header and determine preferred language
    if (acceptLanguage.includes('zh-CN') || acceptLanguage.includes('zh-cn')) {
      preferredLang = 'zh-cn';
    } else if (acceptLanguage.includes('zh-TW') || acceptLanguage.includes('zh-tw')) {
      preferredLang = 'zh-tw';
    } else if (acceptLanguage.includes('zh')) {
      // Generic Chinese, default to simplified
      preferredLang = 'zh-cn';
    } else if (acceptLanguage.includes('ja')) {
      preferredLang = 'ja';
    }
    // else default to 'en'

    // English content is served from root, so no redirect needed
    if (preferredLang === 'en') {
      return next();
    }

    return redirect(`/${preferredLang}/`, 302);
  }

  return next();
});
