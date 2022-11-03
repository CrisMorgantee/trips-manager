// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})
const isProd = process.env.NODE_ENV === 'production'

const redirects = async () => [
  {
    source: '/',
    destination: '/sign-in',
    permanent: true
  }
]

module.exports = isProd
  ? withPWA({
      swcMinify: true,
      compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
      redirects
    })
  : {
      redirects
    }
