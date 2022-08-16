import { CheerioAPI, load } from 'cheerio'
import hljs from 'highlight.js/lib/core'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import scss from 'highlight.js/lib/languages/scss'
import typescript from 'highlight.js/lib/languages/typescript'

import { getPicture } from '@components/common/Picture'

const addImgixParamsToImgElements = async (
  $: CheerioAPI
): Promise<CheerioAPI> => {
  const widths = [640, 960, 1280, 1560, 1920, 2400, 3600]

  const imgElements = $('img')
  imgElements.each((_, element) => {
    const src = $(element).attr('src') as string // srcがない場合は存在しないため
    const width = Number($(element).attr('width'))
    const height = Number($(element).attr('height'))

    const { sources, image } = getPicture({
      src,
      width,
      height,
      sizes: '672px',
      widths,
      alt: '',
    })

    $(element).attr({
      ...image,
      width: image.width ?? null,
      height: image.height ?? null,
    })
    const pictureElement = $('<picture></picture>')
    const sourceElements = sources.map((source) =>
      $('<source />').attr({ ...source, type: source.type ?? null })
    )

    $(element).wrap(pictureElement)
    sourceElements.forEach((sourceElement) => {
      $(element).before(sourceElement)
    })
  })

  return $
}

const addHighlightToCodeElements = ($: CheerioAPI): CheerioAPI => {
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('scss', scss)
  hljs.registerLanguage('typescript', typescript)

  const codeElements = $('pre code')
  codeElements.each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
  })
  codeElements.addClass('hljs')

  return $
}

const processHtmlContent = async (content: string): Promise<string> => {
  const $ = load(content)
  return addHighlightToCodeElements(await addImgixParamsToImgElements($)).html()
}

export default processHtmlContent
