/** @jsxImportSource preact */

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

export const getPicture = ({
  src,
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  widths,
  alt,
}: Props) => {
  const sources = formats.map((format) => ({
    srcSet: widths
      .map(
        (width) =>
          `${src}?w=${width}${format !== null ? `&fm=${format}` : ''} ${width}w`
      )
      .join(','),
    type: format !== null ? `image/${format}` : undefined,
  }))

  const image = {
    src,
    width: width?.toString(),
    height: height?.toString(),
    sizes,
    loading,
    alt,
  }

  return { sources, image }
}

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
  const { sources, image } = getPicture({
    src,
    width,
    height,
    sizes,
    loading,
    widths,
    alt,
  })

  return (
    <picture className={className}>
      {sources.map((source) => (
        <source key={source.srcSet} {...source} />
      ))}
      <img {...image} alt={image.alt} />
    </picture>
  )
}

export default Picture
