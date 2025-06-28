export default defineNuxtConfig({
  ssr: true, // или false, если хотите чисто статический сайт
  app: {
    baseURL: '/repository-name/', // если репозиторий USERNAME.github.io, то оставьте '/'
  },
  nitro: {
    prerender: {
      crawlLinks: true, // для генерации всех страниц
    },
  },
});