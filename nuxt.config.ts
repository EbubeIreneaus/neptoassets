// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },

    layoutTransition: {
      name: 'layout',
      mode: "out-in"
    },
    head: {
      title: "Nepto Assets",
      link: [
        {
          rel: 'preload',
          href: 'https://cdn.shareaholic.net/assets/pub/shareaholic.js',
          as: 'script'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
        },

        {
          rel: 'icon',
          type: 'image/png',
          href: '/img/logo.png'
        }
      ],

      meta: [
        {
          name: 'shareaholic:site_id',
          content: '833959d5dc1e891b01eaf8c799cc1602'
        }
      ],


      script: [
        { src: "https://s3.tradingview.com/tv.js", tagPosition: 'head' },
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', tagPosition: 'bodyClose' },
        {src: '//code.jivosite.com/widget/ZAIKUTYFjy', async: true},
        {
          src: "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
          tagPosition: 'bodyClose',
          async: 'true'
        },
        {
          src: "/main.js",
          tagPosition: 'bodyClose',
          async: 'true'
        },
        {
          hid: 'shareaholic-script',
          src: 'https://cdn.shareaholic.net/assets/pub/shareaholic.js',
          async: true,
          defer: true // Optional: defer loading if necessary
        }

      ],
    },

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/style.css', '~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.css',
  '@splidejs/splide/css', 'animate.css/animate.css'],

})
