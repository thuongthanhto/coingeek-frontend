import parse from 'html-react-parser'

export const reducer = (state, newState) => ({
  ...state,
  ...newState,
})

export const parseHtmlString = htmlStr => {
  if (!htmlStr) return ''
  return parse(htmlStr)
}

export const checkHasDomain = urlStr => {
  const regex = /^(https?):\/\/[^\s$.?#].[^\s]*$/gm
  return regex.test(urlStr)
}

const DOMAIN = 'https://coingeek.com'

export const getInternalSlug = url => {
  return url.replace(DOMAIN, '').replace(/^(\/)/, '')
}
