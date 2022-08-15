/** @jsxImportSource preact */

import { MicroCMSListContent } from 'microcms-js-sdk'

import Picture from '@components/common/Picture'
import { Blog } from '@lib/microCMS/types'
import { formatDate } from '@lib/date/format'

interface Props {
  content: Blog & MicroCMSListContent
}

const BlogDetail = ({ content }: Props) => {
  return (
    <div>
      <Picture
        src={content.eyecatch.url}
        width={content.eyecatch.width}
        height={content.eyecatch.height}
        sizes="672px"
        widths={[640, 960, 1280, 1560, 1920, 2400, 3600]}
        alt=""
      />
      <h1 className="text-2xl font-bold leading-tight mt-8 sm:mt-12 sm:text-3xl lg:text-4xl">
        {content.title}
      </h1>
      <div className="mt-8 sm:mt-12 flex items-center justify-between">
        <a
          href={`/categories/${content.category.id}`}
          className="border border-white rounded px-3 h-7 pb-0.5 flex items-center justify-center"
        >
          {content.category.name}
        </a>
        <div>
          PublishedAt:{' '}
          <time>{formatDate(content.publishedAt ?? content.createdAt)}</time>
        </div>
      </div>
      <div
        className="mt-16 mx-auto prose prose-invert lg:prose-xl sm:mt-24 leading-loose sm:text-lg"
        dangerouslySetInnerHTML={{ __html: content.content }}
      ></div>
    </div>
  )
}

export default BlogDetail
