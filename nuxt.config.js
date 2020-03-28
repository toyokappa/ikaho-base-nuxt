const title = '伊香保BASE &:freedom'
const description = 'Co-Learning（ともに学ぶ、ともに創る）をキーワードに、自由に使えるスペースを開放しています。渋川伊香保インターから車で10分。群馬県内、県外から「何かにチャレンジしたい！」人たちが集まっています。あなたも得意なこと、好きなことを活かして何かにチャレンジしませんか？あなたと同じ思想の仲間がここ伊香保BASEでお待ちしています。'
const host = 'https://ikahobase.gunmaaa.com'
const image = `${host}/ogp_image.jpg`

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#1f2233' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:url', content: host },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: image }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY,
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessageingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ress',
    'github-markdown-css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/googleMaps.js', ssr: false },
    { src: '~/plugins/contentful.js' },
    { src: '~/plugins/dateFormat.js' },
    { src: '~/plugins/firebaseFunctions.js' },
    { src: '~/plugins/vue-scrollto.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  toast: {
    position: 'bottom-center',
    action: {
      text: '閉じる',
      onClick (_e, toastObject) {
        toastObject.goAway(0)
      }
    }
  },
  markdownit: {
    injected: true
  }
}
