import { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

export type Category = {
  name: string
}

export type Blog = {
  title: string
  content: string
  eyecatch: MicroCMSImage
  category: MicroCMSListContent & Category
  related_blogs: (MicroCMSListContent & Blog)[]
}

export type TOPSettings = {
  recommended_blogs: [
    MicroCMSListContent & Blog,
    MicroCMSListContent & Blog,
    MicroCMSListContent & Blog
  ]
}
