// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  plugins: ['~/plugins/swal'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'JRMSU SSG Election System',
      meta: [
        { name: 'description', content: 'Vote smart with the JRMSU SSG Election System - a secure, transparent, and user-friendly platform for student government elections at JRMSU.' },
        { name: 'keywords', content: 'JRMSU, SSG Election, Student Government, Online Voting, University Elections, Secure Voting System, JRMSU Voting' },
        { name: 'author', content: 'JRMSU CCS Creatives Team' },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'JRMSU SSG Election System' },
        { property: 'og:description', content: 'Participate in a modern, secure, and transparent student election experience with the JRMSU SSG Election System.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://your-domain.com' }, // Replace with your actual domain
        { property: 'og:site_name', content: 'JRMSU SSG Election' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'JRMSU SSG Election System' },
        { name: 'twitter:description', content: 'Secure and transparent online voting platform for the JRMSU SSG elections.' },
        { name: 'twitter:image', content: '/og-image.png' },
        { name: 'twitter:site', content: '@JRMSU_SSG' }, // Optional: your Twitter handle
        { name: 'twitter:creator', content: '@JRMSU_SSG' }, // Optional: content creator handle
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
