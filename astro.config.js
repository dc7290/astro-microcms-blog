import 'dotenv/config'

import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import fontsNext from 'astro-fonts-next'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [
    preact({
      compat: true,
    }),
    sitemap(),
    tailwind(),
    robotsTxt(),
    fontsNext({
      url: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap',
    }),
  ],
})
