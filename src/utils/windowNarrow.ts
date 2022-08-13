const viewport = document.querySelector('meta[name="viewport"]')

const windowNarrow = () => {
  const switchViewport = () => {
    const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360'
    if (viewport !== null && viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value)
    }
  }
  addEventListener('resize', switchViewport, false)
  switchViewport()
}

export default windowNarrow
