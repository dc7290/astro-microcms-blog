import { createClient, MicroCMSQueries } from 'microcms-js-sdk'

const SERVICE_DOMAIN = process.env.SERVICE_DOMAIN
const API_KEY = process.env.API_KEY

if (!SERVICE_DOMAIN || !API_KEY) {
  throw new Error('Internal server error.')
}

const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: API_KEY,
})

export const getBlog = (queries?: MicroCMSQueries) => (contentId: string) => {
  return client.getListDetail({ endpoint: 'blogs', contentId, queries })
}
