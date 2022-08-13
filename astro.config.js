import 'dotenv/config'

import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import fontsNext from 'astro-fonts-next'

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [
    preact(),
    image(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    fontsNext({
      url: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap',
    }),
  ],
})
