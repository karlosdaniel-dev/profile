import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'pt', // Idioma padrão do seu site
  localePrefix: 'always'
});
 
export const config = {
  // Ignora rotas de API, arquivos estáticos e imagens
  matcher: ['/((?!api|_next|.*\\..*).*)']
};