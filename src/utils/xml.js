import convert from 'xml-js'

export const toJs = (data) => {
  return convert.xml2js(data, {compact: true, spaces: 2})
}
