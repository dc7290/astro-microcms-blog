/** @jsxImportSource preact */

import { MicroCMSListContent } from 'microcms-js-sdk'
import { Suspense } from 'preact/compat'
import useSWR from 'swr'

import Loading from '@components/common/Loading'
import { Blog } from '@lib/microCMS/types'

import BlogDetail from './BlogDetail'

const Content = () => {
  const params = new URL(window.location.href).searchParams
  const id = params.get('id')
  const draftKey = params.get('draftKey')

  const { data, error, isValidating } = useSWR(
    typeof id !== 'string' || typeof draftKey !== 'string'
      ? null
      : `/api/blogs/${id}?draftKey=${draftKey}`,
    (...args): Promise<Blog & MicroCMSListContent> =>
      fetch(...args).then((res) => res.json()),
    { suspense: true }
  )

  if (error) {
    console.error(error)
    return <p>Error occurred.</p>
  }

  return (
    <div>
      {data && <BlogDetail content={data} />}
      <div className="fixed top-10 right-10">
        <div className="px-5 py-3 rounded bg-white shadow-[0_0_40px] shadow-slate-500 text-zinc-900 font-bold text-lg">
          Now in preview!
        </div>
        {isValidating && <div className="pl-1">Updating...</div>}
      </div>
    </div>
  )
}

const PreviewBlogDetail = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  )
}

export default PreviewBlogDetail
