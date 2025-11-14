import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/leaflet'
  ],

  fonts: {
    families: [
      { name: 'EB Garamond', provider: 'google' },
      { name: 'DM Sans', provider: 'google' }
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Tjendera - Direktori UMKM Lokal Nusantara',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Platform direktori lengkap UMKM lokal Nusantara. Temukan produk oleh-oleh khas, kuliner tradisional, kerajinan tangan, dan fashion lokal terpercaya.' },
        { name: 'keywords', content: 'UMKM Banjarmasin, oleh-oleh Nusantara, sasirangan, kuliner Banjar, kerajinan lokal, direktori UMKM, produk lokal Kalsel' },
        { name: 'author', content: 'Tjendera' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://tjendera.zkranovic.tech/' },
        { property: 'og:title', content: 'Tjendera - Direktori UMKM Lokal Nusantara' },
        { property: 'og:description', content: 'Platform direktori lengkap UMKM lokal Nusantara. Temukan produk oleh-oleh khas, kuliner tradisional, kerajinan tangan, dan fashion lokal terpercaya.' },
        { property: 'og:image', content: 'https://tjendera.zkranovic.tech/og-image.jpg' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: 'Tjendera' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://tjendera.zkranovic.tech/' },
        { name: 'twitter:title', content: 'Tjendera - Direktori UMKM Lokal Nusantara' },
        { name: 'twitter:description', content: 'Platform direktori lengkap UMKM lokal Nusantara. Temukan produk oleh-oleh khas, kuliner tradisional, kerajinan tangan, dan fashion lokal terpercaya.' },
        { name: 'twitter:image', content: 'https://tjendera.zkranovic.tech/og-image.jpg' },
        
        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#6F5937' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://tjendera.zkranovic.tech/' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Tjendera',
            'url': 'https://tjendera.zkranovic.tech',
            'description': 'Platform direktori lengkap UMKM lokal Nusantara',
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://tjendera.zkranovic.tech/umkm?search={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Tjendera',
            'url': 'https://tjendera.zkranovic.tech',
            'logo': 'https://tjendera.zkranovic.tech/logo.png',
            'description': 'Platform direktori UMKM lokal Nusantara',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Banjarmasin',
              'addressRegion': 'Kalimantan Selatan',
              'addressCountry': 'ID'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+62-896-9282-2165',
              'contactType': 'customer service',
              'availableLanguage': ['Indonesian']
            }
          })
        }
      ]
    }
  },

  // Sitemap configuration
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  }
})