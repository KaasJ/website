export default {
  target: 'server', // static or server. default is 'server' 
  head: {
    title: 'Jorrit Stein',
    link: [{ rel: 'icon', type: 'image/png', href: './favicon.png'}],
  },
  buildModules: [
    '@nuxt/postcss8'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  },
  css: [
    '@/assets/css/main.css'
  ]
}

