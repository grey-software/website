require('dotenv').config()

export default {
  env: {
    apiUrl: process.env.API_URL,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {hid: 'og:title', name: 'og:title', content: 'Grey Software'},
      {hid: 'og:image', name: 'og:image', content: '/logo.png'},
      {hid: 'og:url', name: 'og:url', content: 'https://grey.software/'},
      {hid: 'og:type', name: 'og:type', content: 'website'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
    script: [
      {
        src: 'https://plausible.io/js/plausible.js',
        async: true,
        defer: true,
        'data-domain': 'grey.software',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['@/assets/styles/variables.scss'],
        treeShake: true,
        theme: {
          dark: true,
          themes: {
            dark: {
              primary: '#b29a66',
              secondary: '#424242',
              accent: '#82B1FF',
              error: '#F04747',
              info: '#2196F3',
              success: '#43b581',
              warning: '#FAA61A',
            },
          },
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/device',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'xs',
        breakpoints: {
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1600,
        },
      },
    ],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
