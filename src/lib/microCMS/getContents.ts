import { createClient, MicroCMSQueries } from 'microcms-js-sdk'
import { Blog, Category, TOPSettings } from './types'

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_API_KEY,
})

export const getBlogs = (queries?: MicroCMSQueries) => {
  return client.getList<Blog>({ endpoint: 'blogs', queries })
}
export const getBlog = (queries?: MicroCMSQueries) => (contentId: string) => {
  return client.getListDetail<Blog>({ endpoint: 'blogs', contentId, queries })
}

export const getCategories = (queries?: MicroCMSQueries) => {
  return client.getList<Category>({ endpoint: 'categories', queries })
}
export const getCategory =
  (queries?: MicroCMSQueries) => (contentId: string) => {
    return client.getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    })
  }

export const getTOPSettings = (queries?: MicroCMSQueries) => {
  return client.getObject<TOPSettings>({ endpoint: 'top-settings', queries })
}
