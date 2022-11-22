// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }

  head.bodyAttrs = { class: 'antialiased dark relative bg-gray-200 text-body font-body' }
  // Add a meta tag
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  },
    {
      name: 'CodeScalers',
      content: 'International Software Development'
    },
    {
      name: 'description',
      content: 'International Software Development Specialised in Cloud Computing Projects.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'language',
      content: 'English'
    },
    {
      name: 'author',
      content: 'codescalers-egypt'
    },
    {
      property: 'og:title',
      content: 'Codescaler-Egypt'
    },
    {
      property: 'og:site_name',
      content: 'codescalers-egypt'
    },
    {
      property: 'og:url',
      content: 'https://www.codescalers-egypt.com'
    },
    {
      property: 'og:description',
      content: 'Get started with a free and open-source landing page for Tailwind CSS built with the Flowbite component library featuring dark mode, hero sections, pricing cards, and more.'
    },
    {
      property: 'og:image',
      content: '../content/page/home/carousel/slide1/welcome_slide1.png'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@codescalers-egypt'
    }, {
    name: 'twitter:creator',
    content: '@codescalers-egypt'
  })

  // Add an external CSS file
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  }, {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&display=swap'
  }, {
    rel: 'icon',
    href: './favicon.ico'
  }, {
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
  })

  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://platform-api.sharethis.com/js/sharethis.js#property=6331c246516bac0012998572&product=sop',
    type: 'text/javascript',
    async: true,
    body: true
  })
  head.script.push({
    src: "https://www.google.com/recaptcha/api.js?",
    body: true,
    async: true,
    defer: true
  })
}
