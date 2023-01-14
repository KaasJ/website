export default {
  target: 'server', // static or server. default is 'server' 
  head: {
    title: 'Jorrit Stein',
    link: [{ rel: 'icon', type: 'image/png', href: './favicon.png'}],
    script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
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

