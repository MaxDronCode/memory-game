export function formatMockData (data) {
  let formattedData = data.split(/\r?\n/).join('-')
  formattedData = formattedData.replaceAll(' ', '')
  formattedData = formattedData.replaceAll('|', '')
  while (formattedData[formattedData.length - 1] === '-') {
    formattedData = formattedData.slice(0, -1)
  }
  return formattedData
}
