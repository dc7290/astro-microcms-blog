/** @jsxImportSource preact */

import { JSXInternal } from 'preact/src/jsx'

interface Props {
  src: string
  width?: number
  height?: number
  sizes?: string
  widths: number[]
  loading?: 'eager' | 'lazy'
  alt: string
  className?: string
}

const formats = ['avif', 'webp', null] as const

const Picture = ({
  src,
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  widths,
  alt,
  className,
}: Props) => {
  const sources: JSXInternal.HTMLAttributes<HTMLSourceElement>[] = formats.map(
    (format) => ({
      srcSet: widths
        .map(
          (width) =>
            `${src}?w=${width}${format !== null ? `&fm=${format}` : ''}`
        )
        .join(','),
      type: format !== null ? `image/${format}` : undefined,
    })
  )

  return (
    <picture className={className}>
      {sources.map((source) => (
        <source key={source.srcSet} {...source} />
      ))}
      <img
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        alt={alt}
      />
    </picture>
  )
}

export default Picture
